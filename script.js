import {keysMap} from './keysLayout.js';

class DOMHelper {
  static createElement(tag, classes) {
    const element = document.createElement(tag);
    element.classList.add(...classes);

    return element;
  }
}
const specialKeys = ['Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'MetaLeft', 'Delete', 'Enter', 'Backspace'];

class KeyboardKey extends DOMHelper {
  constructor(key, value) {
    super();
    this.key = key;
    this.value = value;
    this.currentKeyLanguage = localStorage.getItem('language') || 'eng';
    this.render();
    this.addEventListeners();
  }

  get shiftKeyLayout() {
    const keys = keysMap.get(this.currentKeyLanguage);
    return keys.extraKeys[this.key] || null;
  }

  get valueByKey() {
    const obj = keysMap.get(this.currentKeyLanguage).keys;
    return obj[this.key];
  }

  updateContent(value) {
    this.ref.textContent = value;
  }

  addEventListeners() {
    document.addEventListener('shiftOn', (e) => {
      if(!specialKeys.includes(this.key)) {
        const key = this.shiftKeyLayout;
        if (key !== null) {
          this.updateContent(key);
        } else {
          this.updateContent(this.valueByKey.toUpperCase());
        }
      }
    })

    document.addEventListener('shiftOff', (e) => {
        if(!specialKeys.includes(this.key)) {
          this.updateContent(this.valueByKey.toLowerCase());
        }
    })

    document.addEventListener('changeLanguage', (e) => {
      const { language } = e.detail;
      this.currentKeyLanguage = language;

      if(!specialKeys.includes(this.key)) {
          this.updateContent(this.valueByKey);
      }

      console.log(`язык в кнопке ${this.currentKeyLanguage}`);
    })
  }

  render() {
    this.ref = DOMHelper.createElement('div', ['key']);
  }
}

class KeyboardLine extends DOMHelper {
  constructor(tag, classes) {
    super();
    this.ref = DOMHelper.createElement(tag, classes);
  }
}

class Keyboard {
  buttons = [];
  specialKeys = ['CapsLock', 'MetaLeft', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight'];

  constructor() {
    this.language = localStorage.getItem('language') || 'eng';
    this.createKeyboard();
    this.textarea = document.querySelector('.textarea');
    this.eventListeners();
  }

  eventListeners() {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();

      const keyName = event.code;
      const newButton = this.buttons.find(key => key.key === keyName);
      const buttonDiv = newButton.ref;

      if (newButton) {
        if (!this.specialKeys.includes(keyName)) {
          this.changeTextArea(buttonDiv)
        }
        buttonDiv.classList.add('active');
      }

      if (event.shiftKey) {
        const shiftOn = new Event('shiftOn', {bubbles: true});
        document.dispatchEvent(shiftOn);
      }

      if (event.altKey && event.ctrlKey) {
        this.changeKeyboardLanguage();
        document.dispatchEvent(new CustomEvent("changeLanguage", {
          bubbles: true,
          detail: { language: this.language }
        }));
      }
    });

    document.addEventListener('keyup', (event) => {
      const keyName = event.code;

      const button = this.buttons.find(key => key.key === keyName);
      let buttonDiv = '';

      if (button) {
        buttonDiv = button.ref;
        buttonDiv.classList.remove('active');
      }

      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        const shiftOff = new Event('shiftOff', {bubbles: true});
        buttonDiv.dispatchEvent(shiftOff);
      }
    });

    document.addEventListener('changeLanguage', (event) => {
      console.log('Смена языка', event.detail.language);
    })
  }

  changeKeyboardLanguage() {
    if (this.language === 'eng') {
      this.language = 'rus';
      localStorage.setItem('language', 'rus')
    } else {
      this.language = 'eng';
      localStorage.setItem('language', 'eng')
    }
  }

  createKeyboard() {
    const container = DOMHelper.createElement('div', ['container']);
    const keyboardTitle = DOMHelper.createElement('h1', ['title']);
    const keyboardTextArea = DOMHelper.createElement('textArea', ['textarea']);
    const keyboardDescription = DOMHelper.createElement('p', ['description']);
    const changeLanguageDescription = DOMHelper.createElement('p', ['language']);

    keyboardTitle.textContent = 'Virtual Keyboard / Виртуальная клавиатура';
    keyboardTextArea.placeholder = 'You can write whatever you want!';
    keyboardDescription.textContent = 'Клавиатура создана в операционной системе Windows';
    changeLanguageDescription.textContent = 'Для переключения языка комбинация: Ctrl + Alt';

    const keyboardDiv = this.createLayout();

    container.append(keyboardTitle, keyboardTextArea, keyboardDiv, keyboardDescription, changeLanguageDescription);
    document.body.prepend(container);
  }

  createLayout() {
    const keyboardDiv = DOMHelper.createElement('div', ['keyboard']);

    const keyboardRow1 = new KeyboardLine('div', ['keyboard_line']).ref;
    const keyboardRow2 = new KeyboardLine('div', ['keyboard_line']).ref;
    const keyboardRow3 = new KeyboardLine('div', ['keyboard_line']).ref;
    const keyboardRow4 = new KeyboardLine('div', ['keyboard_line']).ref;
    const keyboardRow5 = new KeyboardLine('div', ['keyboard_line']).ref;

    let counter = 0;

    const keyboardKeys = keysMap.get(this.language).keys;

    for (const key in keyboardKeys) {
      const value = keyboardKeys[key];
      const newKey = new KeyboardKey(key, value);
      const keyContainer = newKey.ref;

      keyContainer.dataset.key = key;
      keyContainer.textContent = value;
      this.buttons.push(newKey);

      if (counter < 14) {
        keyboardRow1.append(keyContainer);
      } else if (counter >= 14 && counter < 29) {
        keyboardRow2.append(keyContainer);
      } else if (counter >= 29 && counter < 42) {
        keyboardRow3.append(keyContainer);
      } else if (counter >= 42 && counter < 55) {
        keyboardRow4.append(keyContainer);
      } else {
        keyboardRow5.append(keyContainer);
      }

      counter++;
    }

    keyboardDiv.append(keyboardRow1, keyboardRow2, keyboardRow3, keyboardRow4, keyboardRow5);
    return keyboardDiv;
  }

  changeTextArea(btn) {
    this.textarea.focus();

    let startPos = this.textarea.selectionStart;
    const endPos = this.textarea.selectionEnd;
    let {value} = this.textarea;

    const keyName = btn.dataset.key;

    switch (keyName) {
      case 'Backspace':
        value = value.substring(0, startPos - 1) + value.substring(endPos, value.length);
        startPos -= 1;
        break;
      case 'Delete':
        value = value.substring(0, startPos) + value.substring(endPos + 1, value.length);
        break;
      case 'Tab':
        value = `${value.substring(0, startPos)}\t${value.substring(endPos, value.length)}`;
        startPos += 1;
        break;
      case 'Enter':
        value = `${value.substring(0, startPos)}\n${value.substring(endPos, value.length)}`;
        startPos += 1;
        break;
      default: {
        const frontValue = value.substring(0, startPos);
        const backValue = value.substring(endPos, value.length);

        value = frontValue + btn.textContent + backValue;
        startPos += 1;
        break;
      }
    }

    this.textarea.value = value;
    this.textarea.selectionStart = startPos;
    this.textarea.selectionEnd = startPos;
  }
}

class App {
  static init() {
    new Keyboard();
  }
}

App.init();
