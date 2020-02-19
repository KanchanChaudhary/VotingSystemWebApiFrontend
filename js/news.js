$(document).ready(function () {
    $.getJSON('http://localhost:8080/content/news', function (data) {
        let newsdata = data.data;
        $.each(newsdata, function (index) {
            $('#news-container').append(
                '<div id="news-heading" class="col-sm-12 p-5 text-center"> <h3>' + newsdata[index].title + '  </h3> </div>' +
                '<div id="news-content" class="col-sm-12 p-5 text-left"> <h4> ' + newsdata[index].description + ' </h4> </div>'
            )
        })

    })
})