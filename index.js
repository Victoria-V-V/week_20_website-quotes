document.addEventListener("DOMContentLoaded", function (event) {
    getQuote();
});

function getQuote() {
    fetch('https://favqs.com/api/qotd')
        .then(response => response.json())
        .then(quote => {
            console.log(quote);
            document.querySelector(".author").innerText = quote.quote.author;
            document.querySelector(".quote").innerText = quote.quote.body;
        })
        .catch(error => console.log(error));
}
