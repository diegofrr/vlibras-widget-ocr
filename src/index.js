import "./Cropper/index";
import "./Tesseract/index";
import "./styles.css";

import { loadModal } from "./Components/Modal";

const allImages = document.querySelectorAll("img");
const allLinks = document.querySelectorAll("a");

export const MasterOCRElement = document.createElement("div");

allImages.forEach((img) => {
  if (img.clientWidth + img.clientHeight > 100) {
    img.classList.add("vwo-img-ocr");
    img.onclick = () => {
      loadModal(img);
    };
  }
});

// document.querySelectorAll("a").forEach((link) => {
//   link.addEventListener("click", (event) => {
//     event.preventDefault();
//   });
// });

// document.querySelectorAll("a").forEach((link) => {
//   link.addEventListener("click", (event) => {
//     event.preventDefault();
//   });
//   const clone = link;
//   link.replaceWith(link.cloneNode(true));
// });

// allLinks.forEach((link) => {
//   const parentNodeClasses = link.parentNode.classList;
//   if (!parentNodeClasses.contains("vw-tooltip__item")) {
//     link.addEventListener("click", (event) => {
//       event.preventDefault();
//     });
//   }
// });

export function initializeOCRWork() {
  MasterOCRElement.classList.add("vwo-cropper-modal", "vwo--hidden");
  document.body.appendChild(MasterOCRElement);
  document.querySelector("body").classList.add("vwo-scrollBar--hidden");
}

initializeOCRWork();
