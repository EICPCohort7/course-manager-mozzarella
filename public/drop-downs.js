
document.getElementById('state_selector').style.visibility = 'hidden';
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