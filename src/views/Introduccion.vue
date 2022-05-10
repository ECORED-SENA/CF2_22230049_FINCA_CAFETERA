<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg-introduccion
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.text-center.mb-5 Le damos la bienvenida al componente <b>“Prevención, mitigación y control de problemáticas ambientales en la finca cafetera”.</b>
      br
      |Para comenzar satisfactoriamente este recorrido, explore el recurso que se muestra a continuación:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/pYbpc-s3e1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.bg-introduccion
  background-image: url('../assets/curso/bg-intro.png')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  border-radius: 20px 20px 20px 20px
</style>
