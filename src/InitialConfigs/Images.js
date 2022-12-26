import { loadModal } from "../Components/Modal";

window.addEventListener("resize", ImagesConfig);

export function ImagesConfig() {
  createLinksContainer();
  document.querySelectorAll("img").forEach((img) => {
    if (img.clientWidth + img.clientHeight > 100) {
      img.classList.add("vwo-img-ocr");

      if (img.parentElement.tagName === "A") addTooltip(img);

      if (img.title) img.setAttribute("_old-title", img.title);
      img.setAttribute("title", "Traduzir com VLibras");

      img.addEventListener(
        "click",
        () => {
          loadModal(img);
        },
        false
      );
    }
  });
}

export function removeImagesConfig() {
  document.querySelectorAll("img").forEach((img) => {
    img.classList.remove("vwo-img-ocr");

    if (img.getAttribute("_old-title")) {
      img.setAttribute("title", img.getAttribute("_old-title"));
      img.removeAttribute("_old-title");
    } else img.removeAttribute("title");

    img.removeEventListener(
      "click",
      () => {
        loadModal(img);
      },
      false
    );
  });
}

function createLinksContainer() {
  const linksContainer = document.createElement("div");
  linksContainer.classList.add("vwo-image-links");
  document.querySelector("body").appendChild(linksContainer);
}

function addTooltip(image) {
  const linksContainer = document.querySelector(".vwo-image-links");
  const link = image.parentElement.href;
  const target = image.parentElement.target;
  const tooltip = document.createElement("a");

  tooltip.innerHTML = "Acessar link";
  tooltip.href = link;
  tooltip.target = target;

  const rect = image.getBoundingClientRect();
  const distanceToTop = window.pageYOffset + rect.top;
  const distanceToLeft = window.pageXOffset + rect.left;

  tooltip.style.top = distanceToTop + image.clientHeight - 35 + "px";
  tooltip.style.left = distanceToLeft + image.clientWidth / 2 + "px";

  image.addEventListener("mouseover", () => {
    linksContainer.innerHTML = "";
    tooltip.classList.remove("vwo--hidden");
    linksContainer.appendChild(tooltip);
  });

  image.addEventListener("mouseout", () => {
    tooltip.classList.add("vwo--hidden");
  });

  tooltip.addEventListener("mouseover", () => {
    tooltip.classList.remove("vwo--hidden");
  });

  tooltip.addEventListener("mouseout", () => {
    tooltip.classList.add("vwo--hidden");
  });
}
