export default {
  global: {
    componenteFormativo:
      'Control de calidad en el desarrollo de productos electrónicos',
    descripcionCurso:
      'Control de calidad es un aspecto utilizado para ajustar y mantener los procesos y procedimientos en las diferentes industrias y empresas. En   el campo de la electrónica se implementa en la fabricación de equipos, dispositivos, componentes y también en el desarrollo de productos, ensamble y mantenimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Implementación del control de calidad',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manipulación de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estadística descriptiva',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Muestreo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Probabilidades',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_15_224204.pdf',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Probabilidad y estadística para ingeniería y ciencias',
      referencia:
        'Ronald E. Walpole, Raymond H. Myers, Sharon L. Myers and Keying Ye. (2012).  Probabilidad y estadística para ingeniería y ciencias.  Pearson.',
      tipo: 'Libro',
      link:
        'https://www.academia.edu/27961373/Probabilidad_y_Estadistica_par_Ronald_E_Walpole_and_Mayers',
    },
  ],
  glosario: [
    {
      termino: 'Control de calidad',
      significado:
        'Sistema de gestión que permite que los procesos sean uniformes para que los productos tengan esa propiedad.',
    },
    {
      termino: 'Datos',
      significado:
        'Información sobre algo concreto que permite su conocimiento exacto o sirve para deducir las consecuencias derivadas de un hecho. Es la Información dispuesta de manera adecuada para su tratamiento por una computadora.',
    },
    {
      termino: 'Estadística',
      significado:
        'Aplicación de técnicas para conteos, resultados, probabilidades que permitan prever o corregir situaciones en la empresa o en la sociedad.',
    },
    {
      termino: 'Muestreo',
      significado: 'Toma de datos seleccionados al azar o no de una población.',
    },
    {
      termino: 'Probabilidades',
      significado: 'Opciones de ocurrencia en una muestra.',
    },
  ],
  referencias: [
    {
      referencia:
        'López, P. l. (2004). Población, muestra y muestreo. Punto Cero, 9 (8).',
      link:
        'http://www.scielo.org.bo/scielo.php?pid=s1815-02762004000100012&script=sci_arttext',
    },
    {
      referencia: 'Mantilla, F. (2015). Técnicas de muestreo. ESPE.',
      link:
        ' https://docplayer.es/23264329-Tecnicas-de-muestreo-un-enfoque-a-la-investigacion-de-mercados-farid-a-mantilla.html',
    },
    {
      referencia: 'Ruiz Falcó, A. (2006). Muestreos de aceptación. ICADE.',
      link: 'https://www.scribd.com/document/44015973/muestreo-de-Aceptacion',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Aurelio Alarcón Tique ',
          cargo: 'Experto Técnico ',
          centro:
            'Regional Distrito Capital Centro de Electricidad, Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Miroslava González Hernández ',
          cargo: 'Diseñador y Evaluador Instruccional ',
          centro: 'Regional Distrito Capital Centro de Gestión Industrial ',
        },
        {
          nombre: 'Sergio Augusto Ardila Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Revisora Metodológica y Pedagógica  ',
          centro: 'Regional Distrito Capital Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes ',
          cargo: 'Responsable Equipo de Desarrollo Curricular ',
          centro:
            'Regional Santander Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez ',
          cargo: 'Diseñador y Evaluador Instruccional ',
          centro: 'Regional Distrito Capital Centro de Diseño y Metrología',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
