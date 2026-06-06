export const BOOKING_URL = "https://example.simplybook.me";
export const WHATSAPP_URL = "https://wa.me/34642749135";
export const INSTAGRAM_URL = "https://www.instagram.com/irispleyade/";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=C%2F%20de%20Bail%C3%A8n%2C%204%2C%20Extramurs%2C%2046007%20Val%C3%A8ncia%2C%20Valencia%2C%20Espa%C3%B1a";

export const site = {
  name: "Iris Pleyade",
  fullName: "Iris Pleyade ✧ Wellness Valencia",
  shortDescription:
    "Masajes terapéuticos, Reiki, quiromasaje y belleza natural en Valencia.",
  phone: "+34 642 74 91 35",
  address: "C/ de Bailèn, 4, Extramurs, 46007 València, Valencia, España",
  neighborhood: "Valencia, Extramurs",
  hours: "Abierto hasta las 21:00",
  rating: "5,0",
  reviewCount: 42,
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Reseñas", href: "#resenas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export type IconName =
  | "hands"
  | "sparkles"
  | "leaf"
  | "family"
  | "heart"
  | "star"
  | "calendar"
  | "clock"
  | "map"
  | "message"
  | "instagram"
  | "whatsapp";

export const services: {
  name: string;
  description: string;
  duration: string;
  icon: IconName;
}[] = [
  {
    name: "Masaje Californiano",
    description:
      "Un masaje envolvente y relajante que ayuda a liberar tensiones, calmar la mente y reconectar con el cuerpo.",
    duration: "90 min",
    icon: "hands",
  },
  {
    name: "Quiromasaje",
    description:
      "Técnica manual enfocada en aliviar molestias musculares, mejorar la movilidad y favorecer el bienestar físico.",
    duration: "60–90 min",
    icon: "hands",
  },
  {
    name: "Reiki",
    description:
      "Sesión energética para armonizar cuerpo, mente y emoción desde una experiencia suave y profunda.",
    duration: "60 min",
    icon: "sparkles",
  },
  {
    name: "Belleza Natural",
    description:
      "Tratamientos naturales orientados a realzar tu luz, cuidar tu piel y potenciar tu bienestar integral.",
    duration: "Consultar",
    icon: "leaf",
  },
];

export const serviceCategories = [
  {
    name: "Masajes relajantes",
    eyebrow: "Calma profunda",
    description:
      "Rituales envolventes para bajar el ritmo, soltar tensión y volver a habitar tu cuerpo.",
    image: "/images/service-relaxing.jpg",
    services: [
      { name: "Masaje Relajante «Origen»", duration: "1 h", price: "55 €" },
      { name: "Masaje Californiano", price: "77 €" },
      { name: "Masaje «2 horas de Calma»", duration: "2 h", price: "110 €" },
      { name: "Masaje a 4 manos", duration: "1 h", price: "90 €" },
    ],
  },
  {
    name: "Masajes terapéuticos",
    eyebrow: "Alivio y recuperación",
    description:
      "Técnicas enfocadas en molestias musculares, movilidad y bienestar físico sostenido.",
    image: "/images/service-therapeutic.jpg",
    services: [
      { name: "Masaje Descontracturante", duration: "1 h", price: "60 €" },
      {
        name: "Espalda · cuello · hombros",
        duration: "50 min",
        price: "50 €",
      },
      { name: "Deportivo · Running Massage", duration: "50 min", price: "50 €" },
      {
        name: "Circulatorio · Drenaje Linfático",
        duration: "1 h",
        price: "60 €",
      },
    ],
  },
  {
    name: "Experiencias premium",
    eyebrow: "Rituales sensoriales",
    description:
      "Experiencias signature para convertir tu sesión en una pausa verdaderamente memorable.",
    image: "/images/service-premium.jpg",
    services: [
      {
        name: "Masaje Finlandés · Ritual de Sauna",
        duration: "1 h 10",
        price: "85 €",
      },
      { name: "Masaje con Baño de Gong", duration: "1 h 10", price: "135 €" },
      { name: "Masaje con Reiki", duration: "1 h 30", price: "85 €" },
      { name: "Ritual Sakura · Kobido + Reiki", price: "85 €" },
    ],
  },
  {
    name: "En pareja",
    eyebrow: "Bienestar compartido",
    description:
      "Un espacio íntimo para disfrutar juntos de una experiencia cuidada hasta el último detalle.",
    image: "/images/service-couples.jpg",
    services: [
      { name: "Masaje Bali", duration: "1 h", price: "125 €" },
      { name: "Masaje París", duration: "1 h 30", price: "170 €" },
      { name: "Masaje París Premium", duration: "2 h", price: "220 €" },
      {
        name: "Masaje Nirvana · Baño de Gong",
        duration: "1 h 10",
        price: "235 €",
      },
      { name: "Masterclass de Masaje", duration: "1 h 30", price: "220 €" },
    ],
  },
  {
    name: "Belleza",
    eyebrow: "Luz natural",
    description:
      "Cuidados faciales y corporales para potenciar tu piel desde una belleza consciente.",
    image: "/images/service-beauty.jpg",
    services: [
      { name: "Masaje Kobido · Lifting Facial Japonés", price: "55 €" },
      { name: "Maderoterapia Corporal / Facial", price: "60 €" },
      { name: "Metal terapia Corporal / Facial", price: "60 €" },
      { name: "HidroFacial Glow", price: "80 €" },
      { name: "Golden Skin Ritual", price: "90 €" },
    ],
  },
  {
    name: "Masajes express",
    eyebrow: "Una pausa a tu medida",
    description:
      "Tratamientos breves y precisos para regalarte bienestar incluso cuando tienes poco tiempo.",
    image: "/images/service-express.jpg",
    services: [
      { name: "Masaje Full Body", duration: "30 min", price: "40 €" },
      { name: "Masaje de Espalda", duration: "30 min", price: "35 €" },
      { name: "Masaje Piernas y Pies", duration: "30 min", price: "35 €" },
    ],
  },
  {
    name: "Coaching y terapias energéticas",
    eyebrow: "Equilibrio interior",
    description:
      "Acompañamiento y terapias sutiles para armonizar mente, emoción y energía.",
    image: "/images/service-energy.jpg",
    services: [
      { name: "Psicoterapia Transpersonal", price: "55 €" },
      { name: "Reiki", price: "35 € / 50 €" },
      { name: "Terapia de Hipnosis", price: "60 €" },
      { name: "Limpiezas energéticas", price: "50 €" },
    ],
  },
];

export const experiences: {
  name: string;
  eyebrow: string;
  features: string[];
  cta: string;
  href: string;
  icon: IconName;
  featured?: boolean;
}[] = [
  {
    name: "Bono Familiar",
    eyebrow: "Masaje Californiano",
    features: [
      "8 sesiones",
      "12 horas totales de masaje",
      "Uso flexible durante 4 meses",
      "Ideal para compartir bienestar",
    ],
    cta: "Consultar bono",
    href: WHATSAPP_URL,
    icon: "family",
  },
  {
    name: "Experience Wellness Premium",
    eyebrow: "Vale regalo",
    features: [
      "Experiencia para parejas",
      "Masaje relajante",
      "Aromaterapia",
      "Ambiente íntimo y exclusivo",
    ],
    cta: "Ver experiencia",
    href: BOOKING_URL,
    icon: "heart",
    featured: true,
  },
  {
    name: "Ritual Holístico Iris Pleyade",
    eyebrow: "Experiencia signature",
    features: [
      "Masaje consciente",
      "Energía, cuerpo y mente",
      "Experiencia sensorial completa",
      "Un cuidado diseñado para ti",
    ],
    cta: "Reservar ritual",
    href: BOOKING_URL,
    icon: "star",
  },
];

export const aboutHighlights = [
  "Atención cercana y personalizada",
  "Terapias holísticas y corporales",
  "Ambiente cálido, íntimo y cuidado",
  "Experiencias pensadas para cuerpo, mente y alma",
];

export const reviews = [
  {
    quote:
      "El masaje de Iris fue realmente de otro mundo. Fue más que trabajo corporal: profundamente espiritual y sanador. Su energía, intuición y tacto crearon una experiencia que me dejó completamente relajado, enraizado y renovado. Nunca había recibido un masaje así. Absolutamente increíble.",
    name: "Nelson Gonzales · Google · 4 meses",
  },
  {
    quote:
      "Un masaje hecho con sensibilidad, técnica y mucha buena energía. Desde el primer momento transmite paz y cuidado en cada detalle. Salí leve, relajado y con ganas de volver. ¡Lo recomiendo mucho!",
    name: "Thassio Freitas · Google · 5 meses",
  },
  {
    quote:
      "Fantástico masaje con Iris, con una técnica excelente y un ambiente muy relajante. ¡100% recomendable!",
    name: "Andrii Buniak · Google · 5 meses",
  },
  {
    quote:
      "Es un lugar increíble, lleno de buena energía y relajación. Fui con mi mujer y nos sentimos muy cómodos y tranquilos. Es experta y sabe cómo hacer el trabajo. Apreciamos mucho su profesionalidad.",
    name: "Juan Acero · Google · 2 meses",
  },
  {
    quote:
      "Encontré este centro por casualidad y solo tengo elogios. El centro está en una calle de trato súper especial en todos los sentidos. Iris es increíblemente simpática y el masaje es muy profesional. En mi caso, fue un masaje para parejas. ¡Sin duda volveremos!",
    name: "Eva Herrero · Google · 2 meses",
  },
  {
    quote:
      "Masaje relajante perfecto. Iris es muy profesional e innovadora. ¡Iré siempre que venga a Valencia! ¡La recomiendo muchísimo!",
    name: "Ledysbel Castellanos · Google · 5 meses",
  },
];

export const faqs = [
  {
    question: "¿Cómo puedo reservar una cita?",
    answer:
      "Puedes reservar directamente desde el botón «Regala un masaje» o escribir por WhatsApp.",
  },
  {
    question: "¿Puedo pagar por adelantado?",
    answer:
      "Sí, el sistema de reservas puede permitir pago anticipado o señal según el servicio configurado.",
  },
  {
    question: "¿Dónde está ubicado Iris Pleyade?",
    answer: "Estamos en C/ de Bailèn, 4, Extramurs, 46007 València.",
  },
  {
    question: "¿Puedo regalar una experiencia?",
    answer:
      "Sí, existen bonos y experiencias pensadas para regalar bienestar.",
  },
  {
    question: "¿Qué tratamiento es mejor para mí?",
    answer:
      "Si tienes dudas, puedes escribir por WhatsApp y te orientaremos según lo que necesites.",
  },
];
