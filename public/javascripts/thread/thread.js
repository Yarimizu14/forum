;(function() {

$(function() {

    $(".resList_each").on("click", function(evt) {
        $this = $(this);
        $.ajax({
            type : 'delete',
            url  : '/thread/delete_res_ajax',
            data : {
                res_id : $this.data("id")
            }
        })
        .done(function(data) {
            $this.hide();
            console.log(data);
        })
        .fail(function() {alert("failed");});
    });

});

})()
