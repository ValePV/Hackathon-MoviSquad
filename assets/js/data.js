var pelis = [
    {
      ID: "MOV1", Title: "A Deadly Affair to Remember II: The Final Fight",
      Year: "2018",
      Category: "Mala",
      Type: "Thriller",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYmY4MzExYjctN2JhMC00MzU2LWE1N2UtMzM2ODhkYzIzYTUwXkEyXkFqcGdeQXVyNjE5MTEyNjE@._V1_SX300.jpg"
    },
    {
      ID: "MOV2",
      Title: "Hostage: The True Story of a Kidnapping",
      Year: "2018",
      Category: "Drama, Thriller",
      Type: "movie",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZWQzZjNmNGQtMTljMS00ZjJhLTk4OTgtMTU4MTlhZGNhOTg1XkEyXkFqcGdeQXVyNjgyMTA4NzQ@._V1_SX300.jpg"
    },
    {
      ID: "MOV3",
      Title: "Valerian and the City of a Thousand Planets",
      Year: "2017",
      Category: " Buena",
      Type: "Action, Adventure, Fantasy",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMDAxNDUyNV5BMl5BanBnXkFtZTgwOTc3MzcxMjI@._V1_SX300.jpg"
    },
    {
      ID: "MOV4",
      Title: "The Killing of a Sacred Deer",
      Year: "2017",
      Category: "Muy Buena",
      Type: "Drama, Horror, Mystery",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjU4NDcwOTA2NF5BMl5BanBnXkFtZTgwMjE2OTg4MzI@._V1_SX300.jpg"
    },
    {
      ID: "MOV5",
      Title: "Jim & Andy: The Great Beyond - Featuring a Very Special, Contractually Obligated Mention of Tony Clifton",
      Year: "2017",
      Category: "Buena",
      Type: "Documentary",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3OTY1OTAxNl5BMl5BanBnXkFtZTgwMTI0MTUxNDM@._V1_SX300.jpg"
    },
    {
      ID: "MOV6",
      Title: "Diary of a Wimpy Kid: The Long Haul",
      Year: "2017",
      Category: "Mala",
      Type: "Comedy, Family",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYmMyZDRlNDktMDVmMS00Mjc2LThkNTctZWEyMTY2MjVjZmY5XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_SX300.jpg"
    },
    {
     ID: "MOV7",
     Title: "A Hologram for the King",
     Yea: "2016",
     Category " Buena",
     Typ: " Comedy, Drama, Romance",
     Language: "English",
     Poste: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2MzU1NTg4NV5BMl5BanBnXkFtZTgwNzQ5MjAzODE@._V1_SX300.jpg"
    },
    {
      ID: "MOV8",
      Title: "The Birth of a Nation",
      Year: "2016",
      Category: "Muy Buena",
      Type: " Biography, Drama, History",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5MjI3NzQxMl5BMl5BanBnXkFtZTgwMTUwNjYyOTE@._V1_SX300.jpg"
    },
    {
      ID: "MOV9",
      Title: "The Beatles: Eight Days a Week - The Touring Years",
      Year: "2016",
      Category: "Muy Buena",
      Type: "Documentary, Music ",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NDgwMTk2OV5BMl5BanBnXkFtZTgwNjEzODIyOTE@._V1_SX300.jpg"
    },
    {
      ID: "MOVI1",
      Title: "The Diary of a Teenage Girl",
      Year: "2015",
      Category: "Muy Buena",
      Type: "Drama, Romance",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MTQ3NTgwOF5BMl5BanBnXkFtZTgwMDQ3NTc5NTE@._V1_SX300.jpg"
    },
    {
      ID: "MOVI2",
      Title: "A Cinderella Story: If the Shoe Fits",
      Year: "2016",
      Category: "Buena",
      Type: "Family, Fantasy",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzljMmM0MjktNmRkMC00NWIyLTk3ZDEtNDk1NjNlODUzZjVhXkEyXkFqcGdeQXVyNDgwOTMyMTI@._V1_SX300.jpg"
    },
    {
      ID: "MOVI3",
      Title: "A Walk in the Woods",
      Year: "2015",
      Category: "Buena",
      Type: "Adventure, Biography, Comedy",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2MTkwMzM0NF5BMl5BanBnXkFtZTgwMjA0NDA4NTE@._V1_SX300.jpg"
    },
    {
      ID: "MOVI4",
      Title: "Minimalism: A Documentary About the Important Things",
      Year: "2015",
      Category: "Muy Buena",
      Type: "Documentary",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwNzU1OTEzNV5BMl5BanBnXkFtZTgwODY5NzA3NTE@._V1_SX300.jpg"
    },
    {
      ID: "MOVI5",
      Title: "The Measure of a Man",
      Year: "2015",
      Category: "Buena",
      Type: "Drama",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5ODYyMTExOF5BMl5BanBnXkFtZTgwNDYwMjUzODE@._V1_SX300.jpg"
    },
    {
      ID: "MOVI6",
      Title: "A Million Ways to Die in the West",
      Year: "2014",
      Category: "Buena",
      Type: "Comedy, Romance, Western",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0NDcyNjg0MV5BMl5BanBnXkFtZTgwMzk4NTA4MTE@._V1_SX300.jpg"
    },
    {
      ID: "MOVI7",
      Title: "A Walk Among the Tombstones",
      Year: "2014",
      Category: "Muy Buena",
      Type: "Crime, Drama, Mystery",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3NzY2MTg1M15BMl5BanBnXkFtZTgwODY2Njk4MTE@._V1_SX300.jpg"
    },
    {
      ID: "MOVI8",
      Title: "Pantani: The Accidental Death of a Cyclist",
      Year: "2014",
      Category: "Muy Buena",
      Type: "Documentary, Biography, Sport ",
      Language: "English",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3MTQ1MjY2N15BMl5BanBnXkFtZTgwNTgyMTY5MTE@._V1_SX300.jpg"
    },
    {
      ID: "MOVI9", Title: "Showrunners: The Art of Running a TV Show", Year: "2014", Category: "Buena", Type: "Documentary, Biography ",
      Language: "English", Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzc2NjIzNTI1M15BMl5BanBnXkFtZTgwNTg5MDA5MjE@._V1_SX300.jpg"
    },
  ],



  //agregar la base de datos a la pagina
  for(i = 0; i< pelis.length ; i++){
    $('.showmovies').append('<div class="col-xs-6 col-md-3"><a href="MOV1-A Deadly Affair to Remember II: The Final Fight "" class="thumbnail">' +
      '<img src="' + pelis[i]["poster"] + '"><h4>' + pelis[i]["title"] + '</h5></a></div>');

   /* $('.resta').append("<span class'sect-otherest1'><a href='BAR1-KrossBar-Bar'><div class='rest'>" + 
    "<a href='#modal-restDescription' data-toggle='modal'><img class='restim' src='assets/images/"
    + places[i]['img'] + "'></a>" +
    "</div></a></>");*/

}

// detectar el valor que seleccionamos en el filtro
//.on = cuando sec-style chage(cambie) ejecuta la siguiente función
/*  $('.sec-year').on('change', function(){
    //filtrar elemetos seleccionados
    //paso 1: borrar todos los resta
    $('.showmovies').empty();
    //paso 2: ejecutar el ciclo for que agrega restaurants
    //pero esta vez que agregue el que conicida con el seleccionado
    //variable de restaurant seleccionado
    var yearSel = $(this).val();

    for(i = 0; i< movies.length ; i++){

      if (year == movies[i]['Year']) {
        $(".showmovies").append("<div class='col-xs-6 col-md-3'><a href='#' class='thumbnail'>" +
          "<img src='" + movies[i]['Poster'] + "'><h4>" + movies[i]['Title'] + "</h5></a></div>");
        /*$('.resta').append("<span class'sect-otherest1'><a href='BAR1-KrossBar-Bar'><div class='rest'>" + 
        "<a href='#modal-restDescription' data-toggle='modal'><img class='restim' src='assets/images/"
        + places[i]['img'] + "'></a>" +
        "</div></a></>");*/
/*
}
}
   
  });

$('.sec-type').on('change', function(){
    //filtrar elemetos seleccionados
    //paso 1: borrar todos los resta
    $('.showmovies').empty();
    //paso 2: ejecutar el ciclo for que agrega restaurants
    //pero esta vez que agregue el que conicida con el seleccionado
    //variable de restaurant seleccionado
    var tySel = $(this).val();

    for(i = 0; i< movies.length ; i++){

      if (tySel == movies[i]['Type']) {
        $(".showmovies").append("<div class='col-xs-6 col-md-3'><a href='#' class='thumbnail'>" +
          "<img src='" + movies[i]['Poster'] + "'><h4>" + movies[i]['Title'] + "</h5></a></div>");

        /*$('.resta').append("<span class'sect-otherest1'><a href='BAR1-KrossBar-Bar'><div class='rest'>" + 
        "<a href='#modal-restDescription' data-toggle='modal'><img class='restim' src='assets/images/"
        + places[i]['img'] + "'></a>" +
        "</div></a></>");*/
/*
}
}
   

$('.sec-language').on('change', function(){
    //filtrar elemetos seleccionados
    //paso 1: borrar todos los resta
    $('.showmovies').empty();
    //paso 2: ejecutar el ciclo for que agrega restaurants
    //pero esta vez que agregue el que conicida con el seleccionado
    //variable de restaurant seleccionado
    var langSel = $(this).val();

    for(i = 0; i< movies.length ; i++){

      if (langSel == movies[i]['Language']) {
        $(".showmovies").append("<div class='col-xs-6 col-md-3'><a href='#' class='thumbnail'>" +
          "<img src='" + movies[i]['Poster'] + "'><h4>" + movies[i]['Title'] + "</h5></a></div>");
        
        /*$('.resta').append("<span class'sect-otherest1'><a href='BAR1-KrossBar-Bar'><div class='rest'>" + 
        "<a href='#modal-restDescription' data-toggle='modal'><img class='restim' src='assets/images/"
        + places[i]['img'] + "'></a>" +
        "</div></a></>");*/
/*
}
}
    
});

$('.sec-category').on('change', function(){
    //filtrar elemetos seleccionados
    //paso 1: borrar todos los resta
    $('.showmovies').empty();
    //paso 2: ejecutar el ciclo for que agrega restaurants
    //pero esta vez que agregue el que conicida con el seleccionado
    //variable de restaurant seleccionado
    var catSel = $(this).val();

    for(i = 0; i< movies.length ; i++){

      if (catSel == movies[i]['Category']) {
        $(".showmovies").append("<div class='col-xs-6 col-md-3'><a href='#' class='thumbnail'>" +
          "<img src='" + movies[i]['Poster'] + "'><h4>" + movies[i]['Title'] + "</h5></a></div>");
        
        /*$('.resta').append("<span class'sect-otherest1'><a href='BAR1-KrossBar-Bar'><div class='rest'>" + 
        "<a href='#modal-restDescription' data-toggle='modal'><img class='restim' src='assets/images/"
        + places[i]['img'] + "'></a>" +
        "</div></a></>");*/
/*
}
}
    
});
  