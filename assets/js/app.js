$(document).ready(function(){
// Splash versión móvil:
  $(function() {
    setTimeout(function() {
      $('#splash').fadeOut(700);
    }, 3000);
});

  $('.second_section2').hide();
  $('.third_section').hide();
  $('.fourth_section').hide();
  $('.fifth_section').hide();

  $('.btn_movie').click(function(){
  $('.first_section').hide();
  $('.second_section2').show();
  $('.third_section').hide();
  $('.fourth_section').show();
  $('.fifth_section').hide();
  $('.btn_movie').hide();
  });


  $('.logo').click(function(){
    $('.first_section').show();
    $('.second_section2').hide();
    $('.third_section').hide();
    $('.fourth_section').hide();
    $('.fifth').hide();
    $('.btn_movie').show();
  });


  $('#detprofile').click(function(){
    $('.fifth_section').show();
    $('.first_section').hide();
    $('.second_section2').hide();
    $('.third_section').hide();
    $('.fourth_section').hide();
    $('.btn_movie').hide();
  });

  $('.logout-profile').click(function(){
    $('.first_section').show();
    $('.second_section2').hide();
    $('.third_section').hide();
    $('.fourth_section').hide();
    $('.fifth').hide();
    $('.btn_movie').show();
  });

  $('#bridge1').click(function(){
    $('.first_section').hide();
    $('.second_section2').hide();
    $('.third_section').hide();
    $('.fourth_section').show();
    $('.fifth').hide();
    $('.btn_movie').show();
  });

  $('leter').click(function(){
    $('.first_section').hide();
    $('.second_section2').hide();
    $('.third_section').hide();
    $('.fourth_section').show();
    $('.fifth').hide();
    $('.btn_movie').show();
  });



/*------------------------------------------------------------------
Comentar
------------------------------------------------------------------*/

var todayFeed = new Date();
    var date = todayFeed.getDate();
    var month = todayFeed.getMonth();
    var year = todayFeed.getFullYear();
    var hours = todayFeed.getHours();
    var minutes = todayFeed.getMinutes();
    var fullDate = date +'/'+ month +'/'+ year +' '+ hours +':'+ minutes
$('#sendBtn').click(function() {
    if ($('#comment').val() !== "") {
        $('#commentList').append(
          "<div class='commentTxt'>" +
            "<p>" + 
              "<span>  " + fullDate + " </span>" + $('#comment').val() +
            "</p>" +
          "</div>"  
        );
      }
  });
});

/*------------------------------------------------------------------
Comentar
------------------------------------------------------------------*/
/*------------------------------------------------------------------
Función Slider
------------------------------------------------------------------*/
$(document).ready(function(){
  var imgItems = $('.slider li').length; //Numero de slides
  var imgPos = 1;
  //Agregando paginación
  for(i = 1;i <= imgItems; i++){
    $('.pagination').append('<li class="col-sm-2 col-md-2"><i class="fa fa-circle" aria-hidden="true"></i></li>');
  }
  
  $('.slider li').hide(); //ocultar las imagenes
  $('.slider li:first').show();//mostrar la primera imagen
  $('.pagination li:first').css({'color':'#cd6e2e'}); //cambiar el color del primer icono

  //Ejecución de las funciones
  $('.pagination li').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);
  
  //intervalos en n segundos
  setInterval(function(){
    nextSlider();
  }, 4000);
  //Funciones
  function pagination(){
    //variable que se selecciones el elemento que estoy clickeando, index(el valor de la posicion del elemento)
    var paginationPos = $(this).index() + 1;
    //ocultar y mostrar la imagen correspondiente al icono que hacemos click
    $('.slider li').hide();
    $('.slider li:nth-child('+ paginationPos +')').fadeIn();
    //cambiar de color el icono segun corresponda
    $('.pagination li').css({'color':'#858585'});
    $(this).css({'color':'#CD6E2E'});

    imgPos = paginationPos;
  }

  function nextSlider(){
    if(imgPos >= imgItems){
      imgPos = 1;
    } else {
      imgPos++;
    }

    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color':'#CD6E2E'});
    //ocultar y mostrar la imagen correspondiente al icono que hacemos click
    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }

  function prevSlider(){
    if(imgPos <= 1){
      imgPos = imgItems;
    } else {
      imgPos--;
    }

    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color':'#CD6E2E'});
    //ocultar y mostrar la imagen correspondiente al icono que hacemos click
    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }


});

/*------------------------------------------------------------------
Función Slider

/*------------------------------------------------------------------
Función Buscador de Peliculas
------------------------------------------------------------------*/
$(document).ready(function(){
  // codigo Waleska
 $("#search-form").on("submit", function(e){
   $('#contmovies').html('');
   $('.first_section').hide();
  var searchText = ($("#search-movie").val());
  //getKidsMovies(searchText);
  //$("#input-1").rating();
  getMovies(searchText);
  e.preventDefault();

 });
});

function getMovies(searchText){
  $.get("http://www.omdbapi.com/?apikey=54ac6e61&s="+searchText)
  .then( function(response) {

    var movies=response.Search;
    console.log(movies);
      for(var i=0 ; i<movies.length ; i++){
        $("#contmovies").append("<div class='col-md-3'><div class='thumbnail card containpost'>" +
          "<img width='130%' src='" + movies[i].Poster + "'><a href='#four-vis' class='bridge'>" +
          "<h5 class='leter' onclick='seleccionar(event);'>" + movies[i].Title + "</h5></a></div></div>");
    }
    })
  .catch( function(err) {
    alert( "$.get failed!" );
  } );
};

//codigo Aileen
var apikey = 'AIzaSyA9Yzrb5VubC6kzQnqCaUMSUd-QiRCtamI';

$(function() {



    var searchField = $('#search-movie');
    var icon = $('#search-btn');

    $('#search-form').submit( function(e) {
        e.preventDefault();
    });
});
var resEvent = none
function seleccionar(event){
  resEvent = event.target.innerHTML;
  console.log(event.target.innerHTML);

};
  console.log(resEvent);
//funcion para al buscar
function search() {
    // borre los resultados anteriores
    $('#results').html('');
    // variable que contiene al valor ingresado por el usuario
    var q = resEvent

    // run get request on API
    $.get(
      "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q + '"official" + "trailer"',
            type: 'video',
            key: apikey,
            maxResults: 1
        }, function(data) {
            // Log data
            console.log(data);
            $.each(data.items, function(i, item) {
                // variable para almacenar los resultados
                var output = getOutput(item);

              // creacion para mostrar los resultados en el html
                $('#results').append(output);
            });

        });
};

// Build output
function getOutput(item) {
    var videoID = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;

    // Build output string
    var output =  '<div>' +
                '<div class="list-left">' +
                '<a data-fancybox data-type="iframe"  href="https://youtube.com/embed/' + videoID + '?rel=0">' +

                  '<img src="' + thumb + '">' +
        '</a>'+
                '</div>' +
                '<div class="list-right">' +
                  '<h3><a data-fancybox data-type="iframe"  href="https://youtube.com/embed/' + videoID + '?rel=0">' + title + '</a></h3>' +
                  '<small>By <span class="cTitle">' + channelTitle + '</span> on ' + videoDate + '</small>' +
                  '<p>' + description + '</p>' +
                '</div>' +
              '</div>' +
              '<div class="clearfix"></div>' +
              '';
    return output;
}