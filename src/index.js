import "./styles.css";
import "./Cropper/index";
import "./Tesseract/index";

import { hideModal } from "./Components/Modal";
import { ImagesConfig, removeImagesConfig } from "./InitialConfigs/Images";
import { LinksConfig, removeLinksConfig } from "./InitialConfigs/Links";

const vwButton = document.querySelector("div[vw-access-button]");
const vwBox = document.querySelector("div[vp-box]");

window.addEventListener(
  'vp-widget-close',
  destroyVlibrasWidgetOCR
);

vwButton.addEventListener("click", () => {
  initializeVlibrasWidgetOCR();
});

export let MasterOCRElement = document.createElement("div");

function initializeVlibrasWidgetOCR() {
  ImagesConfig();
  LinksConfig();

  window.addEventListener("resize", ImagesConfig, false);

  MasterOCRElement.classList.add("vwo-cropper-modal", "vwo--hidden");
  document.body.appendChild(MasterOCRElement);
}

export function destroyVlibrasWidgetOCR() {
  hideModal();
  removeImagesConfig();
  removeLinksConfig();
}
