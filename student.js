// let button = document.querySelector(".button");
let array = [];
let idCounter = 0;
const edit = document.getElementById("iconEdit");

function createDiv(id, title) {
  let div = `<div class="input_notes" id="${id}">
  <label class="reserv-radio">
    <input
      type="checkbox"
      name="new_notes"
      value=""
      class="reserv-radio-input"
    />
    <span class="radio_item">${title}</span>
  </label>
  <div class="icon">
    <div class="edit">
      <a href="#" id="iconEdit"><svg
        width="26"
        height="28"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="28"
          height="28"
          fill="white"
          fill-opacity="0.01"
        />
        <path
          d="M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6.89543 6 8 6L22 6"
          stroke="black"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z"
          fill="#2F88FF"
          stroke="black"
          stroke-width="4"
          stroke-linejoin="round"
        />
      </svg></a>
    </div>
    <div class="basket">
      <a href="#" id="iconBasket"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 64">
        <defs>
          <style>
            .cls-1 {
              fill: #ff2400;
            }
            .cls-2 {
              fill: #ba1d08;
            }
          </style>
        </defs>
        <title>Trash Can</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              class="cls-1"
              d="M42.48,64h-29a6,6,0,0,1-6-5.5L4,16H52L48.46,58.5A6,6,0,0,1,42.48,64Z"
            />
            <path
              class="cls-2"
              d="M52,8H38V6a6,6,0,0,0-6-6H24a6,6,0,0,0-6,6V8H4a4,4,0,0,0-4,4v4H56V12A4,4,0,0,0,52,8ZM22,6a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2V8H22Z"
            />
            <path
              class="cls-2"
              d="M28,58a2,2,0,0,1-2-2V24a2,2,0,0,1,4,0V56A2,2,0,0,1,28,58Z"
            />
            <path
              class="cls-2"
              d="M38,58h-.13A2,2,0,0,1,36,55.88l2-32a2,2,0,1,1,4,.25l-2,32A2,2,0,0,1,38,58Z"
            />
            <path
              class="cls-2"
              d="M18,58a2,2,0,0,1-2-1.87l-2-32a2,2,0,0,1,4-.25l2,32A2,2,0,0,1,18.13,58Z"
            />
          </g>
        </g>
      </svg></a>
    </div>
  </div>
  </div>`;
  return div;
}

function inputText() {
  const inputT = document.getElementById("idinput").value;
  let notes = document.querySelector(".notes");
  document.getElementById("notes_text").textContent = "";

  array.push({
    id: idCounter,
    title: inputT,
  });
  idCounter += 1;
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    createDiv(array[i].id, array[i].title);
  }
  notes.insertAdjacentHTML("afterbegin", createDiv(idCounter, inputT));
}

buttonId.onclick = inputText;
edit.onclick = function (event) {
  if (event.target.nodeName != "A") return;

  let href = event.target.getAttribute("href");
  console.log(href); // может быть подгрузка с сервера, генерация интерфейса и т.п.

  return false;
};
