import { usStates } from './data/states.js';
import { provinces } from './data/provinces.js';

let statesMenu = document.getElementById('state');
let provincesMenu = document.getElementById('province');

for (let state of usStates) {
    statesMenu.insertAdjacentHTML(
      'beforeend',
      `<option value="${state.abbreviation}">"${state.name}"</option>`
    );
  }

  for (let province of provinces) {
    provincesMenu.insertAdjacentHTML(
      'beforeend',
      `<option value="${province.abbr}">"${province.name}"</option>`
    );
  }