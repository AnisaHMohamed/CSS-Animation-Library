import React from 'react'
import AnimationPreview from '../AnimationPreview'
import Border from '../BorderAnimation'
import FloatingBubble from '../FloatingBubbleAnimation'
import Bounce from '../BounceAnimation'
import Blink from '../BlinkAnimation'
import Pulse from '../PulseAnimation'
import Jiggle from '../JiggleAnimation'
import GlowingRingsOverlap from '../GlowingRingsOverlapAnimation'
// <GlowingRingsOverlap />
// <Jiggle />
// <Pulse />
// <Blink />
// <Border />
// <FloatingBubble />
function Home()
{
  return (
    <>
     
    <AnimationPreview animationName={"Blink"} />
    <AnimationPreview animationName={"Border"} />
    <AnimationPreview animationName={"Bounce"} />
    <AnimationPreview animationName={"Breathe"} />
      <AnimationPreview animationName={"Spin"} />

      <p>
        Welcome to a my CSS animations Libray!
      </p>
    </>

  )
}

export default Home