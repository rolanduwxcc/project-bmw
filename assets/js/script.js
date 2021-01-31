//------------------------------------------------VARIABLES
var movieInputEl = document.querySelector("#movie");
var movieSearchFormEl = document.querySelector("#movie-search-form");







//-----------------------------------------------FUNCTIONS
var movieSubmitHandler = function(event) {
    event.preventDefault();
    let movieName = movieInputEl.value.trim();
    if (movieName) {
        fetchMovieDataAbout(movieName);
        console.log(movieName);
        movieInputEl.setAttribute("value","");
        console.log(movieName);
    }
};

function fetchMovieDataAbout(searchTerm) {
    console.log(searchTerm);
    if (!searchTerm) {
        searchTerm="Avengers";
    }
    let apiKey="1d01c961";
    let apiUrl="https://www.omdbapi.com/?apikey="+apiKey+"&t="+searchTerm;
    console.log(apiUrl);
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(movieDataJSON){
                // <ul id="movieListInfo">
                //     <li id="movieListInforDesc">Title</li>
                //     <li id="movieListInforDesc">Acotr</li>
                //     <li id="movieListInforDesc">Acotr</li>
                //     <li id="movieListInforDesc">Acotr</li>
                //     <li id="movieListInforDesc">Acotr</li>
                // </ul>
                var ul=$("<ul>");
                ul.attr("id","movieListInfo");
                // ul.text("Movie Info: ")

                //TITLE
                var li1 = $("<li>");
                li1.attr("id","movieListInforDesc");
                li1.text("Title: "+ movieDataJSON.Title);
                console.log(movieDataJSON.Title)
             
                //RELEASED
                var li2 = $("<li>");
                li2.attr("id", "movieListInforDesc");
                li2.text("Release Date: " + movieDataJSON.Released);
                console.log(movieDataJSON.Released)
                //ACTORS
                var li3 = $("<li>");
                li3.attr("id", "movieListInforDesc");
                li3.text("Actors: " + movieDataJSON.Actors);
                console.log(movieDataJSON.Actors)

                //DIRECTOR(S)
                var li4 = $("<li>");
                li4.attr("id", "movieListInforDesc");
                li4.text("Director(s): " +  movieDataJSON.Director);
                console.log(movieDataJSON.Director);

                //RATINGS VIA ROTTEN TOMATOES
                var li5 = $("<li>");
                li5.attr("id", "movieListInforDesc");
                li5.text("Ratings (Rotten Tomatoes): " + movieDataJSON.Ratings[0].Source + " " + movieDataJSON.Ratings[0.].Value)
                console.log(movieDataJSON.Ratings[0].Source + " " + movieDataJSON.Ratings[0.].Value)

                //APPEND DATA TO CIONTAINER
                ul.append(li1);
                ul.append(li2);
                ul.append(li3);
                ul.append(li4);
                ul.append(li5);
                $("#movie-info-container").append(ul)


                //#poster-container
                // < div id = "movie-poster" >
                //     <img src="https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg" id="poster-img">
                // </div>

                var d1=$("<div>");
                d1.attr("id","movie-poster")
                var img=$("<img>");
                img.attr("id", "poster-img");
                img.attr("src",movieDataJSON.Poster)
                console.log(movieDataJSON.Poster)
                d1.append(img);
                $("#poster-container").append(d1)

               

                //description-container
                var d3 = $("<div>");
                d3.attr("id", "movie-description");
                d3.text("Plot: " + movieDataJSON.Plot)
                // console.log(movieDataJSON.Plot)
                // d3.append(d2);
                $("#description-container").append(d3)

                // console.log(movieDataJSON);
                //INSERT FUNCTION CALL HERE
                //call the movie html disply tag and pass JSON
                //**this fetch after probably needs to be somewhere else */
                fetchNewYorkTimesDataAbout(searchTerm);
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
//-------------------------------------

function fetchNewYorkTimesDataAbout(searchTerm) {
    console.log(searchTerm);
    if (!searchTerm) {
        searchTerm="Avengers";
    }
    let apikey="2BRTvk2fDdRpikdcvLeUnTV3zBuddquD";
    let apiUrl="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        searchTerm +
        "&api-key=" +
        apikey;
    console.log(apiUrl);
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
    newsLinksEl.innerHTML = "";
    
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
movieSearchFormEl.addEventListener("submit", movieSubmitHandler);
