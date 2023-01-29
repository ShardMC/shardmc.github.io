function attachEvent(selector, event, fn) {
  const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
  if (matches && matches.length) {
    matches.forEach((elem) => {
      elem.addEventListener(event, (e) => fn(e, elem), false);
    });
  }
}

function fixIcons(lite) {
  const elems = document.getElementsByClassName('icon');
  for (var i = 0; i < elems.length; i++) {
    elems[i].setAttribute('stroke', lite ? '#000000' : '#ffffff');
  }
}

attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {
  fixIcons(localStorage.theme !== 'light');
});

function parseShardRepo(url, callback) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }

      return response.json();
    })
    .then((json) => {
      for (var element in json) {
        callback(json[element]);
      }

      fixIcons(localStorage.theme === 'light');
    });
}
