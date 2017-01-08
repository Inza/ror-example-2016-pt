

$(document).ready(function() {
    $("a[data-ajax]").click(function(){
        var link = $(this);
        var path = link.attr("data-href");

        $.getScript(path)
            .done(function(script, textStatus) {
                console.log(textStatus);
            })
            .fail(function(jqxhr, settings, exception) {
                console.log("AJAX loading failed");
            });

        return false; // this is needed to prevent default <a> behavior (= redirect)
    });
});
