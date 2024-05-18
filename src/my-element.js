import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Este es el titulo de mi pagina
       */
      title: { type: String },
      /**
       * Este es mi parrafo 
       */
      paragraph: { type: String },
      /**
       * Esta es la url de la imagen 
       */
      imageUrl: { type: String },
      /**
       * Este es el titulo 1 de mi pagina
       */
      title1: { type: String },
      /**
       * Este es el parrafo 1
       */
      paragraph1: {type: String },
      /** 
       *Este es la url de la imagen 1 
       */
     image1Url: { type: String },
     /**
      * Este es el titulo 2 de mi pagina
      */
     title2: { type: String },
     /**
      * Este es el parrafo 2 
      */
     paragraph2: { type: String },
     /**
      * Esta es la url 2
      */
     image2Url: { type: String },
     /**
      * Este es el titulo 3
      */
     title3: { type: String },
     /**
      * Este es el parrafo 3
      */
     paragraph3: { type: String },
     /**
      * Esta es la imagen 3
      */
     image3Url: { type: String },
     /**
      * Este es titulo 4  
      */
     title4: { type: String },
     /**
      * Este es el parrafo 4
      */
     paragraph4: { type: String },
     /**
      * Esta es la imagen 4
      */
     image4Url: { type: String },
     /**
      * Este es el titulo 5
      */
     title5: { type: String },
     /**
      * Este es el parrafo 5
      */
     paragraph5: { type: String },
     /**
      * Esta es la imagen 5
      */
     image5Url: { type:String },
     /**
      * Este es el titulo 6
      */
     title6: { type: String },
     /**
      * Este es el parrafo 6 
      */
     paragraph6 : { type: String },
     /**
      * Esta es la imagen 6
      */
     image6Url: { type: String },
    }
  }

  constructor() {
    super()
    
    this.title = 'VESTIDOS PARA XV'
    this.paragraph = 'Vestidos y Estilos en Diferentes Colores'
    this.imageUrl = 'https://www.love21.mx/cdn/shop/files/LV511_P_1024x1024.jpg?v=1693266828'
    this.title1 = 'BIENVENIDOS A CASA DE MODA LULU'
    this.paragraph1 = 'Ofrecemos Bonitos y de buena calidad Vestidos para esas hermosas XVeras'
    this.image1Url = 'https://www.love21.mx/cdn/shop/files/LV511_P_1024x1024.jpg?v=1693266828'
    this.title2 = 'Vestidos y estilos en diferentes colores'
    this.paragraph2 = 'Vestidos Rosa con brillitos'
    this.image2Url = 'https://i.ytimg.com/vi/wG0ELySsE80/maxresdefault.jpg'
    this.title3 = 'Vestidos, Azul-Verdes largos'
    this.paragraph3 =  'Vestidos con Olanes y largos Elegantes'
    this.image3Url = 'https://cdn0.bodas.net/article-dress/6753/original/1280/jpg/m633576.jpeg'
    this.title4 = 'Vestidos en color obscuro con tiara'
    this.paragraph4 = 'Vestidos en color negro, azul largos y ampones'
    this.image4Url = 'https://vestidosde15anos.net/wp-content/uploads/2011/03/Vestido-de-15-azul-y-negro.-340x500.jpg'
    this.title5 = 'Vestidos con mo;os en varios colores'
    this.paragraph5 = 'Vestidos con mo;os en cintura y cola'
    this.image5Url = 'https://http2.mlstatic.com/D_NQ_NP_691394-MLM73152627976_122023-O.webp'
    this.title6 = 'Vestidos en color bitono'
    this.paragraph6 = 'Vestidos en Rosa y blanco'
    this.image6Url = 'https://i.pinimg.com/736x/fc/da/ba/fcdabac5af81bd84a86d8beedbaf914e.jpg'

  }

  render() {
    return html`
      <div id="VESTIDOS PARA XV">
        <h1>${this.title}</h1>
        <p>${this.paragraph}</p>
        <img src="${this.imageUrl}">
        <h2>${this.title1}</h2>
        <p>${this.paragraph1}</p>
        <img src="${this.image1Url}">
        <h3>${this.title2}</h2>
        <p>${this.paragraph2}</p>
        <img src="${this.image2Url}">
        <h4>${this.title3}</h4>
        <p>${this.paragraph3}</p>
        <img src="${this.image3Url}">
        <h5>${this.title4}</h5>
        <p>${this.paragraph4}</p>
        <img src="${this.image4Url}">
        <h6>${this.title5}</h6>
        <p>${this.paragraph5}</p>
        <img src="${this.image5Url}">
        <h7>${this.title6}</h7>
        <p>${this.paragraph6}</p>
        <img src="${this.image6Url}">
      
      </div>`


  }

  

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      body{
        background-color: plum;
      }
      #parrafo {
        background-color: chartreuse;
      }
      #parrafo {
        font-family: Georgia
      }
      #parrafo { 
        color: rgb(165, 42, 144);
      }
      #vestidos-para-xv {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: blue;
      }
      
      div{
    padding: 15vw;
    }
    #vestidos-para-xv {
      background-color: cadetblue;
    }
      img {
    width:25vw;
      }
      p {
    font-size:10vh;
      }

    #titulo-1 {
      color: coral;
    }
    #titulo-2 {
      color: aqua;
    }
    #titulo-3 {
      color: chartreuse;
    }
    #titulo-4 {
      color: brown;
    }
    #titulo-5 {
      color: darkgreen;
    }
    #titulo-6 {
      color: darkorchid;
    }
    li{
    font-size: 7vw;

      
    }
    `
  }
}

window.customElements.define('my-element', MyElement)
