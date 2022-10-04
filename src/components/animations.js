import BlinkAnimation from "./BlinkAnimation"
import BorderAnimation from "./BorderAnimation"
import BounceAnimation from "./BounceAnimation"
import BreatheAnimation from "./BreatheAnimation"
import FloatingBubbleAnimation from "./FloatingBubbleAnimation";
import GlowingRingsOverlapAnimation from "./GlowingRingsOverlapAnimation"
import JiggleAnimation from "./JiggleAnimation"
import PulseAnimation from "./PulseAnimation"
import SpinAnimation from "./SpinAnimation"



const animations = {
    Blink: BlinkAnimation,
    Border: BorderAnimation,
    Bounce: BounceAnimation,
    Breathe: BreatheAnimation,
    FloatingBubble: FloatingBubbleAnimation,
    GlowingRingsOverlap: GlowingRingsOverlapAnimation,
    Jiggle: JiggleAnimation,
    Pulse: PulseAnimation,
    Spin: SpinAnimation,
}
const animationDetails = {
    Blink: {
        description: "Blinks to bring attention",
        css: ".blink { content:''; height: 40px; width: 40px; border-radius: 50%; background: hotpink; animation: blinker 1s linear infinite; }",
        keyframe: " blinker {50% {opacity: 0;}}"
    },
    Border: {
        description: "A stylish glowing border",
        css: ".container { display: flex; justify-content: center; align-items: center; width: 100px; min-height: 100px; } .box { position: relative; width: 200px; height: 100px; background: #282c33; border-radius: 20px; display: flex; justify-content: center; align-items: center; overflow: hidden; } .box::after { content: ''; position: absolute; width: 500px; height: 500px; background-image: conic-gradient(   transparent,   transparent,   transparent,   hotpink ); animation: border 4s linear infinite; animation-delay: -2s; } .box::before { content: ''; position: absolute; width: 500px; height: 500px; background-image: conic-gradient(   transparent,   transparent,   transparent,   #00ccff ); animation: border 4s linear infinite; } .box span { position: absolute; inset: 5px; background: #282c34; z-index: 1; border-radius: 16px; } .box h2 {   position: relative;   z-index: 2; }",
        keyframe: " border { 0% {   transform: rotate(0deg); } 100% {   transform: rotate(360deg); } }"
    },
    Blink: {
        description: "Blinks to bring attention",
        css: ".blink { content:''; height: 40px; width: 40px; border-radius: 50%; background: hotpink; animation: blinker 1s linear infinite; }",
        keyframe: " blinker {50% {opacity: 0;}}"
    },
    Bounce: {
        description: "Bounces to bring attention",
        css: ".bounce { content: ''; background-color: #81f4e1; height: 50px; margin: 0 auto 0 auto; width: 50px; animation: bounce 2s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;}",
        keyframe: "bounce { 0% { transform: scale(1, 1) translateY(0); } 10% { transform: scale(1.1, 0.9) translateY(0); } 30% { transform: scale(0.9, 1.1) translateY(-100px); } 50% { transform: scale(1.05, 0.95) translateY(0); } 57% { transform: scale(1, 1) translateY(-7px); } 64% { transform: scale(1, 1) translateY(0); } 100% { transform: scale(1, 1) translateY(0); } }"
    },
    
    // Breath: {
    //     description: "Rotates an image in a circle in a smooth transistion",
    //     css: '.breathe { width: 100px; height: 100px; border-radius: 50%; animation-name: breath-animation; animation: breath-animation 7s infinite; }',
    //     keyframe: "  breath-animation {0% {background-color: lightgrey;   width: 100px;height: 100px;} 25% {background-color: lightblue;  width: 50px;height: 50px; }50% {background-color: lightgrey;   width: 100px;height: 100px;}50% {background-color: lightblue;  width: 50px;height: 50px; }100% {background-color: lightgrey;   width: 100px;height: 100px;} "
    // },
    Spin: {
        description: "Rotates an image in a circle in a smooth transistion",
        css: 'animation: arrow-spin infinite 5s linear;',
        keyframe: " @media (prefers-reduced-motion: no-preference) { .arrow { animation: arrow-spin infinite 5s linear; }} @keyframes arrow-spin { from { transform: rotate(360deg);}to {transform: rotate(0deg);}}' }"
    },

}
export { animations, animationDetails };