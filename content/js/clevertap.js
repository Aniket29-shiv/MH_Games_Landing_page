var clevertap = { event: [], profile: [], region: 'in1', account: [], onUserLogin: [], notifications: [], privacy: [] };
    // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
    clevertap.account.push({ "id": "46W-48Z-R85Z" });
    clevertap.privacy.push({ optOut: false }); //set the flag to true, if the user of the device opts out of sharing their data
    clevertap.privacy.push({ useIP: false }); //set the flag to true, if the user agrees to share their IP data
    (function () {
        var wzrk = document.createElement('script');
        wzrk.type = 'text/javascript';
        wzrk.async = true;
        wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js?v=0';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wzrk, s);
    })();

    

    if(window.location.href.split('?').length > 1){

clevertap.event.push("Page_Visited", {
        "page_url": window.location.href,
    });

if(window.location.href.split('?')[1].split('utm_source=').length > 1){
    
    var utmSource =  window.location.href.split('?')[1].split('utm_source=')[1].split('&')[0];

    clevertap.event[1].utm_source = utmSource;
    
}

if(window.location.href.split('?')[1].split('utm_campaign=').length > 1){
    
    var utmCampaign = window.location.href.split('?')[1].split('utm_campaign=')[1].split('&')[0];  
    clevertap.event[1].utm_campaign = utmCampaign;
    
}

if(window.location.href.split('?')[1].split('utm_medium=').length > 1){
    
    var utmMedium = window.location.href.split('?')[1].split('utm_medium=')[1].split('&')[0];
    clevertap.event[1].utm_medium = utmMedium;
        
}

}
else {
clevertap.event.push("Page_Visited", {
        "page_url": window.location.href,
    });

    
}

function evPush(){

var urlWebpush = window.location.href;
clevertap.event.push("Msite_Download_Button_clicked",{
    "page_url":urlWebpush
});

};
function conveFB(){
        var ph = window.location.href.split('?')[0];
if(document.cookie.match('_fbp') != null){
  var fp = document.cookie.split('_fbp=')[1].split(';')[0];
}

if(document.cookie.match('_fbc') != null){
  var fc = document.cookie.split('_fbc=')[1].split(';')[0];
}
else {
  var fc = '';
}
var ua = navigator.userAgent;

fetch('https://h5analytics.gamepind.com/h5-analytics/api/process', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "eventSource":ph, "userAgent":ua, "fbc":fc, "fbp":fp })
});

};
