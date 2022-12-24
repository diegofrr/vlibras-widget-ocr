import { loadModal } from "../Components/Modal";

export function ImagesConfig() {
  document.querySelectorAll("img").forEach((img) => {
    if (img.clientWidth + img.clientHeight > 100) {
      img.classList.add("vwo-img-ocr");

      if (img.title) img.setAttribute("_old-title", img.title);
      img.setAttribute("title", "Traduzir com VLibras");

      img.addEventListener(
        "click",
        () => {
          loadModal(img);
        },
        false
      );
    }
  });
}

export function removeImagesConfig() {
  document.querySelectorAll("img").forEach((img) => {
    img.classList.remove("vwo-img-ocr");

    if (img.getAttribute("_old-title")) {
      img.setAttribute("title", img.getAttribute("_old-title"));
      img.removeAttribute("_old-title");
    } else img.removeAttribute("title");

    img.removeEventListener(
      "click",
      () => {
        loadModal(img);
      },
      false
    );
  });
}
