const componente1 = {
    // Datos del Home
    template: 
        `
    <div class="container">
        <div class="section1">
            <div class="fondoGrupo1 gradiente">
                <div class="textGrupo1 dflex">
                    <div class="col parte1">
                        <h1></h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore id incidunt, itaque eaque provident quis rerum possimus. Rerum accusamus temporibus, obcaecati sed ut magni nam nobis natus eius corporis.</p>                       
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore id incidunt, itaque eaque provident quis rerum possimus. Rerum accusamus temporibus, obcaecati sed ut magni nam nobis natus eius corporis.</p>

                        <!-- <a href="#">
                            <button>LEER MÁS</button>
                        </a> -->
                    </div>
                    <div class="col parte2">
                    <img src="" alt="logo travelstrat" />
                    </div>
                </div>
            </div>
        </div>
        <div class="section2">
        <h2>Alquileres en las ciudades más buscadas de Argentina</h2>

            <div class="block dflex">
                <div class="card">
                    <div class="card_img">
                    <img src="./assets/img/cardProv/SLA.jpg" alt="salta" srcset="">
                    </div>
                    <div class="card_body">
                        <h4>Salta</h4>
                    </div>
                    <div class="card_body">
                        <a href="#">
                            <button>Ver mas</button>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <div class="card_img">
                    <img src="./assets/img/cardProv/BRC.jpg" alt="Bariloche" srcset="">
                    </div>
                    <div class="card_body">
                        <h4>Bariloche</h4>
                    </div>
                    <div class="card_body">
                        <a href="#">
                            <button>Ver mas</button>
                        </a>
                    </div>
                </div>
            <div class="card">
                <div class="card_img">
                <img src="./assets/img/cardProv/COR.jpg" alt="cordoba" srcset="">
                </div>
                <div class="card_body">
                    <h4>Cordoba</h4>
                </div>
                <div class="card_body">
                    <a href="#">
                        <button>Ver mas</button>
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="card_img">
                <img src="./assets/img/cardProv/MDQ.jpg" alt="Mardel" srcset="">
                </div>
                <div class="card_body">
                    <h4>Mar del Plata</h4>
                </div>
                <div class="card_body">
                    <a href="#">
                        <button>Ver mas</button>
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="card_img">
                <img src="./assets/img/cardProv/USH.jpg" alt="Ushuaia" srcset="">
                </div>
                <div class="card_body">
                    <h4>Ushuaia</h4>
                </div>
                <div class="card_body">
                    <a href="#">
                        <button>Ver mas</button>
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="card_img">
                <img src="./assets/img/cardProv/FTE.jpg" alt="Calafate" srcset="">
                </div>
                <div class="card_body">
                    <h4>Calafate</h4>
                </div>
                <div class="card_body">
                    <a href="#">
                        <button>Ver mas</button>
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="card_img">
                <img src="./assets/img/cardProv/TUC.jpg" alt="tucumán" srcset="">
                </div>
                <div class="card_body">
                    <h4>Tucumán</h4>
                </div>
                <div class="card_body">
                    <a href="#">
                        <button>Ver mas</button>
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="card_img">
                <img src="./assets/img/cardProv/JUY.jpg" alt="jujuy" srcset="">
                </div>
                <div class="card_body">
                    <h4>Jujuy</h4>
                </div>
                <div class="card_body">
                    <a href="#">
                        <button>Ver mas</button>
                    </a>
                </div>
            </div>
            <div class="card">
                <div class="card_img">
                <img src="./assets/img/cardProv/SDE.jpg" alt="Santiago del Estero" srcset="">
                </div>
                <div class="card_body">
                    <h4>Santiago del Estero</h4>
                </div>
                <div class="card_body">
                    <a href="#">
                        <button>Ver mas</button>
                    </a>
                </div>
            </div>
            </div>
        </div>
    </div>
    `
}
const componente2 = {
    // Datos de los alquileres
    template:  
    `
    <div class="container"><br>
        <b>Descubrí las mejores ofertas en alquileres para tus vacaciones</b><br><br>
    
        <div class="ubicacion">
            <div class="mapa"> MAPA
            </div>
        </div>   
        <div class="container2">
        </p><b>Beneficios:</b><br><br>
        Buscá tu alojamiento en la ciudad que quieras en cualquier lado de Argentina y compará precios con el buscador de alquileres de TravelStrat.</p>
        <br>
        </div>
    </div>
    `
}
const componente3 = {
    // Datos de la combos
    template: 
    `
    <div class="container"><br>
        <b>La cocina</b>
    </div>
    <div class="container2">
    <p>La cocina es el sitio en el cual se prepara la comida.
       Puede ser el ambiente dedicado a esa tarea en un hogar 
       o el espacio específico en un restaurante. 
       En la cocina pueden lavarse, cortarse, hervirse, asarse,
       fritarse o guisarse los alimentos.</p>

    <div class="container">
       <img src="img/cocina.jpg" alt="cocina por dentro" style=" width: 85%; max-width: 800px;">
    </div>
    <p>El diseño de una cocina de restaurante (más en general
    una cocina profesional) es el resultado de un trabajo en
    equipo, en donde las personas que lo dirigen se involucran
    en la organización de los espacios y de las funciones.</p>
     </div>
    `
}
const componente4 = {
    // Quienes somos
    template: 
    `
    <div class="container"><br>
        <b>¿Quienes somos?</b>
    </div>
    <div class="container2">
    <p>Lorem</p>

    <div class="container">
       <img src="img/cocineros.jpeg" alt="cocineros" style=" width: 85%; max-width: 800px;">
    </div>
    <p>Usamos productos de primera calidad y nuestras porciones
     son abundantes.</p>
    </div>
    `
}
const componente5 = {
    // Footer
    template: 
    `
    <div class="container">
        <div id="footer" class="footer">
            <div class="grupo1_footer">
                <div class="box1">
                    <h2>¡Ahorra tiempo y dinero!</h2>
                    <br>
                    <a href="#" target="_blank">Registrate para que te enviemos mejores ofertas </a>
                    <form>
                    <input type="email" placeholder="Ingrese su correo electrónico">
                    <button type="submit">Suscribirse</button>
                </form>
                    </div>
                <div class="box2">
                <img id="imgFooter" src="../PROYECT/js-vue-componentes/img/LOGO.svg" alt="logoFooter" srcset="">
                </div>
            </div>
            <div class="grupo2_footer">
                <p><span>TravelStrat © 2023 Copyright:Todos los derechos reservados.
                </span></p>
            </div>
        </div>
    </div>
    `
}
