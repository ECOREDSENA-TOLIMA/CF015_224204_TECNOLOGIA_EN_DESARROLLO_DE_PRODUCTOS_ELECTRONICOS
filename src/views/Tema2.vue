<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manipulación de datos

    p.mb-5(data-aos="fade-up") Los datos para las tabletas de circuitos impresos se deben mantener protegidos para no tener cambios en los valores de los componentes, ni en sus características, y así conservar la información fidedigna de las capas, conectores, número de capas y circuitos especiales.

    
    hr.my-5
    .col.sm-12.col-lg-10.offset-lg-1
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los datos deben ser manipulados de acuerdo con el protocolo de calidad del fabricante seleccionado por el cliente (ordenador del pedido), los datos deben ser respetados y no pueden ser manipulados; en caso de necesitar, debe ser consultado con el cliente.
            br
            br
            br
            br
            br
    
    p.mt-5(data-aos="fade-up") Dentro de la gestión de datos, existen las #[strong gráficas de control], las cuales permiten revisar el estado del cumplimiento de los protocolos de calidad y ver las variaciones que se presentan en diferentes variables para controlar si están dentro de los parámetros de variación aceptados para no afectar la calidad del proceso final.
    p.mb-3(data-aos="fade-up") Hay distintos tipos de gráficas de acuerdo con la necesidad requerida. A continuación, se explica brevemente cada una de ellas.
              
    
    .row.justify.content-center.align-items-center
      .col-10
        LineaTiempoE.color-primario.mb-5.mt-5
          .row(titulo="1")
            .col-lg-3.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/2.svg', alt='')
            .col-lg-8.mb-4.mb-lg-0
              h4.text.small Gráficas de barras
              p.text.small Pueden ser #[strong verticales u horizontales], se pueden ordenar en forma #[strong cronológica/ alfabéticamente] para facilitar la lectura y/o comparación de la información.  Se utilizan para comparar magnitudes o ver la evolución de una variable a medir. 
              p.text.small Las gráficas de barras también se pueden clasificar por la #[strong posición de las barras, sencillas, agrupadas y apiladas].

          .row.justify.content-center.align-items-center(titulo="2")
              .col-lg-3.mb-4
                figure
                  img.img200(src='@/assets/curso/temas/tema2/3.svg', alt='alt')
              .col-lg-8.mb-4.mb-lg-0
                h4.text.small Gráficos de línea
                p.text.small También existen los gráficos de líneas que usualmente se utilizan para #[strong presentaciones relacionadas] con el tiempo y son de tipo horizontal.
                
          .row.justify.content-center.align-items-center(titulo="3")
              .col-lg-3.mb-4
                figure
                  img.img200(src='@/assets/curso/temas/tema2/4.svg', alt='alt')
              .col-lg-8.mb-4.mb-lg-0
                h4.text.small Histograma
                p.text.small Es una presentación del gráfico de barras, en #[strong forma continua] dentro de un #[strong plano cartesiano]. Son muy utilizados en relación a la variable tiempo. 
                
          .row.justify.content-center.align-items-center(titulo="4")
              .col-lg-3.mb-4
                figure
                  img.img200(src='@/assets/curso/temas/tema2/5.svg', alt='alt')
              .col-lg-8.mb-4.mb-lg-0
                h4.text.small Pareto
                p.text.small Dentro de las barras, es muy usado el gráfico de Pareto, que muestra la información organizada por el #[strong orden de frecuencia] y se relaciona con una línea basada en la frecuencia de la barra conectada a la siguiente.
                
          .row.justify.content-center.align-items-center(titulo="5")
              .col-lg-3.mb-4
                figure
                  img.img200(src='@/assets/curso/temas/tema2/6.svg', alt='alt')
              .col-lg-8.mb-4.mb-lg-0
                h4.text.small Gráficas por sectores
                p.text.small En los tipos de gráficas se encuentran las gráficas por sectores, basadas en una #[strong circunferencia] que muestra por partes la #[strong frecuencia correspondiente a la variable], ya sea continua o discreta; el círculo representa el 100 % de la muestra o de la población. 
                
          .row.justify.content-center.align-items-center(titulo="6")
              .col-lg-3.mb-4
                figure
                  img.img200(src='@/assets/curso/temas/tema2/7.svg', alt='alt')
              .col-lg-8.mb-4.mb-lg-0
                h4.text.small Pictograma
                p.text.small Pictograma, representada mediante figuras la frecuencia de la variable, está basado en las barras, las cuales se reemplazan por una #[strong figura representativa], especialmente asociada a la población analizada; por ejemplo, en población humana se utilizan símbolos de una persona, en café, sacos de café y otros casos, como vehículos para ventas de carros o mantenimientos, transistores o computadores en temas relacionados con tecnología. Pueden ser vistos en forma #[strong horizontal o vertical], al igual que las gráficas de barras que los originan.
                
          .row.justify.content-center.align-items-center(titulo="7")
              .col-lg-3.mb-4
                figure
                  img.img200(src='@/assets/curso/temas/tema2/8.svg', alt='alt')
              .col-lg-8.mb-4.mb-lg-0
                h4.text.small Gráficos de dispersión
                p.text.small En los gráficos de dispersión se muestra la relación entre dos variables. Pueden mostrar #[strong correlación nula, positiva, negativa,] no lineal o en ocasiones, para visualizar mejor la dispersión, se acompaña de una #[strong línea o recta de regresión definida] gracias a un modelo matemático, denominado ajuste lineal.
                
          .row.justify.content-center.align-items-center(titulo="8")
              .col-lg-3.mb-4
                figure
                  img.img200(src='@/assets/curso/temas/tema2/9.svg', alt='alt')
              .col-lg-8.mb-4.mb-lg-0
                h4.text.small Cartogramas
                p.text.small Son mapas estadísticos que representan información de una variable referenciada a #[strong zonas o regiones,] como departamentos, países o continentes entre algunos y la información se muestra con colores que identifican la medida o frecuencia de la variable.
      
    p.mt-3(data-aos="fade-up") Diferentes actores y autores del tema estadístico hablan de los métodos de aplicación como los métodos estadísticos, los cuales son procedimientos para la recolección de datos numéricos o de valoración mediante diferentes procesos o técnicas como recolección, conteo y/o recuento, presentación, análisis y descripción.

    hr.my-5
    .col.sm-12.col-lg-10.offset-lg-1
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/10.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-5 Los métodos de aplicación estadística se utilizan para realizar investigaciones sociales, económicas, matemáticas, científicas y muchas otras como mercadeo, que estarían incluidas en las económicas. Buscan conocer tendencias, comprobar teorías o hipótesis y validarlas.  Estos métodos se caracterizan de acuerdo con el carácter de la investigación.          
            br
            br
            br
    br       
    .row
      .col-lg-10.offset-lg-1
        .cajon.color-primario.p-4
          p La estadística se clasifica en clásica y bayesiana, la estadística clásica maneja la estadística descriptiva y la inferencial, en el otro lado la estadística bayesiana se basa en la aplicación del teorema de Bayes.


</template>

<script>
export default {
  name: 'Tema2',
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
