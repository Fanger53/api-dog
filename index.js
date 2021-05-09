const ranImg = document.getElementById('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=0ThWvawvK881Cl1BH9CK8JnPywlNigsf&s=dogs', {mode: 'cors'})
.then(function(response) {
  return response.json();
})
.then(function(response) {
  ranImg.src = response.data.images.original.url;
});