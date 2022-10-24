import { linkLists } from './link-lists.js';

let countriesSelect = document.getElementById('country');
let provincesSelect = document.getElementById('province');
linkLists(countriesSelect, provincesSelect);

const submitBtn = document.getElementById("form");

function submitStudent (evt){
    evt.preventDefault()
    const formData = new FormData(document.getElementById("form"))
    console.log("here")
    axios.post(`http://localhost:8000/students/`,{
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      dateOfBirth: formData.get("dateOfBirth"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      city: formData.get("city"),
      province: formData.get("province"),
      country: formData.get("country"),
      postalCode: formData.get("postalCode"),
      departmentId: formData.get("departmentId")
    })
    for (const [key, value] of formData) {
        console.log(`${key}: ${value}\n`);
      }
  }
submitBtn.addEventListener('submit',submitStudent)