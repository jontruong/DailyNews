var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {
    request("www.eastbaytimes.com", function(err, res, body){
        var $ = cheerio.load(body);
        var articles = [];

        $(".").each(function(i, element){
            var head = $(this).children(".")
        })
    })
}