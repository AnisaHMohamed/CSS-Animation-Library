import React from 'react'
import  AnimationPreview from '../AnimationPreview'
import Border from '../BorderAnimation'

function Home() {
  return (
<>
<Border/>
<AnimationPreview animationName={"Spin"}/>
<AnimationPreview animationName={"Breath"}/>
<p>
Welcome to a my CSS animations Libray!
</p>
</>     
    
  )
}

export default Home