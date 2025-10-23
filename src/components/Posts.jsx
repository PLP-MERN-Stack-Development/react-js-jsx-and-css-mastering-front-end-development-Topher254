import React, { useState, useEffect } from 'react'
import Button from './Button'
import { useTheme } from '../context/ThemeContext'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [hasMore, setHasMore] = useState(true)
  const { isDark } = useTheme()

  const fetchPosts = async (pageNum = 1, search = '') => {
    try {
      setLoading(true)
      setError(null)
      
      let url = 'https://jsonplaceholder.typicode.com/posts'
      if (search) {
        url += `?q=${search}`
      } else {
        url += `?_page=${pageNum}&_limit=3`
      }
      
      const response = await fetch(url)
      if (!response.ok) throw new Error('Failed to fetch posts')
      
      const data = await response.json()
      
      if (search || pageNum === 1) {
        setPosts(data)
      } else {
        setPosts(prev => [...prev, ...data])
      }
      
      setHasMore(data.length === 3 && !search)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const loadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    fetchPosts(nextPage, searchQuery)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const query = formData.get('search')
    setSearchQuery(query)
    setPage(1)
    fetchPosts(1, query)
  }

  const displayedPosts = searchQuery ? posts.slice(0, 3) : posts

  return (
    <div className={`p-6 max-w-4xl mx-auto shadow-md rounded-lg transition-colors duration-200 ${
      isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'
    }`}>
      <h2 className="text-2xl font-bold mb-6 text-center">Posts from API</h2>

      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            name="search"
            placeholder="Search posts..."
            className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-black'
            }`}
          />
          <Button type="submit" variant="primary">
            Search
          </Button>
          {searchQuery && (
            <Button 
              type="button" 
              variant="secondary"
              onClick={() => {
                setSearchQuery('')
                setPage(1)
                fetchPosts(1)
              }}
            >
              Clear
            </Button>
          )}
        </div>
      </form>

      {loading && page === 1 && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Loading posts...
          </p>
        </div>
      )}

      {error && (
        <div className={`border px-4 py-3 rounded mb-4 transition-colors ${
          isDark 
            ? 'bg-red-900/20 border-red-800 text-red-400' 
            : 'bg-red-100 border-red-400 text-red-700'
        }`}>
          <p>Error: {error}</p>
          <Button 
            variant="primary" 
            onClick={() => fetchPosts(page, searchQuery)}
            className="mt-2"
          >
            Try Again
          </Button>
        </div>
      )}

      <div className="space-y-4">
        {displayedPosts.map(post => (
          <div
            key={post.id}
            className={`p-4 border rounded-lg transition-all duration-200 hover:shadow-lg ${
              isDark 
                ? 'border-gray-600 hover:bg-gray-700' 
                : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              {post.body}
            </p>
          </div>
        ))}
      </div>

      {hasMore && !searchQuery && (
        <div className="text-center mt-6">
          <Button
            variant="primary"
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      )}

      {!loading && displayedPosts.length === 0 && (
        <p className={`text-center py-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          No posts found.
        </p>
      )}
    </div>
  )
}

export default Posts