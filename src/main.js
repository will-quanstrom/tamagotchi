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
    console.log(tama);
  });
});
