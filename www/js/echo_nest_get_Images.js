/**
 * @author nadav
 */

$(document).on('pageinit', '#img1', function(){      
    var url = 'http://developer.echonest.com/api/v4/artist/images',
        mode = '&format=json&results=1&start=0&license=unknown',
        artistName = '&name= metallica',        
        key = '&api_key= LB2U0R2MKSS86STHG ';        
    
    $.ajax({
        url: url + key + artistName + mode,
        dataType: "jsonp",
        async: true,
        success: function (result) {
            ajax.parseJSONP(result);
        },
        error: function (request,error) {
            alert('Network error has occurred please try again!');
        }
    });         
});

