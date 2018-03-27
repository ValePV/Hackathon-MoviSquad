$(document).ready(function() {
// Splash versión móvil:
  $(function() {
    setTimeout(function() {
      $('#splash').fadeOut(700);
    }, 3000);
  });

  $('.second-section').hide();
  $('.third_section').hide();
  $('.fourth_section').hide();
  $('.fifth_section').hide();
  /*
  $('.btn_movie').click(function(){
  $('.first_section').hide();
  $('.second_section2').show();
  $('.third_section').hide();
  $('.fourth_section').show();
  $('.fifth_section').hide();
  $('.btn_movie').hide();
  });
  */

  $('.logo').click(function() {
    $('.first_section').show();
    $('.second-section').hide();
    $('.third_section').hide();
    $('.fourth_section').hide();
    $('.fifth').hide();
    $('.btn_movie').show();
  });

  $('#user-photo').click(function() {
    $('#photo').show();
    $('.first_section').hide();
    $('.second-section').hide();
    $('.third_section').hide();
    $('.fourth_section').hide();
    $('.btn_movie').hide();
  });

  $('#bridge1').click(function() {
    $('.first_section').hide();
    $('.second-section').hide();
    $('.third_section').hide();
    $('.fourth_section').show();
    $('.fifth').hide();
    $('.btn_movie').show();
  });

  $('leter').click(function() {
    $('.first_section').hide();
    $('.second-section').hide();
    $('.third_section').hide();
    $('.fourth_section').show();
    $('.fifth').hide();
    $('.btn_movie').show();
  });

  //  ------------------------------------------------------------------
  //  Comentar
  //  ------------------------------------------------------------------

  var todayFeed = new Date();
  var date = todayFeed.getDate();
  var month = todayFeed.getMonth();
  var year = todayFeed.getFullYear();
  var hours = todayFeed.getHours();
  var minutes = todayFeed.getMinutes();
  var fullDate = date + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
  
  $('#sendBtn').click(function() {
    if ($('#comment').val() !== '') {
      $('#commentList').append('<div class="commentTxt"><p>' +
        '<span>' + fullDate + '</span>' + $('#comment').val() +
        '</p></div>'
      );
    }
  });
});

/*
  ------------------------------------------------------------------
  Función Slider
  ------------------------------------------------------------------
*/

$(document).ready(function() {
  var imgItems = $('.slider li').length; // Numero de slides
  var imgPos = 1;
  //  Agregando paginación
  for (i = 1;i <= imgItems; i++) {
    $('.pagination').append('<li class="col-sm-2 col-md-2"><i class="fa fa-circle" aria-hidden="true"></i></li>');
  }

  $('.slider li').hide(); //  ocultar las imagenes
  $('.slider li:first').show();// mostrar la primera imagen
  $('.pagination li:first').css({ 'color' : '#cd6e2e' }); //  cambiar el color del primer icono

  //  Ejecución de las funciones
  $('.pagination li').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);

  //  intervalos en n segundos
  setInterval(function() {
    nextSlider();
  }, 4000);

  //  Funciones
  function pagination() {
    //  variable que se selecciones el elemento que estoy clickeando, index(el valor de la posicion del elemento)
    var paginationPos = $(this).index() + 1;
    //  ocultar y mostrar la imagen correspondiente al icono que hacemos click
    $('.slider li').hide();
    $('.slider li:nth-child(' + paginationPos + ')').fadeIn();
    // cambiar de color el icono segun corresponda
    $('.pagination li').css({ 'color' : '#858585' });
    $(this).css({ 'color' : '#CD6E2E' });

    imgPos = paginationPos;
  }

  function nextSlider() {
    if (imgPos >= imgItems) {
      imgPos = 1;
    } else {
      imgPos++;
    }

    $('.pagination li').css({ 'color' : '#858585' });
    $('.pagination li:nth-child(' + imgPos + ')').css({ 'color' : '#CD6E2E' });
    // ocultar y mostrar la imagen correspondiente al icono que hacemos click
    $('.slider li').hide();
    $('.slider li:nth-child(' + imgPos + ')').fadeIn();
  }

  function prevSlider() {
    if (imgPos <= 1) {
      imgPos = imgItems;
    } else {
      imgPos--;
    }

    $('.pagination li').css({ 'color' : '#858585' });
    $('.pagination li:nth-child(' + imgPos + ')').css({ 'color' : '#CD6E2E' });
    // ocultar y mostrar la imagen correspondiente al icono que hacemos click
    $('.slider li').hide();
    $('.slider li:nth-child(' + imgPos + ')').fadeIn();
  }
});

/*
  ------------------------------------------------------------------
  Función Buscador de Peliculas
  ------------------------------------------------------------------
*/
$(document).ready(function() {
  $('#search-form').on('submit', function(e) {
    $('#contmovies').empty();
    $('.first_section').hide();
    $('.second-section').show();
    let movie = ($('#search-movie').val());
    $('#search-movie').val('');
    //  getKidsMovies(searchText);
    //  $("#input-1").rating();
    getMovies(movie);
    e.preventDefault();
  });
});

function getMovies(movie) {
  $.ajax({
    url: `https://www.omdbapi.com/?s=${movie}&apikey=fed8ba13`,
    type: 'GET', // aca va si sube o baja get o post
    datatype: 'json'
  })
    .done(function(response) { // parametro
      // console.log(response);
      showInfo(response);
    })
    .fail(function() {
      console.log('error en conexión a API');
    });
  
  function showInfo(info) {
    let search = info.Search;
    // console.log(search);
    if (info.Response === 'false') {
      alert('Pelicula no encontrada');
    } else {
      // crea un div por cada resultado
      $('#contmovies, #title, #year, #plot, #actors, #awards, #recaudacion, #country, #director, #genre, #language, #production, #metascore, #imdbRating, #released, #writer, #runtime, #img, #trailer, #results').empty();
      search.forEach(el => {
        // console.log(el.Title);
        $('#contmovies').append(`<div class='title-movie thumbnail card'><img class='img-mov' src='${el.Poster}'><p class='txt_movie'>${el.Title}</p></div>`);
      });

      $('.title-movie').click(function() {
        let newTitle = ($(this).text()); // obtiene el titulo de la pelicula al ser clickeada
        // console.log(newTitle);
        $.ajax({
          url: `https://www.omdbapi.com/?t=${newTitle}&plot=full&apikey=fed8ba13`,
          type: 'GET', // aca va si sube o baja get o post
          datatype: 'json'
        })
          .done(function(response) {
            console.log(response);
            showMovie(response);
          })
          .fail(function() {
            // console.log('error en conexión a API');
          });
      });
    }
  }
  function showMovie(info) {
    if (info.Response === 'false') {
      alert('Pelicula no encontrada');
    } else {
      console.log(info.Title);
      $('.movie-section').hide();
      $('.third_section').show();
      $('#showmovies, #contmovies, #title, #year, #plot, #actors, #awards, #recaudacion, #country, #director, #genre, #language, #production, #metascore, #imdbRating, #released, #writer, #runtime, #img, #trailer, #results').empty();
      $('#show').append(`
          <div class='row'>
            <div class="col-md-3">
              <img src="${info.Poster}">
              <button id="trailer-button" class="btn btn-default btn-trailer" type="button" name="button">Trailer</button>
            </div>
            <div class="col-md-7 col-md-offset-1">
              <h5>Title:</h5> <h3>${info.Title}</h3>
              <h5>Argumento:</h5> <h4>${info.Plot}</h4>
              <h5>Director:</h5> <h4>${info.Director}</h4>
              <h5 class='cont-afterhide'>Producción:</h5> <h4 class='cont-afterhide'>${info.Production}</h4>
              <h5 class='cont-afterhide'>Guión:</h5> <h4 class='cont-afterhide'>${info.Writer}</h4>
              <h5>Protagonistas:</h5> <h4>${info.Actors}</h4>
              <h5 class='cont-afterhide'>Premios:</h5> <h4 class='cont-afterhide'>${info.Awards}</h4>
              <h5 class='cont-afterhide'>Pais:</h5> <h4>${info.Country}</h4>
              <h5 class='cont-afterhide'>Idioma:</h5> <h4 class='cont-afterhide'>${info.Language}</h4>
              <h5 class='cont-afterhide'>Año:</h5> <h4 class='cont-afterhide'>${info.Year}</h4>
              <h5 class='cont-afterhide'>Estreno:</h5> <h4 class='cont-afterhide'>${info.Released}</h4>
              <h5 class='cont-afterhide'>Género:</h5> <h4 class='cont-afterhide'>${info.Genre}</h4>
              <h5 class='cont-afterhide'>Duración:</h5> <h4 class='cont-afterhide'>${info.Runtime}</h4>
              <h5 class='cont-afterhide'>Recaudacion:</h5> <h4 class='cont-afterhide'>${info.BoxOffice}</h4>
              <h5 class='cont-afterhide'>Crítica:</h5> <h4 class='cont-afterhide'>${info.Metascore}</h4>
              <h5 class='cont-afterhide'>Nota del Público:</h5> <h4 class='cont-afterhide'>${info.imdbRating}</h4>
            </div>
          </div>  
          <div class='row'>
            <div id='results'>
            </div>
          </div>
      `);
  
      /*
      $('#title').append(`Titulo: ${info.Title}`);
      $('#year').append(`Año: ${info.Year}`);+
      $('#plot').append(`Historia: ${info.Plot}`);
      $('#actors').append(`Actores Principales: ${info.Actors}`);
      $('#awards').append(`Premios: ${info.Awards}`);
      $('#recaudacion').append(`Recaudacion: ${info.BoxOffice}`);
      $('#country').append(`Pais: ${info.Country}`);
      $('#director').append(`Director: ${info.Director}`);
      $('#genre').append(`Genero: ${info.Genre}`);
      $('#language').append(`Idioma: ${info.Language}`);
      $('#production').append(`Producido por: ${info.Production}`);
      $('#metascore').append(`Nota de la crítica profesional: ${info.Metascore}`);
      $('#imdbRating').append(`Nota del público: ${info.imdbRating}`);
      $('#released').append(`Lanzamiento: ${info.Released}`);
      $('#writer').append(`Escrito por: ${info.Writer}`);
      $('#runtime').append(`Duración: ${info.Runtime}`);
      $('#img').append(`<img src='${info.Poster}'>`);
      $('#trailer').append('<button id="trailer-button" type="button" name="button">trailer</button>');*/
    };

    $('#trailer-button').click(function() {
      let apikey = 'AIzaSyA9Yzrb5VubC6kzQnqCaUMSUd-QiRCtamI';
      $.get(
        'https://www.googleapis.com/youtube/v3/search', {
          part: 'snippet, id',
          q: info.Title + '"official" + "trailer"',
          type: 'video',
          key: apikey,
          maxResults: 1
        }, 
        function(data) {
          // Log data
          // console.log(data);
          $.each(data.items, function(i, item) {
            // variable para almacenar los resultados
            var output = getOutput(item);
            // creacion para mostrar los resultados en el html
            $('#results').append(output);
            $('.cont-afterhide').hide();
          });
        });
    });
  }
  
  function getOutput(item) {
    console.log(item);
    var videoID = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;
    // Build out  string
    var output = `
        <div class='row'>
          <div class='list-left  col-md-3'>
            <a data-fancybox data-type='iframe' href='http://youtube.com/embed/'${videoID}?rel=0><img src='${thumb}'> </a>
          </div>
          <div class='list-right col-md-6 col-md-offset-2'>
            <h3>
              <a data-fancybox data-type='iframe' href='https://youtube.com/embed/'${videoID}?rel=0>${title} </a>
            </h3>
            <small>By
              <span class='cTitle' ${channelTitle}</span> on ${videoDate}
            </small>
            <p>${description}</p>
          </div>
        </div>
        <div class="clearfix"></div>`;
  
    /*
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
                      '';*/
    return output;
  }
}


// FIREBASE
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBosbsodzYp0HFlVLfHKfMJWMM_4WQYttE",
    authDomain: "usuario-90e05.firebaseapp.com",
    databaseURL: "https://usuario-90e05.firebaseio.com",
    projectId: "usuario-90e05",
    storageBucket: "usuario-90e05.appspot.com",
    messagingSenderId: "431818765808"
  };
  firebase.initializeApp(config);

var loginGoogle = document.getElementById('btn-google');
var loginFacebook = document.getElementById('btn-facebook');
var userName = document.getElementById('user-name');
var userImage = document.getElementById('user-img');
var cerrarSesion = document.getElementById('cerrar');
var goBack = document.getElementById('search-btn');


var database = firebase.database();

var userConect = null;
var conectkey = '';

loginGoogle.addEventListener('click', IngresoGoogle);
loginFacebook.addEventListener('click', IngresoFacebook);
cerrarSesion.addEventListener('click', out);



function IngresoGoogle() {
  if(!firebase.auth().currentUser){
    
    var provider = new firebase.auth.GoogleAuthProvider();
    //indico a google que se van a autentificar
    //provider.addScope('https:wwww.googleapis.com/auth/plus.login');

    firebase.auth().signInWithPopup(provider).then (function(result){
      var token = result.credential.accesstoken;
      var user= result.user;
      var name = result.user.displayName;
      var email = result.user.email;

      console.log(user);

       //document.querySelector('span.title').textContent = 'Welcome' + name;
     
    }).catch (function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var erroremail = error.email;
      var credential = error.credential;

      if (errorCode==='auth/acconunt-exists-with-different-credential'){
        alert ('Es el mismo usuario');
      }
    });

  }else{
    firebase.auth().signOut();
    
  }
}

function IngresoFacebook() {
  if(!firebase.auth().currentUser){
    
    var provider = new firebase.auth.FacebookAuthProvider();
    //indico a google que se van a autentificar
    //provider.addScope('https:wwww.googleapis.com/auth/plus.login');

    firebase.auth().signInWithPopup(provider).then (function(result){
      var token = result.credential.accesstoken;
      var user= result.user;
      var name = result.user.displayName;
      
      console.log(user);
      //document.querySelector('span.title').textContent = 'Welcome' + name;

    }).catch (function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var erroremail = error.email;
      var credential = error.credential;

      if (errorCode==='auth/acconunt-exists-with-different-credential'){
        alert ('Es el mismo usuario');
      }
    });
      }else{
    firebase.auth().signOut();
  }
}


function InicializarFire() {

  firebase.auth().onAuthStateChanged(function(user){
    //console.log(user);
    if (user) {
      var displayName = user.displayName;
      var userPhoto = user.photoURL;
      var email = user.email;
      
      $('.user-navb').append('<img class="user-nav" src ='+userPhoto+' >');
      $('.btn-login').addClass('hidden')
      $('.close-session').removeClass('hidden')
      $('.user-info').append('<img class="user-information" src ='+userPhoto+' >')
      $('.info-user').append('<h2>' + displayName + '</h2><h4>' + email + '</h4>')
      // document.querySelector('span.user-name').textContent= displayName;
     // userName.textContent = displayName;
     // if(userPhoto) {
        //userImage.style.backgroundImage = 'url(../' + userPhoto + ')';
       // userImage.style.backgroundImage = 'url(' +userPhoto+ ')';
    // $('.user-navb').append('<img class="user-nav" src ='+userPhoto+' >');
    // } //else {
      // userImage.style.backgroundImage = 'url(../images/profile_placeholder.png)';
      //}
     
     
    } else { 
      firebase.auth().signOut();
      $('.user-navb').empty();
    }
  });
}

//función para log out

function out(){
  firebase.auth().signOut().then(function(){
    console.log("saliendo..");
    $(document).ready(function(){
  window.location = "index.html";
  window.reload();
  //$('#user-img').empty();
 //recargo la página nuevamente
});
})
  .catch(function(error){
 console.log(error);
  });
};

window.onload = function() {
  InicializarFire();
  
};

//END FIREBASE