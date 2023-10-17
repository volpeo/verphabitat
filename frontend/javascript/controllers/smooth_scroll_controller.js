import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  scrollTo(event) {
    event.preventDefault()

    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
}