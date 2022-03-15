gsap.registerPlugin(ScrollTrigger);
const titlesAnimation = {duration: 1,y:"-20%",opacity:0,ease: "power2",scale:1.2}

//NAVBAR
let tl = gsap.timeline();
tl.from(".navbar-brand",{duration:1,x:"-100%",opacity:0, ease:"power3"})
tl.from(
  '.nav-item',
  { duration: 1.6, y: '-50%', opacity: 0, ease: 'power3', stagger: 0.25 },
  '-=0.5'
);
tl.from("#btn-colaborar", {duration:2, scale:0, opacity:0, ease:"power3"},"-=1.5")

//HERO SECTION
let tl2 = gsap.timeline();
tl2.from("#yellow-blob-01",{duration:2,scale:2,x:-400,y:-200,rotate:-80,opacity:0,ease:"power3"})
tl2.from("#hero-img", {duration:3, scale:3, x:40,opacity:0,ease:"power3"},"-=2.6")
tl2.from(".hero-item", {
 duration:1.5,x:"-100%",opacity:0
},"-=2")
tl2.from(
  '.hero-btn-colaborar',
  { duration: 2, scale: 0, opacity: 0, ease: 'power3' },
  '-=1'
);

//OBJETIVOS
gsap.from('#objetivos > .container > .title', {
  ...titlesAnimation,
  scrollTrigger: {
    trigger: '#objetivos > .container > .title > h2',

    start: 'top center',
    toggleActions: 'play none none none',
  },
});
gsap.from ("#objetive",{duration:2, x:30,opacity:0.3,scrollTrigger: {
 trigger:"#objetive",
 start: "top center",
 toggleActions:"play none none none"
}})

//PORQUE
gsap.from('#por-que > .title', {
  ...titlesAnimation,
  scrollTrigger: {
    trigger: '#por-que .title > h2',
    
    start: 'top center',
    toggleActions: 'play none none none',
  },
});
gsap.from('#por-que > .container > ul > li', {
  x:"-10%",
  duration:2,
  opacity:0,
  stagger: 0.25,
  scrollTrigger: {
    trigger: '#por-que > .container > ul',

    start: 'top center',
    toggleActions: 'play none none none',
  },
});

//CONSTRUIMOS
gsap.from('#construimos > .title', {
  ...titlesAnimation,
  scrollTrigger: {
    trigger: '#construimos > .title > h2',
    start: 'top center',
    toggleActions: 'play none none none',
  },
});
gsap.from('#construimos > .container > .bg-svg', {
  duration: 2,
  scale: 2,
  x: -400,
  y: -200,
  rotate: -80,
  opacity: 0,
  ease: 'power3',
  scrollTrigger: {
    trigger: '#construimos > .container > .slider-container',
    start: 'top center',
    toggleActions: 'play none none none',
  },
});
gsap.from('#construimos > .container > .slider-container', {
  x: '-5%',
  scale: 1.1,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: '#construimos > .container > .slider-container',
    start: 'top center',
    toggleActions: 'play none none none',
  },
});

//ESTAMOS-CONSTRUYENDO
gsap.from('#estamos-construyendo > .container > .title', {
  ...titlesAnimation,
  scrollTrigger: {
    trigger: '#estamos-construyendo > .container > .title > h2',
    start: 'top center',
    toggleActions: 'play none none none',
  },
});
gsap.from('#estamos-construyendo > .container > .content', {
  x: '-5%',
  scale: 1.1,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: '#estamos-construyendo > .container > .content',
    start: 'top center',
    toggleActions: 'play none none none',
  },
});

//OBRA GLOBAL
gsap.from('#obra-global > .container > .title', {
  ...titlesAnimation,
  scrollTrigger: {
    trigger: '#obra-global > .container > .title > h2',
    start: 'top center',
    toggleActions: 'play none none none',
  },
});
gsap.from('#obra-global > .container > .row', {
  x: '-5%',
  scale: 1.1,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: '#obra-global > .container > .row',
    start: 'top center',
    toggleActions: 'play none none none',
  },
});

//COLABORAR
gsap.from('#colaborar > .container > .title', {
  ...titlesAnimation,
  scrollTrigger: {
    trigger: '#colaborar > .container > .title > h2',
    start: 'top center',
    toggleActions: 'play none none none',
  },
});
gsap.from('#colaborar > .container > .row > .col-md-6', {
  x: '-5%',
  scale: 1.1,
  duration: 2,
  opacity: 0,
  stagger:0.25,
  scrollTrigger: {
    trigger: '#colaborar > .container > .row',
    start: 'top center',
    toggleActions: 'play none none none',
  },
});