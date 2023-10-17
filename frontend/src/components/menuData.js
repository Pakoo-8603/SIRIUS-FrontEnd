/**
 * An array of objects representing the menu data for the Autodiagnóstico SLISC program.
 * Each object contains a title, an icon, a URL, and an optional array of sub-items.
 * The sub-items follow the same structure as the top-level items.
 * The URLs are used to navigate to different pages within the program.
 * @typedef {Object[]} MenuData
 * @property {string} title - The title of the menu item.
 * @property {string} icon - The icon of the menu item.
 * @property {string} url - The URL of the menu item.
 * @property {MenuData[]} [items] - An optional array of sub-items.
 */
export const menuData = [{
    title: "Autodiagnóstico SLISC",
    icon: "mdi-collage",
    url: '/',
    items: [{
            title: "Identificación del programa",
            icon: "mdi-file-outline",
            url: '/sintesis',
        },
        {
            title: "I. Fundamentos y condiciones de operación",
            icon: "mdi-folder",
            url: '',
            items: [{
                    title: "I.1. Propósitos del programa. Misión y visión.",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "1.1.1. Misión y visión del programa",
                            icon: "mdi-file-outline",
                            url: '/indicadores/1'
                        },
                        {
                            title: "1.1.2. Fundamentación de la necesidad del programa",
                            icon: "mdi-file-outline",
                            url: '/indicadores/2'
                        },
                        {
                            title: "1.1.3. Plan de desarrollo del programa",
                            icon: "mdi-file-outline",
                            url: '/indicadores/3'
                        },
                        {
                            title: "1.1.4. Perfil de ingreso",
                            icon: "mdi-file-outline",
                            url: '/indicadores/4'
                        },
                        {
                            title: "1.1.5. Perfil de egreso",
                            icon: "mdi-file-outline",
                            url: '/indicadores/5'
                        },
                        {
                            title: "Fortalezas",
                            icon: "mdi-file-outline",
                            url: '/expedientes/1?FoD=F'
                        },
                        {
                            title: "Oportunidades de mejora",
                            icon: "mdi-file-outline",
                            url: '/expedientes/1?FoD=D'
                        },
                    ],
                },
                {
                    title: "I.2. Condiciones generales de operación del programa",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "1.2.1. Registro oficial del programa",
                            icon: "mdi-file-outline",
                            url: '/indicadores/6'
                        },
                        {
                            title: "1.2.2. Marco normativo institucional",
                            icon: "mdi-file-outline",
                            url: '/indicadores/7'
                        },
                        {
                            title: "1.2.3. Matrícula total y de primer ingreso",
                            icon: "mdi-file-outline",
                            url: '/indicadores/8'
                        },
                        {
                            title: "1.2.4. Presupuesto/Recursos del programa",
                            icon: "mdi-file-outline",
                            url: '/indicadores/9'
                        },
                        {
                            title: "1.2.5. Estructura organizacional para operar el programa",
                            icon: "mdi-file-outline",
                            url: '/indicadores/10'
                        },
                        {
                            title: "1.2.6. Integridad",
                            icon: "mdi-file-outline",
                            url: '/indicadores/11'
                        },
                        {
                            title: "1.2.7. Ambiente Académico",
                            icon: "mdi-file-outline",
                            url: '/indicadores/12'
                        },
                        {
                            title: "Fortalezas",
                            icon: "mdi-file-outline",
                            url: '/expedientes/2?FoD=F'
                        },
                        {
                            title: "Oportunidades de mejora",
                            icon: "mdi-file-outline",
                            url: '/expedientes/2?FoD=D'
                        },
                    ],
                },
            ],
        },
        {
            title: "II. Currículum específico y genérico",
            icon: "mdi-folder",
            url: '',
            items: [{
                    title: "II.3. Modelo educativo y plan de estudios",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "2.3.1. Modelo educativo",
                            icon: "mdi-file-outline",
                            url: '/indicadores/13'
                        },
                        {
                            title: "2.3.2. Plan de estudios",
                            icon: "mdi-file-outline",
                            url: '/indicadores/14'
                        },
                        {
                            title: "2.3.3. Mapa curricular",
                            icon: "mdi-file-outline",
                            url: '/indicadores/15'
                        },
                        {
                            title: "2.3.4. Asignaturas o unidades de aprendizaje",
                            icon: "mdi-file-outline",
                            url: '/indicadores/16'
                        },
                        {
                            title: "2.3.5. Tecnología educativa y de la información para el aprendizaje",
                            icon: "mdi-file-outline",
                            url: '/indicadores/17'
                        },
                        {
                            title: "Fortalezas",
                            icon: "mdi-file-outline",
                            url: '/expedientes/3?FoD=F'
                        },
                        {
                            title: "Oportunidades de mejora",
                            icon: "mdi-file-outline",
                            url: '/expedientes/3?FoD=D'
                        },
                    ],
                },
                {
                    title: "II.4 Actividades para la formación integral",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "2.4.1. Cursos o actividades para la formación integral",
                            icon: "mdi-file-outline",
                            url: '/indicadores/18'
                        },
                        {
                            title: "2.4.2. Enseñanza de otras lenguas",
                            icon: "mdi-file-outline",
                            url: '/indicadores/19'
                        },
                        {
                            title: "2.4.3. Certificaciones externas de los estudiantes",
                            icon: "mdi-file-outline",
                            url: '/indicadores/20'
                        },
                        {
                            title: "Fortalezas",
                            icon: "mdi-file-outline",
                            url: '/expedientes/4?FoD=F'
                        },
                        {
                            title: "Oportunidades de mejora",
                            icon: "mdi-file-outline",
                            url: '/expedientes/4?FoD=D'
                        },
                    ],
                }
            ],
        },
        {
            title: "III. Tránsito de los estudiantes por el programa",
            icon: "mdi-folder",
            url: '',
            items: [{
                    title: "III.5. Proceso de ingreso al programa",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "3.5.1. Estrategias de difusión, promoción y orientación del programa",
                            icon: "mdi-file-outline",
                            url: '/indicadores/21'
                        },
                        {
                            title: "3.5.2. Procedimiento de ingreso de los aspirantes al programa",
                            icon: "mdi-file-outline",
                            url: '/indicadores/22'
                        },
                        {
                            title: "3.5.3. Actividades de bienvenida e inducción para estudiantes de nuevo ingreso",
                            icon: "mdi-file-outline",
                            url: '/indicadores/23'
                        },
                        {
                            title: "3.5.4. Programas de regularización, acciones de nivelación o apoyo",
                            icon: "mdi-file-outline",
                            url: '/indicadores/24'
                        },
                        {
                            title: "Fortalezas",
                            icon: "mdi-file-outline",
                            url: '/expedientes/5?FoD=F'
                        },
                        {
                            title: "Oportunidades de mejora",
                            icon: "mdi-file-outline",
                            url: '/expedientes/5?FoD=D'
                        },
                    ],
                },
                {
                    title: "III.6. Trayectoria escolar",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "3.6.1. Control del desempeño de los estudiantes dentro del programa",
                            icon: "mdi-file-outline",
                            url: '/indicadores/25'
                        },
                        {
                            title: "3.6.2. Movilidad e intercambio de estudiantes",
                            icon: "mdi-file-outline",
                            url: '/indicadores/26'
                        },
                        {
                            title: "3.6.3. Servicios de tutoría",
                            icon: "mdi-file-outline",
                            url: '/indicadores/27'
                        },
                        {
                            title: "3.6.4. Servicios de orientación y asesoría en apoyo al aprendizaje",
                            icon: "mdi-file-outline",
                            url: '/indicadores/28'
                        },
                        {
                            title: "3.6.5. Prácticas profesionales, estancias y visitas en el sector productivo",
                            icon: "mdi-file-outline",
                            url: '/indicadores/29'
                        },
                        {
                            title: "3.6.6. Reconocimiento a los estudiantes de alto desempeño",
                            icon: "mdi-file-outline",
                            url: '/indicadores/30'
                        },
                        {
                            title: "Fortalezas",
                            icon: "mdi-file-outline",
                            url: '/expedientes/7?FoD=F'
                        },
                        {
                            title: "Oportunidades de mejora",
                            icon: "mdi-file-outline",
                            url: '/expedientes/6?FoD=D'
                        },
                    ],
                },
                {
                    title: "III.7. Egreso del programa",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "3.7.1. Programa de titulación u obtención del grado",
                            icon: "mdi-file-outline",
                            url: '/indicadores/31'
                        },
                        {
                            title: "3.7.2. Eficiencia terminal",
                            icon: "mdi-file-outline",
                            url: '/indicadores/32'
                        },
                        {
                            title: "3.7.3. Eficiencia en la titulación u obtención del grado",
                            icon: "mdi-file-outline",
                            url: '/indicadores/33'
                        },
                        {
                            title: "3.7.4. Servicio social",
                            icon: "mdi-file-outline",
                            url: '/indicadores/34'
                        },
                        {
                            title: "3.7.5. Vínculo egresado-institución",
                            icon: "mdi-file-outline",
                            url: '/indicadores/35'
                        },
                        {
                            title: "Fortalezas",
                            icon: "mdi-file-outline",
                            url: '/expedientes/7?FoD=F'
                        },
                        {
                            title: "Oportunidades de mejora",
                            icon: "mdi-file-outline",
                            url: '/expedientes/7?FoD=D'
                        },
                    ],
                },
                {
                    title: "III.8. Resultados de los estudiantes",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "3.8.1. Resultados en exámenes de egreso externos a la institución",
                            icon: "mdi-file-outline",
                            url: '/indicadores/36'
                        },
                        {
                            title: "3.8.2. Nivel de dominio de otras lenguas",
                            icon: "mdi-file-outline",
                            url: '/indicadores/37'
                        },
                        {
                            title: "3.8.3. Participación de estudiantes en concursos, competencias, exhibiciones y presentaciones, nacionales o internacionales",
                            icon: "mdi-file-outline",
                            url: '/indicadores/38'
                        },
                        {
                            title: "3.8.4. Desempeño de los egresados",
                            icon: "mdi-file-outline",
                            url: '/indicadores/39'
                        },
                        {
                            title: "3.8.5. Empleabilidad / Opinión de los empleadores",
                            icon: "mdi-file-outline",
                            url: '/indicadores/40'
                        },
                        {
                            title: "3.8.6. Cumplimiento del perfil de egreso",
                            icon: "mdi-file-outline",
                            url: '/indicadores/41'
                        },
                        {
                            title: "Fortalezas",
                            icon: "mdi-file-outline",
                            url: '/expedientes/8?FoD=F'
                        },
                        {
                            title: "Oportunidades de mejora",
                            icon: "mdi-file-outline",
                            url: '/expedientes/8?FoD=D'
                        },
                    ],
                },
            ],
        },
        {
            title: "IV. Personal académico, infraestructura y servicios",
            icon: "mdi-folder",
            url: '',
            items: [{
                    title: "IV.9 Personal académico",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "4.9.1. Composición actual del cuerpo docente",
                            icon: "mdi-file-outline",
                            url: '/indicadores/42'
                        },
                        {
                            title: "4.9.2. Mecanismo de ingreso, promoción y permanencia al programa como docente",
                            icon: "mdi-file-outline",
                            url: '/indicadores/43'
                        },
                        {
                            title: "4.9.3. Superación disciplinaria y habilitación académica",
                            icon: "mdi-file-outline",
                            url: '/indicadores/44'
                        },
                        {
                            title: "4.9.4. Movilidad de profesores",
                            icon: "mdi-file-outline",
                            url: '/indicadores/45'
                        },
                        {
                            title: "4.9.5. Evaluación y reconocimiento del personal académico",
                            icon: "mdi-file-outline",
                            url: '/indicadores/46'
                        },
                        {
                            title: "4.9.6. Producción académica para el programa",
                            icon: "mdi-file-outline",
                            url: '/indicadores/47'
                        },
                        {
                            title: "4.9.7. Formas de organización para el trabajo académico",
                            icon: "mdi-file-outline",
                            url: '/indicadores/48'
                        },
                        {
                            title: "4.9.8. Líneas de generación, aplicación del conocimiento, y su transferencia al programa",
                            icon: "mdi-file-outline",
                            url: '/indicadores/49'
                        },
                        {
                            title: "4.9.9. Articulación de la investigación con la docencia",
                            icon: "mdi-file-outline",
                            url: '/indicadores/50'
                        },
                        {
                            title: "Fortalezas",
                            icon: "mdi-file-outline",
                            url: '/expedientes/9?FoD=F'
                        },
                        {
                            title: "Oportunidades de mejora",
                            icon: "mdi-file-outline",
                            url: '/expedientes/9?FoD=D'
                        },
                    ],
                },
                {
                    title: "IV.10. Infraestructura académica (énfasis en la específica del programa)",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "4.10.1. Aulas y espacios para la docencia, y su equipamiento",
                            icon: "mdi-file-outline",
                            url: '/indicadores/51'
                        },
                        {
                            title: "4.10.2. Laboratorios y talleres específicos para la realización de prácticas, y su equipamiento",
                            icon: "mdi-file-outline",
                            url: '/indicadores/52'
                        },
                        {
                            title: "4.10.3. Otras instalaciones fuera de la sede",
                            icon: "mdi-file-outline",
                            url: '/indicadores/53'
                        },
                        {
                            title: "4.10.4. Biblioteca",
                            icon: "mdi-file-outline",
                            url: '/indicadores/54'
                        },
                        {
                            title: "4.10.5. Espacios destinados para profesores",
                            icon: "mdi-file-outline",
                            url: '/indicadores/55'
                        },
                        {
                            title: "4.10.6. Espacios para encuentros académicos y/o culturales",
                            icon: "mdi-file-outline",
                            url: '/indicadores/56'
                        },
                        {
                            title: "Fortalezas",
                            icon: "mdi-file-outline",
                            url: '/expedientes/10?FoD=F'
                        },
                        {
                            title: "Oportunidades de mejora",
                            icon: "mdi-file-outline",
                            url: '/expedientes/10?FoD=D'
                        },
                    ],
                },
                {
                    title: "IV.11. Infraestructura física",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "4.11.1. Infraestructura física del lugar donde se imparte el programa",
                            icon: "mdi-file-outline",
                            url: '/indicadores/57'
                        },
                        {
                            title: "4.11.2. Agua potable y servicios sanitarios",
                            icon: "mdi-file-outline",
                            url: '/indicadores/58'
                        },
                        {
                            title: "4.11.3. Conservación y mantenimiento de instalaciones y equipo",
                            icon: "mdi-file-outline",
                            url: '/indicadores/59'
                        },
                        {
                            title: "4.11.4. Seguridad de personas y bienes",
                            icon: "mdi-file-outline",
                            url: '/indicadores/60'
                        },
                        {
                            title: "4.11.5. Áreas de deporte, recreación y convivencia",
                            icon: "mdi-file-outline",
                            url: '/indicadores/61'
                        },
                        {
                            title: "4.11.6. Conectividad",
                            icon: "mdi-file-outline",
                            url: '/indicadores/62'
                        },
                        {
                            title: "Fortalezas",
                            icon: "mdi-file-outline",
                            url: '/expedientes/11?FoD=F'
                        },
                        {
                            title: "Oportunidades de mejora",
                            icon: "mdi-file-outline",
                            url: '/expedientes/11?FoD=D'
                        },
                    ],
                },
                {
                    title: "IV.12. Servicios de apoyo",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "4.12.1. Administración escolar",
                            icon: "mdi-file-outline",
                            url: '/indicadores/63'
                        },
                        {
                            title: "4.12.2. Servicios de bienestar estudiantil",
                            icon: "mdi-file-outline",
                            url: '/indicadores/64'
                        },
                        {
                            title: "4.12.3. Becas y apoyos estudiantiles",
                            icon: "mdi-file-outline",
                            url: '/indicadores/65'
                        },
                        {
                            title: "4.12.4. Orientación para el tránsito a la vida profesional",
                            icon: "mdi-file-outline",
                            url: '/indicadores/66'
                        },
                        {
                            title: "4.12.5. Servicio de transporte",
                            icon: "mdi-file-outline",
                            url: '/indicadores/67'
                        },
                        {
                            title: "4.12.6. Servicio de cafetería",
                            icon: "mdi-file-outline",
                            url: '/indicadores/68'
                        },
                        {
                            title: "Fortalezas",
                            icon: "mdi-file-outline",
                            url: '/expedientes/12?FoD=F'
                        },
                        {
                            title: "Oportunidades de mejora",
                            icon: "mdi-file-outline",
                            url: '/expedientes/12?FoD=D'
                        },
                    ],
                },
            ],
        },
    ],
},
{
    title: "Recomendaciones SLICE-CIEES",
    icon: "mdi-collage",
    url: '',
    items: [{
            title: "I. Fundamentos y condiciones de operación",
            icon: "mdi-folder",
            url: '',
            items: [{
                    title: "I.1. Propósitos del programa. Misión y visión.",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "1.1.1. Misión y visión del programa",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/1'
                        },
                        {
                            title: "1.1.2. Fundamentación de la necesidad del programa",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/2'
                        },
                        {
                            title: "1.1.3. Plan de desarrollo del programa",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/3'
                        },
                        {
                            title: "1.1.4. Perfil de ingreso",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/4'
                        },
                        {
                            title: "1.1.5. Perfil de egreso",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/5'
                        },
                    ]
                },
                {
                    title: "I.2. Condiciones generales de operación del programa",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "1.2.1. Registro oficial del programa",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/6'
                        },
                        {
                            title: "1.2.2. Marco normativo institucional",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/7'
                        },
                        {
                            title: "1.2.3. Matrícula total y de primer ingreso",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/8'
                        },
                        {
                            title: "1.2.4. Presupuesto/Recursos del programa",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/9'
                        },
                        {
                            title: "1.2.5. Estructura organizacional para operar el programa",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/10'
                        },
                        {
                            title: "1.2.6. Integridad",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/11'
                        },
                        {
                            title: "1.2.7. Ambiente académico",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/12'
                        },
                    ]
                },
            ]
        },
        {
            title: "II. Currículo específico y genérico",
            icon: "mdi-folder",
            url: '',
            items: [{
                    title: "II.3. Modelo educativo y plan de estudios",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "2.3.1. Modelo educativo",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/13'
                        },
                        {
                            title: "2.3.2. Plan de estudios",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/14'
                        },
                        {
                            title: "2.3.3. Mapa curricular",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/15'
                        },
                        {
                            title: "2.3.4. Asignaturas o unidades de aprendizaje",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/16'
                        },
                        {
                            title: "2.3.5. Tecnología educativa y de la información para el aprendizaje",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/17'
                        },
                    ]
                },
                {
                    title: "II.4. Actividades para la formación integral",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "2.4.1. Cursos o actividades para la formación integral",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/18'
                        },
                        {
                            title: "2.4.2. Enseñanza de otras lenguas",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/19'
                        },
                        {
                            title: "2.4.3. Certificaciones externas de los estudiantes",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/20'
                        },
                    ]
                },
            ]
        },
        {
            title: "III. Tránsito de los estudiantes por el programa",
            icon: "mdi-folder",
            url: '',
            items: [{
                    title: "III.5. Proceso de ingreso al programa",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "3.5.1. Estrategias de difusión, promoción y orientación del programa",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/21'
                        },
                        {
                            title: "3.5.2. Procedimiento de ingreso de los aspirantes al programa",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/22'
                        },
                        {
                            title: "3.5.3. Actividades de bienvenida e inducción para estudiantes de nuevo ingreso",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/23'
                        },
                        {
                            title: "3.5.4. Programas de regularización, acciones de nivelación o apoyo",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/24'
                        },
                    ]
                },
                {
                    title: "III.6. Trayectoria escolar",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "3.6.1. Control del desempeño de los estudiantes dentro del programa",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/25'
                        },
                        {
                            title: "3.6.2. Movilidad e intercambio de estudiantes",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/26'
                        },
                        {
                            title: "3.6.3. Servicios de tutoría",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/27'
                        },
                        {
                            title: "3.6.4. Servicios de orientación y asesoría en apoyo al aprendizaje",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/28'
                        },
                        {
                            title: "3.6.5. Prácticas profesionales, estancias y visitas en el sector productivo",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/29'
                        },
                        {
                            title: "3.6.6. Reconocimiento a los estudiantes de alto desempeño",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/30'
                        },
                    ]
                },
                {
                    title: "III.7. Egreso del programa",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "3.7.1. Programa de titulación u obtención del grado",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/31'
                        },
                        {
                            title: "3.7.2. Eficiencia terminal",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/32'
                        },
                        {
                            title: "3.7.3. Eficiencia en la titulación u obtención del grado",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/33'
                        },
                        {
                            title: "3.7.4. Servicio social",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/34'
                        },
                        {
                            title: "3.7.5. Vínculo egresado-institución",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/35'
                        },
                    ]
                },
                {
                    title: "III.8. Resultados de los estudiantes",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "3.8.1. Resultados en exámenes de egreso externos a la institución",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/36'
                        },
                        {
                            title: "3.8.2. Nivel de dominio de otras lenguas",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/37'
                        },
                        {
                            title: "3.8.3. Participación de estudiantes en concursos, competiciones, exhibiciones y presentaciones, nacionales o internacionales",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/38'
                        },
                        {
                            title: "3.8.4. Desempeño de los egresados",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/39'
                        },
                        {
                            title: "3.8.5. Empleabilidad / Opinión de los empleadores",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/40'
                        },
                        {
                            title: "3.8.6. Cumplimiento del perfil de egreso",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/41'
                        },
                    ]
                },
            ]
        },
        {
            title: "IV. Personal académico, infraestructura y servicios",
            icon: "mdi-folder",
            url: '',
            items: [{
                    title: "IV.9. Personal académico",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "4.9.1. Composición actual del cuerpo docente",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/42'
                        },
                        {
                            title: "4.9.2. Mecanismo de ingreso, promoción y permanencia al programa como docente",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/43'
                        },
                        {
                            title: "4.9.3. Superación disciplinaria y habilitación académica",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/44'
                        },
                        {
                            title: "4.9.4. Movilidad de profesores",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/45'
                        },
                        {
                            title: "4.9.5. Evaluación y reconocimiento del personal académico",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/46'
                        },
                        {
                            title: "4.9.6. Producción académica para el programa",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/47'
                        },
                        {
                            title: "4.9.7. Formas de organización para el trabajo académico",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/48'
                        },
                        {
                            title: "4.9.8. Líneas de generación, aplicación del conocimiento y su transferencia al programa. *Solo para licenciatura y TSU",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/49'
                        },
                        {
                            title: "4.9.9. Articulación de la investigación con la docencia. *Sólo para programas de posgrado",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/50'
                        },
                    ]
                },
                {
                    title: "IV.10. Infraestructura académica",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "4.10.1. Aulas y espacios para la docencia, y su equipamiento",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/51'
                        },
                        {
                            title: "4.10.2. Laboratorios, talleres y espacios específicos para la realización de prácticas, y su equipamiento",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/52'
                        },
                        {
                            title: "4.10.3. Otras instalaciones fuera de la institución",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/53'
                        },
                        {
                            title: "4.10.4. Biblioteca",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/54'
                        },
                        {
                            title: "4.10.5. Espacios destinados para profesores",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/55'
                        },
                        {
                            title: "4.10.6. Espacios para encuentros académicos y/o culturales",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/56'
                        },
                    ]
                },
                {
                    title: "IV.11. Infraestructura física",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "4.11.1. Infraestructura física del lugar donde se imparte el programa",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/57'
                        },
                        {
                            title: "4.11.2. Agua potable y servicios sanitarios",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/58'
                        },
                        {
                            title: "4.11.3. Conservación y mantenimiento de instalaciones y equipo",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/59'
                        },
                        {
                            title: "4.11.4. Seguridad de personas y bienes",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/60'
                        },
                        {
                            title: "4.11.5. Áreas de deporte, recreación y convivencia",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/61'
                        },
                        {
                            title: "4.11.6. Conectividad",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/62'
                        },
                    ]
                },
                {
                    title: "IV.12. Servicios de apoyo",
                    icon: "mdi-folder-outline",
                    url: '',
                    items: [{
                            title: "4.12.1. Administración escolar",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/63'
                        },
                        {
                            title: "4.12.2. Servicios de bienestar estudiantil",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/64'
                        },
                        {
                            title: "4.12.3. Becas y apoyos estudiantiles",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/65'
                        },
                        {
                            title: "4.12.4. Orientación para el tránsito a la vida profesional",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/66'
                        },
                        {
                            title: "4.12.5. Servicio de transporte",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/67'
                        },
                        {
                            title: "4.12.6. Servicio de cafetería",
                            icon: "mdi-file-outline",
                            url: '/recomendaciones/68'
                        },
                    ]
                },
            ]
        },
    ],
},
{
    title: "Resumen",
    icon: "mdi-collage",
    url: '/resumen'
},
];


export default menuData;