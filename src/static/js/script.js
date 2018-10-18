$(".general-topic-toggle-btn").click(function() {
    $(this).find('.fas').removeClass('fa-long-arrow-alt-up').addClass('fa-long-arrow-alt-down')
    if ($(this).hasClass('collapsed')) {
        $(this).find('.fas').removeClass('fa-long-arrow-alt-down').addClass('fa-long-arrow-alt-up')
    }
});