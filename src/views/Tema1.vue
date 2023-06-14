<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Implementación del control de calidad

    p.mt-3(data-aos="fade-up") La implementación del control de calidad permite que se cumplan protocolos que aseguren la calidad del producto a desarrollar; en otras palabras, que el producto diseñado, sea el producto fabricado. Dicha implementación permite que los clientes externos tengan la confianza del producto a recibir, los clientes internos no malogren el resultado y utilicen las piezas planeadas y los proveedores se acojan a los lineamientos de calidad de la empresa.
    p.mt-3(data-aos="fade-up") La implementación del control de calidad se establece en distintos aspectos y puede abarcar varias normas, tal como se presenta en la siguiente figura 1.

    .row
      .col-sm-12.offset-lg-3.titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 1 
        span #[em  Implementación de calidad]
    .row   
      .col-sm-12.col-lg-10.offset-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/1.svg', alt='')
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
