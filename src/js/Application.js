import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    let emojisWrapper = document.querySelector("#emojis");
    emojisWrapper.innerHTML = "";
    this.emojis.forEach(element => {
      let paragraph = document.createElement('p');
      paragraph.textContent = element
      emojisWrapper.append(paragraph);
    });

  }

  addBananas() {
    let monkeysPlusBananas = this.emojis.map((monkey) => {
      return this.emojis = monkey + this.banana
    });
    this.setEmojis(monkeysPlusBananas)
  }
}
