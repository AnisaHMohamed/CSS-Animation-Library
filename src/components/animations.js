import SpinAnimation from "./SpinAnimation";
import BreathAnimation from "./BreathAnimation"
const animations = {
    Spin: SpinAnimation,
    Breath: BreathAnimation
}
const animationDetails = {
    Spin: {
        description: "Rotates an image in a circle in a smooth transistion",
        css: 'animation: arrow-spin infinite 5s linear;',
        keyframe: " @media (prefers-reduced-motion: no-preference) { .arrow { animation: arrow-spin infinite 5s linear; }} @keyframes arrow-spin { from { transform: rotate(360deg);}to {transform: rotate(0deg);}}' }"
},
Breath: {
    description: "Rotates an image in a circle in a smooth transistion",
    css: '.breathe { width: 100px; height: 100px; border-radius: 50%; animation-name: breath-animation; animation: breath-animation 7s infinite; }',
    keyframe: "  breath-animation {0% {background-color: lightgrey;   width: 100px;height: 100px;} 25% {background-color: lightblue;  width: 50px;height: 50px; }50% {background-color: lightgrey;   width: 100px;height: 100px;}50% {background-color: lightblue;  width: 50px;height: 50px; }100% {background-color: lightgrey;   width: 100px;height: 100px;} "
},

}
export  {animations, animationDetails};