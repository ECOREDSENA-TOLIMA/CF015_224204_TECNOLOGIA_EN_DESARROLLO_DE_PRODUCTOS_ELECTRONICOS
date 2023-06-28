<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Muestreo

    p.mb-3(data-aos="fade-left") Es la técnica de selección de datos de la población, la cual puede ser al azar o por algún otro tipo de método; pueden ser aleatorias y no aleatorias, tal como se presenta en la siguiente figura.

    .row
    .titulo-sexto.color-acento-contenido.mb-0.offset-lg-3(data-aos="fade-left")
      p.titulo.pb-0.mb-0 <b>Figura 5.</b> <i>Muestreo según el tipo de selección</i>           
    
    .row.justify-content-center.align-items-center   
      .col-sm-10.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/1.svg', alt='')

    p.mb-5(data-aos="fade-left") Los planes de muestreo están pensados para determinar el tamaño de la muestra y el criterio para determinarlo.  Es decir, cuántos individuos formarán la muestra y por qué, son conocidos tres tipos de planes de muestreo, ver figura 6.
    .row
    .titulo-sexto.color-acento-contenido.mb-0.offset-lg-3(data-aos="fade-left")
      p.titulo.pb-0.mb-0 <b>Figura 6.</b> <i>Planes de muestreo</i>           
    .row   
      .col-sm-12.mb-3.col-lg-8.offset-lg-2.mt-5
        figure
          img(src='@/assets/curso/temas/tema4/2.jpg', alt='')
    
    p.mb-5(data-aos="fade-left") Así mismo, hay dos técnicas de muestreo, el muestreo simple y el muestreo no probabilístico.

    //ImagenInfograficaB.color-primario
      div(x="15%" y="10%" tooltip="Punto 1" numero="1")
        figure
          img(src='@/assets/curso/temas/tema4/4.svg', alt='alt')
          
      div(x="25%" y="10%" tooltip="Punto 2" numero="2")
        figure
          img(src='@/assets/curso/temas/tema4/6.svg', alt='Texto que describa la imagen')

      div(x="35%" y="10%" tooltip="Punto 3" numero="3")
        figure
          img(src='@/assets/curso/temas/tema4/7.svg', alt='Texto que describa la imagen')
          
      div(x="45%" y="10%" tooltip="Punto 4" numero="4")
        figure
          img(src='@/assets/curso/temas/tema4/8.svg', alt='Texto que describa la imagen') 

      div(x="55%" y="10%" tooltip="Punto 5" numero="5")
        figure
          img(src='@/assets/curso/temas/tema4/9.svg', alt='Texto que describa la imagen')
          
      div(x="65%" y="10%" tooltip="Punto 6" numero="6")
        figure
          img(src='@/assets/curso/temas/tema4/10.svg', alt='Texto que describa la imagen')

      div(x="75%" y="10%" tooltip="Punto 7" numero="7")
        figure
          img(src='@/assets/curso/temas/tema4/11.svg', alt='Texto que describa la imagen')
          
      div(x="85%" y="10%" tooltip="Punto 8" numero="8")
        figure
          img(src='@/assets/curso/temas/tema4/12.svg', alt='Texto que describa la imagen')
    
    .tarjeta.tarjeta--gris.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-12.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/4.svg')
    
        .row.justify-content-center.align-items-center.my-lg-4
          .col-12.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/6.svg')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-12.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/7.svg')
    
        .row.justify-content-center.align-items-center.my-lg-4
          .col-12.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/8.svg')
    
        .row.justify-content-center.align-items-center.my-lg-4
          .col-12.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/9.svg')
    
        .row.justify-content-center.align-items-center.my-lg-4
          .col-12.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/10.svg')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-12.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/11.svg')
    
        .row.justify-content-center.align-items-center.my-lg-4
          .col-12.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/12.svg')
    
    p.mb-5(data-aos="fade-left") Dentro de las características del muestreo, se encuentran las características de los atributos, los cuales hacen referencia a la variable. Estas se presentan de dos tipos (exhaustivos y mutuamente excluyentes). A continuación, se presentan las características del muestreo, ver figura 7.  
    .row
      .titulo-sexto.color-acento-contenido.mb-0.offset-lg-3(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Figura 7.</b> <i>Características del muestreo</i> 

    .row
      .col-sm-12.col-lg-5.mb-4.mb-lg-0.offset-lg-1.mt-3
        .tarjeta--boton.color-primario.p-4(style="height:100%")
          .row.justify-content-center.mb-3
          h3.text-left Exhaustivos
          p.text-small Esta característica ayuda a clasificar toda la observación en función de los atributos que conforman la variable, hace que todas las preguntas se deban responder sin dejar opción a dejar preguntas sin contestar.
      .col-sm-12.col-lg-5.mb-4.mb-lg-0.mt-3
        .tarjeta--boton.color-primario.p-4(style="height:100%")
          .row.justify-content-center.mb-3
          h3.text-left Mutuamente excluyente
          p.text-small Esta característica permite clasificar todas las observaciones exclusivamente en un solo atributo.

    .row
      .col-sm-12.col-lg-5.mb-4.mb-lg-0.offset-lg-1.mt-3
        .tarjeta--boton.color-primario.p-4(style="height:100%")
          .row.justify-content-center.mb-3
          h3.text-left Eficiencia
          p.text-small La característica del muestreo por conglomerados es la eficiencia, porque tiene un doble complemento de la variabilidad.
      .col-sm-12.col-lg-5.mb-4.mb-lg-0.mt-3
        .tarjeta--boton.color-primario.p-4(style="height:100%")
          .row.justify-content-center.mb-3
          h3.text-left Azar
          p.text-small La característica del muestreo aleatorio simple es el azar. 

    p.mt-3(data-aos="fade-left") En la investigación cualitativa el tamaño de la muestra no es tan importante como en la investigación cuantitativa. De acuerdo con López (2004), el tamaño de la muestra depende de lo que se desee estudiar. Otra característica de la muestra en un estudio cualitativo es contar con casos que posean y brinden la información requerida. Lo que se quiere es captar información rica, abundante y de profundidad de cada caso seleccionado. Es por esto por lo que mucho del éxito de este tipo de investigación dependerá de la capacidad del investigador para observar y para analizar e interpretar información.
    p.mb-3(data-aos="fade-left") Ahora bien, en cuanto a los resultados del muestreo, estos están relacionados con el análisis y la investigación en sí procurada con la estadística.  Los resultados pueden ser acertados o erróneos, consideración que puede ser subjetiva en algunas ocasiones o revisada contra los hechos.
    p.mb-3(data-aos="fade-left") Los resultados del muestreo pueden ser de conocimiento, así:

    ul.lista-ul--color
      li
        |• Exploratorio.
      li
        |• De orientación.
      li
        |• Clínicos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12
          .row.justify-content-center.align-items-center
            .col-12.px-0(data-aos="fade-up")
              .cajon.color-primario
                .row.justify-content-center.align-items-center.py-0.mt-1
                  .col-12.mt-4.mb-4.px-5
                    p.mb-lg-0.lg-mb-5 En los resultados de muestreo se pueden presentar limitaciones:  cuando los resultados no son representativos o se presenta ambigüedad en los resultados.

    p.mt-3(data-aos="fade-left") Respecto del análisis, de acuerdo con <b>Mantilla, F. (2015),</b> los resultados del muestreo sirven para realizar los siguientes tipos de análisis y determinar el tipo de investigación, ver figura 8.
    .row
    .titulo-sexto.color-acento-contenido.mb-0.offset-lg-3(data-aos="fade-left")
      p.titulo.pb-0.mb-0 <b>Figura 8.</b> <i>Resultados del muestreo</i>           
    .row   
      .col-sm-12.mb-3.col-lg-8.offset-lg-2.mt-5
        figure
          img(src='@/assets/curso/temas/tema4/13.svg', alt='')
    p.mt-3(data-aos="fade-left") Finalmente, la aceptación de lotes se caracteriza por la regla de decisión de aceptarlo o no, basado en la toma de una muestra al azar del respectivo lote.  Así se demuestra la calidad del lote estudiado con la inspección de una muestra, esta opción es muy utilizada en la revisión inicial de productos electrónicos.
    p.mt-3(data-aos="fade-left") La aceptación de muestreo vista desde una curva permite encontrar los siguientes puntos característicos, de acuerdo con Ruiz Falcó, A. (2006):

    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="NCA (NIVEL DE CALIDAD ACEPTABLE)")
          .col-md-12.mb-4.mb-md-0
            p.mt-3(data-aos="fade-left") En inglés AQL (Acceptable Quality Level).  Es el valor de p (c en el caso de defectos) que tiene una probabilidad de aceptación de 0.95. La probabilidad de rechazo de un lote con estas características, 05.0=α, se denomina riesgo del fabricante. 
        .row(titulo="CL (CALIDAD LÍMITE)")
          .col-md-12.mb-4.mb-md-0
            p.mt-3(data-aos="fade-left") En inglés QL (Quality Limit) o LTPD (Lot Tolerance Percent Defective).  Es el valor de p (c   en el caso de defectos) que tiene una probabilidad de aceptación de 0.10. La probabilidad de aceptación de un lote con estas características, 10.0=β, se denomina riesgo del consumidor.
  
    p.mt-3.mb-3(data-aos="fade-left") Si se habla del muestreo como método de control de calidad en la producción se podría analizar de la siguiente manera:

      ul.lista-ul--color.mt-3.mb-5
        li
          |•	Cuando se realiza el empaquetado de los lotes después de la fabricación se definen las variables.
        li
          |•	El cliente al recibir analiza el plan de muestreo de aceptación con el que se define si el lote cumple o no con las condiciones establecidas. Para este caso un γ que representa a Gamma en el alfabeto griego
        li
          |•	Si el análisis arroja un valor fuera de lo definido como aceptación se procede a rechazar el lote.
        li
          |•	Si el análisis arroja un valor dentro de lo definido como aceptación se procede a aceptar el lote.

    .row
    .titulo-sexto.color-acento-contenido.mb-0.offset-lg-3(data-aos="fade-left")
      p.titulo.pb-0.mb-0 <b>Figura 9.</b> <i>Muestreo de aceptación de productos defectuosos</i>

    .row.justify-content-around.align-items-center.mt-5
      .col-sm-8.mt-5-mb-5
        img(src="@/assets/curso/temas/tema4/15.svg")

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
