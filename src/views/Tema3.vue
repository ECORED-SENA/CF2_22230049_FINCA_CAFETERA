<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Manejo de problemáticas ambientales
    .franja_content.mb-5
      .franja(style='bottom: 9% ; height: 201px ; background: #fcdda2 !important ' )
      .content
        .row.justify-content-center.align-items-center
          .col-lg-5
            figure
              img.rounded-2(src='@/assets/curso/temas/63.png', alt='Texto que describa la imagen')
          .col-lg-7
            p En el componente de manejo de las problemáticas ambientales se establecen las medidas que se deben tomar para la atención de las situaciones evidenciadas en la fase de diagnóstico, teniendo en cuenta la intensidad del problema, sus posibles impactos y la posibilidad de generar otros problemas o situaciones de riesgo para el ambiente.
            br
            br
            p Para que el diseño de las estrategias de manejo de las problemáticas ambientales sea efectivo, es necesario realizar un proceso de diagnóstico riguroso, meticuloso y que abarque diferentes puntos de vista sobre la realidad del territorio.
              br
              br
              |Los datos que debe aportar el diagnóstico son la clave para que las medidas que se tomen para la atención de las situaciones produzcan los resultados esperados.
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Priorización de necesidades
    p.mb-5 Para realizar un manejo eficiente de las problemáticas, es importante delimitarlas, conocer sus causas directas e indirectas y establecer la importancia específica que tiene cada una de ellas dentro del entorno en el que se desarrolla el proyecto.
      br
      br
      |Con miras al abordaje de las problemáticas de una manera integral que conduzca a una priorización efectiva, es recomendable tener en cuenta los siguientes parámetros o atributos.
    .titulo-sexto.color-acento-contenido
      h5 Tabla 6.
      span Atributos de calificación de la matriz de impacto ambiental
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tabla-editada1.mb-5
          table
            caption Nota. Tomada de Gerencia Ambiental de Proyectos (2017).
            thead
              tr.text-center
                th Atributo
                th Definición
            tbody
              tr
                td Naturaleza
                td Determina que el impacto sea positivo o negativo.
              tr
                td Intensidad
                td Grado de afectación que puede producir la acción, va entre 1 y 16 puntos. 
              tr
                td Extensión
                td Área de influencia teórica del impacto. La escala para determinar la extensión tiene los siguientes valores:
                  ul.lista-ul--color.mt-3
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Puntual: 1.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Parcial: 2.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Extenso: 4.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Total: 8.
              tr
                td Duración
                td Tiempo que se cree permanecerá el efecto:
                  ul.lista-ul--color.mt-3
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Fugaz: 1.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Temporal: 2.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Permanente: 4.
              tr
                td Reversibilidad
                td Posibilidad de retornar a las condiciones iniciales previas a la acción. 
                  ul.lista-ul--color.mt-3
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Reversible de manera inmediata: 1.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Reversible a mediano plazo: 2.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Mitigable: 4.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Irrecuperable: 8.
              tr
                td Sinergia
                td Se establece que un impacto es sinérgico si tiene la posibilidad de generar otros impactos indirectos. 
                  ul.lista-ul--color.mt-3
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Sin sinergia: 1.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Sinérgico: 2.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Muy sinérgico: 4.
              tr
                td Acumulación
                td Evalúa el hecho de que un impacto pueda llegar a sumarse con otra situación y por lo tanto aumentar. 
                  ul.lista-ul--color.mt-3
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Simple: 1.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Acumulativo: 4.
              tr
                td Posibilidad de ocurrencia
                td Se refiere a qué tan probable es que el evento se presente:
                  ul.lista-ul--color.mt-3
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Baja: 1.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Media: 2.
                    li
                      i.fas.fa-circle.fa-xs(style=' color: #a75532')
                      | Cierta: 8.
              tr
                td Importancia total del impacto
                td Esta puede tomar valores entre 10 y 92. El valor de los impactos se establece con la siguiente ecuación:

                  br
                  br
                  |Importancia (I) = ± [3IN + 2EX +DU + RV + SI + AC + PR]

                  br
                  br
                  |Donde:

                  br
                  |IN = Valor de la Intensidad del impacto.
                  br
                  |EX = Valor numérico de la extensión del impacto.
                  br
                  |DU = Valor numérico de la duración del impacto.
                  br
                  |RV = Valor numérico de la reversibilidad del impacto.
                  br
                  |SI = Valor numérico de la sinergia del impacto.
                  br
                  |AC = Valor numérico de la acumulación del impacto.
                  br
                  |PR = Valor numérico de la probabilidad de ocurrencia del impacto.
    .row.justify-content-center.mb-5
      .col-lg-10
        p De acuerdo con el valor de importancia total del impacto, este se puede catalogar en irrelevante, bajo, moderado o crítico. Estos valores se plasman en una matriz donde ––se les asignan colores dependiendo del grado de criticidad. 
      .col-lg-4: img(src='@/assets/curso/temas/64.svg' style='width: 292px').m-auto
      .col-lg-5
        row.justify-content-center.align-items-center
        .col-lg-10
          .tabla-editada1.mb-5
            table
              thead
                tr.text-center
                  th Importancia
                  th Valor absoluto de importancia
                  th Color
              tbody
                tr
                  td.text-center Irrelevante
                  td.text-center 20
                  td(style='background-color: #4ba42f ; width: 10%')
                tr
                  td.text-center Bajo
                  td.text-center 21 -45
                  td(style='background-color: #fcef50 ; width: 10%')
                tr
                  td.text-center Moderado
                  td.text-center 46 - 70
                  td(style='background-color: #e58a33 ; width: 10%')
                tr
                  td.text-center Crítico
                  td.text-center 71 - 92
                  td(style='background-color: #d92e20 ; width: 10%')
    .seccion-amarilla.p-5
      p.mb-5 Para la priorización de las problemáticas identificadas en el sistema productivo, es importante observar los rangos de los impactos negativos que se pueden presentar en el proyecto. Igualmente, dentro de la caracterización es posible encontrar aspectos positivos que se pueden consignar también en el documento diagnóstico. 
      p.text-center.fw-bold Estas son los principales problemas ambientales, asociados a los diferentes procesos que se dan en la obtención del café pergamino seco:
      .row.mb-3.justify-content-center
        .col-lg-5
          ul.lista-ul--color.px-4
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Contaminación del suelo por filtrado de la solución agua y fungicida.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Contaminación del suelo por agroquímicos.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Erosión del suelo.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Contaminación con residuos sólidos.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Disminución del potencial productivo del suelo.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Contaminación de fuentes de agua.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Residualidad en el suelo por productos químicos.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Contaminación del recurso hídrico con subproductos del café.
        .col-lg-5: img(src='@/assets/curso/temas/65.jpg')
      p Si bien estas son unas problemáticas comunes a muchos sistemas productivos, cada productor en su predio se puede enfrentar a situaciones particulares dependiendo de las condiciones agroecológicas del predio y a las particularidades socioeconómicas de la región. Sin embargo, es importante hacer el ejercicio de identificación y priorización de necesidades para desarrollar todo lo concerniente a la búsqueda de alternativas de solución.  
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Identificación de alternativas de solución
    p.mb-5 Con la identificación de las problemáticas y la calificación de estas de acuerdo con su grado de importancia, es posible iniciar la construcción del plan de acción para el manejo de estas situaciones. En el análisis de la información es recomendable revisar, uno por uno, los atributos de calificación de la matriz de impacto ambiental y evaluar cuáles de los posibles impactos tienen los valores más altos. Ello, de entrada, señala las problemáticas que ameritan especial atención y que requieren medidas de manejo.
    p.text-center.fw-bold Se recomienda visualizar con atención el recurso que se muestra a continuación y afianzar el saber en lo relacionado <br>con las alternativas de solución y los análisis de riesgos, en el manejo de problemáticas ambientales:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .seccion-amarilla2.p-5
      .row.justify-content-center
        .col-lg-10
          .tarjeta.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/66.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 Anexo
                    p.text-small Para ampliar su conocimiento en lo referente a las alternativas de solución de las problemáticas ambientales, se debe estudiar estudie con atención el contenido del Anexo_1_AlternativasDeSolucion.
                  .col-sm-auto
                    a.boton.boton-amarillo(:href="obtenerLink('/downloads/documento1.pdf')" target="_blank")
                      span.tex Descargar
                      i.fas.fa-file-download
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Planeación 
    p.mb-5 Para el establecimiento de unidades productivas, ambientalmente sostenibles y capaces de producir un café con los más altos estándares de calidad, es necesario adelantar un proceso cuidadoso de planeación en el cual se analicen todos los componentes de la finca cafetera y se estimen tanto potencialidades como aspectos por mejorar desde el punto de vista ambiental, técnico, productivo y socioempresarial. 
    .row.mb-5
      .col-lg-8
        p Por medio de las actividades de planeación, en las cuales se debe pensar la finca como un todo e integrada al ecosistema, es indispensable analizar variables tanto internas como externas que permitan una visión global del territorio y sus particularidades. 
          br
          br
          | Entre los principales beneficios de implementar procesos de planeación en el predio agropecuario se encuentran los siguientes:
        .ps
          ul.lista-ul--color
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Ahorra tiempo y recursos.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Determina las acciones a desarrollar.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Establece la demanda de recursos.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Anticipa los obstáculos y oportunidades.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              | Delimita las áreas del predio.
      .col-lg-4: img(src='@/assets/curso/temas/67.png')
    p.text-center.fw-bold.mb-4 Así mismo, para desarrollar un proceso exitoso de planificación predial, es necesario tener presentes aspectos como los que se describen a continuación:
    .bg-slyde2.p-5.mb-5
      SlyderE
        .row
          .col-lg-5
            h4 Evaluación de la oferta de servicios
            p  Evaluar la oferta de recursos existentes para establecer la manera más eficiente de aprovecharlos y encontrar un uso apropiado, acorde con las características climáticas, edafológicas, ambientales y paisajísticas.
          .col-lg-7: img(src='@/assets/curso/temas/68.jpg')
        .row
          .col-lg-5
            h4 Identificación de requerimientos
            p  En procesos productivos agrícolas, buena parte del éxito recae en la selección del lote, por lo que hay que identificar los requerimientos del cultivo, oferta medioambiental, limitantes y comportamiento de variables agroclimáticas, ya que todos estos elementos inciden, en diferente medida, en la productividad y sostenibilidad de la explotación
          .col-lg-7: img(src='@/assets/curso/temas/69.jpg')
        .row
          .col-lg-5
            h4 Aspectos prácticos y operativos
            p  En la captura de la información básica del predio es recomendable emplear formatos de fácil diligenciamiento, interpretación y análisis con los que se recopila una gran cantidad de información vital para el proceso de planeación del futuro proyecto productivo.
          .col-lg-7: img(src='@/assets/curso/temas/70.jpg')
    p.text-center.fw-bold.mb-5 Para el diseño de un formato de recolección de información, tenga en cuenta las siguientes recomendaciones:
    .row.mb-5.justify-content-center
      .col-lg-10
        ul.lista-ul--color.b-brown
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              p.mb-0 <b>Indicar ubicación del predio:</b> coordenadas, altura sobre el nivel del mar, vereda y nombre de la finca. 
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              p.mb-0 <b>Caracterización familiar:</b> número de integrantes, géneros, edades, escolaridad, tenencia de la tierra, servicios públicos. 
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              p.mb-0 <b>Área del predio y cobertura del suelo:</b> indicar el área y qué área en los diferentes sistemas productivos. De ser posible discriminar edades de los cultivos. Realizar levantamiento cartográfico con GPS.

            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              p.mb-0 <b>Número de explotaciones pecuarias y número de individuos:</b> indicar qué especies se manejan y cuántos animales se tienen en la explotación; de ser posible discriminar edades.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              p.mb-0 <b>Tipo de vegetación predominante:</b> caracterización de la vegetación nativa. En lo posible indicar áreas. 
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              p.mb-0 <b>Fauna nativa:</b> indicar la presencia de animales silvestres.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              p.mb-0 <b>Suelos:</b> de ser posible indicar el tipo de suelos del predio y sus principales características. Relieve predominante, accidentes geográficos.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              p.mb-0 <b>Disponibilidad de agua:</b> indicar las fuentes de abastecimiento de agua para consumo, para riego y animales.
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              p.mb-0 <b>Servicios ecosistémicos:</b> identificar el tipo de servicios ecosistémicos que presta el predio. 
            li.mb-0
              i.fas.fa-circle.fa-xs(style=' color: #a75532')
              p.mb-0 <b>Manejo de registros:</b> establecer si en el predio se cuenta con registros de producción, de labores o de comercialización
    p.text-center.fw-bold Es necesario afianzar su saber en lo referente a las herramientas de planeación; para ello se debe visualizar el recurso que se muestra a continuación y comprender, más y mejor, las principales fuentes de la información que se pueden encontrar en el ámbito predial.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .titulo-cafe.mb-5
      h3.mb-0.text-center.color-secundario.font-weight-bold.me-4
        |Metodologías empleadas
      .titulo-cafe_icon: img(src='@/assets/curso/temas/17.svg' alt='Icono de la categoria')
    p.mb-5 Para el desarrollo de las actividades de planeación estratégica existen dos herramientas que resultan de mucha utilidad, no solo por la cantidad de información que permiten recopilar y analizar, sino por la sencillez, la simplicidad de su aplicación y la validez de sus resultados. Estas dos herramientas son la matriz DOFA y la planeación estratégica.
    .titulo-planta.d-flex.align-items-end.mb-3
      .titulo-planta__texto.me-3
        h3.mb-2 Matriz DOFA
        hr.m-0
      .titulo-planta__icon: img(src='@/assets/curso/temas/21.svg', alt='Texto que describa la imagen' style='width: 36px')
    p.mb-5 La matriz de debilidades, oportunidades, fortalezas y amenazas permite identificar los principales aspectos, internos y externos, que influyen en la operación de la empresa rural. Al respecto de esta herramienta, se debe tener presente que:
    .row.justify-content-center.mb-5.g-5.align-items-center
      .col-lg-4: img(src='@/assets/curso/temas/71.svg')
      .col-lg-6
        ol.lista-ol.span-brown
          li.mb-4
            span.text-bold 1. 
            | Con esta metodología es posible mirar hacia el interior de la empresa rural para identificar las debilidades y fortalezas.
          li.mb-4
            span.text-bold 2. 
            | De igual manera con la aplicación de la matriz DOFA se puede tener una visión de lo que sucede afuera al identificar las oportunidades y amenazas.
          li.mb-4
            span.text-bold 3. 
            | Con base en los cuatro criterios que determinan la matriz DOFA, es posible generar planes de acción a través de la identificación de los aspectos que se llevarán a cabo para superar las debilidades y hacer frente a las amenazas e, igualmente, aprovechar las fortalezas y las oportunidades. 
    .titulo-planta.d-flex.align-items-end.mb-3
      .titulo-planta__texto.me-3
        h3.mb-2 Planeación estratégica PHVA
        hr.m-0
      .titulo-planta__icon: img(src='@/assets/curso/temas/21.svg', alt='Texto que describa la imagen' style='width: 36px')
    p.mb-5 Esta es una de las metodologías más empleadas debido a que es de fácil aplicación y genera resultados bastante concretos. Sobre la planeación estratégica, se indica lo siguiente.
    .row.justify-content-center.mb-5.g-5.align-items-center
      .col-lg-4: img(src='@/assets/curso/temas/72.svg')
      .col-lg-6
        ol.lista-ol.span-brown
          li.mb-4
            span.text-bold 1. 
            | Para llevar a cabo un proceso de planeación estratégica es necesario identificar los objetivos estratégicos de la organización y, a partir de estos, desarrollar una matriz de planeación en la que se definen las actividades necesarias para conseguirlos. 

          li.mb-4
            span.text-bold 2. 
            | Esta secuencia lógica permite analizar varios contextos de la unidad productiva y conseguir una estructura coherente entre lo planeado y lo ejecutado en el terreno.  
          li.mb-4
            span.text-bold 3. 
            | Los procesos de planeación estratégica, generalmente, se acompasan con las fases del ciclo PHVA (planear, hacer, verificar, actuar), también denominado ciclo de mejora continua, a través de los cuales se corrigen las fallas en las organizaciones y evalúa constantemente su funcionamiento.
          li.mb-4
            span.text-bold 4. 
            | Mediante este aprendizaje continuo es posible perfeccionar, cada vez más, los procesos al interior de la organización y aprender de los errores. 
    .titulo-cafe.mb-5
      h3.mb-0.text-center.color-secundario.font-weight-bold.me-4
        |Estimación de recursos
      .titulo-cafe_icon: img(src='@/assets/curso/temas/17.svg' alt='Icono de la categoria')
    p.mb-5 El resultado final del proceso de planeación es la generación de las alternativas de solución a las problemáticas identificadas, las cuales se condensan en un plan de acción. Este plan de acción contiene una secuencia lógica en la cual se establecen los objetivos de la organización, las metas a corto, mediano y largo plazo, los responsables de llevar a cabo las actividades, el tiempo y los recursos necesarios para implementar el plan.
    p.fw-bold.text-center.mb-5 En el siguiente cuadro, se debe analizar el ejemplo que se muestra sobre una matriz de estimación de recursos:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 7.
      span Ejemplo de estimación de recursos a partir de procesos de planeación
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tabla-editada2.mb-5
          table
            thead
              tr.text-center
                th Objetivo general
                th Objetivos específicos
                th Responsables
                th Recursos estimados
            tbody
              tr.tabla-bg-1
                td(rowspan=3).text-center.txt-t-c Aumentar en 10 % la productividad de los cafetales mediante la implementación de planes de fertilización.
                td Capacitar al 100 % de los operarios en implementación de planes de fertilización.
                td Administrador – operarios.
                td Alquiler de salón.
                  br
                  |Ayudas didácticas.
                  br
                  |Transporte.
                  br
                  |Pago de capacitador.
              tr
                td Fertilizar el 100 % de los árboles de café de la finca La Colina.
                td Administrador – operarios.
                td Fertilizante.
                  br
                  |Honorarios operarios.
                  br
                  |Transporte de fertilizante hasta los lotes.

              tr.tabla-bg-1
                td Realizar cuatro planes de fertilización, uno para cada lote sembrado en café en la finca La Colina.
                td Equipo administrativo – contratista.
                td Contratación de laboratorio para análisis de suelos
              tr
                td.text-center(colspan=4) En este ejemplo, los recursos se estiman en función de la meta de aumento en el 10 % de la productividad de los cafetales, mediante la implementación de planes de fertilización.
    p.text-center.fw-bold En la estimación de recursos y la generación de alternativas de solución a problemáticas identificadas, es necesario tener presente que:
    .row.justify-content-center.mb-5
      .col-lg-4: img(src='@/assets/curso/temas/73.jpg')
      .col-lg-6.h6-brown
        h6.mb-0 Orientación a objetivos

        p.mb-4 La estimación de recursos debe obedecer al cumplimiento de los objetivos estratégicos del proyecto, puesto que todas las actividades dentro de la unidad productiva se deben relacionar con alguno de ellos.

        h6.mb-0 Redireccionamiento de acciones
        p.mb-4 En un proceso de planeación estratégica es posible definir objetivos que permitan redireccionar el sistema productivo para conseguir los resultados esperados y dar respuesta a las situaciones encontradas en los procesos de seguimiento. 
        h6.mb-0 Maximización de recursos
        p.mb-4 La planeación es una herramienta supremamente importante para maximizar los recursos y reducir la incertidumbre al interior del sistema productivo. 
















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

<style lang="sass">
.seccion-amarilla
  background-color: #fff5d8
  margin: 0 -3rem
.seccion-amarilla2
  background-color: #fff3bf
  margin: 0 -3rem
  margin-top: -3rem
  padding-top: 6rem !important
.boton-amarillo
  background-color: #ffc200
  span, i
    color: $color-sistema-texto
.b-brown
  b
    color: #cd815b
.span-brown
  span
    color: #cd815b
    font-weight: 800
.h6-brown
  h6
    color: #cd815b
    font-weight: 800
</style>
