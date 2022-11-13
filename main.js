const signUp =e=>
{
  let formData =
  {
    fname:document.getElementyByID('fname').value,
    fname:document.getElementyByID('lname').value,
    fname:document.getElementyByID('email').value,
    fname:document.getElementyByID('pwd').value,
  }
  localStorage.setItem('formData', JSON.stringify('formData'));
  console.log(localStorage.getItem('formData'));
  e.preventDefault();
}