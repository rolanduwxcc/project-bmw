//------------------------------------------------VARIABLES








//-----------------------------------------------FUNCTIONS
function getMovieDate(searchTerm) {
    if (!searchTerm) {
        searchTerm="Avengers";
    }
    var apiKey="1d01c961";
    var apiUrl="http://www.omdbapi.com/?apikey="+apiKey+"&t="+searchTerm;

    fetch(apiUrl)
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(movieDataJSON){
                console.log(movieDataJSON);
        } 
        else {
            alert("Error: " + response.statusText);            
        }
    })
    .catch(function(error) {
        alert("Unable to connect to OpenWeather!");
    });

}








//-------------------------------------------LISTENERS and CALLS
