// import "./styles.css";

// import feather from "feather-icons";
// import { formattedText } from "../../Tesseract/utils";
// import { hideModal } from "../Modal";

// export function hideResultModal() {
//   document.querySelector(".vwo-extraction-result").classList.add("vwo--hidden");
// }

// function getElements() {
//   const resultModal = document.querySelector(".vwo-extraction-result");
//   const resultModalTitle = document.querySelector(".vwo-extraction-content p");
//   const resultText = document.querySelector(".vwo-result");
//   const [translateBtn, editBtn, saveEditBtn, retryBtn] = document.querySelector(
//     ".vwo-extraction-buttons"
//   ).children;

//   return {
//     resultModal,
//     resultModalTitle,
//     resultText,
//     translateBtn,
//     retryBtn,
//     editBtn,
//     saveEditBtn,
//   };
// }

// export function loadExtractionResult(text) {
//   hideResultModal();
//   const resultModal = getElements().resultModal;
//   const resultModalTitle = getElements().resultModalTitle;
//   const resultText = getElements().resultText;
//   const translateBtn = getElements().translateBtn;
//   const editBtn = getElements().editBtn;
//   const retryBtn = getElements().retryBtn;
//   const saveEditBtn = getElements().saveEditBtn;
//   let newValue = "";

//   resultModalTitle.innerHTML = `${feather.icons[
//     "check-circle"
//   ].toSvg()} Concluído`;

//   translateBtn.onclick = () => {
//     alert("traduzir com vlibras widget");
//     // const vlibrasWidget = document.querySelector("vlibraswidget");
//     // const oldValue = vlibrasWidget.innerHTML;
//     // vlibrasWidget.innerHTML = getElements().resultText.innerHTML;
//     // vlibrasWidget.click();
//     // vlibrasWidget.innerHTML = oldValue;
//     // hideModal();
//   };

//   editBtn.onclick = () => {
//     const resultText = getElements().resultText;
//     const editResult = document.createElement("textarea");

//     translateBtn.setAttribute("disabled", "");
//     editResult.classList.add("vwo-result");
//     editResult.value = formattedText(resultText.innerHTML);
//     editResult.style.height = resultText.clientHeight + "px";
//     newValue = editResult.value.toUpperCase();

//     editResult.oninput = () => {
//       editResult.style.height = editResult.scrollHeight + "px";
//       newValue = formattedText(editResult.value.toUpperCase());

//       if (editResult.value.length < 2) {
//         saveEditBtn.setAttribute("disabled", "");
//       } else {
//         saveEditBtn.removeAttribute("disabled");
//       }
//     };

//     resultText.replaceWith(editResult);
//     editBtn.classList.add("vwo--hidden");
//     saveEditBtn.classList.remove("vwo--hidden");
//   };

//   saveEditBtn.onclick = () => {
//     saveEditOrCancel();
//   };

//   retryBtn.onclick = () => {
//     saveEditOrCancel();
//     hideResultModal();
//   };

//   function saveEditOrCancel() {
//     const newResultText = document.createElement("span");
//     newResultText.classList.add("vwo-result");

//     translateBtn.removeAttribute("disabled");
//     newResultText.innerHTML = newValue;
//     getElements().resultText.replaceWith(newResultText);

//     editBtn.classList.remove("vwo--hidden");
//     saveEditBtn.classList.add("vwo--hidden");
//   }

//   resultText.innerHTML = text;
//   resultModal.classList.remove("vwo--hidden");
//   editBtn.classList.remove("vwo--hidden");
// }

// export function extractionWithoutResult() {
//   const resultModal = getElements().resultModal;
//   const resultModalTitle = getElements().resultModalTitle;
//   const resultText = getElements().resultText;
//   const translateBtn = getElements().translateBtn;
//   const editBtn = getElements().editBtn;
//   const retryBtn = getElements().retryBtn;

//   resultText.innerHTML = "Nenhum texto extraído :(";

//   resultModalTitle.classList.add("vwo--hidden");
//   translateBtn.classList.add("vwo--hidden");
//   editBtn.classList.add("vwo--hidden");
//   resultModal.classList.remove("vwo--hidden");

//   retryBtn.onclick = () => {
//     hideResultModal();
//     translateBtn.classList.remove("vwo--hidden");
//     resultModalTitle.classList.remove("vwo--hidden");
//   };
// }
