function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

/*Testimonials */
document.addEventListener("DOMContentLoaded", () => {
  const testimonialsContainer = document.getElementById(
    "testimonials-container"
  );

  // Function to display testimonials
  function displayTestimonial(name, company, testimonial) {
    const testimonialCard = document.createElement("div");
    testimonialCard.classList.add("card", "mb-4");
    testimonialCard.innerHTML = `
          <div class="card-body">
              <p class="card-text">"${testimonial}"</p>
              <p class="card-text">- ${name}${company ? ", " + company : ""}</p>
          </div>
      `;
    testimonialsContainer.appendChild(testimonialCard);
  }

  // Load existing testimonials from local storage
  const existingTestimonials =
    JSON.parse(localStorage.getItem("testimonials")) || [];
  existingTestimonials.forEach((item) => {
    displayTestimonial(item.name, item.company, item.testimonial);
  });
});
