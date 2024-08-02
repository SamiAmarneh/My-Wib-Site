// Select all navigation links
const navLinks = document.querySelectorAll('.navigation a');

// Add event listener to each link
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the href attribute of the link
    const href = link.getAttribute('href');

    // Scroll to the corresponding section
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
});

// Select all "More Details" links
const moreDetailsLinks = document.querySelectorAll('.more-details');

// Add event listener to each link
moreDetailsLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the parent element of the link
    const parent = link.parentNode;

    // Toggle the visibility of the parent element
    parent.classList.toggle('active');
  });
});

// Add event listener to the window object
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Select all sections
  const sections = document.querySelectorAll('section');

  // Loop through each section
  sections.forEach((section) => {
    // Get the top position of the section
    const top = section.offsetTop;

    // Check if the section is in view
    if (scrollPosition >= top - 200 && scrollPosition < top + section.offsetHeight) {
      // Add the "active" class to the section
      section.classList.add('active');
    } else {
      // Remove the "active" class from the section
      section.classList.remove('active');
    }
  });
});