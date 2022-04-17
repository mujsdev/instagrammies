pageTransition = () => {
  var timeline = gsap.timeline();
  timeline.to("header", {
    zIndex: 1,
  });

  timeline.to(".page-transition", {
    duration: 0.5,
    height: "100%",
    top: "0%",
  });

  timeline.to(".page-transition", {
    duration: 0.4,
    height: "100%",
    top: "100%",
    delay: 0.2,
  });

  timeline.set(".page-transition", {
    top: "-100%",
  });
};

mainAnimation = () => {
  var timeline = gsap.timeline();

  timeline.from(".container h1, .nav a", {
    duration: 0.5,
    y: 30,
    opacity: 0,
    stagger: {
      amount: 0.4,
    },
    delay: 0.4,
  });
};

delay = (n) => {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(500);
        done();
      },

      async enter(data) {
        mainAnimation();
      },

      async once(data) {
        mainAnimation();
      },
    },
  ],
});
