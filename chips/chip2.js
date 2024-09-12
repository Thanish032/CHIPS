// chip2.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.d1');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const domain = event.target.innerText.trim();
            const formattedDomain = domain.toLowerCase();
            window.location.href = `trending.html?domain=${formattedDomain}`;
        });
    });
});
