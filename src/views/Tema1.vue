<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Uso del suelo
    .banner-1.p-5.mb-5
      .row.justify-content-end
        .col-lg-8
          p El suelo es uno de los principales recursos para la humanidad y para el sustento de la vida en el planeta ya que, además de proveer los elementos que nutren a las plantas, es importante para el sostenimiento de la mayoría de las actividades humanas y la satisfacción de sus necesidades más básicas: alimento, agua y refugio. 
            br
            br
            |Sobre el suelo, es posible enunciar algunas particularidades, en el marco de la producción cafetera y agrícola, en general:
          .d-flex.justify-content-center.text-sistema
            a.boton.color-acento-contenido.indicador__container(@click="modal1 = true").mx-3
                span <b>Recurso proveedor</b>
                .indicador--click(v-if="mostrarIndicador")
            a.boton.color-acento-contenido.indicador__container(@click="modal2 = true").mx-3
                span <b>Recurso de conflictos</b>
                .indicador--click(v-if="mostrarIndicador")
            a.boton.color-acento-contenido.indicador__container(@click="modal3 = true").mx-3
                span <b>Recurso regulado</b>
                .indicador--click(v-if="mostrarIndicador")
    .modales-botones
      ModalA(:abrir-modal.sync="modal1")
        div
          h5 Recursos proveedor
          p El suelo también es la base de industrias como la minería y la construcción, las cuales dependen enteramente de lo que este provea.
      ModalA(:abrir-modal.sync="modal2")
        div
          h5 Recurso de conflictos
          p El suelo, en tanto recurso, es uno de los bienes más codiciados y por el cual se han producido enfrentamientos y conflictos a lo largo de la historia entre individuos y entre comunidades enteras.
      ModalA(:abrir-modal.sync="modal3")
        div
          h5 Recurso regulado 
          p Para reducir conflictos asociados con el acceso al suelo y para ordenar su aprovechamiento, los gobiernos del mundo han estructurado diversas maneras de regular la propiedad y obtener los mejores beneficios con principios de equidad y sostenibilidad. 
    p.mb-5.text-center <b>De acuerdo con la normatividad colombiana, las clases de suelo que se han catalogado son las siguientes:</b>
    .row.justify-content-center.align-items-center.mb-0.mb-lg-5
      .col-lg-9
        .imagen-infografica-1
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/0.svg', alt='Texto que describa la imagen')
            .tarjeta.p-3(x="32%" y="13.8%" numero="")
              h6.mb-0 Suelo de expansión urbana
              p.mb-0 Son áreas con aptitud para el desarrollo de actividades constructivas que se encuentran definidas para futuros proyectos urbanísticos. 
            .tarjeta.p-3(x="67.2%" y="13.8%" numero="")
              h6.mb-0 Suelo suburbano
              p.mb-0 Son áreas de transición entre el suelo rural y el suelo urbano. Se diferencian de las zonas de expansión urbana en que el desarrollo de actividades urbanísticas se puede desarrollar con ciertas restricciones.
            .tarjeta.p-3(x="13.8%" y="89%" numero="")
              h6.mb-0 Suelo urbano
              p.mb-0 A esta categoría pertenecen las zonas que cuentan con elementos como infraestructura vial y redes de servicios públicos.
            .tarjeta.p-3(x="48.9%" y="89%" numero="")
              h6.mb-0 Suelo rural
              p.mb-0 Estos suelos no son aptos para el desarrollo urbanístico bien sea por ser prioritarios para la agricultura o por razones de oportunidad. Son destinados a la agricultura, ganadería, producción forestal y explotación de recursos naturales. 
            .tarjeta.p-3(x="84.9%" y="89%" numero="")
              h6.mb-0 Suelo de protección
              p.mb-0 Son suelos en los que la actividad urbanística cuenta con serias restricciones debido a su interés geográfico, paisajístico o ambiental. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .recuadro-tierra.p-3
          img.d-none.d-lg-block(src='@/assets/curso/temas/1.svg', alt='Texto que describa la imagen')
          .row.justify-content-end
            .col-lg-10
              h6.mb-0 ¡Atención!
              p.mb-0 Con base en esta clasificación, se delimitan las áreas en las que es posible desarrollar determinadas actividades humanas sin que estas interfieran con los intereses generales de la población o con el bienestar de las comunidades asentadas en un área en particular.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Normatividad aplicable
    .franja_content.mb-5
      .franja(style='bottom: 19%')
      .content
        .row.justify-content-center
          .col-lg-8
            p En materia de normatividad existen diferentes leyes y artículos en los que se definen las bases y principios en materia de ordenamiento del territorio para resolver los conflictos asociados al uso del suelo y delimitar las áreas que resultan prioritarias para los intereses de la comunidad en general.
              br 
              br
              | Con la expedición de la Ley 2 de 1959, Colombia tuvo un avance importante en materia de delimitación de áreas de interés general al establecer las que se convertirían en áreas para el desarrollo de la economía forestal y protección de los suelos, las aguas y la vida silvestre. Fue así como con esta ley se introdujeron conceptos como las “zonas forestales protectoras” y los “bosques de interés general”. 
          .col-lg-4
            figure
              img.rounded-2(src='@/assets/curso/temas/2.jpg', alt='Texto que describa la imagen')
    p.mb-5.fw-bold.text-center En la siguiente tabla, se presenta la normatividad del ordenamiento territorial y uso del suelo en Colombia.
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span Diferencias entre conflictos y problemas ambientales
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tabla-editada1.mb-5
          table
            caption Nota. Tomada de Sánchez y Holguín (2014).
            thead
              tr.text-center
                th.text-center Año
                th.text-center Norma
                th Generalidades
            tbody
              tr
                td.text-center 1959
                td.text-center Ley 2 de 1959 - Congreso de la República
                td Normatividad sobre economía forestal de la Nación y conservación de recursos naturales renovables.
              tr
                td.text-center 1973
                td.text-center Ley 23 de 1973 - Congreso de la República
                td Facultades al presidente de la república para expedir el Código Nacional de Recursos Naturales Renovables y Protección del Medio Ambiente.
              tr
                td.text-center 1974
                td.text-center Decreto-Ley 2811 de 1974 - Presidencia de la República
                td Código Nacional del Recursos Naturales Renovables y Protección del Medio Ambiente.
              tr
                td.text-center 1989
                td.text-center Ley 9 de 1989 - Congreso de la República.
                td Normas sobre planes de desarrollo municipal, compraventa y expropiación de bienes y se dictan otras disposiciones.
              tr
                td.text-center 1991
                td.text-center Constitución Política de Colombia
                td Arts. 79 y 80: planificación en el manejo y aprovechamiento de recursos naturales. Art. 288: ley orgánica de ordenamiento territorial. Art. 297: formación de nuevos departamentos. Art. 307: entidades territoriales. Art. 319: conformación de áreas metropolitanas. Art. transitorio 38: constitución de la Comisión de Ordenamiento Territorial.
              tr
                td.text-center 1993
                td.text-center Ley 99 de 1993 - Congreso de la República
                td Creación del Ministerio del Medio Ambiente y organización del SINA (Sistema Nacional Ambiental).
              tr
                td.text-center 1994
                td.text-center Ley 152 de 1994 - Congreso de la República
                td Procedimientos y mecanismos para la elaboración, aprobación, ejecución, seguimiento, evaluación y control de los planes de desarrollo.
              tr
                td.text-center 1997
                td.text-center Ley 388 de 1997 - Congreso de la República
                td Modifica la Ley 9 de 1989 y la ley 2 de 1991. Dispone las bases para el ordenamiento territorial.
              tr
                td.text-center 2000
                td.text-center Ley 614 de 2000 - Congreso de la República
                td Creación de los comités de integración territorial para la adopción de los planes de ordenamiento territorial.
              tr
                td.text-center 2000
                td.text-center Ley 599 de 2000 - Congreso de la República
                td Código Penal: se establecen delitos contra los recursos naturales y el medio ambiente.
              tr
                td.text-center 2002
                td.text-center Decreto 1729 de 2002 - Presidencia de la República
                td Reglamentación relacionada con cuencas hidrográficas.
              tr
                td.text-center 2010
                td.text-center Decreto 2372 de 2010 - Presidencia de la República. 
                td Disposiciones en relación con el Sistema Nacional de Áreas Protegidas y las categorías de manejo que lo conforman.
              tr
                td.text-center 2011
                td.text-center Decreto 3680 de 2011 - Presidencia de la República
                td Reglamenta la Ley 1454 de 2011 sobre ordenamiento del territorio y usos del suelo.
              tr
                td.text-center 2011
                td.text-center Ley 1454 de 2011 - Congreso de Colombia
                td Normas orgánicas sobre el ordenamiento territorial y se modifican otras disposiciones.
              tr
                td.text-center 2011
                td.text-center Ley 1453 de 2011 - Congreso de la República
                td Reforma el Código Penal, el Código de Procedimiento Penal, el Código de Infancia y Adolescencia, las reglas sobre extinción de dominio y se dictan otras disposiciones en materia de seguridad. Se actualizan y modifican los delitos contra el ambiente.
    .slyder-1.mb-5
      SlyderA
        .row.px-5.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Protección de los recursos naturales
            p En los años setenta se produjeron leyes para la protección de los recursos naturales renovables con las cuales se buscaba regular la utilización de los bienes del entorno natural. 
          .col-md-5
            figure
              img.rounded-3(src='@/assets/curso/temas/3.png', alt='Texto que describa la imagen')
        .row.px-5.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Regulación de actividades extractivas
            p Posteriormente, se han dictado leyes y decretos por medio de los cuales se ha configurado todo un marco normativo enfocado en la defensa de los recursos naturales y en la regulación de las actividades extractivas, a la vez que se han incorporado nuevos conceptos como ocurrió con la inclusión de las normas relacionadas, exclusivamente, con las cuencas hidrográficas en el año 2002. 
          .col-md-5
            figure
              img.rounded-3(src='@/assets/curso/temas/4.png', alt='Texto que describa la imagen')
        .row.px-5.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Promulgación de la Constitución de 1991
            p Otro de los hechos importantes dentro de la normativa del ordenamiento territorial, fue la promulgación de la Constitución Política de Colombia de 1991, donde se dio origen a la Ley Orgánica de Ordenamiento Territorial.
          .col-md-5
            figure
              img.rounded-3(src='@/assets/curso/temas/5.png', alt='Texto que describa la imagen')
        .row.px-5.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Derechos constitucionales
            p Igualmente, en varios de sus artículos pone de manifiesto la relación entre el planeamiento y el aprovechamiento de los recursos naturales, como lo expresado en el artículo 79 que ratifica el derecho a gozar de un ambiente sano, la participación de las comunidades en instancias de decisión relacionadas con el medio ambiente y las obligaciones del Estado en lo relacionado con la protección del ambiente. 
          .col-md-5
            figure
              img.rounded-3(src='@/assets/curso/temas/6.png', alt='Texto que describa la imagen')
        .row.px-5.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Ministerio de Ambiente
            p Otro de los eventos importantes en materia normativa, es la creación en 1993 del Ministerio de Ambiente y del SINA (Sistema Nacional Ambiental) con lo cual se dotó a las instituciones de las herramientas legales para ejercer un control mucho más estricto sobre el manejo de los recursos naturales, su aprovechamiento y su integración con el ordenamiento territorial. 
          .col-md-5
            figure
              img.rounded-3(src='@/assets/curso/temas/7.png', alt='Texto que describa la imagen')
        .row.px-5.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Plan de ordenamiento territorial
            p En el año 1997, la expedición de la Ley 388 sentó las bases para el ordenamiento territorial. En el marco de esta ley surge el plan de ordenamiento territorial, el cual se constituye en el instrumento empleado en el ámbito local para el desarrollo del proceso de ordenamiento. 
          .col-md-5
            figure
              img.rounded-3(src='@/assets/curso/temas/8.png', alt='Texto que describa la imagen')
        .row.px-5.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Delitos ambientales
            p La Ley 599 de 2000, como reforma al Código Penal, incluyó los delitos contra los recursos naturales y el medio ambiente, dando nuevas perspectivas a la relación de las comunidades con su entorno; además, le permitió al Estado, avanzar en la protección de los recursos y el ordenamiento. 
          .col-md-5
            figure
              img.rounded-3(src='@/assets/curso/temas/9.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.bg-2-claro.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-2
              figure
                img(src='@/assets/curso/temas/10.svg', alt='Texto que describa la imagen' style='width: 93px;').m-auto
            .col-lg-10
              .h5 ¡Para recordar!
              p La ley define el Plan de Ordenamiento Territorial (POT) como el “el conjunto de objetivos, directrices, políticas, estrategias, metas, programas, actuaciones y normas adoptadas para orientar y administrar el desarrollo físico del territorio y la utilización del suelo”.
                br 
                |Ley 388 de 1997.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 El ordenamiento territorial 
    p.mb-5 Si bien la normatividad relacionada con el ordenamiento del territorio es bastante amplia, es necesario desarrollar mecanismos que involucren a la comunidad y a las entidades territoriales para lograr su aplicación efectiva y el desarrollo de procesos sostenibles y acordes con la ley. El uso del suelo debe estar sujeto a parámetros como su vocación y su aptitud, pues de lo contrario se pondrá en riesgo su integridad y sostenibilidad en el futuro. 
    p.mb-5.fw-bold.text-center Una de las claves para el ordenamiento territorial es la expedición de la Ley 388 de 1997 que fijó los siguientes objetivos:
    .row.justify-content-center
      .col-lg-4: img(src='@/assets/curso/temas/11.jpg', alt='Texto que describa la imagen')
      .col-lg-8
        TabsA.color-primario.mb-5
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="1. Normatividad")
            h4 Normatividad
            p Armonizar y actualizar la normatividad relacionada con el ordenamiento territorial. 
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="2. Ordenamiento del territorio")
            h4 Ordenamiento del territorio
            p El establecimiento de los mecanismos que permitan al municipio, en ejercicio de su autonomía, promover el ordenamiento de su territorio.
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="3. Función social de la propiedad")
            h4 Función social de la propiedad
            p Garantizar que la utilización del suelo por parte de sus propietarios se ajuste a la función social de la propiedad. 
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="4. Estado y ciudadanía")
            h4 Estado y ciudadanía
            p Promover la respuesta del Estado en el ordenamiento del territorio para lograr el mejoramiento de la calidad de vida de sus habitantes.
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="5. Integralidad")
            h4 Integralidad
            p Facilitar la ejecución de actuaciones urbanas integrales.
    p.mb-5 Sobre el Plan de Ordenamiento Territorial se deben tener en cuenta otros aspectos de suma importancia; pues su conocimiento y aplicación favorecen, ostensiblemente, la reducción de conflictos alrededor del uso del suelo y la pertinencia de tales usos, a saber:
    .bg-infografic.pt-5
      .row.justify-content-center.align-items-center.mb-0.mb-lg-0
        .col-lg-10
          .imagen-infografica-1
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/12.svg', alt='Texto que describa la imagen')
              .tarjeta.p-3(x="26.2%" y="42.5%" numero="")
                h6.mb-0 En los municipios
                p.mb-0 El POT municipal es un conjunto de acciones políticas, administrativas y de planificación física para orientar el desarrollo del territorio y regular la forma como se ocupa y aprovecha el espacio, considerando los planes de desarrollo locales y las características socioculturales de las comunidades involucradas. 
              .tarjeta.p-3(x="36%" y="75%" numero="")
                h6.mb-0 2. Planeación y objetivo de la planeación
                p.mb-0 En el ámbito físico, el ordenamiento con apego a la ley, al desarrollo socioeconómico y a la protección ambiental, se relaciona estrechamente con el <b>objetivo de la planeación</b>: complementar la planificación económica y social con la dimensión territorial. 
              .tarjeta.p-3(x="51.3%" y="6.5%" numero="")
                h6.mb-0 3. Desarrollo económico y social municipal
                p.mb-0 El POT se construye de acuerdo con las prioridades de desarrollo económico y social del municipio, por lo que debe estar en armonía con los planes de desarrollo y los intereses de la comunidad en el mediano y largo plazo.
              .tarjeta.p-3(x="55.5%" y="67%" numero="")
                h6.mb-0 4. Proporcionalidad con el territorio
                p.mb-0 Dependiendo del número de habitantes de los municipios, el plan de ordenamiento territorial recibe diferentes denominaciones: Plan de Ordenamiento Territorial (POT), Plan Básico de Ordenamiento (PBOT) y Esquemas de Ordenamiento Territorial (EOT).
              .tarjeta.p-3(x="70.5%" y="26.5%" numero="")
                h6.mb-0 5. Con respecto al suelo

                p.mb-0 Estos planes definen los usos más recomendados para el suelo dependiendo de su aptitud y de sus capacidades desde un punto de vista técnico, agroecológico y productivo. 
              .tarjeta.p-3(x="70.6%" y="61.2%" numero="")
                h6.mb-0 6. Procesos productivos y el POT

                p.mb-0 Para el desarrollo de cualquier proceso productivo es importante consultar el POT para  identificar si la actividad propuesta está permitida en ese espacio. En los municipios, es la <b>secretaría de planeación</b> la entidad encargada de entregar las certificaciones de uso del suelo.
      .row.g-2
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/13.svg' alt='AvatarTop')
            .tarjeta.bg-tj-1.w-100
              .p-4
                h5 POT
                p Son elaborados e implementados por los distritos y municipios con población superior a los 100.000 habitantes.
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/14.svg' alt='AvatarTop')
            .tarjeta.bg-tj-2.w-100
              .p-4
                h5 PBOT
                p Se desarrollan para los municipios que tienen entre 30.000 y 100.000 habitantes.
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/15.svg' alt='AvatarTop')
            .tarjeta.color-secundario.w-100
              .p-4
                h5 EOT
                p Elaborados y adoptados en municipios con población inferior a los 30.000 habitantes.
    Separador
    .franja_content.mb-5
      .franja(style='bottom: 26% ; height: 99px' )
      .content
        .row.justify-content-center
          .col-lg-7
            p Los procesos de ordenamiento del territorio deben considerar una serie de factores que permitan identificar las potencialidades o las limitantes para el desarrollo de determinadas actividades en ese entorno en particular. Cuando los procesos de planificación del territorio se llevan a cabo con criterio técnico y teniendo en cuenta sus particularidades biofísicas, ambientales, socioeconómicas y políticas, es posible que los usos permitidos en esa zona en particular coincidan con lo que se denomina la “vocación del suelo”.
              br
              br
              |Si por el contrario los procesos de planificación se desarrollan sin tener en cuenta esas particularidades, es muy posible que los usos permitidos estén en contravía con la vocación de suelo, lo que puede dar lugar a conflictos en el uso del suelo.
              br
              br
              |Se invita a profundizar en las generalidades de los conflictos del uso del suelo: hechos, causas, consecuencias y factores característicos, según el caso, mediante el recurso que, a continuación, se presenta:
          .col-lg-5
            figure
              img.rounded-2(src='@/assets/curso/temas/16.jpg', alt='Texto que describa la imagen')      
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .titulo-cafe.mb-5
      h3.mb-0.text-center.color-secundario.font-weight-bold.me-3
        |Categorías de los usos del suelo 
      .titulo-cafe_icon: img(src='@/assets/curso/temas/17.svg' alt='Icono de la categoria')   
    p.mb-4 Para definir la vocación de los suelos es importante tener en cuenta las categorías de los usos del suelo que consisten en la revisión de la coincidencia entre la vocación y los posibles usos que se le pueden dar, de acuerdo con parámetros técnicos y agroecológicos.
    p.mb-3.fw-bold.text-center Las categorías de los usos del suelo son las siguientes:
    .row.justify-content-center
      .col-lg-8
        TabsA.color-primario.mb-5
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="1. Uso principal ")
            h4 Uso principal
            p Uso recomendado para esa unidad productiva, de acuerdo con parámetros técnicos, ambientales y socioeconómicos, entre otros. 
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="2. Usos compatibles ")
            h4 Usos compatibles
            p Se relaciona con los usos que se pueden dar a la unidad productiva sin poner en riesgo la integridad del suelo. 

          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="3. Usos condicionados ")
            h4 Usos condicionados
            p Requieren de un análisis más profundo de sus posibles implicaciones para el entorno y los ecosistemas presentes. Se requieren permisos especiales para desarrollar estas actividades. 
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="4. Usos prohibidos ")
            h4 Usos prohibidos
            p Usos que definitivamente no se pueden dar a esa unidad de suelo, pues pueden poner en riesgo la integridad del ecosistema y exponerlo a daños irreversibles. 
      .col-lg-4: img(src='@/assets/curso/temas/18.jpg', alt='Texto que describa la imagen')
    p.mb-5 Existen ocho clases de suelos distribuidos en el territorio nacional, según el IGAC. En la siguiente tabla se presentan sus principales características y los usos permitidos, de acuerdo con sus condiciones agroecológicas, cobertura y aptitud:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 2
      span Clases de suelos en Colombia de acuerdo con su aptitud
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tabla-editada1.mb-5
          table
            caption Nota. Tomada de Fedesarrollo (2019).
            thead
              tr.text-center
                th Clase 
                th Características principales
                th Usos permitidos
                th Extensión en millones de hectáreas
            tbody
              tr
                td.text-center 1 - 2
                td(rowspan=2) Suelos arables con alta capacidad productiva. 
                td(rowspan=2) Desarrollo de proyectos agropecuarios con muy pocas limitaciones. 
                td.text-center 1

              tr
                td.text-center 3
                td.text-center 2,3
              tr
                td.text-center 4
                td Alto contenido de aluminio (alta acidez). Baja fertilidad. 
                td Aptas para cultivo, pero con altos costos de adecuación.
                td.text-center 14,5
              tr
                td.text-center 5
                td Áreas proclives a anegación - zonas pedregosas. 
                td Uso estacional. Zonas no aptas para cultivo en época de lluvias. 
                td.text-center 8,4
              tr
                td.text-center 6
                td Centro y oriente de la amazonia - región pacífica y piedemonte andino.
                td Actividades forestales y agroforestales. 
                td.text-center 29,9
              tr
                td.text-center 7
                td Terrenos con pendientes pronunciadas y con alta vulnerabilidad frente a procesos erosivos. 
                td Producción forestal - Actividades de conservación
                td.text-center 41,2
              tr
                td.text-center 8
                td Zonas de páramos - Sierra Nevada de Santa Marta - Selvas del Amazonas y Vichada. 
                td Conservación y regulación del agua - protección de la fauna - recreación sostenible. 
                td.text-center 14,3
              tr
                td.text-center Otros
                td Cuerpos de agua y coberturas urbanas y suburbanas. 
                td
                td.text-center 2,4
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-acento-contenido.bg-4-claro.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-2
              figure
                img(src='@/assets/curso/temas/19.svg', alt='Texto que describa la imagen' style='width: 93px;').m-auto
            .col-lg-10
              .h5 Atención!
              p Con base en esta información es posible determinar los usos de los suelos a escala predial, por lo que es importante consultar siempre el POT para conocer los usos permitidos según la región donde se ubique la zona de estudio.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Variables en el uso del suelo
    .row.justify-content-center.mb-5
      .col-lg-5: img.rounded-3(src='@/assets/curso/temas/20.jpg', alt='Texto que describa la imagen')
      .col-lg-7
        p Para el desarrollo de una visión integral de los temas relacionados con el uso del suelo y el análisis de los conflictos que se pueden presentar con relación a su uso, es importante conocer qué aspectos intervienen en los procesos de ordenamiento de la propiedad y en las dinámicas propias de cada territorio.
          br
          br
          |El análisis de las particularidades de un territorio debe realizarse teniendo en cuenta:
        ul.lista-ul--color
          li.mb-0.icono-marron
            i.fas.fa-circle
            | Variables sociales.
          li.mb-0.icono-marron
            i.fas.fa-circle
            | Variables económicas.
          li.mb-0.icono-marron
            i.fas.fa-circle
            | Variables ambientales.
          li.mb-0.icono-marron
            i.fas.fa-circle
            |  Variables biofísicas.
          li.mb-0.icono-marron
            i.fas.fa-circle
            | Variables culturales.
    p.mb-5 Tener una visión general del panorama y realizar procesos de planeación más acertados y con una visión integral, reducirá, al mínimo, los posibles conflictos con el uso del suelo.
    .bg-llamado.p-4
      h6.text-center.mb-5 Para el desarrollo de proyectos productivos viables, desde el punto de vista de los usos del suelo, se deben tener en cuenta las siguientes variables:
      .row.justify-content-center.align-items-center.mb-4
        .col-2
          figure
            img(src='@/assets/curso/temas/22.svg', alt='Texto que describa la imagen' style='width: 93px;').m-auto
        .col-lg-7
          .h5 Atención!
          p Con base en esta información es posible determinar los usos de los suelos a escala predial, por lo que es importante consultar siempre el POT para conocer los usos permitidos según la región donde se ubique la zona de estudio.
    .titulo-planta.d-flex.align-items-end.mb-3
      .titulo-planta__texto.me-3
        h3.mb-2 Variables sociales
        hr.m-0
      .titulo-planta__icon: img(src='@/assets/curso/temas/21.svg', alt='Texto que describa la imagen' style='width: 36px')
    p.mb-5 Dentro de las variables sociales que inciden en los usos del suelo y que se deben tener en cuenta para el desarrollo de proyectos a escala local están las siguientes:  
    .row.justify-content-center
      .col-lg-8
        TabsA.color-primario.mb-5
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Tenencia de la tierra")
            h4 Tenencia de la tierra
            p La falta de titularidad sobre la propiedad de los predios dificulta la inversión, pues buena parte del crédito formal exige este requisito para garantizar su acceso. En los predios donde no existe claridad sobre la tenencia de la tierra, no es posible establecer proyectos a mediano y largo plazo, ya que esta situación genera incertidumbre.
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Inseguridad – violencia")
            h4 Inseguridad – violencia
            p Este tipo de situaciones limitan fuertemente la inversión y pueden provocar fenómenos de desplazamiento masivo y pérdida de arraigo. 

          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Migración ")
            h4 Migración
            p  La migración de los pobladores de las zonas rurales a los centros urbanos se ha constituido en una problemática creciente que tiene impactos negativos en la sostenibilidad de las actividades agropecuarias. 
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Asociatividad ")
            h4 Asociatividad
            p Es importante identificar la existencia de organizaciones comunitarias y establecer su grado de incidencia en la realidad de la región en temas políticos o económicos.
      .col-lg-4: img(src='@/assets/curso/temas/23.jpg', alt='Texto que describa la imagen')
    .titulo-planta.d-flex.align-items-end.mb-3
      .titulo-planta__texto.me-3
        h3.mb-2 Variables económicas
        hr.m-0
      .titulo-planta__icon: img(src='@/assets/curso/temas/21.svg', alt='Texto que describa la imagen' style='width: 36px')
    p.mb-5  Las variables económicas que inciden en el uso del suelo se relacionan básicamente con el nivel de ingresos de la población y con las actividades productivas que tienen lugar en el sector.
    .row.justify-content-center
      .col-lg-4: img(src='@/assets/curso/temas/24.jpg', alt='Texto que describa la imagen')
      .col-lg-8
        TabsA2.TabsA2.color-primario.mb-5
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Nivel de ingresos")
            h4 Nivel de ingresos
            p Es importante identificar el nivel de ingresos de las familias de la región, ya que este es uno de los principales factores que inciden en los conflictos por uso del suelo. En las regiones agrícolas, a menudo, los bajos ingresos de la población generan fenómenos migratorios y el cambio de la vocación de los terrenos por explotaciones que resultan más eficientes en términos económicos.
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Actividades productivas")
            h4 Actividades productivas
            p Es importante identificar las actividades productivas que generan ingresos en la región, su grado de rentabilidad y su importancia dentro de la dinámica municipal y regional; esto para determinar la viabilidad de dichas explotaciones. 

          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Acceso a mercados y dinámica de precios")
            h4 Acceso a mercados y dinámica de precios
            p Es importante conocer las dinámicas del mercado en la región, identificar los canales de comercialización y los grados de asociatividad existentes en relación con el acceso a clientes y proveedores. Asimismo, es clave saber la dinámica de los precios en términos del flujo de la oferta y la demanda. 
    .titulo-planta.d-flex.align-items-end.mb-3
      .titulo-planta__texto.me-3
        h3.mb-2 Variables ambientales
        hr.m-0
      .titulo-planta__icon: img(src='@/assets/curso/temas/21.svg', alt='Texto que describa la imagen' style='width: 36px')
    p.mb-5 La normatividad ambiental es enfática en cuanto a sanciones por atentar contra biodiversidad y naturaleza. Conocer la legislación al respecto, sobre todo lo relacionado con los <b>planes de ordenamiento territorial</b>, es fundamental para evitar posibles conflictos.
    .row.justify-content-center
      .col-lg-8
        TabsA.color-primario.mb-5
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Usos permitidos, compatibles y prohibidos")
            h4 Usos permitidos, compatibles y prohibidos
            p Es clave conocer el ordenamiento territorial a fin de identificar los usos permitidos en el área de trabajo. El desarrollo de prácticas que vayan en contra de los usos permitidos o compatibles puede acarrear sanciones de todo tipo. 
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Ecosistemas")
            h4 Ecosistemas
            p Se debe contar con las herramientas suficientes y los conceptos necesarios para identificar los ecosistemas presentes en el territorio para evitar posibles afectaciones.

          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Servicios ecosistémicos")
            h4 Servicios ecosistémicos
            p  Es importante desarrollar un diagnóstico que recoja la cantidad de servicios ecosistémicos que se pueden encontrar en la unidad productiva. 
      .col-lg-4: img(src='@/assets/curso/temas/25.jpg', alt='Texto que describa la imagen')
    .titulo-planta.d-flex.align-items-end.mb-3
      .titulo-planta__texto.me-3
        h3.mb-2 Variables biofísicas
        hr.m-0  
      .titulo-planta__icon: img(src='@/assets/curso/temas/21.svg', alt='Texto que describa la imagen' style='width: 36px')
    p.mb-5 Otro de los factores que regula el uso del suelo es el de las condiciones biofísicas de la zona. El estudio de ciertas características locales de relieve, precipitación, humedad relativa y temperatura, entre otras, es necesario para evitar conflictos por el uso del suelo.
    .row.justify-content-center
      .col-lg-4: img(src='@/assets/curso/temas/26.jpg', alt='Texto que describa la imagen')
      .col-lg-8
        TabsA2.TabsA2.color-primario.mb-5
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Tipo de suelos")
            h4 Tipo de suelos
            p Identificar las características físicas y químicas de los suelos de la zona de trabajo es fundamental para saber qué tipo de procesos se pueden llevar a cabo en el predio. 
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Características agroclimáticas")
            h4 Características agroclimáticas
            p La identificación de las características agroecológicas de la zona es necesaria para saber de qué manera se puede obtener el mejor provecho a la unidad productiva y qué medidas de mitigación se pueden llevar a cabo en las épocas de lluvias o de sequía. 

          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Topografía y relieve")
            h4 Topografía y relieve
            p  Las zonas escarpadas, con fuertes inclinaciones y ubicadas en zonas altas no son aptas para el desarrollo de procesos productivos, por lo que el estudio de la topografía y el relieve del territorio permitirá identificar las verdaderas aptitudes del terreno, con lo cual se puede evitar la aparición de conflictos de uso. 
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Hidrografía")
            h4 Hidrografía
            p Uno de los elementos más importantes que existe en las áreas rurales es el agua y su presencia está ligada a la conservación de los bosques y zonas de recarga hídrica. Por lo tanto, la identificación de estos puntos estratégicos dentro del predio es necesaria para evitar la realización de prácticas que puedan afectar su calidad y disponibilidad.
    .titulo-planta.d-flex.align-items-end.mb-3
      .titulo-planta__texto.me-3
        h3.mb-2 Variables culturales
        hr.m-0
      .titulo-planta__icon: img(src='@/assets/curso/temas/21.svg', alt='Texto que describa la imagen' style='width: 36px')
    .row.justify-content-center
      .col-lg-8
        TabsA.color-primario.mb-5
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Sistema de creencias")
            h4 Sistema de creencias
            p En lo relacionado con este aspecto, es común que comunidades negras, raizales e indígenas posean una relación con el suelo muy distinta a la comúnmente encontrada en otras regiones y comunidades, por lo que este elemento se debe tener siempre presente. 
          .tarjeta.rounded-0.bg-2-claro2.p-4(titulo="Arraigo cultural")
            h4 Arraigo cultural
            p El respeto por la tierra y la valoración de todo lo que proviene de ella ha generado impactos muy positivos en estas comunidades e incluso ha trascendido a otras culturas que empiezan a apropiar algunas de estas costumbres.

      .col-lg-4: img(src='@/assets/curso/temas/27.jpg', alt='Texto que describa la imagen')


                
</template>

<script>
import TabsA from '@/components/TabsA.vue'
import TabsA2 from '@/components/TabsA2.vue'
export default {
  name: 'Tema1',
  components: {
    TabsA,
    TabsA2,
  },
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    mostrarIndicador: false,
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
.banner-1
  background-image: url('../assets/curso/banner-1.png')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  margin: 0 -3rem
  p
    color: white
.text-sistema
  p, span, h1, h2, h3, h4, h5, h6, b
    color: $color-sistema-texto !important
.modales-botones
  h6
    color: $color-primario
  .modal-a--abierto .modal-a__fondo
    opacity: 0
  .modal-a__content
    border: 2px solid #7f6455
    max-width: 442px
    min-width: 300px
    padding: 20px !important
.imagen-infografica-1
  h5
    color: #7f6455
  .img-infografica__card
    // top: -5% !important
    // left: 0% !important
    // transform: translateX(25%) !important
    background-color: $white
    border: 2px solid #7f6455
    border-radius: 10px
    width: 444px
    min-width: 300px !important
  .img-infografica__item__dot:before
    opacity: 0 !important
.recuadro-tierra
  border-radius: 10px
  background-color: #fff3cc
  position: relative
  &__texto
    padding-left: 130px
  img
    position: absolute
    top: 0
    left: 0
    transform: translateX(-40%) translateY(-25%)
    width: 190px
.franja_content
  position: relative
  .content
    position: inherit
    top: 0
    left: 0
    z-index: 2
    height:
  .franja
    position: absolute

    left: 0
    background: linear-gradient(90deg, rgba(255,225,167,1) 0%, rgba(246,210,149,1) 32%, rgba(202,100,50,1) 100%)
    width: 150%
    height: 120px
    z-index: 1
    margin: 0 -3rem
.tabla-editada1
  table
    width: auto
    white-space:
  thead
    background-color: #a75532
    color: #fff
  tbody
    tr:nth-child(odd)
      background-color: #fff5ec
  td:nth-child(1)
    white-space: nowrap
    width: 4%
    color: #a75532
    font-weight: 800
  td:nth-child(2)
    width: 30%

.bg-2-claro
  background-color: #fcdda2 !important
.bg-2-claro2
  background-color: #fff3cc !important
.tabs-a__tab
  background-color: #f7e8e0
.bg-infografic
  background-image: url('../assets/curso/temas/bg-infografic.svg')
  margin: 0 -3rem
  padding: 0 3rem
.bg-tj-1
  background-color: #d78b65
.bg-tj-2
  background-color: #ddb279

.bg-4-claro
  background-color: #fff0bf !important
.bg-llamado
  background-image: url('../assets/curso/temas/bg-llamado.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  margin: 0 -3rem
.titulo-planta
  h3
    color: #623e2a !important
  hr
    border: 1.5px solid black
    opacity: 1
.icono-marron
  i
    color: #CA6432 !important
  .fa-circle
.TabsA2
  .tabs-a__tab__selected:before
    left: 0 !important
    right: auto
    transform: translate(-5px, -50%) rotate(45deg) !important
</style>
