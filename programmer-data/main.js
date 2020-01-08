$('button').click(function(event) {
    $(this).after('<div id="dane-programisty"></div>');
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(response => response.json())
    .then(data => {
        let keys = Object.keys(data);
        keys.forEach(key => {
            $('#dane-programisty').append(`<p>${key}: ${data[key]}</p>`);
        });
    })
    $(this).off(event);
})