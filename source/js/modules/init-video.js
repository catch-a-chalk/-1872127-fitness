export function initVideo() {
  const wrapper = document.querySelector(".video");
  const button = wrapper.querySelector(".video__button");
  const video = wrapper.querySelector(".video__link");
  const youtubeID = video.href.slice(17);

  video.removeAttribute("href")
  button.hidden = false;

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
