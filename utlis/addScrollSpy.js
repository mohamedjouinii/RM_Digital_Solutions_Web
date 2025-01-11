const addScrollspy = (
  defaultClass = "",
  linksContainer = ".scrollSpyLinks",
  activeClass = "current"
) => {
  const sections = document.querySelectorAll(".scrollSpySection");
  const scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Adjust offset for precision
    const sectionBottom = sectionTop + section.offsetHeight;

    // Detect the currently active section
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      currentSection = section.id;
    }
  });

  // Special case for the "Home" section (top of the page)
  if (scrollPosition < 100) {
    currentSection = "home"; // Ensure "Home" is active when near the top
  }

  // Update navbar links
  const navLinks = document.querySelectorAll(`${linksContainer} a`);
  navLinks.forEach((link) => {
    const target = link.getAttribute("href").substring(1); // Remove "#"

    if (target === currentSection) {
      link.parentElement.classList.add(activeClass);
    } else {
      link.parentElement.classList.remove(activeClass);
    }
  });
};
export default addScrollspy;
