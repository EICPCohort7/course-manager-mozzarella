import { linkLists } from './link-lists.js';
import { submitForm } from './submit-form.js';

let countriesSelect = document.getElementById('country');
let provincesSelect = document.getElementById('province');
linkLists(countriesSelect, provincesSelect);

const form = document.getElementById('page-form');
submitForm(form);
