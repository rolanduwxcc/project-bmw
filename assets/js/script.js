//------------------------------------------------VARIABLES








//-----------------------------------------------FUNCTIONS
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
    let apiUrl="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Evans,Chris&api-key="+apikey;

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(nytDataJSON) {
                // console.log(nytDataJSON);
                //INSERT FUNCTION CALL HERE MAYBE
                //call the news building html display tag and pass nytDataJSON
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




//-------------------------------------------LISTENERS and CALLS
