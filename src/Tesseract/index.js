import Tesseract from "tesseract.js";

import { formattedText } from "./utils";

let extracting = false;

export async function extractText(image) {
  if (extracting) return console.log("🤚 Já existe uma extração acontecendo.");
  else {
    extracting = true;
  }

  const worker = await Tesseract.createWorker({
    logger: (m) => {},
  });
  const scheduler = Tesseract.createScheduler();
  scheduler.addWorker(worker);

  const finalResult = async () => {
    try {
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
        }
        extracting = false;
      });
      return text;
    } catch {
      console.log("⚠️ Algo saiu errado :(");
      return "";
    }
  };

  return await finalResult();
}
