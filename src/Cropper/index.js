import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

import { Image } from "image-js";
import { hideModal } from "../Components/Modal";
import { extractText } from "../Tesseract";
import { checkWindowSize } from "../Components/CheckWindowSize";
import { loadingSpinnerHTML } from "../Components/LoadingSpinner";
import { contrastImage, formattedText } from "../Tesseract/utils";

export function loadCropper() {
  checkWindowSize();

  const imageContent = document.querySelector(".vwo-cropper-img-container");
  const image = document.querySelector(".vwo-cropper-img");
  const submitButton = document.querySelector(".vwo-cropper-submit-button");
  const addAreaButton = document.querySelector(".vwo-cropper-addArea-button");
  const areaText = document.querySelector(
    ".vwo-cropper-buttons-container span"
  );
  let imagesList = [];

  let cropper = createCropper();

  submitButton.onclick = async () => {
    submitButton.innerHTML = `Extraindo ${loadingSpinnerHTML()}`;
    submitButton.setAttribute("disabled", "");
    addAreaButton.setAttribute("disabled", "");

    const finalResultOfExtraction = async () => {
      let finalText = "";
      for (const img of imagesList) {
        finalText += await extractText(img);
      }
      return formattedText(finalText);
    };
    translateWithVlibras(await finalResultOfExtraction());
    resetValues();
  };

  addAreaButton.onclick = async () => {
    areaText.innerHTML = `Área ${imagesList.length + 2}`;
    submitButton.classList.remove("vwo--hidden");
    await addCropperImage();
  };

  function createCropper() {
    return new Cropper(image, {
      ready: async function (event) {
        cropper.zoomTo(imageContent.clientWidth / image.naturalWidth);
      },
      zoom: function (event) {
        if (event.detail.oldRatio === 1) {
          event.preventDefault();
        }
      },
    });
  }

  async function addCropperImage() {
    const croppedCanvas = cropper.getCroppedCanvas();
    const url = croppedCanvas.toDataURL("image/jpeg");
    let img = await imgPreprocessing(url);
    imagesList.push(img);
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

  function resetValues() {
    submitButton.innerHTML = "Extrair texto";
    submitButton.removeAttribute("disabled");
    addAreaButton.removeAttribute("disabled");
    imagesList = [];
  }
}

function translateWithVlibras(text) {
  // const vlibrasWidget = document.querySelector("vlibraswidget");
  // const oldValue = vlibrasWidget.innerHTML;
  // vlibrasWidget.innerHTML = text;
  // vlibrasWidget.click();
  // vlibrasWidget.innerHTML = oldValue;
  console.log(text);
  hideModal();
}
