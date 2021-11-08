$(document).ready(function() {

    $("#all-mch").addClass("machine-active");

    var location = window.location;
    var pathArray = location.toString().split("#");
    $("#" + pathArray[1] + "Id").addClass("active");

    $("#full-view-Id").click(function() {
        $(".toolmenu").hide(500);
        $(".expand").show();
        $(".full-view").hide();
        $(".viewBody").addClass("viewBodyLeft");
    });

    $("#expand_Id").click(function() {
        $(".toolmenu").show(500);
        $(".expand").hide();
        $(".full-view").show();
        $(".viewBody").removeClass("viewBodyLeft");
    });

    $('#logo-Id').click(function() {
        location.reload();
    });

    $("#new-build").click(function() {
        $(".build-form").show();
        $(".viewBody").addClass("freeze-Back");
    });

    $("#buil-start-btn").click(function() {

        if (validateBuildForm()) {

            $(".build-form").hide();
            $(".viewBody").removeClass("freeze-Back");

        }
    });

    $("#buil-cancel-btn").click(function() {
        $(".build-form").hide();
        $(".viewBody").removeClass("freeze-Back");
    });

    $("#bug-Id-new").click(function() {

        $(".bug-content").show();
        $(".viewBody").addClass("freeze-Back");

    });

    $("#bug-Id").click(function() {

        $(".bug-content").show();
        $(".viewBody").addClass("freeze-Back");

    });

    $("#bugadd-Id").click(function() {

        if (validateBugForm()) {

            $(".bug-content").hide();
            $(".viewBody").removeClass("freeze-Back");

        }

    });

    $("#bugcancel-Id").click(function() {

        $(".bug-content").hide();
        $(".viewBody").removeClass("freeze-Back");

    });

    $("#imp-sub-btn").click(function() {

        if (validateImpactForm()) {

            $(".impact-form").hide();
            $(".viewBody").removeClass("freeze-Back");

        }

    });

    $("#imp-add").click(function() {
        $(".impact-form").show();
        $(".viewBody").addClass("freeze-Back");

    });

    $("#imp-cancel-btn").click(function() {

        $(".impact-form").hide();
        $(".viewBody").removeClass("freeze-Back");

    });


    $("#run-btn-add").click(function() {

        if (validateRunForm()) {

            $(".test-form").hide();
            $(".viewBody").removeClass("freeze-Back");

        }
    });

    $("#run-btn-cancel").click(function() {
        $(".test-form").hide();
        $(".viewBody").removeClass("freeze-Back");
    });

    $("#new-run").click(function() {
        $(".test-form").show();
        $(".viewBody").addClass("freeze-Back");
    });

    $('#logo-Id').click(function() {
        location.reload();
    });

    $("#closeId").click(function() {
        $(".userProfile").hide();
        $(".viewBody").removeClass("freeze-Back");
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            $("#formId").hide();
            $("#formId1").hide();
            $("#formId2").hide();
            $("#formId3").hide();
            $("#formIduser").hide();
            $('.bug-expot').hide();
            $('.bugdetailPage').hide();
            $(".viewBody").removeClass("freeze-Back");

        }
    });


    $('#userId').click(function() {
        $(".userProfile").show();
        //$(".viewBody").addClass("freeze-Back");
    });

    $('#bug-detail-close').click(function() {

        $('.bugdetailPage').hide();
        $(".viewBody").removeClass("freeze-Back");

    });


    // document.onreadystatechange = function() {
    //     if (document.readyState !== "complete") {
    //         document.querySelector("body").style.visibility = "hidden";
    //         document.querySelector("#loader").style.visibility = "visible";
    //     } else {
    //         document.querySelector("#loader").style.display = "none";
    //         document.querySelector("body").style.visibility = "visible";
    //     }
    // };


    $('#bug-ex').click(function() {
        $('.bug-expot').show();
    });

    $(document).mouseup(function(e) {
        if ($(e.target).closest(".bug-expot").length === 0) {
            $(".bug-expot").hide();
        }
    });

    $("#profileImage").click(function(e) {
        $("#imageUpload").click();
    });


    $("#all-mch").click(function() {
        $(".all-machine").show();
        $(".inc").hide();
        $(".exclude").hide();
        $(".add-machine").hide();
        $(".remove-machine").hide();
        $("#all-mch").addClass("machine-active");
        $("#inc-mch").removeClass("machine-active");
        $("#exc-mch").removeClass("machine-active");
        $("#add-mch").removeClass("machine-active");
        $("#rem-mch").removeClass("machine-active");

    });

    $("#inc-mch").click(function() {
        $(".all-machine").hide();
        $(".inc").show();
        $(".exclude").hide();
        $(".add-machine").hide();
        $(".remove-machine").hide();
        $("#all-mch").removeClass("machine-active");
        $("#inc-mch").addClass("machine-active");
        $("#exc-mch").removeClass("machine-active");
        $("#add-mch").removeClass("machine-active");
        $("#rem-mch").removeClass("machine-active");

    });

    $("#exc-mch").click(function() {
        $(".all-machine").hide();
        $(".inc").hide();
        $(".exclude").show();
        $(".add-machine").hide();
        $(".remove-machine").hide();
        $("#all-mch").removeClass("machine-active");
        $("#inc-mch").removeClass("machine-active");
        $("#exc-mch").addClass("machine-active");
        $("#add-mch").removeClass("machine-active");
        $("#rem-mch").removeClass("machine-active");

    });

    $("#add-mch").click(function() {
        $(".all-machine").hide();
        $(".inc").hide();
        $(".exclude").hide();
        $(".add-machine").show();
        $(".remove-machine").hide();
        $("#all-mch").removeClass("machine-active");
        $("#inc-mch").removeClass("machine-active");
        $("#exc-mch").removeClass("machine-active");
        $("#add-mch").addClass("machine-active");
        $("#rem-mch").removeClass("machine-active");

    });

    $("#rem-mch").click(function() {
        $(".all-machine").hide();
        $(".inc").hide();
        $(".exclude").hide();
        $(".add-machine").hide();
        $(".remove-machine").show();
        $("#all-mch").removeClass("machine-active");
        $("#inc-mch").removeClass("machine-active");
        $("#exc-mch").removeClass("machine-active");
        $("#add-mch").removeClass("machine-active");
        $("#rem-mch").addClass("machine-active");

    });

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 0) {
    //         $('.runTable').fadeOut();
    //     } else {
    //         $('.runTable').fadeIn();
    /* @media only screen and (max-width: 600px) {
    .toolmenu {
        height: 900px;
    }
}


// /* Small devices (portrait tablets and large phones, 600px and up) */

    // @media only screen and (min-width: 600px) {
    //     .toolmenu {
    //         height: 900px;
    //         margin: 0;
    //     }
    // }


    // /* Medium devices (landscape tablets, 768px and up) */

    // @media only screen and (max-width: 1024px) {
    //     .toolmenu {
    //         height: 1710px;
    //     }
    //     .form-footer {
    //         top: 1717px;
    //     }
    // }


    // /* Large devices (laptops/desktops, 992px and up) */

    // @media only screen and (min-width: 992px) {
    //     .toolmenu {
    //         margin: 0;
    //         height: 1326px;
    //     }
    //     .form-footer {
    //         top: 728px;
    //     }
    // }


    // /* Extra large devices (large laptops and desktops, 1200px and up) */

    // @media only screen and (max-width: 1750px) {
    //     .toolmenu {
    //         height: 900px;
    //     }
    //     .form-footer {
    //         top: 830px;
    //     }
    //     /* .pageRecord {
    //         left: 1715px !important;
    //     } */
    // }

    // @media only screen and (max-width: 1550px) {
    //     .toolmenu {
    //         margin: 0;
    //         height: 900px;
    //     }
    //     .form-footer {
    //         top: 728px;
    //     }
    // }

    // @media only screen and (min-width: 1900px) {
    //     .toolmenu {
    //         margin: 0;
    //         /* height: 900px; */
    //     }
    //     .form-footer {
    //         top: 915px;
    //     }
    // } */
    //     //     }
    // });


});