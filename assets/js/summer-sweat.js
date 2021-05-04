$(function () {
    var $element = $(".event-cover-image");
    var window_offset = $element.offset().top - $(window).scrollTop();

    if (window_offset < 200) {
        $element.addClass('event-cover-image-rotated');
    } else {
        $element.removeClass('event-cover-image-rotated');
    }

    $(window).scroll(function () {
        var $element = $(".event-cover-image");
        var window_offset = $element.offset().top - $(window).scrollTop();

        if (window_offset < 200) {
            $element.addClass('event-cover-image-rotated');
        } else {
            $element.removeClass('event-cover-image-rotated');
        }
    });

    var map = new RenderMap('map', [$("#map").data('lat'), $("#map").data("long")], 16);
    map.setMarkers([{
        icon: 'home',
        coordinate: [$("#map").data('lat'), $("#map").data("long")],
        popup: `
        <p class="fs-14 mt-0 mb-2">
            Lokasi pernikahan
        </p>
        <p class="fs-14 mb-0 mt-0 d-flex align-items-lg-center">
            Buka di <a target="_blank" href="https://www.google.co.id/maps/@${$("#map").data('lat')},${$("#map").data('long')},15z" style="background:#0984e3;" class="badge text-light ml-2">Google Maps</a>
        </p>
    `
    }]);
})