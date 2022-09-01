import React from 'react'
const TextComponent = (props) => {
    const {styleProps,label,className,CustomTag = "div"} = props
  return (

    <CustomTag  className = {className}   style={styleProps}
    >
        {label}
       
       
    </CustomTag>
  )
}

export default TextComponent