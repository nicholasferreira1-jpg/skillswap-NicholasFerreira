const cards = document.querySelectorAll('.skill-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove the highlight from all cards, then highlight the clicked one
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        // Read the information from the card
        const title = card.querySelector('.title').textContent;
        const price = card.querySelector('.price').textContent;
        const tutor = card.querySelector('.provider-name').textContent;

        // Turn the badges into text, like "In-person and Virtual"
        const badges = card.querySelectorAll('.badge');
        const formats = Array.from(badges)
            .map(badge => badge.textContent.replace('✓', '').trim())
            .join(' and ');

        // Show the information in a popup
        alert(`${title}\n${tutor}\nPrice: ${price}\nAvailable: ${formats}\n\nBooking is coming soon!`);
    });
});