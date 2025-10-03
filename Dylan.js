// attach to every .toggle-btn
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.nextElementSibling; // the .popup after the button
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 100);
  });
});
