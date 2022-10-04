import React from 'react'
import AnimationPreview from '../AnimationPreview'

// <Jiggle />
// <Pulse />
function Home()
{
  return (
    <>
     
    <AnimationPreview animationName={"Blink"} />
    <AnimationPreview animationName={"Border"} />
    <AnimationPreview animationName={"Bounce"} />
    <AnimationPreview animationName={"Breathe"} />
    <AnimationPreview animationName={"FloatingBubble"} />
    <AnimationPreview animationName={"GlowingRingsOverlap"} />
    <AnimationPreview animationName={"Jiggle"} />
    <AnimationPreview animationName={"Pulse"} />
    <AnimationPreview animationName={"Spin"} />
   
      <p>
        Welcome to a my CSS animations Libray!
      </p>
    </>

  )
}

export default Home