document.getElementById('card-search').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const query = e.target.value.trim();
    if (!query) return;
    // Here you can connect to your backend or bot in the future
    alert('You searched: ' + query);
    e.target.value = '';
  }
});
