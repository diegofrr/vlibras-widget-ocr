import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

import { Image } from "image-js";
import { hideModal } from "../Components/Modal";
import { extracting } from "../Tesseract";
import { extractText } from "../Tesseract";
import { contrastImage } from "../Tesseract/utils";
import { checkWindowSize } from "../Components/CheckWindowSize";
import { loadingSpinnerHTML } from "../Components/LoadingSpinner";

export function loadCropper() {
  checkWindowSize();

  const imageContent = document.querySelector(".vwo-cropper-img-container");
  const image = document.querySelector(".vwo-cropper-img");
  const submitButton = document.querySelector(".vwo-cropper-submit-button");

  let cropper = new Cropper(image, {
    ready: function (event) {
      cropper.zoomTo(imageContent.clientWidth / image.naturalWidth);
    },
    zoom: function (event) {
      if (event.detail.oldRatio === 1) {
        event.preventDefault();
      }
    },
  });

  if (extracting) {
    submitButton.innerHTML = `Extraindo ${loadingSpinnerHTML()}`;
    submitButton.setAttribute("disabled", "");
  }

  submitButton.onclick = async () => {
    submitButton.innerHTML = `Extraindo ${loadingSpinnerHTML()}`;
    submitButton.setAttribute("disabled", "");
    const croppedCanvas = cropper.getCroppedCanvas();
    const url = croppedCanvas.toDataURL("image/jpeg");
    let img = await imgPreprocessing(url);
    translateWithVlibras(await extractText(img));
  };

  async function imgPreprocessing(src) {
    const manipulation = await Image.load(src);
    let img = document.createElement("img");
    img.src = src;

    let manipulatedImage = manipulation.grey();
    manipulatedImage = contrastImage(manipulatedImage, 0);

    img.src = manipulatedImage.toDataURL();

    return img;
  }
}

function translateWithVlibras(text) {
  hideModal();
  try {
    const vlibrasWidget = document.querySelector("vlibraswidget");
    const oldValue = vlibrasWidget.innerHTML;
    vlibrasWidget.innerHTML = text;
    vlibrasWidget.click();
    vlibrasWidget.innerHTML = oldValue;
  } catch {}
}
