document.addEventListener('WebComponentsReady', function() {
  // set component properties here
  var el = document.querySelector('custom-component');
});


var selectLang = document.querySelector('select');

// Demo i18n
selectLang.addEventListener('change', function(){
  document.documentElement.lang = this.value;
  I18nMsg.lang = document.documentElement.lang;
});

