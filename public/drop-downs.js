function removeOptions(selectElement) {
    let i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
 }
let selector = document.getElementById('country');
selector.addEventListener("change", ()=>{
    let country = document.getElementById("country").value
    if(country === "UK"){
        removeOptions(document.getElementById('province/state'));
        document.getElementById('provincestate_selector').style.visibility = 'hidden'
    }
    if(country== "US"){
        removeOptions(document.getElementById('province/state'));
        addOptions("US")
        document.getElementById('provincestate_selector').style.visibility = 'visible'
    }
    if(country== "Canada"){
        removeOptions(document.getElementById('province/state'));
        addOptions("Canada")
        document.getElementById('provincestate_selector').style.visibility = 'visible'
    }

});
function addOptions(country){
let select = document.getElementById("province/state");
let options = []
if (country === "Canada"){
    options = ["Ontario", "Quebec", "Manitoba", "Northwest Territories", "Nunavut", "Yukon",
        "British Columbia","Albeta","Saskatchewan","New Brunswick","Newfounland and Labrador","Prince Edward Island","Nova Scotia"];
}
else if (country == "US"){
    options = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", 
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"]
}

for(let i = 0; i < options.length; i++) {
    let opt = options[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
}