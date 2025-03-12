// document.addEventListener("DOMContentLoaded", () => {
//   const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: "#navbar-example2",
//     offset: 76, // Adjust for your custom scroll offset (56px + 20px padding)
//   });

//   // Smooth scroll with anchor adjustments
//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();

//       const targetId = this.getAttribute("href").substring(1);
//       const targetElement = document.getElementById(targetId);

//       window.scrollTo({
//         top: targetElement.offsetTop - 56, // Offset for fixed navbar
//         behavior: "smooth",
//       });
//     });
//   });
// });
