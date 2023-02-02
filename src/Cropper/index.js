import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

import { Image } from "image-js";
import { extracting } from "../Tesseract";
import { extractText } from "../Tesseract";
import { contrastImage } from "../Tesseract/utils";
import { loadingSpinnerHTML } from "../Components/LoadingSpinner";
import { hideModal, loadModal } from "../Components/Modal";
import { zoomInBtn, zoomOutBtn } from "../Components/ActionButtons/ImageZoom";

function notWorking() {
  console.log('test')
  return document.querySelector('.vwo-cropper-modal-content');
}

export function loadCropper(img) {
  const imageContent = document.querySelector(".vwo-cropper-img-container");
  const image = imageContent.querySelector('img');
  const submitButton = document.querySelector(".vwo-cropper-submit-button");

  const { naturalWidth, naturalHeight } = img;

  if (naturalWidth > naturalHeight) {
    imageContent.style.minHeight = '0';
    image.style.width = '100%';
  } else {
    imageContent.style.minHeight = '50vh';
    image.style.height = '100%';
  }

  let cropper = new Cropper(image);

  window.onresize = () => {
    if(!notWorking()) {
      window.onresize = null;
      return;
    };
    cropper.destroy();
    loadModal(img);
  }

  if (extracting) {
    submitButton.innerHTML = `Extraindo ${loadingSpinnerHTML()}`;
    submitButton.setAttribute("disabled", "");
  }

  submitButton.onclick = async () => {
    cropper.disable();
    submitButton.innerHTML = `Extraindo ${loadingSpinnerHTML()}`;
    submitButton.setAttribute("disabled", "");
    const croppedCanvas = cropper.getCroppedCanvas();
    const url = croppedCanvas.toDataURL("image/jpeg");
    let img = await imgPreprocessing(url);
    translateWithVlibras(await extractText(img));
  };

  zoomInBtn().onclick = () => cropper.zoom(+0.1);

  zoomOutBtn().onclick = () => cropper.zoom(-0.1);

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
  if (text === "") return;
  console.log(text)
}
