/* SHOW MENU */
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

/* SHOW MENU */
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

/*Get Test */
let testimonials = []; // Array to store testimonials

function submitTestimonial() {
  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const testimonial = document.getElementById("testimonial").value;

  if (!name || !testimonial) {
    alert("Please enter your name and testimonial.");
    return;
  }

  testimonials.push({ name, company, testimonial }); // Add testimonial to array

  // Clear the form
  document.getElementById("name").value = "";
  document.getElementById("company").value = "";
  document.getElementById("testimonial").value = "";

  alert("Testimonial submitted!");
}

// Store testimonials in localStorage (for persistence across page loads)
window.addEventListener("beforeunload", function () {
  localStorage.setItem("testimonials", JSON.stringify(testimonials));
});

// Load testimonials from localStorage on page load
if (localStorage.getItem("testimonials")) {
  testimonials = JSON.parse(localStorage.getItem("testimonials"));
}

/* Show */
/*Show Success Message */
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  var form = this;
  var formData = new FormData(form);
  var successMessage = document.getElementById("success-message");

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { Accept: "application / json" },
  })
    .then((response) => {
      if (response.ok) {
        successMessage.style.display = "block";
        form.reset();

        setTimeout(() => {
          successMessage.style.display = "none";
        }, 5000);
      } else {
        alert("Error sending message. Please try again.");
      }
    })
    .catch((error) => alert("Error sending message"));
});
