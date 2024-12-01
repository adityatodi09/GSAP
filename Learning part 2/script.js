// gsap.from("#page1 #box", {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:180
// })

// gsap.from("#page2 #box", {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:180,
//     scrollTrigger:{
//         trigger: "#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         scrub: true,
//         pin: true
//     }
// })

// gsap.from("#page3 #box", {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:180
// })

gsap.to("#page2 h1", {
    transform: "translate(-150%)",
    scrollTrigger:{
        trigger: "#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub: 4,
        pin:true
    }
})