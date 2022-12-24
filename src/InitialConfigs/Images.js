import { loadModal } from "../Components/Modal";

const allImages = document.querySelectorAll("img");

export function ImagesConfig() {
  allImages.forEach((img) => {
    if (img.clientWidth + img.clientHeight > 100) {
      img.classList.add("vwo-img-ocr");
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
  allImages.forEach((img) => {
    if (img.clientWidth + img.clientHeight > 100) {
      img.classList.remove("vwo-img-ocr");
      img.removeEventListener(
        "click",
        () => {
          loadModal(img);
        },
        false
      );
    }
  });
}
