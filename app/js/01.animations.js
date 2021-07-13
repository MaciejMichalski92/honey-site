// header animation
gsap.from(".text-container-anim1", {
	opacity: 0,
	delay: 0,
	duration: 1,
	y: -30,
	stagger: 0.6,
});
gsap.from(".poly1", {
	opacity: 0,
	delay: 1,
	duration: 1.5,
});
gsap.from(".poly2", { opacity: 0, duration: 1.8, x: -50 });

// section 1 animation
gsap.from(".section1 .img-container", {
	scrollTrigger: {
		trigger: ".section1",
		toggleActions: "restart resume resume pause",
		start: "top 50%",
		end: "bottom 80%",
	},
	opacity: 0,
	x: -50,
	duration: 1.5,
});
gsap.from(".section1 .text-container", {
	scrollTrigger: {
		trigger: ".section1",
		toggleActions: "restart resume resume pause",
		start: "top 50%",
		end: "bottom 80%",
	},
	opacity: 0,
	duration: 1.5,
	x: 50,
});

//section 2 animation
gsap.from(".section2 p", {
	scrollTrigger: {
		trigger: ".section2 p",
		toggleActions: "restart resume resume pause",
		start: "top 70%",
		end: "bottom 80%",
	},
	opacity: 0,
	duration: 1,
});

// banner section animation
gsap.from(".anim2", {
	scrollTrigger: {
		trigger: ".anim2",
		toggleActions: "restart resume resume pause",
		start: "top 50%",
	},
	opacity: 0,
	duration: 2,
	y: 50,
	x: -50,
});

//hamburger menu animation

const menu = document.querySelector(".hamburger-wrapper");
const buttonsWrapper = document.querySelector(".buttons-wrapper");
let flagMenuOpen = true;

menu.addEventListener("click", () => {
	if (flagMenuOpen) {
		menu.classList.add("open");
		buttonsWrapper.style.display = "block";
	} else {
		menu.classList.remove("open");
		buttonsWrapper.style.display = "none";
	}
	flagMenuOpen = !flagMenuOpen;
});