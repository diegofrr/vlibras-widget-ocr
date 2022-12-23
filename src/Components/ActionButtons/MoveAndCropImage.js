let action = "crop";
import feather from "feather-icons";

export const MoveAndCropImageButton = () => {
  const button = document.querySelector(
    ".vwo-cropper-buttons-container .vwo-crop-and-move"
  );

  button.innerHTML = feather.icons.move.toSvg();

  button.onclick = () => {
    toggleAction();
    toggleClass();
  };

  function toggleClass() {
    if (action === "crop") {
      button.classList.remove("vwo-action-button--selected");
    } else {
      button.classList.add("vwo-action-button--selected");
    }
  }
};

function otherAction() {
  return action === "crop" ? "move" : "crop";
}

function toggleAction() {
  const cropperDragBox = document.querySelector(".cropper-drag-box");
  cropperDragBox.classList.remove("cropper-" + action);
  cropperDragBox.classList.add("cropper-" + otherAction());
  cropperDragBox.setAttribute("data-cropper-action", otherAction());
  action = otherAction();
}
