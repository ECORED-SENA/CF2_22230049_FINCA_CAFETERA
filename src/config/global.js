export default {
  global: {
    componenteFormativo:
      'Prevención, mitigación y control de problemáticas ambientales en la finca cafetera',
    descripcionCurso:
      'Cada vez es mayor el interés por desarrollar una caficultura más sostenible y respetuosa con el medio ambiente que, además de garantizar la productividad, genere rendimientos en materia de protección de los ecosistemas y la biodiversidad, lo cual requiere de la identificación de las posibles afectaciones al entorno y el diseño de estrategias eficientes para mitigar sus impactos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Usos del suelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normatividad aplicable',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'El ordenamiento territorial',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Conflictos de uso del suelo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Variables en el uso del suelo',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diagnóstico ambiental y productivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Herramientas de diagnóstico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Metodologías empleadas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Generación de informes',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Metodologías de interpretación',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Manejo de problemáticas ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Priorización de necesidades',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Identificación de alternativas de solución	',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Planeación',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Canal David Felibert Ingeniero Ambiental. (2020). Valoración de servicios ambientales ¿Valoración Económica del Ambiente? ',
      link: 'https://www.youtube.com/watch?v=OrMfQ1eqJrs',
    },
    {
      referencia:
        'Congreso de Colombia. (1997). Ley 388 de 1997. Por la cual se modifica la Ley 9 de 1989, y la Ley 2 de 1991 y se dictan otras disposiciones. Julio 18 de 1997. DO. N° 43.091. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339',
    },
    {
      referencia:
        'Corporación Autónoma Regional del Valle del Cauca. (2021). Instructivo: generación de las capas temáticas de uso potencial - zonificación forestal y conflicto por uso del suelo. ',
      link:
        'https://www.cvc.gov.co/sites/default/files/2021-08/IN.0130.51%20Generacion%20capas%20tematicas%20uso%20potencial%20-%20zonificacion%20forestal%20y%20conflicto%20por%20uso%20del%20suelo%2C%20V02.pdf',
    },
    {
      referencia:
        'Federación Nacional de Cafeteros de Colombia. (2004). Guía ambiental para el cultivo del café. ',
      link:
        'https://redjusticiaambientalcolombia.files.wordpress.com/2012/09/guia-ambiental-para-el-subsector-cafetero.pdf',
    },
    {
      referencia:
        'Fundación para la Educación Superior y el Desarrollo – Fedesarrollo. (2019). Uso potencial y efectivo de la tierra agrícola en Colombia: resultados del censo nacional agropecuario. ',
      link:
        'https://www.repository.fedesarrollo.org.co/bitstream/handle/11445/4079/Repor_Septiembre_2019_Delgado_05_05_2022.pdf?sequence=4&isAllowed=y',
    },
    {
      referencia:
        'Gerencia Ambiental de Proyectos Ltda. (2017). Componente ambiental – documento técnico de soporte plan parcial no. 7 – “Ciudad Lagos de -Torca”.',
      link: 'http://www.sdp.gov.co/sites/default/files/7.estu_amb_cap_6.pdf',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi – Corporación Colombiana de Investigación Agropecuaria. (2002). Zonificación de los conflictos de uso de las tierras en el país. ',
      link:
        'https://es.slideshare.net/jamoga06/20120730-zon-confusotierracap4-usoconflic',
    },
    {
      referencia:
        'Sánchez, M., y Holguín, M. (2014). La institucionalidad del suelo en Colombia: ¿utopía o realidad? Ambiente y Desarrollo, 18(34), 57-76.',
      link:
        'https://revistas.javeriana.edu.co/index.php/ambienteydesarrollo/article/view/9741',
    },
  ],
  glosario: [
    {
      termino: 'Causalidad',
      significado:
        'indica el grado en que una variable tiene la capacidad para afectar a otra. ',
    },
    {
      termino: 'Impactos residuales',
      significado:
        'impactos cuyos efectos persistirán en el ambiente, luego de aplicadas las medidas de corrección, prevención, minimización y mitigación.',
    },
    {
      termino: 'Impactos acumulativos',
      significado:
        'son aquellos que resultan de efectos sucesivos, incrementales, y/o combinados de proyectos, obras o actividades cuando se suman a otros impactos existentes, planeados y/o futuros razonablemente anticipados. Para efectos prácticos, la identificación, análisis y manejo de impactos acumulativos se debe orientar a aquellos que sean reconocidos como significativos, que se manifiestan en diversas escalas espacio-temporales.',
    },
    {
      termino: 'Medidas de corrección',
      significado:
        'las acciones dirigidas a recuperar, restaurar o reparar las condiciones del medio ambiente afectado por el proyecto, obra o actividad (Autoridad Nacional de Licencias Ambientales, 2021).',
    },
    {
      termino: 'Medidas de mitigación',
      significado:
        'las acciones dirigidas a minimizar los impactos y efectos negativos de un proyecto, obra o actividad sobre el medio ambiente (Autoridad Nacional de Licencias Ambientales, 2021). ',
    },
    {
      termino: 'Medidas de prevención',
      significado:
        'las acciones encaminadas a evitar los impactos y efectos negativos que pueda generar un proyecto, obra o actividad sobre el medio ambiente (Autoridad Nacional de Licencias Ambientales, 2021)',
    },
  ],
  complementario: [
    {
      texto:
        'Canal David Felibert Ingeniero Ambiental. (2020). Valoración de servicios ambientales ¿Valoración económica del ambiente? ',
      tipo: 'Video de YouTube',
      link: 'https://www.youtube.com/watch?v=OrMfQ1eqJrs',
    },
    {
      texto:
        'Canal Marketing 2.0. (2019). Cómo hacer encuestas de investigación / partes de la encuesta.  ',
      tipo: 'Video de YouTube',
      link: 'https://www.youtube.com/watch?v=l3GrfOGG8hA',
    },
    {
      texto:
        'ISO Sistemas de Gestión (2020). ISO 14001:2015 Matriz de aspectos ambientales significativos, ¿cómo hacerla?  ',
      tipo: 'Video de YouTube',
      link: 'https://www.youtube.com/watch?v=82ww7BgbKSI',
    },
    {
      texto: 'Armenta G. (2020). Matriz de Vester ',
      tipo: 'Documento en línea ',
      link: 'https://www.academia.edu/27991481/MATRIZ_DE_VESTER',
    },
    {
      texto:
        'Canal Willy Fernando Ochoa Moreno (2020). Video tutorial elaboración matriz de Leopold.  ',
      tipo: 'Video de YouTube',
      link: 'https://www.youtube.com/watch?v=gbBdXC66JsI',
    },
    {
      texto:
        'Canal soy ingenio. (2020). Árbol de problemas ¿cómo hacer un árbol de problemas? Definición, ejemplo y conclusiones - aprende fácil.  ',
      tipo: 'Video de YouTube',
      link: 'https://www.youtube.com/watch?v=eO7sNmZ9Ut8',
    },
    {
      texto: 'UNICISO. (2019). Mapas parlantes.  ',
      tipo: 'Artículo en línea',
      link: 'http://www.portaluniciso.com/info/PARL.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Sánchez Suárez',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander-',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesor metodológico',
        centro: 'Centro de diseño y metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Eulises Orduz'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Roja',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mayerly Pérez Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Maria Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
