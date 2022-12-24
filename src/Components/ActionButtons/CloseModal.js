import "./styles.css";

import feather from "feather-icons";
import { hideModal } from "../Modal";

export function CloseModalButton() {
  const button = document.querySelector(
    ".vwo-cropper-buttons-container .vwo-close-modal"
  );
  button.innerHTML = feather.icons.x.toSvg();

  button.onclick = () => hideModal();
}
