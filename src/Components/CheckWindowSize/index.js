import "./styles.css";
import feather from "feather-icons";

export function checkWindowSize() {
  const warningElement = document.querySelector(".vwo-cropper-alert");
  warningElement.innerHTML =
    warningElement.innerHTML + feather.icons.smartphone.toSvg();

  window.addEventListener("resize", () => check());

  function check() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    if (windowWidth < windowHeight) {
      warningElement.classList.remove("vwo--hidden");
    } else {
      warningElement.classList.add("vwo--hidden");
    }
  }

  check();
}
