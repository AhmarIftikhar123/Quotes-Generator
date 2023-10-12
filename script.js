const quote = document.getElementById("quote");

const author = document.getElementById("author");

const gen_btn = document.getElementById("gen_btn");

const tweet = document.getElementById("tweet");

let url = "https://api.quotable.io/random";

async function generate_quote() {
  let res = await fetch(url);
  var data = await res.json();

  console.log(data);

  quote.textContent = `"${data.content}"`;
  author.textContent = data.author;
}

function twitter() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quote.textContent +
    "----By" + author.textContent,
    "Tweet Page",
    "width=500,height=200"
  );
}

tweet.addEventListener("click", twitter);

gen_btn.addEventListener("click", generate_quote);

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        generate_quote();
    }
});
