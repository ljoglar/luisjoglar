
function checkCookieBeforeLoadingEmbedd(embedEl) {
    var userAcceptedCookies = document.cookie.split('; ').find(row => row.startsWith('userAcceptedCookies='));
    if (userAcceptedCookies) {
        document.getElementById('youtubeEmbed').style.display = 'block';
    }
}

let embedds = document.querySelectorAll('[id^=article-embedd]'); 
for(var i = 0; i < embedds.length; i++){
   let embedd = embedds[i].value;
   console.log(embedds);
   // Do something with textToWrite
}
