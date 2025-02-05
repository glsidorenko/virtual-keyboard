// eslint-disable-next-line max-classes-per-file
import {keys} from './keysLayout.js';

class KeyboardKey {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  connectToDOM() {
    const button = document.querySelector(`[data-key=${this.key}]`);
    button.addEventListener('click', (e) => {
      console.log(this);
    })
  }
}

class Element {
  constructor(tag, classes) {
    this.tag = tag;
    this.classes = classes;
  }

  createElement() {
    const element = document.createElement(this.tag);
    element.classList.add(...this.classes);

    return element;
  }
}

class KeyboardLine extends Element {
  constructor(tag, classes) {
    super(tag, classes);
    this.line = this.createElement();
  }
}

class Keyboard {
  buttons = [];
  keys = keys;

  constructor() {
    this.createKeyboard();
    this.textarea = document.querySelector('.textarea');

    this.connectButtonsToDOM()
    this.eventListeners();
  }

  eventListeners() {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();

      const keyName = event.code;
      const button = document.querySelector(`[data-key="${keyName}"]`);

      if (button) {
        console.log(button);

        button.classList.add('active');
      }
    });

    document.addEventListener('keyup', (event) => {
      const keyName = event.code;
      const button = document.querySelector(`[data-key="${keyName}"]`);

      if (button) {
        button.classList.remove('active');
      }

    });
  }

  connectButtonsToDOM() {
    this.buttons.forEach(button => {
      console.log(button);
      button.connectToDOM();
    });
  }

  createKeyboard() {
    const container = new Element('div', ['container']).createElement();
    const keyboardTitle = new Element('h1', ['title']).createElement();
    const keyboardTextArea = new Element('textArea', ['textarea']).createElement();
    const keyboardDescription = new Element('p', ['description']).createElement();
    const changeLanguageDescription = new Element('p', ['language']).createElement();

    keyboardTitle.textContent = 'Virtual Keyboard / Виртуальная клавиатура';
    keyboardTextArea.placeholder = 'You can write whatever you want!';
    keyboardDescription.textContent = 'Клавиатура создана в операционной системе Windows';
    changeLanguageDescription.textContent = 'Для переключения языка комбинация: Ctrl + Alt';

    const keyboardDiv = this.createLayout();

    container.append(keyboardTitle, keyboardTextArea, keyboardDiv, keyboardDescription, changeLanguageDescription);
    document.body.prepend(container);
  }

  createLayout() {
    const keyboardDiv = new Element('div', ['keyboard']).createElement();

    const keyboardRow1 = new KeyboardLine('div', ['keyboard_line']).line;
    const keyboardRow2 = new KeyboardLine('div', ['keyboard_line']).line;
    const keyboardRow3 = new KeyboardLine('div', ['keyboard_line']).line;
    const keyboardRow4 = new KeyboardLine('div', ['keyboard_line']).line;
    const keyboardRow5 = new KeyboardLine('div', ['keyboard_line']).line;

    let counter = 0;

    this.keys.forEach(([value, key]) => {
      const keyContainer = new Element('div', ['key']).createElement();

      keyContainer.dataset.key = value;
      keyContainer.textContent = key;

      // const wrapperEn = createLanguageWrapper('en', key);
      // keyContainer.append(wrapperEn);
      const newKey = new KeyboardKey(value, key);
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
    })

    keyboardDiv.append(keyboardRow1, keyboardRow2, keyboardRow3, keyboardRow4, keyboardRow5);

    return keyboardDiv;
  }

  changeTextArea(btn, btnWrap) {
    this.textarea.focus();

    let startPos = this.textarea.selectionStart;
    const endPos = this.textarea.selectionEnd;
    let { value } = this.textarea;

    switch (btn) {
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

        value = frontValue + btnWrap.textContent + backValue;
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
    const keyboard = new Keyboard();
    console.log(keyboard.buttons);
  }
}

App.init();
