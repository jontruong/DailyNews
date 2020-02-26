var createDate = function(){
    var date = new Date();
    var formattedDate = "";
    formattedDate += (date.getMonth() + 1) + "_";

    formattedDate += date.getDate() + "_";

    formattedDate += date.getFullYear();

    return formattedDate;
}

module.exports =  createDate;