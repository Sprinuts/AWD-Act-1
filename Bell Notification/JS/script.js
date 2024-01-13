const button = document.getElementById('button');
const notification = document.getElementById('notification');

button.addEventListener('click', () => {
    const counter = Number(notification.getAttribute('data-count')) || 0;

    notification.setAttribute('data-count', counter + 1);
    notification.classList.add('count');
});

notification.addEventListener('animationend', () => {
    notification.classList.remove('notify');
});