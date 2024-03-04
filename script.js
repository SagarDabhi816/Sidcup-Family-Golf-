var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur")


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"

    blur.style.left = dets.x-200+"px"
    blur.style.top = dets.y-200+"px"
});

var h4all = document.querySelectorAll("#nav h4,.elem")
var e = document.querySelectorAll(".elem img")
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 3
    crsr.style.border ="1px solid white"
    crsr.style.backgroundColor = "transparent"
    e.style.Color = "transparent"
   })

   elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border ="0px solid #95C11E"
    crsr.style.backgroundColor = "#95C11E"
    e.style.Color = "white"
   })
});



gsap.to("#nav",{ 
    backgroundColor:"#000",
    duration:1,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
});

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -20%",
        end:"top -100%",
        scrub:2
    }
});

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 58%",
        scrub:3
    }
});

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:2
    }
});

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 80%",
        end:"top 47%",
        scrub:4
    }
});

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 80%",
        end:"top 47%",
        scrub:4
    }
});


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 90%",
        end:"top 70%",
        scrub:2
    }
});



