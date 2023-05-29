const miAplicacion = Vue.createApp({
        //se asigna a la constante ParamiAplicacion definida como.
        //En la sección components, se registran los componentes personalizados 
        //(componente1, componente2, componente3, componente4, componente5) con 
        //sus respectivos nombres de etiqueta ('home', 'alquiler', 'combos', 'sobre', 'mifooter').
        components: {
        'home': componente1,
        'alquiler': componente2,
        'combos': componente3,
        'sobre': componente4,
        'mifooter': componente5
    },
    // En la sección data, se define el objeto de datos con las propiedades
        data() {
            return {
                home_visible: false,
                alquiler_visible: false,
                combos_visible: false,
                sobre_visible: false
            }
    },
    mounted() {
        // sección "home" será visible por defecto cuando la aplicación se cargue.
        this.home_visible = true
    },
    methods: {
    //El método show(componente) se ejecuta cuando se hace clic en uno de los botones del menú de navegación. 
        show(componente) {
        
    // el método establece las propiedades de visibilidad correspondientes y oculta todas las demás secciones.
            this.home_visible = false
            this.alquiler_visible = false
            this.combos_visible = false
            this.sobre_visible = false
    //para limpiar la consola y luego se muestra el componente seleccionado mediante console.log(componente).
            console.clear()
            console.log(componente)
            if (componente == "home") {
                this.home_visible = true
            } else if (componente == "alquiler") {
                this.receta_visible = true
            } else if (componente == "combos") {
                this.cocina_visible = true
            } else if (componente == "sobre") {
                this.sobre_visible = true
            }
        }
    }
//instancia de Vue se monta en el elemento HTML con el ID "app" mediante .mount("#app").
}).mount("#app")