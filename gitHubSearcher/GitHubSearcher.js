var input = document.querySelector('input');
input.addEventListener('keydown', function (event) {

    if (event.key == 'Enter') {
        var inputValue = input.value;
        var request = new XMLHttpRequest();
        request.open('GET', 'https://api.github.com/search/users?q=' + inputValue);
        request.send();
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var requestDoc = request.responseText;
                // console.log(requestDoc);
                var requestJSON = JSON.parse(requestDoc);
                console.log(requestJSON);
                for (var i = 0; i < 16; i++) {
                    var img = document.createElement('img');
                    img.setAttribute('src', requestJSON.items[i].avatar_url + '');
                    document.querySelector('body').appendChild(img);
                }
                // document.querySelector('img').src = requestJSON.items[0].avatar_url;
            }
        }

    }
});