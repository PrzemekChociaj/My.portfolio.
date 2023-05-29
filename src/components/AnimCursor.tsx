import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const AnimCursor = () => {
  return (
   <AnimatedCursor
   innerSize={14}
   outerSize={9}
   color='8, 217, 214'
   outerAlpha={0.3}
   innerScale={0.7}
   
   outerStyle={{
    mixBlendMode: 'exclusion'
  }}
   
   />
  )
}

export default AnimCursor