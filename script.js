import keys from "./keysLayout.js";

// локал сторадж
let langState = localStorage.getItem("lang") || "eng";

function createLanguageTemplate(wrapper, language, keyObject) {
  const caseDown = document.createElement("span");
  caseDown.classList.add("caseDown");
  caseDown.textContent = keyObject[language].caseDown;

  const caseUp = document.createElement("span");
  caseUp.classList.add("caseUp", "hidden");
  caseUp.textContent = keyObject[language].caseUp;

  const caps = document.createElement("span");
  caps.classList.add("caps", "hidden");
  caps.textContent = keyObject[language].caps;

  const shiftCaps = document.createElement("span");
  shiftCaps.classList.add("shiftCaps", "hidden");
  shiftCaps.textContent = keyObject[language].shiftCaps;

  wrapper.append(caseDown, caseUp, caps, shiftCaps);
}

function createKeyboard() {
  const container = document.createElement("div");
  const keyboardDiv = document.createElement("div");
  const title = document.createElement("h1");
  const textarea = document.createElement("textarea");
  const description = document.createElement("p");
  const changeLang = document.createElement("p");

  container.classList.add("container");
  keyboardDiv.classList.add("keyboard");

  title.classList.add("title");
  title.textContent = "Virtual Keyboard / Виртуальная клавиатура";

  textarea.classList.add("textarea");
  textarea.placeholder = "You can write whatever you want!";

  description.classList.add("description");
  description.textContent = "Клавиатура создана в операционной системе Windows";

  changeLang.classList.add("language");
  changeLang.textContent = "Для переключения языка комбинация: Сtrl + Alt";

  document.body.prepend(container);
  container.append(title, textarea, keyboardDiv, description, changeLang);

  const keyboardRow1 = document.createElement("div");
  const keyboardRow2 = document.createElement("div");
  const keyboardRow3 = document.createElement("div");
  const keyboardRow4 = document.createElement("div");
  const keyboardRow5 = document.createElement("div");

  const rowArr = [
    keyboardRow1,
    keyboardRow2,
    keyboardRow3,
    keyboardRow4,
    keyboardRow5,
  ];

  rowArr.forEach((row) => {
    row.classList.add("keyboard_line");
    keyboardDiv.append(row);
  });

  Object.entries(keys).forEach(([key, value], i) => {
    const keyContainer = document.createElement("div");
    keyContainer.classList.add("key", `${key}`);

    const wrapperRu = document.createElement("span");
    const wrapperEn = document.createElement("span");
    wrapperRu.classList.add("rus");
    wrapperEn.classList.add("eng");

    langState === "eng"
      ? wrapperRu.classList.add("hidden")
      : wrapperEn.classList.add("hidden");

    createLanguageTemplate(wrapperRu, "ru", value);
    createLanguageTemplate(wrapperEn, "en", value);

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

    keyContainer.append(wrapperRu, wrapperEn);
  });
}

createKeyboard();

const rus = Array.from(document.querySelectorAll(".rus"));
const eng = Array.from(document.querySelectorAll(".eng"));

// nodelist
const caseUpRu = document.querySelectorAll(".rus span.caseUp");
const caseDownRu = document.querySelectorAll(".rus span.caseDown");
const caseUpEn = document.querySelectorAll(".eng span.caseUp");
const caseDownEn = document.querySelectorAll(".eng span.caseDown");
const capsRu = document.querySelectorAll(".rus span.caps");
const capsEn = document.querySelectorAll(".eng span.caps");
const textarea = document.querySelector(".textarea");

let capsOn = false;
let currentKey = "";

function changeTextArea(btn, btnWrap) {
  textarea.focus();

  let startPos = textarea.selectionStart;
  let endPos = textarea.selectionEnd;
  let value = textarea.value;

  switch (btn) {
    case "Backspace":
      value =
        textarea.value.substring(0, startPos - 1) +
        textarea.value.substring(endPos, textarea.value.length);
      startPos -= 1;
      break;
    case "Delete":
      value =
        textarea.value.substring(0, startPos) +
        textarea.value.substring(endPos + 1, textarea.value.length);
      break;
    case "Tab":
      value = `${textarea.value.substring(
        0,
        startPos
      )}\t${textarea.value.substring(endPos, textarea.value.length)}`;
      startPos += 1;
      break;
    case "Enter":
      value = `${textarea.value.substring(
        0,
        startPos
      )}\n${textarea.value.substring(endPos, textarea.value.length)}`;
      startPos += 1;
      break;
    default:
      const frontValue = textarea.value.substring(0, startPos);
      const backValue = textarea.value.substring(endPos, textarea.value.length);

      value = frontValue + btnWrap.textContent + backValue;
      startPos += 1;
      break;
  }

  textarea.value = value;
  textarea.selectionStart = startPos;
  textarea.selectionEnd = startPos;
}

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  const keyName = event.code;
  const button = document.querySelector(`.${keyName}`);

  if (button) {
    button.classList.add("active");

    const btnWrap = button.querySelector(`.${keyName} > 
    span:not(.hidden) > span:not(.hidden)`);

    if (
      keyName !== "AltLeft" &&
      keyName !== "AltRight" &&
      keyName !== "ControlLeft" &&
      keyName !== "ControlRight" &&
      keyName !== "ShiftLeft" &&
      keyName !== "ShiftRight" &&
      keyName !== "MetaLeft" &&
      keyName !== "CapsLock"
    ) {
      changeTextArea(keyName, btnWrap);
    }

    if (event.ctrlKey && event.altKey) {
      if (!eng.some((elem) => elem.classList.contains("hidden"))) {
        localStorage.setItem("lang", "rus");
      } else {
        localStorage.setItem("lang", "eng");
      }

      langState = localStorage.getItem("lang");

      rus.forEach((elem) => {
        elem.classList.toggle("hidden");
      });
      eng.forEach((elem) => {
        elem.classList.toggle("hidden");
      });

      if (capsOn) {
        langState === "rus"
          ? changeVisibilityLayout(rus, caseDownRu, capsRu)
          : changeVisibilityLayout(eng, caseDownEn, capsEn);
      } else {
        langState === "rus"
          ? changeVisibilityLayout(rus, capsRu, caseDownRu)
          : changeVisibilityLayout(eng, capsEn, caseDownEn);
      }
    }

    if (keyName === "CapsLock") {
      capsOn = !capsOn;
      if (capsOn) {
        changeVisibilityLayout(eng, caseDownEn, capsEn);
        changeVisibilityLayout(rus, caseDownRu, capsRu);
      } else {
        button.classList.remove("active");
        changeVisibilityLayout(eng, caseUpEn, caseDownEn);
        changeVisibilityLayout(rus, caseUpRu, caseDownRu);
      }
    }

    if (keyName === "ShiftLeft" || keyName === "ShiftRight") {
      changeVisibilityLayout(eng, caseDownEn, caseUpEn);
      changeVisibilityLayout(rus, caseDownRu, caseUpRu);
    }
  }
});

document.addEventListener("keyup", (event) => {
  const keyName = event.code;
  const button = document.querySelector(`.${keyName}`);

  if (button) {
    if (keyName !== "CapsLock") {
      button.classList.remove("active");
    }

    if (keyName === "ShiftLeft" || keyName === "ShiftRight") {
      changeVisibilityLayout(eng, caseUpEn, caseDownEn);
      changeVisibilityLayout(rus, caseUpRu, caseDownRu);
    }
  }
});

document.addEventListener("mousedown", (event) => {
  const keyName = event.target;

  if (keyName.tagName !== "TEXTAREA") {
    event.preventDefault();
  }

  if (keyName.tagName === "SPAN") {
    const parent = keyName.closest("div");
    currentKey = parent;
    currentKey.classList.add("active");
    const keyNameClass = currentKey.classList[1];

    if (
      keyNameClass !== "AltLeft" &&
      keyNameClass !== "AltRight" &&
      keyNameClass !== "ControlLeft" &&
      keyNameClass !== "ControlRight" &&
      keyNameClass !== "ShiftLeft" &&
      keyNameClass !== "ShiftRight" &&
      keyNameClass !== "MetaLeft" &&
      keyNameClass !== "CapsLock"
    ) {
      changeTextArea(
        keyNameClass,
        parent.querySelector("span:not(.hidden) > span:not(.hidden")
      );
    }

    if (keyNameClass === "CapsLock") {
      capsOn = !capsOn;
      if (capsOn) {
        changeVisibilityLayout(eng, caseDownEn, capsEn);
        changeVisibilityLayout(rus, caseDownRu, capsRu);
      } else {
        parent.classList.remove("active");
        changeVisibilityLayout(eng, caseUpEn, caseDownEn);
        changeVisibilityLayout(rus, caseUpRu, caseDownRu);
      }
    }

    if (keyNameClass === "ShiftLeft" || keyNameClass === "ShiftRight") {
      changeVisibilityLayout(eng, caseDownEn, caseUpEn);
      changeVisibilityLayout(rus, caseDownRu, caseUpRu);
    }
  }
});

document.addEventListener("mouseup", (event) => {
  event.preventDefault();
  const keyNameClass = currentKey.classList[1];

  if (keyNameClass !== "CapsLock") {
    currentKey.classList.remove("active");
  }

  if (keyNameClass === "ShiftLeft" || keyNameClass === "ShiftRight") {
    changeVisibilityLayout(eng, caseUpEn, caseDownEn);
    changeVisibilityLayout(rus, caseUpRu, caseDownRu);
  }
});

// при потере фокуса фиксит баг с активностью кнопок
window.addEventListener("blur", () => {
  const activeBtns = document.querySelectorAll(".active");
  activeBtns.forEach((btn) => {
    if (!btn.classList.contains("CapsLock")) {
      btn.classList.remove("active");
    }
  });
});

function changeVisibilityLayout(lang, layout1, layout2) {
  if (!lang.some((elem) => elem.classList.contains("hidden"))) {
    layout1.forEach((key) => {
      key.classList.add("hidden");
    });
    layout2.forEach((key) => {
      key.classList.remove("hidden");
    });
  }
}
