//------------------------------------------------VARIABLES
var movieInputEl = document.querySelector("#movie");
var movieSearchFormEl = document.querySelector("#movie-search-form");







//-----------------------------------------------FUNCTIONS
var movieSubmitHandler = function(event) {
    event.preventDefault();
    var movieName = movieInputEl.value.trim();
    if (movieName) {
        fetchMovieDataAbout(movieName);
        movieInputEl.value = "";
    }
};
function fetchMovieDataAbout(searchTerm) {
    if (!searchTerm) {
        searchTerm="Avengers";
    }
    let apiKey="1d01c961";
    let apiUrl="https://www.omdbapi.com/?apikey="+apiKey+"&t="+searchTerm;

    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(movieDataJSON){
                //console.log(movieDataJSON);
                //INSERT FUNCTION CALL HERE
                //call the movie html disply tag and pass JSON
            });
        }
        else {
            alert("Error: " + response.statusText);            
        }
    })
    .catch(function(error) {
        alert("Unable to connect to OMDB!");
    });
}

// function fetchNewsDataAbout(searchTerm) {
//     if (!searchTerm) {
//         searchTerm="Avengers";
//     }
//     let apikey="d5cbca68e3a4433cb167b442f2efa9da";
//     let apiUrl = 'https://newsapi.org/v2/everything?' +
//           'q=' + searchTerm + "&" +
//           'from=2021-01-29&' +
//           'sortBy=popularity&' +
//           'apiKey=' + apikey;

//     // let req = new Request(url);

//     fetch(apiUrl).then(function(response) {
//         if (response.ok) {
//             response.json().then(function(newsDataJSON) {
//                 console.log(newsDataJSON);
//                 //INSER FUNCTION CALL HERE MAYBE
//                 //call the news html display tag and pass newsDataJSON
//             });    
//         }
//         else {
//             alert("Error: " + response.statusText);
//         }
//     })
//     .catch(function(error) {
//         alert("Unable to connect to NewsAPI!");
//     });
// }

function fetchNewYorkTimesDataAbout(searchTerm) {
    if (!searchTerm) {
        searchTerm="Avengers";
    }
    let apikey="2BRTvk2fDdRpikdcvLeUnTV3zBuddquD";
    let apiUrl="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        searchTerm +
        "&api-key=" +
        apikey;

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(nytDataJSON) {
                // console.log(nytDataJSON);
                //INSERT FUNCTION CALL HERE MAYBE
                //call the news building html display tag and pass nytDataJSON
                buildNewsHTML(nytDataJSON);
            });
        }
        else {
            alert("Error: " + response.statusText);
        }
    })
    .catch(function(error) {
        alert("Unable to connect to New York Times online!");
    });
}

function buildNewsHTML(nytDataJSON) {
    let articlesArray=nytDataJSON.response.docs;
    let article_url;
    let article_text;
    let imageUrlPrefix = "https://www.nytimes.com/";
    
    let newsLinksEl=document.getElementById("news-links");
    
    for (let i = 0; i < 5; i++) {
        const article = articlesArray[i];
        
        let newsCardEl=document.createElement("div");
        newsCardEl.setAttribute("class","card");
        
        // let imageEl=document.createElement("img");
        // imageEl.setAttribute("src",imageUrlPrefix + article.multimedia[0].url);
        // imageEl.setAttribute("alt","thumbnail");
        // newsCardEl.appendChild(imageEl);

        //<a href="url">link text</a>
        let articleLinkEl=document.createElement("a");
        articleLinkEl.setAttribute("href",article.web_url);
        articleLinkEl.textContent = article.headline.main;
        newsCardEl.appendChild(articleLinkEl);

        newsLinksEl.appendChild(newsCardEl);

    }
}
//-------------------------------------------LISTENERS and CALLS
movieSearchFormEl.addEventListener("submit", fetchMovieDataAbout);
