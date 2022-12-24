export function LinksConfig() {
  const allLinks = document.querySelectorAll("a");

  allLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
    // const clone = link;
    // link.replaceWith(link.cloneNode(true));
  });

  // allLinks.forEach((link) => {
  //   const parentNodeClasses = link.parentNode.classList;
  //   if (!parentNodeClasses.contains("vw-tooltip__item")) {
  //     link.addEventListener("click", (event) => {
  //       event.preventDefault();
  //     });
  //   }
  // });
}
