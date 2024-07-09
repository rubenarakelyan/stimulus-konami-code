import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    callback: String,
  };

  initialize() {
    this.input = "";
    this.code = "38384040373937396665";
  }

  keydown(event) {
    this.input += "" + event.keyCode;
    if (this.input === this.code) {
      return window[this.callbackValue]();
    }
    if (!this.code.indexOf(this.input)) return;
    this.input = "" + event.keyCode;
  }
}
