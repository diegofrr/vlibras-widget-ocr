import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

import { Image } from "image-js";
import { extracting } from "../Tesseract";
import { extractText } from "../Tesseract";
import { contrastImage } from '../utils';
import { checkWindowSize } from "../Components/CheckWindowSize";
import { loadingSpinnerHTML } from "../Components/LoadingSpinner";
import { hideModal, loadModal } from "../Components/Modal";
import { zoomInBtn, zoomOutBtn } from "../Components/ActionButtons/ImageZoom";

function notWorking() {
  return document.querySelector('.vwo-cropper-modal-content');
}

export function loadCropper(img) {
  checkWindowSize();

  const imageContent = document.querySelector(".vwo-cropper-img-container");
  const image = imageContent.querySelector("img");
  const submitButton = document.querySelector(".vwo-cropper-submit-button");

  const { naturalWidth, naturalHeight } = img;

  console.log(naturalWidth, naturalHeight)

  if (
    (naturalHeight > innerHeight * .6) ||
    (naturalHeight > naturalWidth)
  ) {
    imageContent.style.height = '50vh';
    image.style.height = '100%';
  } else {
    imageContent.style.minHeight = '0';
    image.style.width = '100%';
  }

  let cropper = new Cropper(image);

  window.onresize = () => {
    if (!notWorking()) {
      window.onresize = null;
      return;
    };
    cropper.destroy();
    loadModal(img);
  }

  if (extracting) ExtractingModeOfButton();

  submitButton.onclick = async () => {
    cropper.disable();
    ExtractingModeOfButton();
    const croppedCanvas = cropper.getCroppedCanvas({ minWidth: 800, maxWidth: 800 });
    const url = croppedCanvas.toDataURL("image/jpeg");
    let img = await imgPreprocessing(url);
    translateWithVlibras(await extractText(img));
  };

  zoomInBtn().onclick = () => cropper.zoom(+0.1);

  zoomOutBtn().onclick = () => cropper.zoom(-0.1);

  function ExtractingModeOfButton() {
    submitButton.innerHTML = `Extraindo ${loadingSpinnerHTML()}`;
    submitButton.classList.add('vwo-disabled-button');
  }

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
  if (!text.trim()) return;
  try {
    const vlibrasWidget = document.querySelector("vlibraswidget");
    const oldValue = vlibrasWidget.innerHTML;
    vlibrasWidget.innerHTML = text;
    vlibrasWidget.click();
    vlibrasWidget.innerHTML = oldValue;
  } catch { }
}
