function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    createCookie(name,"",-1);
}
function toogleReadMore(){
    let cookieEl = document.getElementById('cookie-notice');
    let styleCookieEl = window.getComputedStyle(cookieEl);
    let currentBottomCookieEl = styleCookieEl.getPropertyValue('bottom');
    cookieEl.style.setProperty("bottom", currentBottomCookieEl == "0px" ?  "-155px" : "0px");
    let cookieMoreInfoButton = document.getElementById('cookie-read-more');
    let buttonText = cookieMoreInfoButton.innerText;
    cookieMoreInfoButton.innerText = buttonText == "MORE INFO" ? "LESS INFO" : "MORE INFO"
}

if(readCookie('cookie-notice-dismissed')=='true') {
} else {
    document.getElementById('cookie-notice').style.display = 'block';
}
document.getElementById('cookie-notice-accept').addEventListener("click",function() {
    createCookie('cookie-notice-dismissed','true',31);
    document.getElementById('cookie-notice').style.display = 'none';
    location.reload();
});
document.getElementById('cookie-read-more').addEventListener("click",function() {
    toogleReadMore('cookie-read-more');
});

