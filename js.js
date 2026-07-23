const COOKIE_NAME = "cookieConsent";

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

function hasCookieConsent() {
    return localStorage.getItem(COOKIE_NAME) === "true" || getCookie(COOKIE_NAME) === "true";
}

function hideCookieBanner() {
    const banner = document.getElementById("cookie-banner");
    if (banner) {
        banner.style.display = "none";
    }
}

function showCookieBanner() {
    const banner = document.getElementById("cookie-banner");
    if (banner) {
        banner.style.display = "flex";
    }
}

function acceptCookies() {
    localStorage.setItem(COOKIE_NAME, "true");
    document.cookie = "cookieConsent=true; max-age=31536000; path=/";
    hideCookieBanner();
}

const banner = document.getElementById("cookie-banner");
if (banner) {
    if (hasCookieConsent()) {
        hideCookieBanner();
    } else {
        showCookieBanner();
    }
}