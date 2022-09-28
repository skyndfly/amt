let city = document.querySelector('.tab-city-header');
let private = document.querySelector('.tab-private-header');
let tabCity = document.querySelector('.tab-city');
let tabPrivate = document.querySelector('.tab-private');
let place = document.querySelector('.place');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup-close');

let list = document.querySelector('.btn-kanal');
let popupList = document.querySelector('.popup-list');
let popupCloseList= document.querySelector('.popup-close-list');


// вешаем городу активность
city.classList.add('tab-active');
tabPrivate.classList.add('tab-hide');
// делаем обработчик по клику 

private.addEventListener('click', function(){
    city.classList.remove('tab-active');
    private.classList.add('tab-active');
    tabPrivate.classList.remove('tab-hide');
    tabCity.classList.add('tab-hide');
})
city.addEventListener('click', function(){
    private.classList.remove('tab-active');
    city.classList.add('tab-active');
    tabPrivate.classList.add('tab-hide');
    tabCity.classList.remove('tab-hide');
})


// кнопка наверх
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('#up-block').is(':hidden')) {
            $('#up-block').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('#up-block').stop(true, false).fadeOut('fast'); }
});
$('#up-block').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 300);
});

// модальное окно карты
place.addEventListener('click', function(){
    popup.classList.add('popup-active');
});
popupClose.addEventListener('click', function(){
    popup.classList.remove('popup-active');
});


// модальное окно списка каналов
list.addEventListener('click', function(){
    popupList.classList.add('popup-active-list');
});
popupCloseList.addEventListener('click', function(){
    popupList.classList.remove('popup-active-list');
});


// плавная прокрутка якорей
 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 300);
    });
});
// убрать решетку из хеша
