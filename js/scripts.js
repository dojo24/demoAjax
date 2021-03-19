$(document).ready(function(){
    var apiKey = '8ab82243dc2b9fe4c8e68d061a14e1c4'


    $('form').submit(function () {
        var city = $('#city').val();
        var cityString = `${city}`

        var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityString}&appid=${apiKey}&units=imperial`

        $.get(url, function (res) {
            console.log(res)
            var htmlString = `<h1>${cityString}</h1><p>Temperature: ${res.main.temp}&#8457;</p>`
            htmlString+= `<p>Description: ${res.weather[0].description}</p><p>Wind Speed: ${res.wind.speed} mph</p>`
            $('#forecast').html(htmlString);

        }, 'json');
        return false;
    });

    $.get("https://api.nasa.gov/planetary/apod?api_key=1aRkoVUWw3h7ZXmnd9OSWG2MtJUuQW2N6YYUgpat", function(res) {
        console.log(res)
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
