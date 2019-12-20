var query = $("#search").val;
var div = 0;
var yearFrom = "";
var yearTo = "";
var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}q=election&api-key=5XGDV5Ux73Icdy0IuzSmXHPPqliqtQXs`;

console.log(queryURL);

$.ajax({
    method: "GET",
    url: queryURL
}).then(function(response) {
    console.log(this);


    // $("p").append(response.Title);
    // $("img").attr("src", response.Poster);

})

$("#search").on("click", function (e) {
    e.preventDefault();

    var search = $("#search-input").val().trim();


})