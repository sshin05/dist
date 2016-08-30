(function() {
    var video, sources, clips, clipFunc, val, currentID;
    video = $('video#frag1');
    sources = $('source');
    clips = $('#clips');
    clipFunc = $('#clipHandler');

    function collectClips(){
        $.each($("div.clip"), function(it){
            $(this).attr("data-id", it);
            $(this).click(function() {
                var that = $(this);
                $.each(sources, function(){
                    $(this).attr('src', $(this).attr('data-original') + '#t=' + that.attr('data-start') + ',' + that.attr('data-end'));
                video.load();
                video.get(0).play();
                });
                //console.log(that.attr('data-start'))
                clipFunc.find("input[name='clipName']").val(that.text());
                clipFunc.find("input[name='starttime']").val(that.attr('data-start'));
                clipFunc.find("input[name='endtime']").val(that.attr('data-end'));
                currentID = that.attr("data-id");
            });

        });
    }

    clipFunc.submit(function(event){
        val = $(document.activeElement).val();
        //console.log(currentID);
        if (val === "Add Clip") {
            clips.append("<div class='clip' data-start="+$("input[name='starttime']").val()+" data-end="+$("input[name='endtime']").val()+">"+$("input[name='clipName']").val()+"</div>");
            $("input[name='starttime']").val('');
            $("input[name='endtime']").val('')
            $("input[name='clipName']").val('')
        } else if (val === "Edit Clip") {
            video.get(0).pause();
            $("div[data-id="+ currentID +"]").attr('data-start', $("input[name='starttime']").val());
            $("div[data-id="+ currentID +"]").attr('data-end', $("input[name='endtime']").val());
            $("div[data-id="+ currentID +"]").html($("input[name='clipName']").val());
        } else {
            if (currentID != 0) $("div[data-id="+ currentID +"]").remove();
        }
        collectClips();

        event.preventDefault();
    });

    collectClips();

})(jQuery);
