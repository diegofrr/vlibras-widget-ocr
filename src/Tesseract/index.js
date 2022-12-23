import Tesseract from "tesseract.js";

import { formattedText } from "./utils";
import { loadingSpinnerHTML } from "../Components/LoadingSpinner";
import {
  extractionWithoutResult,
  loadExtractionResult,
} from "../Components/ExtractionResult";

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
          extractionWithoutResult();
        } else {
          loadExtractionResult(_text);
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
