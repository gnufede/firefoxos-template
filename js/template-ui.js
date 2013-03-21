'use strict';

const UI = (function() {
  navigator.mozL10n.ready(function localize() {
    // Do nothing rigth now
  });

  var settingsView = document.querySelector('#settings-view');

  var settingsOpen = document.querySelector('#settings-open');
  settingsOpen.addEventListener('click', function(e) {
    settingsView.dataset.pagePosition = 'viewport';
  });

  var settingsDone = document.querySelector('#settings-done');
  settingsDone.addEventListener('click', function(e) {
    settingsView.dataset.pagePosition = 'bottom';
  });

}());
