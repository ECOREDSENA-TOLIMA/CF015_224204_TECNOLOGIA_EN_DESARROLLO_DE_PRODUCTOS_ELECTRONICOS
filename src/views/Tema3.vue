<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estadística descriptiva

    p.mb-3(data-aos="fade-left") Uno de los tipos de estadística más utilizado es la estadística descriptiva, la cual tiene base en la descripción de los datos recolectados, analizar la muestra de datos, para presentar el estudio, las conclusiones, las relaciones entre los datos para producir estimaciones, pronósticos, posibles tendencias o comportamientos en ambientes similares.  
    p.mb-5(data-aos="fade-left") Esta descripción de fenómenos o eventos vistos desde los datos son de alta importancia para analizar casos sucedidos, prever situaciones o corregir problemas que se están presentando.

    hr.my-5
    .col.sm-12.col-lg-10.offset-lg-1
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En la electrónica y especialmente en la producción la estadística descriptiva, ayuda a controlar la fabricación, las desviaciones de los componentes en la fabricación, en el desarrollo, la cantidad de desperdicio o los beneficios que se reciben en el camino de la continuidad del diseño y prediseño.
            br
            br
            br
            br
      
    .row
      .titulo-sexto.color-primario.mb-3.mt-5(data-aos="fade-left")
        p.titulo.pb-0.mb-0 <b>Tabla 1.</b> <i>Conceptos básicos de estadística</i>

    .row.justify-content-center.align-items-center.mb-3.mt-3
      .col-lg-6 
        figure
          img(src='@/assets/curso/temas/tema3/8.svg', alt='')
    



    //- .col-sm-12.mb-3.col-lg-10.offset-lg-1.mt-3.mb-3
    //-   .tarjeta.color-acento-contenido.p-3
    //-     .row.justify-content-around.align-items-center
    //-       .col-3.col-sm-2.col-lg-1
    //-         img(src="@/assets/curso/temas/tema3/2.svg")
    //-       .col
    //-         .row.justify-content-between.align-items-center
    //-           .col.mb-3.mb-sm-0
    //-             h3 Conceptos básicos de estadística 
    //-             p.text-white.mb-1 Para una mayor información sobre estadística descriptiva, se sugiere revisar el siguiente video.
    //-           .col-sm-auto
    //-             a.boton.color-acento-botones(href="https://www.youtube.com/embed/yEs4o8Gr0Nw)" target="_blank")
    //-               span video
    //-               i.fas.fa-file-video
    
    .row
      .col-sm-12.offset-lg-3.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 2. 
        span #[em  Concepto gráfico de población, muestra e individuo]                  
    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema3/3.svg', alt='')

    p.mb-5.mt-5(data-aos="fade-left") Los principales elementos que conforman la estadística descriptiva se pueden apreciar en la siguiente figura 3.
    
    .row
      .col-sm-12.offset-lg-3.titulo-sexto.color-acento-contenido.mb-5
        h5 Figura 3. 
        span #[em  Elementos de la estadística descriptiva]   
    
    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-10.mb-5
        figure
          img(src='@/assets/curso/temas/tema3/9.svg', alt='')  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-12.offset-lg-1
        .row.justify-content-center.align-items-center
          .col-12.px-0
            p(data-aos="fade-right") La contaminación en diferentes ámbitos y ambientes puede generar en los contactos eléctricos de un circuito procesos de sulfatación que afectan eléctricamente, modificando así el correcto funcionamiento de un equipo electrónico; en casos más extremos, esta sulfatación y contaminación de los contactos puede llegar a generar fallas más graves las cuales puedan ocasionar otras dentro del equipo. La limpieza, entonces, debe garantizar que sus contactos estén libres de todos estos contaminantes, además de ser lo suficientemente cuidadosa para no modificar ni la estructura y la química de los componentes de un equipo electrónico. 
      .col-lg-5.col-12.offset-lg-1(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema3/4.svg', alt='Rutinas de limpieza')

    p.mb-3(data-aos="fade-left") La distribución de frecuencias es la forma de ordenar una serie, puede ser en forma ascendente o descendente, de acuerdo con el objetivo de la investigación o análisis. La aplicación de la distribución de frecuencias, ocasionalmente se podría aplicar al conjunto total de una población, sin embargo, la mayor aplicación es a la muestra de datos, extractada o recogida.
    p.mb-5(data-aos="fade-left") La distribución de las frecuencias, puede ser absoluta, representada por (fi) la cual significa el número de veces que se repite el valor de la variable (xi), por lo regular en la tabla se muestra al final la suma total de las variables absolutas que debe ser igual al número de muestras o número de observaciones. Es muy utilizada en la distribución de frecuencias, la distribución relativa (hi), que se encuentra dividiendo la frecuencia absoluta por el número de datos. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12
          .row.justify-content-center.align-items-center
            .col-12.px-0(data-aos="fade-up")
              .cajon.color-primario
                .row.justify-content-center.align-items-center.py-0.mt-1
                  .col-12.mt-4.mb-4.px-5
                    p.mb-lg-0.lg-mb-5 Es muy usual en las tablas estadísticas mostrar las columnas de las frecuencias absolutas y relativas acumuladas porque ayudan en el análisis del evento.
    
    p.mb-3(data-aos="fade-left") A continuación, se explican las medidas de centralización y de dispersión.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Medidas de centralización")
        .col-md-3.mb-4.mb-md-0.offset-lg-1
          p.mb-3(data-aos="fade-left") #[strong Figura 4.]
          p.mb-3(data-aos="fade-left") #[em Fórmula a la medida]
          figure
            img(src='@/assets/curso/temas/tema3/5.svg', alt='Texto que describa la imagen')
            
        .col-md-7.mb-4.mb-md-0
          p.mb-2(data-aos="fade-right") Dentro de las medidas de centralización se observan la #[strong media aritmética, la mediana y la moda], tomados de la distribución y permiten la ubicación dentro de una escala; el nivel de medida de la variable permite aconsejar cuál es el nivel apropiado para el análisis de la muestra y la población.
          p.mb-2(data-aos="fade-right") #[strong La moda] es el valor que más se repite, es decir la puntuación o cifra que más se repite.
          p.mb-2(data-aos="fade-right") #[strong La mediana] es el valor que divide la distribución por la mitad, esto es, la mitad de casos es superior a la mediana y la otra mitad inferior.
          p.mb-2(data-aos="fade-right") #[strong La media] es el mismo promedio aritmético de una distribución, es la medida de tendencia central de mayor utilización.  Se obtiene por la división de la suma de todos los valores entre el número de casos.  Se representa como y.

      .row(titulo="Medidas de dispersión")
        .col-md-11.mb-4.mb-md-0.offset-lg-1
          p.mb-3(data-aos="fade-left") Las medidas de dispersión indican si una variable tiene diferencias o variaciones mínimas, medianas o grandes.  Son conocidas como rango, varianza y desviación estándar.  
          p.mb-3(data-aos="fade-left") El rango es la diferencia entre la puntuación mayor y la puntuación menor de un conjunto de datos, muestra cuan grande puede ser la variación o cambio.  Su fórmula aritmética es valor máximo menos valor mínimo.
          .col-md-3.mb-4.mb-md-0.offset-lg-5
            p.mb-3(data-aos="fade-center") R = Rmax(x) – Rmin(x)
          p.mb-3(data-aos="fade-left") La varianza es la medida de dispersión obtenida del promedio de cada una de las mediciones de un grupo de datos respecto a la media.  La varianza es expresada en cuadrados.
          .col-md-3.mb-4.mb-md-0.offset-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/6.svg', alt='Texto que describa la imagen')
          p.mb-3(data-aos="fade-left") La desviación estándar también conocida como desviación típica y se define o se calcula como la raíz cuadrada de la varianza.
          .col-md-3.mb-4.mb-md-0.offset-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/7.svg', alt='Texto que describa la imagen')



</template>

<script>
export default {
  name: 'Tema3',
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
