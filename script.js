// Simple form handling to display a success message (no backend hooked up)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const result = document.getElementById('form-result');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      result.textContent = "Thank you for contacting me! I'll get back to you soon.";
      form.reset();
    });
  }
});
