$(function () {
    var $element = $(".event-cover-image");
    var window_offset = $element.offset().top - $(window).scrollTop();

    if (window_offset < 200) {
        $element.addClass('event-cover-image-rotated');
    } else {
        $element.removeClass('event-cover-image-rotated');
    }

    var $element = $(".gift-content");
    var window_offset = $element.offset().top - $(window).scrollTop();

    if (window_offset < 200) {
        $element.addClass('opened');
    } else {
        $element.removeClass('opened');
    }

    $(window).scroll(function () {
        var $element = $(".event-cover-image");
        var window_offset = $element.offset().top - $(window).scrollTop();

        if (window_offset < 200) {
            $element.addClass('event-cover-image-rotated');
        } else {
            $element.removeClass('event-cover-image-rotated');
        }

        var $element = $(".gift-content");
        var window_offset = $element.offset().top - $(window).scrollTop();

        if (window_offset < 200) {
            $element.addClass('opened');
        } else {
            $element.removeClass('opened');
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

    $('[data-toggle="open-invitation"]').on("click", function () {
        $("body").removeClass('overflow-hidden');
        $(".open-invitation").addClass('opened');
        setTimeout(function () {
            $(".open-invitation").remove();
        }, 1500);
    });

    $('[data-toggle="no-rek"]').on("click", function () {
        elm = $(this).closest('.d-flex').find('[data-content="no-rek"]').focus()[0];

        if (document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(elm);
            range.select();
            document.execCommand("Copy");

        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(elm);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand("Copy");
        }

        alertrict({
            title: "Berhasil!",
            text: "Nomor rekening berhasil disalin ke klipboard"
        })

    });
})