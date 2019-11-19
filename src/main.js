import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Tomagotchi } from './tomagotchi.js';


$(document).ready(function(){
  $('.tamaName').submit(function(event){
    event.preventDefault();
    $('#toHide').hide();
    var name = $('#nameInput').val();
    var tama = new Tomagotchi(name);
      $('#tamaName').text(`Meet your new best friend, ${name}!`)
      let query = "tamagotchi";
      tama.setToilet();
      $('#hideMe').show();


      $('#toiletTitle').text(`Hurry, ${name} will go to the bathroom in 20 seconds!`);

      // $('#toiletCounter').text(tama.toilet);

let request = new XMLHttpRequest();
const url = `https://api.giphy.com/v1/gifs/search?api_key=eA5QrPG0kgbvymKiUi3pJqKZ0ZY54uIB&q=${query}`

request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    console.log(request.open);
    request.send();

    const getElements = function(response) {
      document.getElementById('gif').src = response.data[0].images.downsized_large.url;
    }
  });
});
