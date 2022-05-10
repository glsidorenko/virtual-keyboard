import keys from './keysLayout';

const lang = localStorage.getItem('lang') || 'eng';

function createLanguageTemplate(wrapper, language, keyObject) {
  const caseDown = document.createElement('span');
  caseDown.classList.add('caseDown');
  caseDown.textContent = keyObject[language].caseDown;

  const caseUp = document.createElement('span');
  caseUp.classList.add('caseUp', 'hidden');
  caseUp.textContent = keyObject[language].caseUp;

  const caps = document.createElement('span');
  caps.classList.add('caps', 'hidden');
  caps.textContent = keyObject[language].caps;

  const shiftCaps = document.createElement('span');
  shiftCaps.classList.add('shiftCaps', 'hidden');
  shiftCaps.textContent = keyObject[language].shiftCaps;

  wrapper.append(caseDown, caseUp, caps, shiftCaps);
}

function createKeyboard() {
  const container = document.createElement('div');
  const keyboardDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const textarea = document.createElement('textarea');
  let description = document.createElement('p');
  let language = document.createElement('p');
  container.classList.add('container');
  keyboardDiv.classList.add('keyboard');
  h1.classList.add('title');
  h1.textContent = 'Virtual Keyboard / Виртуальная клавиатура';
  textarea.classList.add('textarea');
  textarea.placeholder = 'You can write whatever you want!';
  description = document.createElement('p');
  description.classList.add('description');
  description.textContent = 'Клавиатура создана в операционной системе Windows';
  language = document.createElement('p');
  language.classList.add('language');
  language.textContent = 'Для переключения языка комбинация: Сtrl + Alt';
  document.body.prepend(container);
  container.append(h1, textarea, keyboardDiv, description, language);
  const line1 = document.createElement('div');
  const line2 = document.createElement('div');
  const line3 = document.createElement('div');
  const line4 = document.createElement('div');
  const line5 = document.createElement('div');

  const lineArr = [line1, line2, line3, line4, line5];

  lineArr.forEach((line) => {
    line.classList.add('keyboard_line');
    keyboardDiv.append(line);
  });

  Object.entries(keys).forEach(([key, value], i) => {
    const keyContainer = document.createElement('div');
    keyContainer.classList.add('key', `${key}`);

    const wrapperRu = document.createElement('span');
    wrapperRu.classList.add('rus');

    const wrapperEn = document.createElement('span');
    wrapperEn.classList.add('eng');

    if (lang === 'eng') {
      wrapperRu.classList.add('hidden');
    } else {
      wrapperEn.classList.add('hidden');
    }

    createLanguageTemplate(wrapperRu, 'ru', value);
    createLanguageTemplate(wrapperEn, 'en', value);

    if (i < 14) {
      line1.append(keyContainer);
    } else if (i >= 14 && i < 29) {
      line2.append(keyContainer);
    } else if (i >= 29 && i < 42) {
      line3.append(keyContainer);
    } else if (i >= 42 && i < 55) {
      line4.append(keyContainer);
    } else {
      line5.append(keyContainer);
    }

    keyContainer.append(wrapperRu, wrapperEn);
  });
}

createKeyboard();

const rus = Array.from(document.querySelectorAll('.rus'));
const eng = Array.from(document.querySelectorAll('.eng'));
const caseUpRu = document.querySelectorAll('.rus span.caseUp');
const caseDownRu = document.querySelectorAll('.rus span.caseDown');
const capsRu = document.querySelectorAll('.rus span.caps');
const caseUpEn = document.querySelectorAll('.eng span.caseUp');
const caseDownEn = document.querySelectorAll('.eng span.caseDown');
const capsEn = document.querySelectorAll('.eng span.caps');
const textarea = document.querySelector('.textarea');

let capsOn = false;

function changeTextArea(btn, btnText) {
  textarea.focus();

  let startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;

  if (btn === 'Backspace') {
    const front = (textarea.value).substring(0, startPos - 1);
    const back = (textarea.value).substring(endPos, textarea.value.length);

    textarea.value = front + back;
    startPos -= 1;
  } else if (btn === 'Delete') {
    const front = (textarea.value).substring(0, startPos);
    const back = (textarea.value).substring(endPos + 1, textarea.value.length);

    textarea.value = front + back;
  } else if (btn === 'Tab') {
    const front = (textarea.value).substring(0, startPos);
    const back = (textarea.value).substring(endPos, textarea.value.length);

    textarea.value = `${front}\t${back}`;
    startPos += 1;
  } else if (btn === 'Enter') {
    const front = (textarea.value).substring(0, startPos);
    const back = (textarea.value).substring(endPos, textarea.value.length);

    textarea.value = `${front}\n${back}`;
    startPos += 1;
  } else {
    const front = (textarea.value).substring(0, startPos);
    const back = (textarea.value).substring(endPos, textarea.value.length);

    textarea.value = front + btnText.textContent + back;
    startPos += 1;
  }

  textarea.selectionStart = startPos;
  textarea.selectionEnd = startPos;
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const keyName = event.code;

  // console.log(keyName);

  const button = document.querySelector(`.${keyName}`);

  if (button) {
    button.classList.add('active');
    const textButton = button.querySelector(`.${keyName} > 
    span:not(.hidden) > span:not(.hidden)`);
    // console.log(`Button pressed: ${textButton.textContent}`);
    if (keyName !== 'AltLeft' && keyName !== 'AltRight'
    && keyName !== 'ControlLeft' && keyName !== 'ControlRight'
    && keyName !== 'ShiftLeft' && keyName !== 'ShiftRight'
    && keyName !== 'Enter' && keyName !== 'MetaLeft'
    && keyName !== 'CapsLock' && keyName !== 'Tab'
    && keyName !== 'Backspace' && keyName !== 'Delete') {
      changeTextArea(keyName, textButton);
    }
    // console.log(`Input changed: ${textarea.value}`);
    if (keyName === 'Tab') {
      changeTextArea(keyName);
    }
    if (keyName === 'Backspace') {
      changeTextArea(keyName);
    }
    if (keyName === 'Enter') {
      changeTextArea(keyName);
    }

    if (keyName === 'Delete') {
      changeTextArea(keyName);
    }
    // Change keyboard language
    if (event.ctrlKey && event.altKey) {
      if (!eng.some((elem) => elem.classList.contains('hidden'))) {
        localStorage.setItem('lang', 'rus');
      } else {
        localStorage.setItem('lang', 'eng');
      }

      rus.forEach((elem) => {
        elem.classList.toggle('hidden');
      });

      eng.forEach((elem) => {
        elem.classList.toggle('hidden');
      });
    }

    if (keyName === 'CapsLock') {
      capsOn = !capsOn;
      if (capsOn) {
        if (!eng.some((elem) => elem.classList.contains('hidden'))) {
          caseDownEn.forEach((key) => {
            key.classList.add('hidden');
          });
          capsEn.forEach((key) => {
            key.classList.remove('hidden');
          });
        }
        if (!rus.some((elem) => elem.classList.contains('hidden'))) {
          caseDownRu.forEach((key) => {
            key.classList.add('hidden');
          });
          capsRu.forEach((key) => {
            key.classList.remove('hidden');
          });
        }
      } else {
        button.classList.remove('active');
        if (!eng.some((elem) => elem.classList.contains('hidden'))) {
          caseDownEn.forEach((key) => {
            key.classList.remove('hidden');
          });
          caseUpEn.forEach((key) => {
            key.classList.add('hidden');
          });
        }
        if (!rus.some((elem) => elem.classList.contains('hidden'))) {
          // console.log('rus');
          caseDownRu.forEach((key) => {
            key.classList.remove('hidden');
          });
          caseUpRu.forEach((key) => {
            key.classList.add('hidden');
          });
        }
      }
    }
    if (keyName === 'ShiftLeft' || keyName === 'ShiftRight') {
      if (!eng.some((elem) => elem.classList.contains('hidden'))) {
        caseDownEn.forEach((key) => {
          key.classList.add('hidden');
        });
        caseUpEn.forEach((key) => {
          key.classList.remove('hidden');
        });
      }

      if (!rus.some((elem) => elem.classList.contains('hidden'))) {
        caseDownRu.forEach((key) => {
          key.classList.add('hidden');
        });

        caseUpRu.forEach((key) => {
          key.classList.remove('hidden');
        });
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  const keyName = event.code;

  const button = document.querySelector(`.${keyName}`);

  if (button) {
    if (keyName !== 'CapsLock') {
      button.classList.remove('active');
    }

    if (keyName === 'ShiftLeft' || keyName === 'ShiftRight') {
      if (!eng.some((elem) => elem.classList.contains('hidden'))) {
        caseDownEn.forEach((key) => {
          key.classList.remove('hidden');
        });

        caseUpEn.forEach((key) => {
          key.classList.add('hidden');
        });
      }
      if (!rus.some((elem) => elem.classList.contains('hidden'))) {
        // console.log('rus');

        caseDownRu.forEach((key) => {
          key.classList.remove('hidden');
        });

        caseUpRu.forEach((key) => {
          key.classList.add('hidden');
        });
      }
    }
  }
});

document.addEventListener('mousedown', (event) => {
  const keyName = event.target;

  if (keyName.tagName !== 'TEXTAREA') {
    event.preventDefault();
  }

  if (keyName.tagName === 'SPAN') {
    // console.log(keyName);

    keyName.classList.add('active');

    const parent = keyName.closest('div');

    const parentClass = parent.classList[1];
    // console.log(parent);
    // console.log(parentClass);

    if (parentClass !== 'AltLeft'
        && parentClass !== 'AltRight'
        && parentClass !== 'ControlLeft'
        && parentClass !== 'ControlRight'
        && parentClass !== 'ShiftLeft'
        && parentClass !== 'ShiftRight'
        && parentClass !== 'Enter'
        && parentClass !== 'MetaLeft'
        && parentClass !== 'CapsLock'
        && parentClass !== 'Tab'
        && parentClass !== 'Backspace'
        && parentClass !== 'Delete') {
      changeTextArea(parent, parent.querySelector('span:not(.hidden) > span:not(.hidden'));
    }

    if (parentClass === 'Tab') {
      changeTextArea(parentClass);
    }

    if (parentClass === 'Backspace') {
      changeTextArea(parentClass);
    }

    if (parentClass === 'Enter') {
      changeTextArea(parentClass);
    }

    if (parentClass === 'Delete') {
      changeTextArea(parentClass);
    }

    if (parentClass === 'CapsLock') {
      capsOn = !capsOn;
      if (capsOn) {
        if (!eng.some((elem) => elem.classList.contains('hidden'))) {
          caseDownEn.forEach((key) => {
            key.classList.add('hidden');
          });

          capsEn.forEach((key) => {
            key.classList.remove('hidden');
          });
        }

        if (!rus.some((elem) => elem.classList.contains('hidden'))) {
          caseDownRu.forEach((key) => {
            key.classList.add('hidden');
          });

          capsRu.forEach((key) => {
            key.classList.remove('hidden');
          });
        }
      } else {
        parent.classList.remove('active');

        if (!eng.some((elem) => elem.classList.contains('hidden'))) {
          caseDownEn.forEach((key) => {
            key.classList.remove('hidden');
          });

          capsEn.forEach((key) => {
            key.classList.add('hidden');
          });
        }
        if (!rus.some((elem) => elem.classList.contains('hidden'))) {
          // console.log('rus');

          caseDownRu.forEach((key) => {
            key.classList.remove('hidden');
          });

          capsRu.forEach((key) => {
            key.classList.add('hidden');
          });
        }
      }
    }

    if (parentClass === 'ShiftLeft' || parentClass === 'ShiftRight') {
      if (!eng.some((elem) => elem.classList.contains('hidden'))) {
        caseDownEn.forEach((key) => {
          key.classList.add('hidden');
        });

        caseUpEn.forEach((key) => {
          key.classList.remove('hidden');
        });
      }
      if (!rus.some((elem) => elem.classList.contains('hidden'))) {
        // console.log('rus');
        caseDownRu.forEach((key) => {
          key.classList.add('hidden');
        });
        caseUpRu.forEach((key) => {
          key.classList.remove('hidden');
        });
      }
    }
  }
});

document.addEventListener('mouseup', (event) => {
  event.preventDefault();
  const keyName = event.target;

  if (keyName.tagName === 'SPAN' || keyName.classList.contains('key')) {
    // console.log(keyName);
    const parent = keyName.closest('div');
    const parentClass = parent.classList[1];
    // console.log(parent);
    // console.log(parentClass);
    if (parentClass !== 'CapsLock') {
      keyName.classList.remove('active');
    }
    if (parentClass === 'ShiftLeft' || parentClass === 'ShiftRight') {
      // console.log('отжал');
      if (!eng.some((elem) => elem.classList.contains('hidden'))) {
        caseDownEn.forEach((key) => {
          key.classList.remove('hidden');
        });
        caseUpEn.forEach((key) => {
          key.classList.add('hidden');
        });
      }
      if (!rus.some((elem) => elem.classList.contains('hidden'))) {
        // console.log('rus');
        caseUpEn.forEach((key) => {
          key.classList.remove('hidden');
        });
        caseUpEn.forEach((key) => {
          key.classList.add('hidden');
        });
      }
    }
  }
});
