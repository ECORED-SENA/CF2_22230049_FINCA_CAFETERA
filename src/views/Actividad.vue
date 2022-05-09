<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/arrastrar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Relacione los conceptos
        p.mb-4 Reforzar los conceptos relacionados con los usos del suelo y la normatividad aplicable a los procesos de ordenamiento territorial.  
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Indique en la columna “B” el numeral correspondiente al concepto expuesto en la columna A. 
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/seleccion-multiple.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Cuestionario de opción múltiple
        p.mb-4 Afianzar el manejo de conceptos relacionados con el diagnóstico ambiental y la implementación de medidas de manejo de las problemáticas identificadas. 
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Seleccione la respuesta correcta según corresponda.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad2/.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece


</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
