function submitForm(form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = new FormData(form);

    for (let entry of data) {
      console.log(`${entry[0]}: ${entry[1]}`);
    }
  });
}

export { submitForm };
