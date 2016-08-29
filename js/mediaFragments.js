(function() {
    var video, sources, nav, clip, val, currentID;
    video = $('video#frag1');
    sources = $('source');
    nav = $('.nav');
    clip = $('#clipHandler');

    function collectButtons(){
        $.each($("button"), function(it){
            $(this).attr("data-id", it);
            $(this).click(function() {
                var that = $(this);
                $.each(sources, function(){
                    $(this).attr('src', $(this).attr('data-original') + '#t=' + that.attr('data-start') + ',' + that.attr('data-end'));
                video.load();
                video.get(0).play();
                });
                clip.find("input[name='clipName']").val($(this).html());
                clip.find("input[name='starttime']").val(that.attr('data-start'));
                clip.find("input[name='endtime']").val(that.attr('data-end'));
                currentID = that.attr("data-id");
            });

        });
    }

    clip.submit(function(event){
        val = $(document.activeElement).val();
        //console.log(currentID);
        if (val === "Add Clip") {
            nav.append("<button data-start="+$("input[name='starttime']").val()+" data-end="+$("input[name='endtime']").val()+">"+$("input[name='clipName']").val()+"</button>");
            $("input[name='starttime']").val('');
            $("input[name='endtime']").val('')
            $("input[name='clipName']").val('')
        } else if (val === "Edit Clip") {
            video.get(0).pause();
            $("button[data-id="+ currentID +"]").attr('data-start', $("input[name='starttime']").val());
            $("button[data-id="+ currentID +"]").attr('data-end', $("input[name='endtime']").val());
            $("button[data-id="+ currentID +"]").html($("input[name='clipName']").val());
        } else {
            if (currentID != 0) $("button[data-id="+ currentID +"]").remove();
        }
        collectButtons();

        event.preventDefault();
    });

    collectButtons();

})(jQuery);
