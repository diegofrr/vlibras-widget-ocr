import Tesseract from "tesseract.js";

import { formattedText } from "./utils";
import { loadingSpinnerHTML } from "../Components/LoadingSpinner";
import { hideModal } from "../Components/Modal";

let extracting = false;

export async function extractText(image) {
  if (extracting) return console.log("🤚 Já existe uma extração acontecendo.");
  else {
    extracting = true;
    console.log("⚡ Inicializando a extração...");
  }

  const submitButton = document.querySelector(".vwo-cropper-submit-button");
  submitButton.innerHTML = `Extraindo ${loadingSpinnerHTML()}`;

  const worker = await Tesseract.createWorker({
    logger: (m) => {},
  });
  const scheduler = Tesseract.createScheduler();
  scheduler.addWorker(worker);

  try {
    (async () => {
      await worker.loadLanguage("por");
      await worker.initialize("por");
      const {
        data: { text },
      } = await worker.recognize(
        image,
        {},
        { imageColor: true, imageBinary: true, imageGrey: true }
      );
      await worker.terminate().then(() => {
        const _text = formattedText(text);
        if (_text.length === 0) {
          // extractionWithoutResult();
          console.log("Nenhum texto extraído.");
        } else {
          // loadExtractionResult(_text);
          translateWithVlibras(_text);
        }
        submitButton.innerHTML = "Extrair texto";
        extracting = false;
      });
    })();
  } catch {
    console.log("⚠️ Algo saiu errado :(");
  }
  extracting = false;
}

function translateWithVlibras(text) {
  const vlibrasWidget = document.querySelector("vlibraswidget");
  const oldValue = vlibrasWidget.innerHTML;
  vlibrasWidget.innerHTML = text;
  vlibrasWidget.click();
  vlibrasWidget.innerHTML = oldValue;
  hideModal();
}
