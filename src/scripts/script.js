window.onload = function() {
    let userAgent = navigator.userAgent.toLowerCase();
    
    //ios(아이폰, 아이패드, 아이팟) 전용 css 적용
    if (userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipad") > -1 || userAgent.indexOf("ipod") > -1) {
        let cssIosLink = document.createElement("link");

        cssIosLink.href = "../src/styles/css/style-ios.css";
        cssIosLink.async = false;
        cssIosLink.rel = "stylesheet";
        cssIosLink.type = "text/css";

        document.head.appendChild(cssIosLink);
    }

    //모바일에서 100vh 오류 해결방법
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

