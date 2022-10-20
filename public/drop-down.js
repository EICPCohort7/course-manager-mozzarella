import { provinces } from './data/ca-provinces.js';
import { usStates } from './data/states.js';

let stateProvinceDropdown = document.getElementById('province');
let countryDropdown = document.getElementById('country');
let countrySelection = document.getElementById('country').value;

countryDropdown.addEventListener('click', () => {
  if (countrySelection === 'ca') {
    for (let p of provinces) {
      stateProvinceDropdown.insertAdjacentHTML('beforeend',
        `<option value="${p.abbr}">${p.name}</option>`);
    }
  } else if (countrySelection === 'us') {
    for (let s of usStates) {
      stateProvinceDropdown.insertAdjacentHTML('beforeend',
        `<option value="${s.abbreviation}">${s.name}</option>`);
    }
  } else {
    stateProvinceDropdown.style.display = 'none';
  }
});
