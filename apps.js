//Variables declaration
var channelName = "HoiThanhTinLanhVietNam North Hollywood";
$(document).ready(function(){
    $.get (
        "https://www.googleapis.com/youtube/v3/channels",{
            part: "contentDetails",
            forUsername: channelName,
            key:"AIzaSyCDyE9O8JsibSiwd-D3FlNkuCDQKlYxYeo",
            function (data) {
                $.each(data.items, function (i, item) {
                    console.log(item);
                });
            }
        });
});
