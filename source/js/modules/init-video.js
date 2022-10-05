const videoWrapper = document.querySelector(".video");

videoWrapper && initVideo(videoWrapper);

/* function initVideo(wrapper) {
	const video = wrapper.querySelector(".video__media"),
		button = wrapper.querySelector(".video__button");
		wrapper.addEventListener("click", () => {
		video.controls = true;
		button.hidden = true;
		video.play();
	});
}
 */

function initVideo(wrapper) {
	const button = wrapper.querySelector(".video__button"),
		youtubeID = wrapper.href.slice(17);

	button.hidden = false;

	wrapper.removeAttribute("href");

	wrapper.addEventListener("click", () => {
		const parent = wrapper.parentElement;
		const iframe = document.createElement("iframe");
		iframe.setAttribute("allowfullscreen", "");
		iframe.setAttribute("allow", "autoplay");
		iframe.setAttribute(
			"src",
			`https://www.youtube.com/embed/${youtubeID}?rel=0&showinfo=0&autoplay=1`
		);
		iframe.classList.value = wrapper.classList.value;
		iframe.width = 364;
		iframe.height = 228;

		parent.replaceChild(iframe, wrapper);
	});
}

export {initVideo};
