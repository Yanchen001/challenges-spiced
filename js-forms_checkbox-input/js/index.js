console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError ();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // --v-- write your code here --v--
  const formElements = event.target.elements
  const isChecked = formElements.tos.checked
  if (isChecked){
    alert("Form submitted"); 
  } else {
    showTosError()
  }
  

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  
});
