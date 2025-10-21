import React from 'react'

const Button = (props) => {
  // this is like the default style
  let BaseStyles = 'px-4 py-2 rounded-full font-semibold border'

  // my variants
  let variantStyles = "";

  if(props.variant === "primary"){
    variantStyles="bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
  }else if(props.variant==="secondary"){
    variantStyles="bg-green-600 text-white cursor-pointer hover:bg-green-700"
  }else if(props.variant==="danger"){
    variantStyles="bg-red-500 text-white cursor-pointer hover:bg-red-700"
  }
  
  
  return (
    <button onClick={props.onClick}
    className={`${BaseStyles} ${variantStyles}`}
    >{props.children}</button>
  )
}

export default Button
