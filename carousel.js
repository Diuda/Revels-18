$(document).ready(function() {
    if ($(window).width() >= 1024) {
        // forEach method
        var forEach = function(array, callback, scope) {
            for (var i = 0; i < array.length; i++) {
                callback.call(scope, i, array[i]);
            }
        };

        var spinner = document.querySelector("#spinner"),
            angle = 0,
            images = document.querySelectorAll("#spinner figure"),
            numpics = images.length,
            degInt = 360 / numpics,
            start = 0,
            current = 1;

        forEach(images, function(index, value) {
            images[index].style.webkitTransform = "rotateY(-" + start + "deg)";
            images[index].style.transform = "rotateY(-" + start + "deg)";
            images[index].addEventListener("click", function() {
                if (this.classList.contains('current')) {
                    this.classList.toggle("focus");
                }
            console.log(images[i]);
            })
            start = start + degInt;
        });

        function setCurrent(current) {
            $('figure#spinner figure:nth-child(' + current + ')').addClass('current');
            // console.log(current);
            // console.log(images);
        }

        function galleryspin(sign) {
            forEach(images, function(index, value) {
                // console.log(images[index]);
                images[index].classList.remove('current');
                images[index].classList.remove('focus');
                images[index].classList.remove('caption');
            });

            if (!sign) {
                angle = angle + degInt;
                current = (current + 1);
                if (current > numpics) { current = 1; }
            } else {
                angle = angle - degInt;
                current = current - 1;
                if (current == 0) { current = numpics; }
            }

            // console.log(current);
            spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg)");
            console.log(spinner);
            setCurrent(current);
        }

        $("body").keydown(function(e) {
            // console.log(e);
            switch (e.which) {
                case 37: // left cursor
                    galleryspin('');
                    break;

                case 39: // right cursor
                    galleryspin('-');
                    break;

                default:
                    return; // exit this handler for other keys
            }
            e.preventDefault();
        });
        setCurrent(1);
    }
});