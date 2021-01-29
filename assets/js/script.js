//------------------------------------------------VARIABLES








//-----------------------------------------------FUNCTIONS
function fetchMovieDataAbout(searchTerm) {
    if (!searchTerm) {
        searchTerm="Avengers";
    }
    let apiKey="1d01c961x";
    let apiUrl="http://www.omdbapi.com/?apikey="+apiKey+"&t="+searchTerm;

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

function fetchNewsDataAbout(searchTerm) {
    if (!searchTerm) {
        searchTerm="Avengers";
    }
    let apikey="d5cbca68e3a4433cb167b442f2efa9da";
    let url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2021-01-29&' +
          'sortBy=popularity&' +
          'apiKey=' + apikey;

    let req = new Request(url);

    fetch(req).then(function(response) {
        if (response.ok) {
            response.json().then(function(newsDataJSON) {
                console.log(newsDataJSON);
                //INSER FUNCTION CALL HERE MAYBE
                //call the news html display tag and pass JSON
            });    
        }
        else {
            alert("Error: " + response.statusText);
        }
    })
    .catch(function(error) {
        alert("Unable to connect to NewsAPI!");
    });
}






//-------------------------------------------LISTENERS and CALLS
