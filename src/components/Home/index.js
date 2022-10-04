import React from 'react'
import AnimationPreview from '../AnimationPreview'
import Border from '../BorderAnimation'
import FloatingBubble from '../FloatingBubbleAnimation'
import Bounce from '../BounceAnimation'
import Blink from '../BlinkAnimation'
import Pulse from '../PulseAnimation'
import Jiggle from '../JiggleAnimation'
import GlowingRingsOverlap from '../GlowingRingsOverlapAnimation'

function Home()
{
  return (
    <>
      <GlowingRingsOverlap />
      <Jiggle />
      <Pulse />
      <Blink />
      <Border />
      <FloatingBubble />
      <Bounce />
      <AnimationPreview animationName={"Spin"} />
      <AnimationPreview animationName={"Breath"} />
      <p>
        Welcome to a my CSS animations Libray!
      </p>
    </>

  )
}

export default Home