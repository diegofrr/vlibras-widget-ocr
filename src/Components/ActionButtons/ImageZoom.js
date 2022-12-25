import feather from "feather-icons";

export const zoomInBtn = () => {
  const zoomInBtn = document.querySelector(".vwo-image-zoomIn");
  zoomInBtn.innerHTML = feather.icons["zoom-in"].toSvg();
  return zoomInBtn;
};

export const zoomOutBtn = () => {
  const zoomOutBtn = document.querySelector(".vwo-image-zoomOut");
  zoomOutBtn.innerHTML = feather.icons["zoom-out"].toSvg();
  return zoomOutBtn;
};
