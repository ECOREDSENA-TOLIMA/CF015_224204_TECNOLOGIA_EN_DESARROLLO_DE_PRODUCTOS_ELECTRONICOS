<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mt-3(data-aos="fade-up") En este componente se desarrolla cómo el control de calidad es fundamental para la fabricación de productos electrónicos que buscan alcanzar altos estándares en sus características. El siguiente video introduce un poco más en esta temática.
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/IhMisG3yzKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
