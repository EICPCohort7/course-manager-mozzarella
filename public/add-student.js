document.getElementById("addBttn").onclick = function (evt){
    evt.preventDefault()
    //formData get function uses name not id
    const formData = new FormData(document.querySelector("form"))
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

  }