// Form Modal Logic

const openModalBtn = document.querySelector(".contact_btn");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".quit_modal");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
  modal.style.display = "block";
  document.body.classList.add("modal_open");
}

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal_open");
}

function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

// Slide navigation responsive

const navigationButton = document.querySelector(".fa-solid");
const slideNavigation = document.querySelector(".slide_menu");

navigationButton.addEventListener("click", () => {
  slideNavigation.classList.toggle("active");
});

// Swiper faces

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});

// Form modal

const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const companyInput = document.querySelector("#company");
const emailInput = document.querySelector("#email");
let companyUser = "";
let nameUser = "";
let emailUser = "";

nameInput.addEventListener("input", (e) => {
  nameUser = e.target.value;
});
companyInput.addEventListener("input", (e) => {
  companyUser = e.target.value;
});
emailInput.addEventListener("input", (e) => {
  emailUser = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(
    `Thank You ! ${nameUser}, from ${companyUser}. email address : ${emailUser} saved.`
  );
});

// Contact now email

const contactBtn = document.querySelector("#emailContact");
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
let mailUser = "";
const confirmContactBtn = document.querySelector(".contactBtn");

contactBtn.addEventListener("input", (e) => {
  mailUser = e.target.value;
});

confirmContactBtn.addEventListener("click", () => {
  if (validateEmail(mailUser)) {
    console.log(`Mail enregistré pour la newsletter : ${mailUser}`);
    contactBtn.value = "";
  } else {
    console.log(`Mail non enregistré, format non valide`);
  }
});
