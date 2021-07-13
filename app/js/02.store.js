// store filter
const filterBtn = document.querySelectorAll(".btn-container");
const products = document.querySelectorAll(".product-container");

filterBtn.forEach(button => {
	button.addEventListener("click", e => {
		const hexagon = e.target.children[0].classList;
		const eventButton = e.target;
		filterBtn.forEach(btn => {
			btn.children[0].classList.remove("orange");
			btn.classList.remove("active");
		});
		products.forEach(product => {
			product.classList.add("hide");
		});
		if (eventButton.classList.contains("active")) {
			eventButton.classList.remove("active");
			hexagon.remove("orange");
		} else {
			eventButton.classList.add("active");
			hexagon.add("orange");
			products.forEach(product => {
				if (product.dataset.key === eventButton.dataset.search) {
					product.classList.remove("hide");
				} else if (eventButton.dataset.search === "all")
					product.classList.remove("hide");
			});
		}
	});
});
