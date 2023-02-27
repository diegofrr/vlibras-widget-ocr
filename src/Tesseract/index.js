import Tesseract from "tesseract.js";

export let extracting = false;

export async function extractText(image) {
  if (extracting) return console.log("🤚 Já existe uma extração acontecendo.");
  else extracting = true;

  const progressBar = document.querySelector('.vwo-extraction-progress');

  const worker = await Tesseract.createWorker({
    logger: (m) => {
      if (m.jobId) progressBar.style.width = m.progress * 100 + '%';
    },
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
      return await worker.terminate().then(() => {
        extracting = false;
        if (!text) console.log("Nenhum texto extraído.");
        else console.log("Texto extraído: " + text);
        return text;
      });
    } catch {
      console.log("⚠️ Algo saiu errado :(");
      return "";
    }
  };
  return await finalResult();
}
