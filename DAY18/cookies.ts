// Cookies are small strings of data that are stored directly in the browser. They are a part of the HTTP protocol, defined by the RFC 6265 specification.

// Cookies are usually set by a web-server using the response Set-Cookie HTTP-header. Then, the browser automatically adds them to (almost) every request to the same domain using the Cookie HTTP-header

// there should be some cookies on the website you are visiting
alert(document.cookie); // cookie1=value1; cookie2=value2;...

// updating cookie
document.cookie = "user=John"; // update only cookie named 'user'
alert(document.cookie); // show all cookies

// deleting cookie
document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
alert(document.cookie); // show all cookies


//! Cookies are stored in the browser, and can be accessed by the server.

// cookie example with regular expressions

// returns the cookie with the given name,
// or undefined if not found
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}