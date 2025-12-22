document.addEventListener('DOMContentLoaded', function () {
  const searchBar = document.getElementById('searchBar');
  if (!searchBar) return;
  searchBar.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.tool-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });
});
