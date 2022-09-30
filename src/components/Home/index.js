import React from 'react'
import  AnimationPreview from '../AnimationPreview'
import Border from '../BorderAnimation'
import FloatingBubble from '../FloatingBubbleAnimation'
import Bounce from '../BounceAnimation'

function Home() {
  return (
<>
<Border/>
<FloatingBubble/>
<Bounce/>
<AnimationPreview animationName={"Spin"}/>
<AnimationPreview animationName={"Breath"}/>
<p>
Welcome to a my CSS animations Libray!
</p>
</>     
    
  )
}

export default Home