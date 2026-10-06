export type SectionId = "modelado" | "animacion" | "concept";

export type DemoMesh = "castle" | "cat" | "house" | "fountain";

export type Project = {
  id: string;
  section: SectionId;
  name: string;
  cat: string;
  year?: string;
  software?: string;
  img: string;
  img2?: string;
  desc: string;
  demoMesh?: DemoMesh;
};

export const NAV = [
  { to: "/", label: "Inicio", hint: "Portada" },
  { to: "/acerca", label: "Acerca de mi", hint: "Quién soy" },
  { to: "/modelado", label: "Modeling 3D", hint: "Escenarios y personajes" },
  { to: "/animacion", label: "Animación", hint: "Cortos y ejercicios" },
  { to: "/concept", label: "Concept Art", hint: "Bocetos e ideas" },
  { to: "/contacto", label: "Contacto", hint: "Hablemos" },
] as const;

export const PROFILE = {
  firstName: "Julieth",
  fullName: "Melany Julieth Plazas Yacue",
  bio: "Soy una estudiante del SENA en el departamento de Tolima-Ibagué, estoy cursando un tecnólogo de Animación 3D. También soy ilustradora digital con temática de fantasía e ilustraciones de paisajes semi-realistas.",
  chips: [
    "Animación 3D",
    "Modelado 3D",
    "Ilustración digital",
    "Concept Art",
    "Fantasía",
    "Paisajes semi-realistas",
  ],
  skills: ["Blender", "Unreal Engine", "Krita", "Adobe Illustrator"],
  tiktok: "@julieth_000777",
  email: "plazasjulieth6@gmail.com",
  phone: "3115840825",
  footer: "© Julieth · Animación 3D & Arte Digital",
  contactLead:
    "¿Hablamos de un proyecto, una colaboración o una historia por contar?",
};

export const SECTION_COPY: Record<
  SectionId,
  { title: string; kicker: string; desc: string; cta: string }
> = {
  modelado: {
    title: "Modeling 3D",
    kicker: "Escenarios y personajes",
    desc: "Proyectos creados durante el curso de animación 3D: escenarios y personajes, tanto modelos originales como un modelo ya existente de una serie muy famosa de cartoon.",
    cta: "Ver proyecto",
  },
  animacion: {
    title: "Animación",
    kicker: "Movimiento y carácter",
    desc: "Proyectos creados durante el curso de animación 3D: videos cortos de distintas temáticas o ejercicios de animación.",
    cta: "Ver proyecto",
  },
  concept: {
    title: "Concept Art",
    kicker: "Historias en papel",
    desc: "Creación de bocetos e ilustraciones para crear historias y cortos animados, o en su preparación como una idea de posibles proyectos.",
    cta: "Ver ilustración",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "m1",
    section: "modelado",
    name: "Castillo",
    cat: "Escenario",
    software: "Blender",
    img: "/images/castillo.jpg",
    img2: "/images/castillo-2.jpg",
    demoMesh: "castle",
    desc: "Modelado 3D de un castillo medieval, enfocado en la construcción de estructuras arquitectónicas, torres, detalles y proporciones.",
  },
  {
    id: "m2",
    section: "modelado",
    name: "Gatito de cerámica",
    cat: "Personaje",
    software: "Blender",
    img: "/images/gatito.jpg",
    img2: "/images/gatito-2.jpg",
    demoMesh: "cat",
    desc: "Modelado y renderizado de un personaje de cerámica, explorando formas, texturas, iluminación y composición para crear una escena con una estética fantástica.",
  },
  {
    id: "m3",
    section: "modelado",
    name: "Soledad vieja",
    cat: "Escenario",
    software: "Blender",
    img: "/images/soledad-vieja.jpg",
    demoMesh: "house",
    desc: "Estudio de luz cálida, texturas y sombras proyectadas que evoca una atmósfera de quietud y nostalgia.",
  },
  {
    id: "m4",
    section: "modelado",
    name: "Fuente abandonada",
    cat: "Escenario",
    software: "Blender",
    img: "/images/fuente.jpg",
    img2: "/images/fuente-2.jpg",
    demoMesh: "fountain",
    desc: "Modelado y renderizado de una columna con iluminación volumétrica, explorando texturas y composición para evocar una atmósfera misteriosa.",
  },
  {
    id: "a1",
    section: "animacion",
    name: 'Mascota de Pinterest "PINNY"',
    cat: "Mascota",
    software: "Blender",
    img: "/images/pinny.jpg",
    desc: "Pinny es una ardilla albina recolectora que se dedica principalmente a buscar imágenes o tendencias que a su espectador le interese o necesite.",
  },
  {
    id: "a2",
    section: "animacion",
    name: 'Personaje Cartoon "BURBUJA"',
    cat: "Personaje cartoon",
    software: "Blender",
    img: "/images/burbuja.jpg",
    desc: "Burbuja es una de las tres Chicas Superpoderosas creada por el animador estadounidense Craig McCracken y adaptado por Cartoon Network.",
  },
  {
    id: "a3",
    section: "animacion",
    name: 'Animal híbrido "PICO DE ACERO"',
    cat: "Animal híbrido",
    software: "Blender",
    img: "/images/pico-de-acero.jpg",
    desc: "Pico de acero es un animal híbrido y robótico diseñado para la tala de árboles sin descanso haciendo que vaya perdiendo su identidad.",
  },
  {
    id: "c1",
    section: "concept",
    name: "Diseño de personaje 1",
    cat: "Concept Art",
    img: "/images/concept-1.jpg",
    desc: "Estudio de personaje: proporciones, paleta y presencia en un entorno de bosque.",
  },
  {
    id: "c2",
    section: "concept",
    name: "Diseño de personaje 2",
    cat: "Concept Art",
    img: "/images/concept-2.jpg",
    desc: "Exploración de silueta y color para un personaje de animación estilizada.",
  },
  {
    id: "c3",
    section: "concept",
    name: "Hoja de personaje 3",
    cat: "Concept Art",
    img: "/images/concept-3.jpg",
    desc: "Hoja de personaje con paleta y construcción para un corto animado.",
  },
  {
    id: "c4",
    section: "concept",
    name: "Hoja de personaje 4",
    cat: "Concept Art",
    img: "/images/concept-4.jpg",
    desc: "Hoja de personaje centrada en materiales, volumen y gesto.",
  },
  {
    id: "c5",
    section: "concept",
    name: "Estudio de personaje 5",
    cat: "Boceto",
    img: "/images/concept-5.jpg",
    desc: "Estudio de atmósfera y personaje como idea para un escenario narrativo.",
  },
  {
    id: "c6",
    section: "concept",
    name: "Boceto de personaje 6",
    cat: "Boceto",
    img: "/images/concept-6.jpg",
    desc: "Boceto libre para preparar historias y posibles cortos animados.",
  },
];

export function projectsBySection(section: SectionId) {
  return PROJECTS.filter((p) => p.section === section);
}

export function projectById(id: string) {
  return PROJECTS.find((p) => p.id === id);
}

export const FEATURED_IDS = ["m1", "a1", "c1"] as const;
