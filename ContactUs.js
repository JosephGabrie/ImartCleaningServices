const form = document.querySelector('form');
const mobileMenu = document.getElementById('mobile-menu');

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    const navbarMenu = document.querySelector('.navbar__menu');
    navbarMenu.classList.toggle('active');
});

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

  Email.send({
    SecureToken: "409086bd-fe05-4945-afc2-34b4105ef053",
    To: 'joshuagabrie@gmail.com',
    From: "joshuagstestemail@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if (message === "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent!",
          icon: "success"
        });
        form.reset(); // Reset the form after successful submission
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again later.",
          icon: "error"
        });
      }
      // mhgfhg
    }
  ).catch(error => {
    console.error("Error:", error);
    Swal.fire({
      title: "Error!",
      text: "An error occurred while sending the message. Please try again later.",
      icon: "error"
    });
  });
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (email.value.trim() === "") {
    email.classList.add("error");
    email.parentElement.classList.add("error");
    errorTxtEmail.innerText = "Email address can't be blank";
  } else if (!emailRegex.test(email.value.trim())) {
    email.classList.add("error");
    email.parentElement.classList.add("error");
    errorTxtEmail.innerText = "Enter a valid email address";
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
    errorTxtEmail.innerText = "";
  }
}

email.addEventListener("keyup", checkEmail);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmail(); // Check email validity
  checkInputs(); // Check inputs before sending email

  const isValid = Array.from(document.querySelectorAll(".item")).every(item => item.value.trim() !== "");
  if (isValid) {
    sendEmail();
  } else {
    Swal.fire({
      title: "Error!",
      text: "Please fill out all the required fields.",
      icon: "error"
    });
  }
});

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value.trim() === "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    } else {
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
    }
  }
}
