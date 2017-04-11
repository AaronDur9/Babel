var good = false;

var options = [];

$("select").change(function() {
    console.log($("#reason").val());


    if (!good && ($("#reason").val() === "awesome" || $("#reason").val() === "fantastic")) {
        $("#contact-cuestion").append("<label>I knew it</label>");
        good = true;
    }

});
