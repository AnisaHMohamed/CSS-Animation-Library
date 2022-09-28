import React from 'react'
import animations from '../animations'
const AnimationPreview = ({animationName}) => {
console.log(animations[animationName])
let currentAnimation = animations[animationName]
  return (
    <>
    <div>{animationName}</div>
    <div>The animation Gif</div>
    {currentAnimation()}
    <div>Code Block of how it works</div>
    <div>Button to Click to Full Page animation</div>
    </>
    )
}

export default AnimationPreview