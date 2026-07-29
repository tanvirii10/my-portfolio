
function setupSmoothScroll() {
  document.querySelectorAll('.nav-links a, .hero-buttons a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

     
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxx-kEoEWl3moKHRAJzOPkjd704YBuK3W8QLSuBOfAgoeUGRZOOe8UubLkHqgqkPzjXiQ/exec';
      const formData = {
        name: this.querySelector('input[placeholder="YOUR NAME"]')?.value || '',
        email: this.querySelector('input[placeholder="YOUR EMAIL"]')?.value || '',
        subject: this.querySelector('input[placeholder="ENTER SUBJECT"]')?.value || '',
        message: this.querySelector('textarea')?.value || ''
      };
      fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => {
        alert('Thank you for your message! Your message has been submitted successfully.');
        form.reset();
      })
      .catch(error => {
        alert('Something went wrong. Please try again later!');
      });
    });
  }
}
setupSmoothScroll();
setupContactForm();