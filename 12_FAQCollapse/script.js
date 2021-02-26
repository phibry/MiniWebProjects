// const toggle = document.querySelectorAll('button');

// toggle.forEach((element) => {
//   element.addEventListener('click', (e) => {
//     let tog;

//     if (e.target.classList.contains('fas')) {
//       tog = e.target.parentElement.parentElement;
//     } else if (e.target.classList.contains('faq-toggle')) {
//       tog = e.target.parentElement;
//     }
//     tog.classList.toggle('active');
//   });
// });

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
