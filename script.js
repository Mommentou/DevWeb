var button = document.getElementById('theme_btn');

var body = document.getElementsByTagName('body')[0];

var light_theme = 'light';

button.addEventListener('click', function() {
    if (body.classList.contains(light_theme)) {
        body.classlist.remove(light_theme);
    }
    else {
        body.classList.add(light_theme);
    }
} );