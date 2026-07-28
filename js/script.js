document.getElementById("student-info").textContent = "Student: Rocco Minetola — ID: 200647328";

/* Form Validation */
const form = document.getElementById("pizza-form");

const nameInput = document.getElementById("customer-name");
const quantityInput = document.getElementById("quantity");
const crustSelect = document.getElementById("crust");
const fulfillmentSelect = document.getElementById("fulfillment");

function setError(errId, message) {
  document.getElementById(errId).textContent = message;
}

function clearAllErrors() {
  document.querySelectorAll(".error-msg").forEach(span => (span.textContent = ""));
  document.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));
}

// Checks every field. Returns true only if the whole form is valid.
function validateForm() {
  clearAllErrors();
  let isValid = true;

  // Must input your name with a min of 2 characters
  if (nameInput.value.trim().length < 2) {
    setError("err-name", "Please enter your name (min 2 characters).");
    nameInput.classList.add("invalid");
    isValid = false;
  }

  // Must pick a size
  const sizeChecked = form.querySelector('input[name="size"]:checked');
  if (!sizeChecked) {
    setError("err-size", "Please choose a pizza size.");
    isValid = false;
  }

  // Must pick the crust type you want
  if (!crustSelect.value) {
    setError("err-crust", "Please choose a crust type.");
    crustSelect.classList.add("invalid");
    isValid = false;
  }

  // Caps toppings at 6 max
  const toppingsChecked = form.querySelectorAll('input[name="toppings"]:checked');
  if (toppingsChecked.length > 6) {
    setError("err-toppings", "Please select a maximum of 6 toppings.");
    isValid = false;
  }

  // Requires a number between 1-10
  const qty = Number(quantityInput.value);
  if (!quantityInput.value || qty < 1 || qty > 10 || !Number.isInteger(qty)) {
    setError("err-quantity", "Enter a whole number between 1 and 10.");
    quantityInput.classList.add("invalid");
    isValid = false;
  }

  // Must not be empty
  if (!fulfillmentSelect.value) {
    setError("err-fulfillment", "Please choose delivery or pickup.");
    fulfillmentSelect.classList.add("invalid");
    isValid = false;
  }

  return isValid;
}

// Run validation when the order button is clicked
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validateForm()) {
    return; 
  }

  console.log("Form is valid! Ready to capture values next.");
});