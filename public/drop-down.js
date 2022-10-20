import { provinces } from './data/ca-provinces.js';
import { usStates } from './data/states.js';

let provinceDropdown = document.getElementById('province');
let stateDropdown = document.getElementById('state');
let countryDropdown = document.getElementById('country');
let countrySelection = document.getElementById('country').value;

provinceDropdown.style.visibility = 'visible';
stateDropdown.style.visibility = 'hidden';

countryDropdown.addEventListener('change', () => {
  if (countrySelection === 'ca') {
    for (let p of provinces) {
      provinceDropdown.style.visibility = 'visible';
      stateDropdown.style.visibility = 'hidden';
      provinceDropdown.insertAdjacentHTML('beforeend',
        `<option value="${p.abbr}">${p.name}</option>`);
    }
  } else if (countrySelection === 'us') {
    for (let s of usStates) {
      provinceDropdown.style.visibility = 'hidden';
      stateDropdown.style.visibility = 'visible';
      stateDropdown.insertAdjacentHTML('beforeend',
        `<option value="${s.abbreviation}">${s.name}</option>`);
    }
  } else {
    provinceDropdown.style.visibility = 'hidden';
    stateDropdown.style.visibility = 'hidden';
  }
});

/**
 * document.getElementById('state_selector').style.visibility = 'hidden';
document.getElementById('province_selector').style.visibility = 'visible';
let selector = document.getElementById('country');
selector.addEventListener("change", ()=>{
    let country = document.getElementById("country").value
    if (country === "Canada")
        {
            document.getElementById('state_selector').style.visibility = 'hidden';
            document.getElementById('province_selector').style.visibility = 'visible';
        }
    if(country === "US"){
        document.getElementById('state_selector').style.visibility = 'visible';
        document.getElementById('province_selector').style.visibility = 'hidden'
    }
    if(country === "UK"){
        document.getElementById('state_selector').style.visibility = 'hidden';
        document.getElementById('province_selector').style.visibility = 'hidden'
    }

});
 */
