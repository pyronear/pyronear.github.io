// Language dropdown with selection memory
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('langToggle');
  var menu = document.getElementById('langMenu');
  var toggleFlag = toggle.querySelector('.nav-flag');
  var toggleName = toggle.querySelector('.lang-name');

  if (!toggle || !menu) return;

  // Get base URL from the current page
  var baseUrl = '';
  var baseUrlMeta = document.querySelector('meta[name="base-url"]');
  if (baseUrlMeta) {
    baseUrl = baseUrlMeta.getAttribute('content') || '';
  }

  // Get current language from URL or default
  var currentPath = window.location.pathname;
  var currentLang = currentPath.split('/')[1] || 'fr'; // Default to 'fr' if no language in path

  function updateToggle(lang) {
    // Update the toggle button with selected language
    toggleFlag.src = baseUrl + '/img/flags/' + lang + '.svg';
    // Get the language label from the menu item
    var menuItem = menu.querySelector('[href$="/' + lang + '"]');
    if (menuItem) {
      var label = menuItem.querySelector('.lang-label').textContent;
      toggleName.textContent = label;
    }
  }

  // Initialize toggle with current language
  updateToggle(currentLang);

  function closeMenu() {
    menu.style.display = 'none';
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    menu.style.display = 'block';
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if (menu.style.display === 'block') {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // Add click handlers to menu items
  var menuItems = menu.querySelectorAll('.lang-link');
  menuItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent immediate navigation
      
      // Extract language code from href
      var href = item.getAttribute('href');
      var lang = href.split('/').pop();
      
      // Update toggle immediately
      updateToggle(lang);
      closeMenu();
      
      // Navigate after a brief delay to allow the UI to update
      setTimeout(function() {
        window.location.href = href;
      }, 50);
    });
  });
});
