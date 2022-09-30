import React from 'react'
import {animations} from '../animations'
import {Link} from 'react-router-dom'

const AnimationPreview = ({animationName}) => {

  let currentAnimation = animations[animationName]

  return (
    <>
    {currentAnimation()}
    

    <button><Link  to={`/${animationName}`}> Go to test</Link></button>
    </>
    )
}

export default AnimationPreview