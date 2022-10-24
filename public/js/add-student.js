import { linkLists } from './link-lists.js';

let countriesSelect = document.getElementById('country');
let provincesSelect = document.getElementById('province');
let form = document.getElementById('demo-form');
linkLists(countriesSelect, provincesSelect);

const submitBtn = document.getElementById('demo-form').addEventListener('submit',(event)=>{

    event.preventDefault();
    let data = new FormData(form);

    for (let entry of data) {
        console.log(`The ${entry[0]} field has the value ${entry[1]}.`, true);
      }

});
