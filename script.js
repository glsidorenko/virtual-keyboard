// eslint-disable-next-line max-classes-per-file
import keys from './keysLayout.js';

// локал сторадж
let langState = localStorage.getItem('lang') || 'eng';

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

function createLanguageWrapper(language, keyObject) {
  const wrapper = new Element('span', [language]).createElement();

  const caseDown = new Element('span', ['caseDown']).createElement();
  caseDown.textContent = keyObject[language].caseDown;
  const caseUp = new Element('span', ['caseUp', 'hidden']).createElement();
  caseUp.textContent = keyObject[language].caseUp;
  const caps = new Element('span', ['caps', 'hidden']).createElement();
  caps.textContent = keyObject[language].caps;
  const shiftCaps = new Element('span', ['shiftCaps', 'hidden']).createElement();
  shiftCaps.textContent = keyObject[language].shiftCaps;

  wrapper.append(caseDown, caseUp, caps, shiftCaps);
  return wrapper;
}

function createLayout() {
  const keyboardDiv = new Element('div', ['keyboard']).createElement();

  const keyboardRow1 = new KeyboardLine('div', ['keyboard_line']).line;
  const keyboardRow2 = new KeyboardLine('div', ['keyboard_line']).line;
  const keyboardRow3 = new KeyboardLine('div', ['keyboard_line']).line;
  const keyboardRow4 = new KeyboardLine('div', ['keyboard_line']).line;
  const keyboardRow5 = new KeyboardLine('div', ['keyboard_line']).line;

  Object.entries(keys)
    .forEach(([key, value], i) => {
      const keyContainer = new Element('div', ['key', `${key}`]).createElement();
      const wrapperRu = createLanguageWrapper('ru', value);
      const wrapperEn = createLanguageWrapper('en', value);

      keyContainer.append(wrapperRu, wrapperEn);
      if (langState === 'eng') {
        wrapperRu.classList.add('hidden');
      } else {
        wrapperEn.classList.add('hidden');
      }

      if (i < 14) {
        keyboardRow1.append(keyContainer);
      } else if (i >= 14 && i < 29) {
        keyboardRow2.append(keyContainer);
      } else if (i >= 29 && i < 42) {
        keyboardRow3.append(keyContainer);
      } else if (i >= 42 && i < 55) {
        keyboardRow4.append(keyContainer);
      } else {
        keyboardRow5.append(keyContainer);
      }
    });

  keyboardDiv.append(keyboardRow1, keyboardRow2, keyboardRow3, keyboardRow4, keyboardRow5);

  return keyboardDiv;
}

function createKeyboard() {
  const container = new Element('div', ['container']).createElement();
  const keyboardTitle = new Element('h1', ['title']).createElement();
  const keyboardTextArea = new Element('textArea', ['textarea']).createElement();
  const keyboardDescription = new Element('p', ['description']).createElement();
  const changeLanguageDescription = new Element('p', ['language']).createElement();

  keyboardTitle.textContent = 'Virtual Keyboard / Виртуальная клавиатура';
  keyboardTextArea.placeholder = 'You can write whatever you want!';
  keyboardDescription.textContent = 'Клавиатура создана в операционной системе Windows';
  changeLanguageDescription.textContent = 'Для переключения языка комбинация: Ctrl + Alt';

  const keyboardDiv = createLayout();
  // eslint-disable-next-line max-len
  container.append(keyboardTitle, keyboardTextArea, keyboardDiv, keyboardDescription, changeLanguageDescription);
  document.body.prepend(container);
}

createKeyboard();

const rusButtons = document.querySelectorAll('.ru');
const engButtons = document.querySelectorAll('.en');
let capsOn = false;
let pressedKey = null;
const rusKeysArray = Array.from(rusButtons);
const engKeysArray = Array.from(engButtons);

const caseUpRu = document.querySelectorAll('.ru span.caseUp');
const caseDownRu = document.querySelectorAll('.ru span.caseDown');
const caseUpEn = document.querySelectorAll('.en span.caseUp');
const caseDownEn = document.querySelectorAll('.en span.caseDown');
const capsRu = document.querySelectorAll('.ru span.caps');
const capsEn = document.querySelectorAll('.en span.caps');

const textarea = document.querySelector('.textarea');

function changeTextArea(btn, btnWrap) {
  textarea.focus();

  let startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;
  let { value } = textarea;

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

  textarea.value = value;
  textarea.selectionStart = startPos;
  textarea.selectionEnd = startPos;
}

function changeVisibilityLayout(lang, layout1, layout2) {
  if (!lang.some((elem) => elem.classList.contains('hidden'))) {
    layout1.forEach((key) => {
      key.classList.add('hidden');
    });
    layout2.forEach((key) => {
      key.classList.remove('hidden');
    });
  }
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();

  const keyName = event.code;
  const button = document.querySelector(`.${keyName}`);

  if (button) {
    button.classList.add('active');

    const btnWrap = button.querySelector(`.${keyName} > span:not(.hidden) > span:not(.hidden)`);

    if (keyName !== 'AltLeft' && keyName !== 'AltRight' && keyName !== 'ControlLeft' && keyName !== 'ControlRight' && keyName !== 'ShiftLeft' && keyName !== 'ShiftRight' && keyName !== 'MetaLeft' && keyName !== 'CapsLock') {
      changeTextArea(keyName, btnWrap);
    }

    if (event.ctrlKey && event.altKey) {
      if (!engKeysArray.some((elem) => elem.classList.contains('hidden'))) {
        localStorage.setItem('lang', 'rus');
      } else {
        localStorage.setItem('lang', 'eng');
      }

      langState = localStorage.getItem('lang');

      rusKeysArray.forEach((elem) => {
        elem.classList.toggle('hidden');
      });
      engKeysArray.forEach((elem) => {
        elem.classList.toggle('hidden');
      });

      if (capsOn) {
        langState === 'rus' ? changeVisibilityLayout(rusKeysArray, caseDownRu, capsRu) : changeVisibilityLayout(engKeysArray, caseDownEn, capsEn);
      } else {
        langState === 'rus' ? changeVisibilityLayout(rusKeysArray, capsRu, caseDownRu) : changeVisibilityLayout(engKeysArray, capsEn, caseDownEn);
      }
    }

    if (keyName === 'CapsLock') {
      capsOn = !capsOn;
      if (capsOn) {
        changeVisibilityLayout(engKeysArray, caseDownEn, capsEn);
        changeVisibilityLayout(rusKeysArray, caseDownRu, capsRu);
      } else {
        button.classList.remove('active');
        changeVisibilityLayout(engKeysArray, caseUpEn, caseDownEn);
        changeVisibilityLayout(rusKeysArray, caseUpRu, caseDownRu);
      }
    }

    if (keyName === 'ShiftLeft' || keyName === 'ShiftRight') {
      changeVisibilityLayout(engKeysArray, caseDownEn, caseUpEn);
      changeVisibilityLayout(rusKeysArray, caseDownRu, caseUpRu);
    }
  }
});

document.addEventListener('keyup', (event) => {
  const keyName = event.code;
  const button = document.querySelector(`.${keyName}`);

  if (button) {
    if (keyName !== 'CapsLock') {
      button.classList.remove('active');
    }

    if (keyName === 'ShiftLeft' || keyName === 'ShiftRight') {
      changeVisibilityLayout(engKeysArray, caseUpEn, caseDownEn);
      changeVisibilityLayout(rusKeysArray, caseUpRu, caseDownRu);
    }
  }
});

document.addEventListener('mousedown', (event) => {
  const { target } = event;

  if (target.tagName !== 'TEXTAREA') {
    event.preventDefault();
  }
  if (target.tagName === 'SPAN') {
    const keyDiv = target.closest('div');
    pressedKey = keyDiv;
    keyDiv.classList.add('active');
    const keyName = keyDiv.classList[1];
    const keyContent = keyDiv.querySelector('span:not(.hidden) > span:not(.hidden)');

    if (keyName !== 'AltLeft' && keyName !== 'AltRight' && keyName !== 'ControlLeft' && keyName !== 'ControlRight' && keyName !== 'ShiftLeft' && keyName !== 'ShiftRight' && keyName !== 'MetaLeft' && keyName !== 'CapsLock') {
      changeTextArea(keyName, keyContent);
    }

    if (keyName === 'CapsLock') {
      capsOn = !capsOn;
      if (capsOn) {
        changeVisibilityLayout(engKeysArray, caseDownEn, capsEn);
        changeVisibilityLayout(rusKeysArray, caseDownRu, capsRu);
      } else {
        keyDiv.classList.remove('active');
        changeVisibilityLayout(engKeysArray, caseUpEn, caseDownEn);
        changeVisibilityLayout(rusKeysArray, caseUpRu, caseDownRu);
      }
    }

    if (keyName === 'ShiftLeft' || keyName === 'ShiftRight') {
      changeVisibilityLayout(engKeysArray, caseDownEn, caseUpEn);
      changeVisibilityLayout(rusKeysArray, caseDownRu, caseUpRu);
    }
  } else {
    pressedKey = null;
  }
});

document.addEventListener('mouseup', (event) => {
  event.preventDefault();

  if (!pressedKey) {
    return;
  }

  const keyName = pressedKey.classList[1];

  if (keyName !== 'CapsLock') {
    pressedKey.classList.remove('active');
  }

  if (keyName === 'ShiftLeft' || keyName === 'ShiftRight') {
    changeVisibilityLayout(engKeysArray, caseUpEn, caseDownEn);
    changeVisibilityLayout(rusKeysArray, caseUpRu, caseDownRu);
  }
});

// при потере фокуса фиксит баг с активностью кнопок
window.addEventListener('blur', () => {
  const activeButtons = document.querySelectorAll('.active');
  activeButtons.forEach((btn) => {
    if (!btn.classList.contains('CapsLock')) {
      btn.classList.remove('active');
    }
  });
});
