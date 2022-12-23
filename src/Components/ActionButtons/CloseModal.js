import "./styles.css";

import { hideModal } from "../Modal";
import feather from "feather-icons";

export function CloseModalButton() {
  const button = document.querySelector(
    ".vwo-cropper-buttons-container .vwo-close-modal"
  );
  button.innerHTML = feather.icons.x.toSvg();

  button.onclick = () => hideModal();
}
