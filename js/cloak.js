(function () {
  var defaultTitle = 'Celestial';
  var defaultIcon = '/Static/Assets/Fav-Img/BIGFAV.png';

  var storedTitle = localStorage.getItem('tabTitle');
  var storedIcon = localStorage.getItem('tabIcon');

  var newTitle = storedTitle || defaultTitle;
  var newIcon = storedIcon || defaultIcon;

  var icon = document.querySelector('link[rel="icon"]');
  if (icon) {
    icon.setAttribute('href', newIcon);
  } else {
    console.log('Tab Cloak Disabled');
    document.title = defaultTitle;
  }

  if (storedTitle) {
    document.title = newTitle;
  }
})();
