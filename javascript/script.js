//скрпт на вытаскивание первых восьми случайных картинок из гугл поиск по значению слон//
$(document).ready(function() {
    google.setOnLoadCallback(function () {
        function getimage(id, word) {
            var image_key = encodeURIComponent(word);
            var img = $('<img/>', {'src': 'http://www.ajaxload.info/images/exemples/26.gif'}).appendTo('body');
            $['getJSON']('http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=' + image_key + '&rsz=' + id + '&imgsz=medium&callback=?', function (json) {
                $.each(json['responseData']['results'], function (indx, element) {
                    $('<img/>', {
                        'src': element['url'],
                        'error': function () {
                            $(this).remove()
                        }
                    }).appendTo('.leftNav')
                });
                img.remove()
            });
        };
        getimage(8, 'elephant paint');
    });
// скрипт на изменение класса leftNav от кликания по Слону//
    var myImg = document.querySelector('#opa');
    myImg.onclick = function () {
        this.parentNode.classList.toggle("selected");
        return false;
    }
});
