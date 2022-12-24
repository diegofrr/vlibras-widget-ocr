import { hideModal } from "./Components/Modal";
import "./Cropper/index";
import { ImagesConfig, removeImagesConfig } from "./InitialConfigs/Images";
import { LinksConfig, removeLinksConfig } from "./InitialConfigs/Links";
import "./Tesseract/index";
import "./styles.css";

const vwButton = document.querySelector("div[vw-access-button]");
const vwBox = document.querySelector("div[vp-box]");
const observer = new MutationObserver((mutation) => {
  vwBox
    .querySelector(".vpw-settings-btn-close")
    .addEventListener("click", () => destroyVlibrasWidgetOCR());
});

vwButton.addEventListener("click", () => {
  initializeVlibrasWidgetOCR();
});

observer.observe(vwBox, { childList: true });

export let MasterOCRElement = document.createElement("div");

function initializeVlibrasWidgetOCR() {
  ImagesConfig();
  LinksConfig();

  MasterOCRElement.classList.add("vwo-cropper-modal", "vwo--hidden");
  document.body.appendChild(MasterOCRElement);
  document.querySelector("body").classList.add("vwo-scrollBar--hidden");
}

export function destroyVlibrasWidgetOCR() {
  hideModal();
  removeImagesConfig();
  removeLinksConfig();
}
