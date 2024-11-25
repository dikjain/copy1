// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)



var qq= gsap.timeline()

qq.to("#rowcont",{
    scrollTrigger:{
        trigger:"#pg1allcont",
        start:"3% top",
        end:"bottom bottom",
        scrub:1,      
    },
    opacity:1
})
qq.to("#rowcont",{
    scrollTrigger:{
        trigger:"#pg1allcont",
        start:"15% top",
        end:"145% bottom",
        scrub:1,      
    },
    rotate:"-10deg"
})
qq.to(".r1",{
    scrollTrigger:{
        trigger:"#pg1allcont",
        start:"7% top",
        end:"140% bottom",
        scrub:1,      
    },
    translateY:"-100px"
})
qq.to(".r2",{
    scrollTrigger:{
        trigger:"#pg1allcont",
        start:"7% top",
        end:"140% bottom",
        scrub:1,      
    },
    translateY:"180px"
})
qq.to(".r3",{
    scrollTrigger:{
        trigger:"#pg1allcont",
        start:"7% top",
        end:"140% bottom",
        scrub:1,      
    },
    translateY:"-150px"
})
qq.to("#rowcont",{
    scrollTrigger:{
        trigger:"#pg1allcont",
        start:"7% top",
        end:"140% bottom",
        scrub:1,      
    },
    scale:0.8
})
qq.to("#nam",{
    scrollTrigger:{
        trigger:"#pg1allcont",
        start:"40% top",
        end:"160% bottom",
        scrub:1,
    },
    y:0+"px",
    opacity:1,
    ease:"power3.out"
})
qq.to("#row",{
    scrollTrigger:{
        trigger:"#pg1allcont",
        start:"20% top",
        end:"150% top",
        scrub:0.1,     
    },
    opacity:0.15
})
qq.to("#lincol",{
    scrollTrigger:{
        trigger:"#pg-1",
        start:"5% top",
        end:"bottom bottom",
        scrub:0.1,      
    },
    width:107+"px"
})
qq.to("#pg-2",{
    scrollTrigger:{
        trigger:"#pg-1",
        start:"20% top",
        end:"100% bottom",
        scrub:0.1,    
    },
    y:-100+"vh"
})



qq.to("#round",{
    scrollTrigger:{
        trigger:"#pg-1",
        start:"30% top",
        end:"140% 90%",
        scrub:0.1,    
    },
    borderRadius:0+"px"
})


gsap.to("#hider",{
    scrollTrigger:{
        trigger:"#pg-1",
        start:"38% top",
        end:"115% bottom",
        scrub:0.1,    
    },
    stagger:0.1,
    width:100 +"%"
})

var tm = gsap.timeline()

tm.to("#pg3rbox3",{
    scrollTrigger:{
        trigger:"#p3box1",
        start:"15% top",
        end:"bottom 15%",
        scrub:0.1,    
    },
    ease:"none",
    y:-100+"%"
})

tm.to("#pg3rbox2",{
    scrollTrigger:{
        trigger:"#p3box2",
        start:"15% top",
        end:"bottom 15%",
        scrub:0.1,    
    },
    ease:"none",
    y:-100+"%"
})
