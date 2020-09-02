$(document).ready(function () {
    $("#get-started").click(function () {
        $("#second").show();
        $("#first").hide();
    });

    $("#get-connected").click(function () {
        $("#third").show();
        $("#second").hide();
    });

    $(".icon-container").click(function () {
        $(this).toggleClass("border");
    });

    $("#find-match").click(function () {
        $("#fourth").show();
        $("#third").hide();
    });

    $(".user").click(function () {
        $(".black").show();
		$(this).find('.description').show();
	
    });

    $("#great").click(function () {
        $("#fifth").show();
        $("#fourth").hide();
        $(".black").show();
        $("#alarm-popup").show();
    });

    $(".black").click(function () {
        $(".black").hide();
        $("#alarm-popup").hide();
        $(".description").hide();
    });

    $(".pop-up").click(function () {
        $(".black").hide();
        $("#alarm-popup").hide();
    });

    $("#alarm-icon").click(function () {
        $("#sixth").show();
        $("#fifth").hide();
        $(".alarm").get(0).play();
        setTimeout(function () {
            $(".alarm").get(0).pause();
        }, 2000);
    });
});