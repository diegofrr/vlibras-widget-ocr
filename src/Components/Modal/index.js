import "./styles.css";

import template from "../../template.html";

import { loadCropper } from "../../Cropper";
import { loadActionButtons } from "../ActionButtons";
import { MasterOCRElement } from "../..";

export function hideModal() {
  MasterOCRElement.classList.add("vwo--hidden");
  MasterOCRElement.innerHTML = "";
  document.querySelector("body").classList.remove("vwo-scrollBar--hidden");
}

export function loadModal(img) {
  MasterOCRElement.classList.remove("vwo--hidden");
  MasterOCRElement.innerHTML = template;
  MasterOCRElement.querySelector(".vwo-cropper-img").src = img.src;
  loadActionButtons();
  loadCropper();
}
