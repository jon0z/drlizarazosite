// Set the current year in the footer
document.addEventListener('DOMContentLoaded', function() {
  var yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Show menu button on mobile and collapse sidebar by default
  function checkMenuButton() {
    var menuToggle = document.getElementById('menu-toggle');
    var sidebar = document.getElementById('sidebar');
    if (!menuToggle || !sidebar) return;
    if (window.innerWidth <= 800) {
      menuToggle.style.display = 'block';
      sidebar.classList.add('collapsed');
    } else {
      menuToggle.style.display = 'none';
      sidebar.classList.remove('collapsed');
    }
  }
  checkMenuButton();
  window.addEventListener('resize', checkMenuButton);

  // Toggle sidebar
  var menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.onclick = function() {
      var sidebar = document.getElementById('sidebar');
      if (sidebar) sidebar.classList.toggle('collapsed');
    };
  }
});