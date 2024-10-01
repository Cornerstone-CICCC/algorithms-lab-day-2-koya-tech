// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
    let queryParams = url.split("?")[1];
    let params = queryParams.split("&");
    let obj = {};
    params.forEach(param => {
        let [key, value] = param.split("=");
        obj[key] = value;
    });
    return obj;
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }