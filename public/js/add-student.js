import { linkLists } from './link-lists.js';

let countriesSelect = document.getElementById('country');
let provincesSelect = document.getElementById('province');
linkLists(countriesSelect, provincesSelect);

const form = document.getElementById("form");
const submitBtn = document.getElementById("form");
// submitBtn.addEventListener("click",  (event) => {
//     event.preventDefault();
// });


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = new FormData(form);
    for (let entry of data) {
        console.log(`The ${entry[0]} field has the value ${entry[1]}.`, true);
    }

});

