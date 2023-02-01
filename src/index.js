import { hideModal } from "./Components/Modal";
import "./Cropper/index";
import { ImagesConfig, removeImagesConfig } from "./InitialConfigs/Images";
import { LinksConfig, removeLinksConfig } from "./InitialConfigs/Links";
import "./Tesseract/index";
import "./styles.css";

export let MasterOCRElement = document.createElement("div");

function initializeVlibrasWidgetOCR() {
  ImagesConfig();
  LinksConfig();

  window.addEventListener("resize", ImagesConfig, false);

  MasterOCRElement.classList.add("vwo-cropper-modal", "vwo--hidden");
  document.body.appendChild(MasterOCRElement);
}

initializeVlibrasWidgetOCR();

export function destroyVlibrasWidgetOCR() {
  hideModal();
  removeImagesConfig();
  removeLinksConfig();
}
