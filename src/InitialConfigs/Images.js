import { loadModal } from "../Components/Modal";

let working = false;

export function ImagesConfig() {
  if(!working) createLinksContainer();
  working = true;
  
  document.querySelectorAll("img").forEach((img) => {
    make(img)
  });

  document.querySelectorAll("div").forEach(div => {
    const style = window.getComputedStyle(div);
    const bg = style.getPropertyValue('background-image');
    
    if(bg.includes('url')) {
        if(bg && bg !== null && bg !== 'none' && bg !== undefined) {
          const url = bg.split('"')[1];
          div.src = url;
          make(div)
        }
      }
  })

  function make(img) {
    if (img.clientWidth + img.clientHeight > 100) {
      img.classList.add("vwo-img-ocr");

      if (img.parentElement.tagName === "A") addTooltip(img);

      if (img.title) img.setAttribute("_old-title", img.title);
      img.setAttribute("title", "Traduzir com VLibras");

      img.addEventListener(
        "click",
        () => {
          if (!working) return;
          loadModal(img);
        },
        false
      );
    }
  }
}

export function removeImagesConfig() {
  working = false;
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

  image.addEventListener("mouseover", imageMouseOver, false);
  image.addEventListener("mouseout", imageMouseOut, false);

  tooltip.addEventListener("mouseover", tooltipMouseOver, false);
  tooltip.addEventListener("mouseout", tooltipMouseOut, false);

  function imageMouseOver() {
    if (!working) return;
    linksContainer.innerHTML = "";
    tooltip.classList.remove("vwo--hidden");
    linksContainer.appendChild(tooltip);
  }

  function imageMouseOut() {
    if (!working) return;
    tooltip.classList.add("vwo--hidden");
  }

  function tooltipMouseOver() {
    tooltip.classList.remove("vwo--hidden");
  }

  function tooltipMouseOut() {
    tooltip.classList.add("vwo--hidden");
  }
}
