function arataTimp() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var session = "AM";
    loadimg();
    if (h == 0) {
        h = 12;
    }

    if (h < 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var timpu = h + ":" + m + ":" + s + " " + session;
    document.getElementById("interfataCeas").innerText = timpu;
    document.getElementById("interfataCeas").textContent = timpu;
    setTimeout(arataTimp, 1000);



    //incarca imaginile in functie de ora
    function loadimg() {
        if (h == 8) {
            var img_container = document.getElementById("interfataCeas");
            var img_tag = document.createElement("img");
            img_tag.onload = function () {
                img_container.appendChild(img_tag);
            }
            img_tag.src = "img/8.jpg";

        } else if (h == 9) {
            var img_container = document.getElementById("interfataCeas");
            var img_tag = document.createElement("img");
            img_tag.onload = function () {
                img_container.appendChild(img_tag);
            }
            img_tag.src = "img/9.jpg";
        } else if (h == 10) {
            var img_container = document.getElementById("interfataCeas");
            var img_tag = document.createElement("img");
            img_tag.onload = function () {
                img_container.appendChild(img_tag);
            }
            img_tag.src = "img/10.jpg";

        } else if (h == 11) {
            var img_container = document.getElementById("interfataCeas");
            var img_tag = document.createElement("img");
            img_tag.onload = function () {
                img_container.appendChild(img_tag);
            }
            img_tag.src = "img/11.jpg";
        } else if (h == 12) {
            var img_container = document.getElementById("interfataCeas");
            var img_tag = document.createElement("img");
            img_tag.onload = function () {
                img_container.appendChild(img_tag);
            }
            img_tag.src = "img/12.jpg";

        } else if (h == 13) {
            var img_container = document.getElementById("interfataCeas");
            var img_tag = document.createElement("img");
            img_tag.onload = function () {
                img_container.appendChild(img_tag);
            }
            img_tag.src = "img/13.jpg";

        } else if (h == 14) {
            var img_container = document.getElementById("interfataCeas");
            var img_tag = document.createElement("img");
            img_tag.onload = function () {
                img_container.appendChild(img_tag);
            }
            img_tag.src = "img/14.jpg";

        } else if (h == 15) {
            var img_container = document.getElementById("interfataCeas");
            var img_tag = document.createElement("img");
            img_tag.onload = function () {
                img_container.appendChild(img_tag);
            }
            img_tag.src = "img/15.jpg";

        } else if (h == 16) {
            var img_container = document.getElementById("interfataCeas");
            var img_tag = document.createElement("img");
            img_tag.onload = function () {
                img_container.appendChild(img_tag);
            }
            img_tag.src = "img/16.jpg";

        }

    }

}



