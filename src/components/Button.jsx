import React from 'react'

const Button = (props) => {
  // Base styles that all buttons will have
  let baseStyles = 'px-4 py-2 cursor-pointer rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  // Variant styles with dark mode support
  let variantStyles = "";
  
  // Default variant if none provided
  const variant = props.variant || 'primary'

  switch(variant) {
    case "primary":
      variantStyles = "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-400 border-transparent"
      break;
    case "secondary":
      variantStyles = "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-400 border-transparent"
      break;
    case "danger":
      variantStyles = "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-400 border-transparent"
      break;
    case "outline-primary":
      variantStyles = "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
      break;
    case "outline-secondary":
      variantStyles = "border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white"
      break;
    default:
      variantStyles = "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 border-transparent"
  }

  // Size variants
  let sizeStyles = "";
  switch(props.size) {
    case "sm":
      sizeStyles = "px-3 py-1 text-sm"
      break;
    case "lg":
      sizeStyles = "px-6 py-3 text-lg"
      break;
    default:
      sizeStyles = "px-4 py-2" // default size
  }
  
  return (
    <button 
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type || "button"}
      className={`
        ${baseStyles} 
        ${variantStyles} 
        ${sizeStyles}
        ${props.className || ""} // Allow custom classes to be passed
      `}
    >
      {props.children}
    </button>
  )
}

export default Button