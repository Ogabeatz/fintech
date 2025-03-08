function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    const arrow = document.getElementById(`arrow-${index}`);
    
    // Toggle answer visibility
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    
    // Rotate arrow
    arrow.classList.toggle('rotate');
}
