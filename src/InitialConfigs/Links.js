let linksList = [];

export function LinksConfig() {
  document.querySelectorAll("a").forEach((link) => {
    try {
      const parentNodeClasses = link.parentNode.classList;
      if (!parentNodeClasses.contains("vw-tooltip__item") && link.href) {
        const href = link.href;
        link.removeAttribute("href");
        linksList.push({ link, href });
      }
    } catch {}
  });
}

export function removeLinksConfig() {
  linksList.forEach((item) => {
    item.link.href = item.href;
  });
  linksList = [];
}
