let lang = localStorage.getItem('lang') || 'eng';

function createKeyboard() {
  const keys = {
    Backquote: {
      en: {
        caseDown: '`',
        caseUp: '~',
        caps: '`',
        shiftCaps: '~'
      },
      ru: {
        caseDown: 'ё',
        caseUp: 'Ё',
        caps: 'Ё',
        shiftCaps: 'ё'
      }
    },
    Digit1: {
      en: {
        caseDown: '1',
        caseUp: '!',
        caps: '1',
        shiftCaps: '!'
      },
      ru: {
        caseDown: '1',
        caseUp: '!',
        caps: '1',
        shiftCaps: '!'
      }
    },
    Digit2: {
      en: {
        caseDown: '2',
        caseUp: '@',
        caps: '2',
        shiftCaps: '@'
      },
      ru: {
        caseDown: '2',
        caseUp: '""',
        caps: '2',
        shiftCaps: '""'
      }
    },
    Digit3: {
      en: {
        caseDown: '3',
        caseUp: '#',
        caps: '3',
        shiftCaps: '#'
      },
      ru: {
        caseDown: '3',
        caseUp: '№',
        caps: '3',
        shiftCaps: '№'
      }
    },
    Digit4: {
      en: {
        caseDown: '4',
        caseUp: '$',
        caps: '4',
        shiftCaps: '$'
      },
      ru: {
        caseDown: '4',
        caseUp: ';',
        caps: '4',
        shiftCaps: ';'
      }
    },
    Digit5: {
      en: {
        caseDown: '5',
        caseUp: '%',
        caps: '5',
        shiftCaps: '%'
      },
      ru: {
        caseDown: '5',
        caseUp: '%',
        caps: '5',
        shiftCaps: '%'
      }
    },
    Digit6: {
      en: {
        caseDown: '6',
        caseUp: '^',
        caps: '6',
        shiftCaps: '^'
      },
      ru: {
        caseDown: '6',
        caseUp: ':',
        caps: '6',
        shiftCaps: ':'
      }
    },
    Digit7: {
      en: {
        caseDown: '7',
        caseUp: '&',
        caps: '7',
        shiftCaps: '&'
      },
      ru: {
        caseDown: '7',
        caseUp: '?',
        caps: '7',
        shiftCaps: '?'
      }
    },
    Digit8: {
      en: {
        caseDown: '8',
        caseUp: '*',
        caps: '8',
        shiftCaps: '*'
      },
      ru: {
        caseDown: '8',
        caseUp: '*',
        caps: '8',
        shiftCaps: '*'
      }
    },
    Digit9: {
      en: {
        caseDown: '9',
        caseUp: '(',
        caps: '9',
        shiftCaps: '('
      },
      ru: {
        caseDown: '9',
        caseUp: '(',
        caps: '9',
        shiftCaps: '('
      }
    },
    Digit0: {
      en: {
        caseDown: '0',
        caseUp: ')',
        caps: '0',
        shiftCaps: ')'
      },
      ru: {
        caseDown: '0',
        caseUp: ')',
        caps: '0',
        shiftCaps: ')'
      }
    },
    Minus: {
      en: {
        caseDown: '-',
        caseUp: '_',
        caps: '-',
        shiftCaps: '_'
      },
      ru: {
        caseDown: '-',
        caseUp: '_',
        caps: '-',
        shiftCaps: '_'
      }
    },
    Equal: {
      en: {
        caseDown: '=',
        caseUp: '+',
        caps: '=',
        shiftCaps: '+'
      },
      ru: {
        caseDown: '=',
        caseUp: '+',
        caps: '=',
        shiftCaps: '+'
      }
    },
    Backspace: {
      en: {
        caseDown: 'Backspace',
        caseUp: 'Backspace',
        caps: 'Backspace',
        shiftCaps: 'Backspace'
      },
      ru: {
        caseDown: 'Backspace',
        caseUp: 'Backspace',
        caps: 'Backspace',
        shiftCaps: 'Backspace'
      }
    },
    Tab: {
      en: {
        caseDown: 'Tab',
        caseUp: 'Tab',
        caps: 'Tab',
        shiftCaps: 'Tab'
      },
      ru: {
        caseDown: 'Tab',
        caseUp: 'Tab',
        caps: 'Tab',
        shiftCaps: 'Tab'
      }
    },
    KeyQ: {
      en: {
        caseDown: 'q',
        caseUp: 'Q',
        caps: 'Q',
        shiftCaps: 'q'
      },
      ru: {
        caseDown: 'й',
        caseUp: 'Й',
        caps: 'Й',
        shiftCaps: 'й'
      }
    },
    KeyW: {
      en: {
        caseDown: 'w',
        caseUp: 'W',
        caps: 'W',
        shiftCaps: 'w'
      },
      ru: {
        caseDown: 'ц',
        caseUp: 'Ц',
        caps: 'Ц',
        shiftCaps: 'ц'
      }
    },
    KeyE: {
      en: {
        caseDown: 'e',
        caseUp: 'E',
        caps: 'E',
        shiftCaps: 'e'
      },
      ru: {
        caseDown: 'у',
        caseUp: 'У',
        caps: 'У',
        shiftCaps: 'у'
      }
    },
    KeyR: {
      en: {
        caseDown: 'r',
        caseUp: 'R',
        caps: 'R',
        shiftCaps: 'r'
      },
      ru: {
        caseDown: 'к',
        caseUp: 'К',
        caps: 'К',
        shiftCaps: 'к'
      }
    },
    KeyT: {
      en: {
        caseDown: 't',
        caseUp: 'T',
        caps: 'T',
        shiftCaps: 't'
      },
      ru: {
        caseDown: 'е',
        caseUp: 'Е',
        caps: 'Е',
        shiftCaps: 'е'
      }
    },
    KeyY: {
      en: {
        caseDown: 'y',
        caseUp: 'Y',
        caps: 'Y',
        shiftCaps: 'y'
      },
      ru: {
        caseDown: 'н',
        caseUp: 'Н',
        caps: 'Н',
        shiftCaps: 'н'
      }
    },
    KeyU: {
      en: {
        caseDown: 'u',
        caseUp: 'U',
        caps: 'U',
        shiftCaps: 'u'
      },
      ru: {
        caseDown: 'г',
        caseUp: 'Г',
        caps: 'Г',
        shiftCaps: 'г'
      }
    },
    KeyI: {
      en: {
        caseDown: 'i',
        caseUp: 'I',
        caps: 'I',
        shiftCaps: 'i'
      },
      ru: {
        caseDown: 'ш',
        caseUp: 'Ш',
        caps: 'Ш',
        shiftCaps: 'ш'
      }
    },
    KeyO: {
      en: {
        caseDown: 'o',
        caseUp: 'O',
        caps: 'O',
        shiftCaps: 'o'
      },
      ru: {
        caseDown: 'щ',
        caseUp: 'Щ',
        caps: 'Щ',
        shiftCaps: 'щ'
      }
    },
    KeyP: {
      en: {
        caseDown: 'p',
        caseUp: 'P',
        caps: 'P',
        shiftCaps: 'p'
      },
      ru: {
        caseDown: 'з',
        caseUp: 'З',
        caps: 'З',
        shiftCaps: 'з'
      }
    },
    BracketLeft: {
      en: {
        caseDown: '[',
        caseUp: '{',
        caps: '[',
        shiftCaps: '{'
      },
      ru: {
        caseDown: 'х',
        caseUp: 'Х',
        caps: 'Х',
        shiftCaps: 'х'
      }
    },
    BracketRight: {
      en: {
        caseDown: ']',
        caseUp: '}',
        caps: ']',
        shiftCaps: '}'
      },
      ru: {
        caseDown: 'ъ',
        caseUp: 'Ъ',
        caps: 'Ъ',
        shiftCaps: 'ъ'
      }
    },
    Backslash: {
      en: {
        caseDown: '\\',
        caseUp: '|',
        caps: '\\',
        shiftCas: '|'
      },
      ru: {
        caseDown: '\\',
        caseUp: '|',
        caps: '\\',
        shiftCas: '|'
      }
    },
    Delete: {
      en: {
        caseDown: 'Del',
        caseUp: 'Del',
        caps: 'Del',
        shiftCaps: 'Del'
      },
      ru: {
        caseDown: 'Del',
        caseUp: 'Del',
        caps: 'Del',
        shiftCaps: 'Del'
      }
    },
    CapsLock: {
      en: {
        caseDown: 'CapsLock',
        caseUp: 'CapsLock',
        caps: 'CapsLock',
        shiftCaps: 'CapsLock'
      },
      ru: {
        caseDown: 'CapsLock',
        caseUp: 'CapsLock',
        caps: 'CapsLock',
        shiftCaps: 'CapsLock'
      }
    },
    KeyA: {
      en: {
        caseDown: 'a',
        caseUp: 'A',
        caps: 'A',
        shiftCaps: 'a'
      },
      ru: {
        caseDown: 'ф',
        caseUp: 'Ф',
        caps: 'Ф',
        shiftCaps: 'ф'
      }
    },
    KeyS: {
      en: {
        caseDown: 's',
        caseUp: 'S',
        caps: 'S',
        shiftCaps: 's'
      },
      ru: {
        caseDown: 'ы',
        caseUp: 'Ы',
        caps: 'Ы',
        shiftCaps: 'ы'
      }
    },
    KeyD: {
      en: {
        caseDown: 'd',
        caseUp: 'D',
        caps: 'D',
        shiftCaps: 'd'
      },
      ru: {
        caseDown: 'в',
        caseUp: 'В',
        caps: 'В',
        shiftCaps: 'в'
      }
    },
    KeyF: {
      en: {
        caseDown: 'f',
        caseUp: 'F',
        caps: 'F',
        shiftCaps: 'f'
      },
      ru: {
        caseDown: 'а',
        caseUp: 'А',
        caps: 'А',
        shiftCaps: 'а'
      }
    },
    KeyG: {
      en: {
        caseDown: 'g',
        caseUp: 'G',
        caps: 'G',
        shiftCaps: 'g'
      },
      ru: {
        caseDown: 'п',
        caseUp: 'П',
        caps: 'П',
        shiftCaps: 'п'
      }
    },
    KeyH: {
      en: {
        caseDown: 'h',
        caseUp: 'H',
        caps: 'H',
        shiftCaps: 'h'
      },
      ru: {
        caseDown: 'р',
        caseUp: 'Р',
        caps: 'Р',
        shiftCaps: 'р'
      }
    },
    KeyJ: {
      en: {
        caseDown: 'j',
        caseUp: 'J',
        caps: 'J',
        shiftCaps: 'j'
      },
      ru: {
        caseDown: 'о',
        caseUp: 'О',
        caps: 'О',
        shiftCaps: 'о'
      }
    },
    KeyK: {
      en: {
        caseDown: 'k',
        caseUp: 'K',
        caps: 'K',
        shiftCaps: 'k'
      },
      ru: {
        caseDown: 'л',
        caseUp: 'Л',
        caps: 'Л',
        shiftCaps: 'л'
      }
    },
    KeyL: {
      en: {
        caseDown: 'l',
        caseUp: 'L',
        caps: 'L',
        shiftCaps: 'l'
      },
      ru: {
        caseDown: 'д',
        caseUp: 'Д',
        caps: 'Д',
        shiftCaps: 'д'
      }
    },
    Semicolon: {
      en: {
        caseDown: ';',
        caseUp: ':',
        caps: ';',
        shiftCaps: ':'
      },
      ru: {
        caseDown: 'ж',
        caseUp: 'Ж',
        caps: 'Ж',
        shiftCaps: 'ж'
      }
    },
    Quote: {
      en: {
        caseDown: "'",
        caseUp: '"',
        caps: "'",
        shiftCaps: '"'
      },
      ru: {
        caseDown: 'э',
        caseUp: 'Э',
        caps: 'Э',
        shiftCaps: 'э'
      }
    },
    Enter: {
      en: {
        caseDown: 'Enter',
        caseUp: 'Enter',
        caps: 'Enter',
        shiftCaps: 'Enter'
      },
      ru: {
        caseDown: 'Enter',
        caseUp: 'Enter',
        caps: 'Enter',
        shiftCaps: 'Enter'
      }
    },
    ShiftLeft: {
      en: {
        caseDown: 'Shift',
        caseUp: 'Shift',
        caps: 'Shift',
        shiftCaps: 'Shift'
      },
      ru: {
        caseDown: 'Shift',
        caseUp: 'Shift',
        caps: 'Shift',
        shiftCaps: 'Shift'
      }
    },
    KeyZ: {
      en: {
        caseDown: 'z',
        caseUp: 'Z',
        caps: 'Z',
        shiftCaps: 'z'
      },
      ru: {
        caseDown: 'я',
        caseUp: 'Я',
        caps: 'Я',
        shiftCaps: 'Я'
      }
    },
    KeyX: {
      en: {
        caseDown: 'x',
        caseUp: 'X',
        caps: 'X',
        shiftCaps: 'x'
      },
      ru: {
        caseDown: 'ч',
        caseUp: 'Ч',
        caps: 'Ч',
        shiftCaps: 'ч'
      }
    },
    KeyC: {
      en: {
        caseDown: 'c',
        caseUp: 'C',
        caps: 'C',
        shiftCaps: 'c'
      },
      ru: {
        caseDown: 'с',
        caseUp: 'С',
        caps: 'С',
        shiftCaps: 'с'
      }
    },
    KeyV: {
      en: {
        caseDown: 'v',
        caseUp: 'V',
        caps: 'V',
        shiftCaps: 'v'
      },
      ru: {
        caseDown: 'м',
        caseUp: 'М',
        caps: 'М',
        shiftCaps: 'м'
      }
    },
    KeyB: {
      en: {
        caseDown: 'b',
        caseUp: 'B',
        caps: 'B',
        shiftCaps: 'b'
      },
      ru: {
        caseDown: 'и',
        caseUp: 'И',
        caps: 'И',
        shiftCaps: 'и'
      }
    },
    KeyN: {
      en: {
        caseDown: 'n',
        caseUp: 'N',
        caps: 'N',
        shiftCaps: 'n'
      },
      ru: {
        caseDown: 'т',
        caseUp: 'Т',
        caps: 'Т',
        shiftCaps: 'т'
      }
    },
    KeyM: {
      en: {
        caseDown: 'm',
        caseUp: 'M',
        caps: 'M',
        shiftCaps: 'm'
      },
      ru: {
        caseDown: 'о',
        caseUp: 'О',
        caps: 'О',
        shiftCaps: 'о'
      }
    },
    Comma: {
      en: {
        caseDown: ',',
        caseUp: '<',
        caps: ',',
        shiftCaps: '<'
      },
      ru: {
        caseDown: 'б',
        caseUp: 'Б',
        caps: 'Б',
        shiftCaps: 'б'
      }
    },
    Period: {
      en: {
        caseDown: '.',
        caseUp: '>',
        caps: '.',
        shiftCaps: '>'
      },
      ru: {
        caseDown: 'ю',
        caseUp: 'Ю',
        caps: 'Ю',
        shiftCaps: 'ю'
      }
    },
    Slash: {
      en: {
        caseDown: '/',
        caseUp: '?',
        caps: '/',
        shiftCaps: '?'
      },
      ru: {
        caseDown: '.',
        caseUp: ',',
        caps: '.',
        shiftCaps: ','
      }
    },
    ArrowUp: {
      en: {
        caseDown: '▲',
        caseUp: '▲',
        caps: '▲',
        shiftCaps: '▲'
      },
      ru: {
        caseDown: '▲',
        caseUp: '▲',
        caps: '▲',
        shiftCaps: '▲'
      }
    },
    ShiftRight: {
      en: {
        caseDown: 'Shift',
        caseUp: 'Shift',
        caps: 'Shift',
        shiftCaps: 'Shift'
      },
      ru: {
        caseDown: 'Shift',
        caseUp: 'Shift',
        caps: 'Shift',
        shiftCaps: 'Shift'
      }
    },
    ControlLeft: {
      en: {
        caseDown: 'Ctrl',
        caseUp: 'Ctrl',
        caps: 'Ctrl',
        shiftCaps: 'Ctrl'
      },
      ru: {
        caseDown: 'Ctrl',
        caseUp: 'Ctrl',
        caps: 'Ctrl',
        shiftCaps: 'Ctrl'
      }
    },
    MetaLeft: {
      en: {
        caseDown: 'Win',
        caseUp: 'Win',
        caps: 'Win',
        shiftCaps: 'Win'
      },
      ru: {
        caseDown: 'Win',
        caseUp: 'Win',
        caps: 'Win',
        shiftCaps: 'Win'
      }
    },
    AltLeft: {
      en: {
        caseDown: 'Alt',
        caseUp: 'Alt',
        caps: 'Alt',
        shiftCaps: 'Alt'
      },
      ru: {
        caseDown: 'Alt',
        caseUp: 'Alt',
        caps: 'Alt',
        shiftCaps: 'Alt'
      }
    },
    Space: {
      en: {
        caseDown: ' ',
        caseUp: ' ',
        caps: ' ',
        shiftCaps: ' '
      },
      ru: {
        caseDown: ' ',
        caseUp: ' ',
        caps: ' ',
        shiftCaps: ' '
      }
    },
    AltRight: {
      en: {
        caseDown: 'Alt',
        caseUp: 'Alt',
        caps: 'Alt',
        shiftCaps: 'Alt'
      },
      ru: {
        caseDown: 'Alt',
        caseUp: 'Alt',
        caps: 'Alt',
        shiftCaps: 'Alt'
      }
    },
    ArrowLeft: {
      en: {
        caseDown: '◄',
        caseUp: '◄',
        caps: '◄',
        shiftCaps: '◄'
      },
      ru: {
        caseDown: '◄',
        caseUp: '◄',
        caps: '◄',
        shiftCaps: '◄'
      }
    },
    ArrowDown: {
      en: {
        caseDown: '▼',
        caseUp: '▼',
        caps: '▼',
        shiftCaps: '▼'
      },
      ru: {
        caseDown: '▼',
        caseUp: '▼',
        caps: '▼',
        shiftCaps: '▼'
      }
    },
    ArrowRight: {
      en: {
        caseDown: '►',
        caseUp: '►',
        caps: '►',
        shiftCaps: '►'
      },
      ru: {
        caseDown: '►',
        caseUp: '►',
        caps: '►',
        shiftCaps: '►'
      }
    },
    ControlRight: {
      en: {
        caseDown: 'Ctrl',
        caseUp: 'Ctrl',
        caps: 'Ctrl',
        shiftCaps: 'Ctrl'
      },
      ru: {
        caseDown: 'Ctrl',
        caseUp: 'Ctrl',
        caps: 'Ctrl',
        shiftCaps: 'Ctrl'
      }
    }
  };

  let container = document.createElement('div'),
      keyboardDiv = document.createElement('div'),
      h1 = document.createElement('h1'),
      textarea = document.createElement('textarea'),
      description = document.createElement('p'),
      language = document.createElement('p');
  
  container.classList.add('container');
  keyboardDiv.classList.add('keyboard');

  h1.classList.add('title');
  h1.textContent = 'Virtual Keyboard / Виртуальная клавиатура';
  textarea.classList.add('textarea');
  textarea.placeholder = "Remember, be nice!";

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
 
  lineArr.forEach(line => {
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

    lang === 'eng' ? wrapperRu.classList.add('hidden')
    : wrapperEn.classList.add('hidden');
    
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

const rus = Array.from(document.querySelectorAll('.rus')),
      eng = Array.from(document.querySelectorAll('.eng')),
      caseUpRu = document.querySelectorAll('.rus span.caseUp'),
      caseDownRu = document.querySelectorAll('.rus span.caseDown'),
      capsRu = document.querySelectorAll('.rus span.caps'),
      shiftCapsRu = document.querySelectorAll('.rus span.shiftCaps'),

      caseUpEn = document.querySelectorAll('eng span.caseUp'),
      caseDownEn = document.querySelectorAll('.eng span.caseDown'),
      capsEn = document.querySelectorAll('.eng span.caps'),
      shiftCapsEn = document.querySelectorAll('.eng span.shiftCaps'),

      textarea = document.querySelector('.textarea'),
      keyboard = document.querySelector('.keyboard');

      let capsOn = false;
      
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  let keyName = event.code;

  console.log(keyName);

  let button = document.querySelector(`.${keyName}`);

  if (button) {

  button.classList.add('active');

  // console.log(button);

  let textButton = button.querySelector(`.${keyName} > span:not(.hidden) > span:not(.hidden)`);
    
  console.log(`Button pressed: ${textButton.textContent}`);
  // console.log(textButton);

  if (keyName !== 'AltLeft' && keyName !== 'AltRight' && 
  keyName !== 'ControlLeft' && keyName !== 'ControlRight' &&
  keyName !== 'ShiftLeft' && keyName !== 'ShiftRight' &&
  keyName !== 'Enter' && keyName !== 'MetaLeft' && 
  keyName !== 'CapsLock' && keyName !== 'Tab' && 
  keyName !== 'Backspace' && keyName !== 'Delete') {
    changeTextArea(keyName, textButton);
  }

  console.log(`Input changed: ${textarea.value}`);

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

  //Change keyboard language
  if (event.ctrlKey && event.altKey) {
    if (!eng.some(elem => elem.classList.contains('hidden'))) {
      // console.log('смена языка');
      localStorage.setItem('lang', 'rus');
    } else {
      localStorage.setItem('lang', 'eng');
    }

    rus.forEach(elem => {
      elem.classList.toggle('hidden');
    });

    eng.forEach(elem => {
      elem.classList.toggle('hidden');
    });
  }

  if (keyName === 'CapsLock') {
    capsOn = !capsOn;
    if (capsOn) {
      if (!eng.some(elem => elem.classList.contains('hidden'))) {

        caseDownEn.forEach(key => {
          key.classList.add('hidden');
        });
  
        capsEn.forEach(key => {
          key.classList.remove('hidden');
        });
  
        // console.log('eng');
      } 
  
      if (!rus.some(elem => elem.classList.contains('hidden'))) {
        // console.log('rus');
        
        caseDownRu.forEach(key => {
          key.classList.add('hidden');
        });
  
        capsRu.forEach(key => {
          key.classList.remove('hidden');
        });
      }
    } else {
      button.classList.remove('active');

      if (!eng.some(elem => elem.classList.contains('hidden'))) {
        caseDownEn.forEach(key => {
          key.classList.remove('hidden');
        });
  
        caseUpEn.forEach(key => {
          key.classList.add('hidden');
        });
      } 
      if (!rus.some(elem => elem.classList.contains('hidden'))) {
        console.log('rus');
        
        caseDownRu.forEach(key => {
          key.classList.remove('hidden');
        });
  
        caseUpRu.forEach(key => {
          key.classList.add('hidden');
        });
      }
    }
  }
  
  if (keyName === 'ShiftLeft' || keyName === 'ShiftRight') {
  
    if (!eng.some(elem => elem.classList.contains('hidden'))) {

      caseDownEn.forEach(key => {
        key.classList.add('hidden');
      });

      capsEn.forEach(key => {
        key.classList.remove('hidden');
      });

      // console.log('eng');
    } 

    if (!rus.some(elem => elem.classList.contains('hidden'))) {
      // console.log('rus');
      
      caseDownRu.forEach(key => {
        key.classList.add('hidden');
      });

      capsRu.forEach(key => {
        key.classList.remove('hidden');
      });
    }
  }
}
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  let keyName = event.code;

  let button = document.querySelector(`.${keyName}`);

  if (button) {
    if (keyName !== 'CapsLock') {
      button.classList.remove('active');
    }
  
    if (keyName === 'ShiftLeft' || keyName === 'ShiftRight') {
    
      if (!eng.some(elem => elem.classList.contains('hidden'))) {
        caseDownEn.forEach(key => {
          key.classList.remove('hidden');
        });
  
        capsEn.forEach(key => {
          key.classList.add('hidden');
        });
      } 
      if (!rus.some(elem => elem.classList.contains('hidden'))) {
        console.log('rus');
        
        caseDownRu.forEach(key => {
          key.classList.remove('hidden');
        });
  
        capsRu.forEach(key => {
          key.classList.add('hidden');
        });
      }
    }
  }  
  // console.log(button);
});

document.addEventListener('mousedown', (event) => {
  let keyName = event.target;

  if (keyName.tagName !== 'TEXTAREA') {
    event.preventDefault();
  }

  if (keyName.tagName === 'SPAN') {
    console.log(keyName);

    keyName.classList.add('active');

    let parent = keyName.closest('div');

    let parentClass = parent.classList[1]
    console.log(parent);
    console.log(parentClass);

    if (parentClass !== 'AltLeft' && 
        parentClass !== 'AltRight' && 
        parentClass !== 'ControlLeft' && 
        parentClass !== 'ControlRight' &&
        parentClass !== 'ShiftLeft' &&
        parentClass !== 'ShiftRight' && 
        parentClass !== 'Enter' &&
        parentClass !== 'MetaLeft' &&
        parentClass !== 'CapsLock' &&
        parentClass !== 'Tab' &&
        parentClass !== 'Backspace' && 
        parentClass !== 'Delete') {
          changeTextArea(parent, parent.querySelector('span:not(.hidden) > span:not(.hidden'));
        } 

    if (parentClass == 'Tab') {
      changeTextArea(parentClass);
    }
  
    if (parentClass == 'Backspace') {
      changeTextArea(parentClass);
    }
  
    if (parentClass == 'Enter') {
      changeTextArea(parentClass);
    }
  
    if (parentClass === 'Delete') {
      changeTextArea(parentClass);
    }

    if (parentClass === 'CapsLock') {
      capsOn = !capsOn;
      if (capsOn) {
        if (!eng.some(elem => elem.classList.contains('hidden'))) {
  
          caseDownEn.forEach(key => {
            key.classList.add('hidden');
          });
    
          capsEn.forEach(key => {
            key.classList.remove('hidden');
          });
    
          // console.log('eng');
        } 
    
        if (!rus.some(elem => elem.classList.contains('hidden'))) {
          // console.log('rus');
          
          caseDownRu.forEach(key => {
            key.classList.add('hidden');
          });
    
          capsRu.forEach(key => {
            key.classList.remove('hidden');
          });
        }
      } else {
        parent.classList.remove('active');
  
        if (!eng.some(elem => elem.classList.contains('hidden'))) {
          caseDownEn.forEach(key => {
            key.classList.remove('hidden');
          });
    
          capsEn.forEach(key => {
            key.classList.add('hidden');
          });
        } 
        if (!rus.some(elem => elem.classList.contains('hidden'))) {
          console.log('rus');
          
          caseDownRu.forEach(key => {
            key.classList.remove('hidden');
          });
    
          capsRu.forEach(key => {
            key.classList.add('hidden');
          });
        }
      }
    }

    if (parentClass === 'ShiftLeft' || parentClass === 'ShiftRight') {

      if (!eng.some(elem => elem.classList.contains('hidden'))) {
        caseDownEn.forEach(key => {
          key.classList.remove('hidden');
        });
  
        capsEn.forEach(key => {
          key.classList.add('hidden');
        });
      } 
      if (!rus.some(elem => elem.classList.contains('hidden'))) {
        console.log('rus');
        
        caseDownRu.forEach(key => {
          key.classList.remove('hidden');
        });
  
        capsRu.forEach(key => {
          key.classList.add('hidden');
        });
      }
    }
  } 

});

document.addEventListener('mouseup', (event) => {
  event.preventDefault();

  let keyName = event.target;

  if (keyName.tagName === 'SPAN' || keyName.classList.contains('key')) {
    // console.log(keyName);
    keyName.classList.remove('active');
  }

  // if (keyName.classList[1] === 'ShiftLeft' || keyName.classList[1] === 'ShiftRight') {
    
  //   if (!eng.some(elem => elem.classList.contains('hidden'))) {
  //     caseDownEn.forEach(key => {
  //       key.classList.remove('hidden');
  //     });

  //     capsEn.forEach(key => {
  //       key.classList.add('hidden');
  //     });
  //   } 
  //   if (!rus.some(elem => elem.classList.contains('hidden'))) {
  //     console.log('rus');
      
  //     caseDownRu.forEach(key => {
  //       key.classList.remove('hidden');
  //     });

  //     capsRu.forEach(key => {
  //       key.classList.add('hidden');
  //     });
  //   }
  // }

});

function changeTextArea(btn, btnText) {
  textarea.focus();

  let startPos = textarea.selectionStart;
  let endPos = textarea.selectionEnd;

  if (btn === 'Backspace') {
    const front = (textarea.value).substring(0, startPos - 1);
    const back = (textarea.value).substring(endPos, textarea.value.length);

    textarea.value = front + back;
    startPos--;
  } else if (btn === 'Delete') {
    const front = (textarea.value).substring(0, startPos);
    const back = (textarea.value).substring(endPos + 1, textarea.value.length);

    textarea.value = front + back;
  } else if (btn === 'Tab') {
    const front = (textarea.value).substring(0, startPos);
    const back = (textarea.value).substring(endPos, textarea.value.length);

    textarea.value = front + '\t' + back;
    startPos++;
  } else if (btn === 'Enter') {
    const front = (textarea.value).substring(0, startPos);
    const back = (textarea.value).substring(endPos, textarea.value.length);

    textarea.value = front + '\n' + back;
    startPos++; 
  } else {
    const front = (textarea.value).substring(0, startPos);
    const back = (textarea.value).substring(endPos, textarea.value.length);

    textarea.value = front + btnText.textContent + back;
    startPos++;
  }

  // console.log(`Input changed: ${textarea.value}`);
  textarea.selectionStart = startPos;
  textarea.selectionEnd = startPos;
}

function createLanguageTemplate(wrapper, language, keyObject) {
  const caseDown = document.createElement('span');
  caseDown.classList.add('caseDown');
  caseDown.textContent = keyObject[language]['caseDown'];

  const caseUp = document.createElement('span');
  caseUp.classList.add('caseUp', 'hidden');
  caseUp.textContent = keyObject[language]['caseUp'];

  const caps = document.createElement('span');
  caps.classList.add('caps', 'hidden');
  caps.textContent = keyObject[language]['caps'];

  const shiftCaps = document.createElement('span');
  shiftCaps.classList.add('shiftCaps', 'hidden');
  shiftCaps.textContent = keyObject[language]['shiftCaps'];

  wrapper.append(caseDown, caseUp, caps, shiftCaps);
}
