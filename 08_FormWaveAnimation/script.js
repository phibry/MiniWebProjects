const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  console.log(label.innerText);

  label.innerHTML = label.innerText
    // split the text into single characters
    .split('')
    // map each character with a span
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 30}ms">${letter}</span>`
    )
    // join all the elements back together
    .join('');
});
