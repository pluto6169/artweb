document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const title = button.getAttribute('data-title');
        const content = button.getAttribute('data-content');
        document.getElementById('popupTitle').textContent = title;
        document.getElementById('popupContent').textContent = content;
        document.getElementById('popup').style.display = 'flex';
    });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
