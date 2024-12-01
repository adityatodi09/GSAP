// var tl = gsap.timeline()

// tl.to("#box1", {
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:90,
//     borderRadius:"50%",
//     // scale: 2
// })

// tl.to("#box2", {
//     x:1000,
//     // y:300,
//     duration:2,
//     rotate:90,
//     // backgroundColor:"violet"
// })

// tl.to("#box3", {
//     x:1000,
//     // y:300,
//     duration:2,
//     rotate:90,
    
// })

// gsap.from("h1", {
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger:0.3,
//     repeat:5,
//     // repeat: -1   for infinite loop
//     yoyo: true 
// })

var tl = gsap.timeline()

tl.from("h2", {
    y: -20,
    opacity:0,
    duration: 0.5,
    delay:0.5
})

tl.from("h4", {
    y: -20,
    opacity:0,
    duration: 0.5,
    stagger:0.3
})

tl.from("h1",{
    y:-20,
    opacity:0,
    scale:0.2,
    duration: 2
})