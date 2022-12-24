let cloneLinks = [];

export function LinksConfig() {
  document.querySelectorAll("a").forEach((link) => {
    try {
      const parentNodeClasses = link.parentNode.classList;
      if (!parentNodeClasses.contains("vw-tooltip__item")) {
        link.addEventListener("click", (event) => {
          event.preventDefault();
        });
      }
      const clone = link;
      cloneLinks.push({
        link,
        clone,
      });
    } catch {}
  });
}

export function removeLinksConfig() {
  cloneLinks.forEach((item) => {
    item.link.replaceWith(item.clone.cloneNode(true));
  });
  cloneLinks = [];
}
