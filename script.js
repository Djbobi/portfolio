var t1=gsap.timeline();

t1.from("nav ,nav .logo ,nav .sub,nav .sub a,nav .bot",{
    y:-100,
    duration:1,        
    opacity:0,
    stagger:0.5,
    scrub:5,
},"a")

t1.from("#page1,#page1 #element,#element p,#page1 .pic img",{
    
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.5,  
    scrub:5
},"a")

var t2=gsap.timeline();
t2.from("#page2 #box",{
    opacity:0,
    scale:1,
    delay:1,
    duration:5,
    stagger:5,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        scrup:5
    }
},"a")

gsap.from("#box .up",{
    opacity:0,
    scale:1,
    delay:1,
    duration:1,
    stagger:5,
    scrollTrigger:{
        trigger:"#box .up",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        scrup:5
    }
},"a")
gsap.from("#box .down",{
    opacity:0,
    scale:1,
    delay:1,
    duration:1,
    stagger:5,
    scrollTrigger:{
        trigger:"#box .down",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        scrup:5
    }
},"a")