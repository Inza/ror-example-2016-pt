

$(document).ready(function() {
    $("a[data-ajax]").click(function(){
        var link = $(this);
        var content = $("div[data-ajax-content]");

        content.append("<p>Kuk</p>");

        return false; // this is needed to prevent default <a> behavior (= redirect)
    });
});
