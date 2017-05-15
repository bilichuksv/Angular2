'use strict';
(function() {

    function Gallery (items) {        
        this.DOMElements = {
            galleryContainer : document.querySelector("#galleryContainer"),
            inputFilmName  : document.querySelector("#inputFilmName")
         };

        this.eventHolder = $({});
        this.filmReqEventName = "filmReqwest";
        this.description = "<p>Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station.</p>";
        this.init();
    }
    
    Gallery.prototype = {
        
        init : function() {
           this.initListeners();
        },
        
        buildGallery : function(data) {
            console.log(data);
            this.DOMElements.inputFilmName.value = '';
            this.DOMElements.galleryContainer.innerHTML = '';
            var item;
            for (let i = 0; i < data.Search.length; i++) {
                item = data.Search[i];
                this.DOMElements.galleryContainer.innerHTML += `<div class="ImgContainer col-sm-4" >
                                                                    <div class="thumbnail">
                                                                        <img  src="${item.Poster}" height="700px" alt="${item.Title}">
                                                                        <div class="caption">
                                                                            <h4><a href="#">${item.Title}</a></h4>
                                                                            <h5>Year: ${item.Year}</h5>
                                                                            <h5>${this.description}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>`;
            }
            
        },

        initListeners : function() {
           this.DOMElements.inputFilmName.addEventListener("change", () => {
               if (!this.DOMElements.inputFilmName.value) {return};
                this.eventHolder.trigger(this.filmReqEventName , [this.DOMElements.inputFilmName.value]);
            });
        } 
    }
    
    window.app = window.app || {};
    window.app.Gallery = Gallery;
    
}());
