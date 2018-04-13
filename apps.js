//Variables declaration
var channelName = "HoiThanhTinLanhVietNam North Hollywood";
$(document).ready(function(){
    $.get (
        "https://www.googleapis.com/youtube/v3/playlists",{
            part: "contentDetails",
            forUsername: channelName,
            key:"",
            function (data) {
                $.each(data.items, function (i, item) {
                    console.log(item);
                });
            }
        });
});
