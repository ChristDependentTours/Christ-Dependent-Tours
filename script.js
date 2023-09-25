var tl = gsap.timeline();

tl.from(".hero h1, .hero h5", {
  opacity: 0,
  duration: 1,
  y: 200,
  scrub: true,
  stagger: 0.2,
});

tl.from(".tours h1, .tours p", {
  opacity: 0,
  duration: 1,
  y: 200,
  scrub: true,
  stagger: 0.2,
});

tl.from(".tours .logo", {
  opacity: 0,
  duration: 0.5,
  scale: 0,
  scrub: true,
});

tl.from(".tours .logo-2", {
  opacity: 0,
  duration: 0.8,
  scale: 0,
  scrub: true,
});

tl.from(".about h1", {
  opacity: 0,
  duration: 1,
  y: -100,
  scrub: true,
});

tl.from(".about .img-tag", {
  opacity: 0,
  duration: 0.5,
  x: -100,
  scrub: true,
});

tl.from(".about .cnt-tag", {
  opacity: 0,
  duration: 0.5,
  x: 150,
  scrub: true,
});

tl.from(".tour-2 h1, .tour-2 p", {
  opacity: 0,
  duration: 1,
  y: -100,
  scrub: true,
  stagger: 0.2,
});

tl.from(".tour-2 img", {
  opacity: 0,
  duration: 1,
  scale: 0,
  scrub: true,
  stagger: 0.3,
});

tl.from(".tour-2 .cnt-1,.tour-2 .cnt-2,.tour-2 .cnt-3", {
  opacity: 0,
  duration: 1,
  y: 100,
  scrub: true,
  stagger: 0.3,
});

tl.from(".tour-2 .btm-cnt", {
  opacity: 0,
  duration: 0.5,
  y: 100,
  scrub: true,
});

tl.from(".tour-3 .cnt-1", {
  opacity: 0,
  duration: 1,
  x: -100,
  scrub: true,
  stagger: 0.3,
});

tl.from(".tour-3 .cnt-2", {
  opacity: 0,
  duration: 1,
  x: 100,
  scrub: true,
  stagger: 0.3,
});

tl.from(".gallery h1", {
  opacity: 0,
  duration: 1,
  y: -100,
  scrub: true,
});

tl.from(".gallery .carousel", {
  opacity: 0,
  duration: 1,
  y: 100,
  scrub: true,
});

tl.from(".contact h1", {
  opacity: 0,
  duration: 1,
  y: -100,
  scrub: true,
});

tl.from(".contact .cnt-1 p", {
  opacity: 0,
  duration: 1,
  y: 100,
  scrub: true,
  stagger: 0.3,
});

tl.from(".contact .cnt-2 p", {
  opacity: 0,
  duration: 1,
  y: 100,
  scrub: true,
  stagger: 0.3,
});
