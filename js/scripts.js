$(document).ready(function(){
    $.get("https://api.nasa.gov/planetary/apod?api_key=1aRkoVUWw3h7ZXmnd9OSWG2MtJUuQW2N6YYUgpat", function(res) {
        var html_str = "";
        html_str += "<img src='" + res.url + "' alt='charcater img' />";
        $(".photo").html(html_str)
    }, "json")

    $('button').click(function(){
        $('img').animate( {
            width: 'toggle'
        })
    })
})