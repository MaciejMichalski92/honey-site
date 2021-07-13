// form verification
const fullNameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const descriptionInput = document.querySelector("#description");
const errorMessages = document.querySelectorAll(".error-message");
const errorMessagesName = document.querySelector(".error-message.name");
const errorMessagesEmail = document.querySelector(".error-message.email");
const errorMessagesDescription = document.querySelector(
	".error-message.description"
);
const buttonSubmit = document.querySelector(".contact-form button");

const checkInputs = (fullNameInput, emailInput, descriptionInput) => {
	let flagName = true;
	let flagEmail = true;
	let flagDescription = true;
	let flag = false;
	errorMessages.forEach(message => {
		message.style.display = "none";
	});

	if (fullNameInput.value == "") {
		errorMessagesName.style.display = "block";
		flagName = false;
	}
	if (emailInput.value == "") {
		errorMessagesEmail.style.display = "block";
		flagEmail = false;
	}
	if (descriptionInput.value == "") {
		errorMessagesDescription.style.display = "block";
		flagDescription = false;
	}
	if (flagName && flagEmail && flagDescription) flag = true;

	return flag;
};

const url = "someURLdotcom"
const sendingData = async (fullNameInput, emailInput, descriptionInput) => {
	const data = {
		fullName = fullNameInput.value,
		email = emailInput.value,
		description = descriptionInput.value,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
  
};

const cleanInputs = () => {
	fullNameInput.value = "";
	emailInput.value = "";
	descriptionInput.value = "";
};

const formHandle = async e => {
	e.preventDefault();

	if (checkInputs(fullNameInput, emailInput, descriptionInput)) {
		await sendingData(fullNameInput, emailInput, descriptionInput);
		cleanInputs();
	} else alert("Błąd, wprowadź dane jeszcze raz");
};

buttonSubmit.addEventListener("click", formHandle);
