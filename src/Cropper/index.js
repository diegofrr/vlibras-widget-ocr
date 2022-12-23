import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

import { Image } from "image-js";
import { extractText } from "../Tesseract";
import { checkWindowSize } from "../Components/CheckWindowSize";
import { contrastImage } from "../Tesseract/utils";

export function loadCropper() {
  checkWindowSize();

  const imageContent = document.querySelector(".vwo-cropper-img-container");
  const image = document.querySelector(".vwo-cropper-img");
  const button = document.querySelector(".vwo-cropper-submit-button");

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

  button.onclick = async () => {
    const croppedCanvas = cropper.getCroppedCanvas();
    const url = croppedCanvas.toDataURL("image/jpeg");
    let img = await imgPreprocessing(url);
    extractText(img);
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
