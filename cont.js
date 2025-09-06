document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();
      let name = document.getElementById("name").value;
      let whatsapp = document.getElementById("whatsapp").value;
      let email = document.getElementById("email").value;
      let myNumber = "918308841309";  
      let message = `Hello, I am ${name}. My WhatsApp No: ${whatsapp}, Email: ${email}, I need assistance with the hospital management system.`;
      let url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });

// Open popups
function openPrivacyPopup(event) {
  event.preventDefault();
  privacyPopup.classList.add("show");
}

function openTermsPopup(event) {
  event.preventDefault();
  termsPopup.classList.add("show");
}

// Close popups
function closePopup() {
  privacyPopup.classList.remove("show");
  privacyCheck.checked = false;
  acceptBtn.disabled = true;
}

function closeTermsPopup() {
  termsPopup.classList.remove("show");
  termsCheck.checked = false;
  termsAcceptBtn.disabled = true;
}

// Enable accept buttons
function checkAcceptance() {
  acceptBtn.disabled = !privacyCheck.checked;
}

function checkTermsAcceptance() {
  termsAcceptBtn.disabled = !termsCheck.checked;
}

// Close when clicking outside
privacyPopup.addEventListener("click", function(e) {
  if (e.target === privacyPopup) closePopup();
});

termsPopup.addEventListener("click", function(e) {
  if (e.target === termsPopup) closeTermsPopup();
});
