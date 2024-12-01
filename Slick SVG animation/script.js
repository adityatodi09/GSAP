var path = "M 44 200 Q 744 200 1444 200";
var finalPath = "M 44 200 Q 744 200 1444 200";

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 44 200 Q ${dets.x} ${dets.y} 1444 200`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)"
  });
});
