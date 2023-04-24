// Dom Variables
const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

// Current Active step
let current = 1;

// Functions
const updateDom = () => {
	circles.forEach((circle, index) => {
		if (index < current) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});
	// Accessing the current active steps
	const actives = document.querySelectorAll('.active');
	// calculate the progress precentage & and update the styleSheet of the progress div
	const precentage = ((actives.length - 1) / (circles.length - 1)) * 100;
	progress.style.width = precentage + '%';

	// Disabled the prev when the we in step 1
	if (current === 1) {
		prev.disabled = true;
	} else if (current === circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
};

// Events listeners initialize
next.addEventListener('click', () => {
	if (current < circles.length) current++;
	updateDom();
});

prev.addEventListener('click', () => {
	if (current > 1) current--;
	updateDom();
});
