export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  price: number;
};

export const SERVICES: Service[] = [
  {
    id: "grovtvatt",
    title: "Grovtvatt",
    shortDescription: "Grundlig avspolning och rengoring av hela bilen.",
    longDescription:
      "En ordentlig avspolning och handtvatt av hela bilens utsida. Vi tar bort smuts, vagsalt och insekter med skonsamma men effektiva produkter. Perfekt som grund innan polering, vaxning eller keramisk behandling.",
    image: "/images/grovtvatt.jpg",
    price: 259,
  },
  {
    id: "innertvatt",
    title: "Innertvatt",
    shortDescription: "Djup rengoring av interior, mattor och paneler.",
    longDescription:
      "Vi rengor noggrant hela kupen: dammsuger, torkar av paneler, rengor dorrsidor och detaljer. Fokus ligger pa att aterstalla en frasch kansla i kupen utan starka dofter eller kladdiga ytor.",
    image: "/images/innertvatt.jpg",
    price: 399,
  },
  {
    id: "ambient-light",
    title: "Ambient Light (interior)",
    shortDescription:
      "Installation/justering av ambient belysning for en premium-kansla i kupen.",
    longDescription:
      "Vi installerar eller justerar ambient belysning i bilens interior for en modern och exklusiv look. Passar dig som vill uppgradera kanslan i kupen med snyggt ljus och ren montering.",
    image: "/images/gallery/ambient1.jpg",
    price: 699,
  },
  {
    id: "satestvatt",
    title: "Satestvatt",
    shortDescription: "Textil- och ladersaten rengors pa djupet.",
    longDescription:
      "Djupgaende rengoring av textil- och/eller ladersaten. Vi arbetar bort flackar, smuts och missfargningar sa langt det ar mojligt med skonsamma metoder. Rekommenderas vid barn, husdjur eller aldre flackar.",
    image: "/images/satestvatt.jpg",
    price: 269,
  },
  {
    id: "polering",
    title: "Polering",
    shortDescription: "Tar bort repor och ger bilen ny glans.",
    longDescription:
      "Maskinpolering som reducerar tvattrepor, oxidering och matta ytor. Perfekt innan vaxning eller keramisk lackbehandling for att fa fram maximal glans och djup i lacken.",
    image: "/images/polering.jpg",
    price: 999,
  },
  {
    id: "vaxning",
    title: "Vaxning",
    shortDescription: "Skyddar lacken och ger langvarig glans.",
    longDescription:
      "Vaxbehandling som lagger ett skyddande lager ovanpa lacken. Ger battre avrinning, enklare tvatt och en fin glans. Bra alternativ for dig som vill ha skydd men inte ga hela vagen till keramisk behandling.",
    image: "/images/vaxning.jpg",
    price: 799,
  },
  {
    id: "keramisk",
    title: "Keramisk lackbehandling",
    shortDescription: "Premiumbehandling med langvarigt skydd.",
    longDescription:
      "Avancerat lackskydd dar en keramisk coating laggs pa lacken. Ger upp till flera ars skydd mot smuts, UV-stralning och kemikalier. Ger ocksa en otrolig glans och en mycket lattare tvattupplevelse.",
    image: "/images/keramisk.jpg",
    price: 2999,
  },
];

