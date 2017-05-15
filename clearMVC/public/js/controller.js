(function(){
  
    let model = window.app.model;
    let Gallery = window.app.Gallery;
    let gallery = null;
    let defaultFilms = "lord";

    function bindViewFilmReqest() {
        gallery.eventHolder.on(gallery.filmReqEventName, (event, filmName) => getFilmList(filmName));
    }

    function bindModelFilmResponse() {
        model.eventHolder.on(model.filmRespEventName, (event, filmName) => renderGallery(filmName));
    }

    function getFilmList(filmName) {
         model.getFilms(filmName);
    }

    function renderGallery(filmName) {
        gallery.buildGallery(filmName);
    }

    function bindEvents(){
        bindViewFilmReqest();
        bindModelFilmResponse();
    }

    function initGallery(){
        gallery = new Gallery();   
    }

    function init() {
        initGallery();
        bindEvents();
        model.getFilms(defaultFilms);
    }
    
    init();
    
}())
