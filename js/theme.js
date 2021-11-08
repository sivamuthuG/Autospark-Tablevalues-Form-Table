let violet = 'panal-theme-violet';
let black = 'panal-theme-black';
let gray = 'panal-theme-gray';
let orange = 'panal-theme-orange';

let white = 'name-theme-black';
let lightGrey = 'name-theme-gray';
let textOrange = 'name-theme-orange';

let check;

// if (location.reload() && check > 0) {

//     switch (check) {
//         case check:
//             addViolet();
//             break;
//         case check:
//             addBlack();
//             break;
//         default:
//             break;
//     }

// }

$(document).ready(function() {

    $('.th-violet').click(function() {

        this.check = 1;
        removeHeader();
        removeIconText();
        $('.header').addClass(violet);
        $('.toolmenu').addClass(violet);

    });

    $('.th-black').click(function() {

        this.check = 2;
        removeHeader();
        removeIconText();
        $('.header,.toolmenu').addClass(black);
        $('.iconText,.nameText,.reviewIcon,.macineIcon,.moreIcon').addClass(white);


    });

    $('.th-gray').click(function() {
        this.check = 3;
        removeHeader();
        removeIconText();
        $('.header,.toolmenu').addClass(gray);
        $('.iconText,.nameText,.reviewIcon,.macineIcon,.moreIcon').addClass(lightGrey);

    });

    $('.th-orange').click(function() {
        this.check = 4;
        removeHeader();
        removeIconText();
        $('.header,.toolmenu').addClass(orange);
        $('.iconText,.nameText,.reviewIcon,.macineIcon,.moreIcon').addClass(textOrange);

    });

    function removeHeader() {

        $('.header,.toolmenu').removeClass(violet);
        $('.header,.toolmenu').removeClass(black);
        $('.header,.toolmenu').removeClass(gray);
        $('.header,.toolmenu').removeClass(orange);

    }


    function removeIconText() {

        $('.iconText,.nameText,.reviewIcon,.macineIcon,.moreIcon').removeClass(white);
        $('.iconText,.nameText,.reviewIcon,.macineIcon,.moreIcon').removeClass(lightGrey);
        $('.iconText,.nameText,.reviewIcon,.macineIcon,.moreIcon').removeClass(textOrange);
    }



});