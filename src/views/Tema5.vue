<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Probabilidades
    p.mb-3(data-aos="fade-left") Definir probabilidad es bastante fácil porque viene de su nombre, lo probable, lo posible. Se relaciona con la posibilidad de que un evento ocurra o no, mide ese valor de probabilidad de acuerdo con los resultados de la muestra.  Un evento aleatorio tiene un mayor o menor grado de que suceda por diferentes motivos respecto de cada fenómeno o investigación en desarrollo.
    p.mb-3(data-aos="fade-left") La probabilidad está determinada por la frecuencia con la cual se repite el hecho o el evento, se basa en las matemáticas con la teoría de probabilidades y tiene aplicación en todas las ciencias y actividades. Mirando desde el punto de vista estadístico, la probabilidad se considera relacionada con la variable aleatoria y la variación de dicha variable en que sí ocurre el hecho o que no suceda.

    hr.my-5
    .col.sm-12.col-lg-10.offset-lg-1
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La probabilidad está relacionada con la estadística por estar unidas donde se registran los sucesos, realmente la probabilidad es una parte de la estadística.  Su origen etimológico proviene del latín «#[em probabilitas]» o «#[em posibilitatis]» que significan probar o comprobar y la terminación tat, cualidad.  Esto es, la cualidad de probar o de comprobar.

    p.mt-3(data-aos="fade-left") Los elementos de la probabilidad permiten establecer la conexión entre la ciencia y la estadística misma, en forma de una conexión para expresar en lenguaje los datos probables.  Permiten analizar y determinar cómo la información de la muestra es concluyente con el fenómeno en estudio.  La población muestra todos los elementos posibles y los elementos de probabilidad, así como el valor posible de la muestra seleccionada.
    p.mb-3(data-aos="fade-left") Los elementos de probabilidad tienen la responsabilidad de analizar y concluir si los datos extraídos de la muestra son considerables o no.  Siempre van a presentar la conclusión de la muestra y de la población en general.
    p.mb-3(data-aos="fade-left") A continuación, se exponen las distintas clasificaciones que se dan de la distribución probabilística.

    TabsA.color-primario
      .tarjeta.color-primario--borde.p-4(titulo="Distribuciones de probabilidad ")
        p Las distribuciones de probabilidad son clasificadas en:
        ul.lista-ul--color
          li
          |• #[strong Discretas:] toma sus valores con cierta posibilidad.
          li
          |• #[strong Continuas:] no se puede presentar en forma tabular.
          li
          |• #[strong Conjuntas:] se utilizan para registrar los datos o resultados simultáneos de diferentes variables.

      .tarjeta.color-primario--borde.p-4(titulo="Probabilidades discretas")
        p Las probabilidades discretas pueden ser:
        ul.lista-ul--color
          li
          |• #[strong Distribución binomial y multinomial:] se utiliza cuando se realizan pruebas repetidas con dos resultados cada uno, generalmente éxito o fracaso, cara o sello.  Utilizado en la fabricación o ensamble, resultado defectuoso o no.
          li
          |• #[strong Distribución hipergeométrica:] similar a la distribución binomial, pero se diferencia que no tiene independencia y no realiza reemplazos de la muestra.
          li
          |• #[strong Distribución binomial negativa y geométrica:] sus probabilidades dependen del número de éxitos deseados y de la probabilidad de éxito en una prueba.
          li
          |• #[strong Distribución de Poisson:] está basada en experimentos que producen valores numéricos de una variable aleatoria X, el número de resultados que ocurren durante un intervalo de tiempo determinado o en una región específica, se denominan experimentos de Poisson. El intervalo de tiempo puede ser de diferente duración, como un minuto, un día, una semana, un mes o un año.

      .tarjeta.color-primario--borde.p-4(titulo="Probabilidades continuas")
        p Las probabilidades continuas son:
        ul.lista-ul--color
          li
          |• #[strong Distribución continua uniforme:] es una de las distribuciones más simples de la estadística, se caracteriza por su función de densidad.
          li
          |• #[strong Distribución normal:] es la distribución continua, más utilizada e importante en la estadística, se caracteriza porque describe muchos eventos de fenómenos analizados en diferentes campos, técnicos, sociales y científicos.
          li
          |• #[strong Distribución gamma y exponencial:] se derivan de la distribución normal, pero se caracterizan por tener diferentes niveles de densidad.  Tienen gran aplicación en la teoría de colas aplicada en las telecomunicaciones y en problemas de confiabilidad.
          li
          |• #[strong Distribución chi cuadrada:] es una variación importante de la distribución gamma, que utiliza el parámetro “grados de libertad”.  Es importante para la inferencia estadística.
          li
          |• #[strong Distribución logarítmica normal:] se aplica en casos en que una transformación logarítmica natural tiene como resultado una distribución normal.


</template>

<script>
export default {
  name: 'Tema5',
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
