export type CoupleStory = {
  slug: string;
  name: string;
  date: string;
  location: string;
  image: string;
  cover: string;
  gallery: string[];
  song: string;
  songNote: string;
  quote: string;
  summary: string;
  story: string[];
  moments: string[];
};

export const coupleStories: CoupleStory[] = [
  {
    slug: "juliana-rafael",
    name: "Juliana & Rafael",
    date: "Outubro de 2024",
    location: "Cerimônia ao ar livre",
    image: "raw-12.png",
    cover: "raw-12.png",
    gallery: ["raw-12.png", "raw-02.png", "raw-13.png"],
    song: "Can't Help Falling in Love",
    songNote: "Música que marcou a entrada da noiva",
    quote: "Do primeiro contato à última música, sentimos segurança, cuidado e emoção. A cerimônia ficou com a nossa cara.",
    summary: "Uma cerimônia leve, ao ar livre, pensada para acompanhar a emoção do casal sem roubar a cena do momento.",
    story: [
      "Juliana e Rafael queriam uma cerimônia com presença, mas sem exageros. A música precisava acompanhar o ambiente aberto, a chegada dos convidados e a emoção da entrada principal com naturalidade.",
      "O repertório foi desenhado para crescer aos poucos: primeiro com uma atmosfera acolhedora, depois com uma entrada mais íntima e, por fim, uma saída celebrativa.",
      "A canção do casal entrou como ponto de memória. Não apenas como uma música conhecida, mas como um jeito de marcar aquele instante para que ele pudesse ser lembrado depois.",
    ],
    moments: ["Entrada suave dos padrinhos", "Entrada da noiva com tema afetivo", "Saída dos noivos em clima de celebração"],
  },
  {
    slug: "mariana-felipe",
    name: "Mariana & Felipe",
    date: "Dezembro de 2024",
    location: "Cerimônia clássica",
    image: "raw-13.png",
    cover: "raw-13.png",
    gallery: ["raw-13.png", "raw-03.png", "raw-15.png"],
    song: "A Thousand Years",
    songNote: "Tema escolhido para o momento das alianças",
    quote: "A música foi um dos pontos altos do nosso dia. Eles conduziram tudo com delicadeza e repertório impecável.",
    summary: "Uma história conduzida por arranjos delicados, com a troca de alianças como ponto de maior emoção.",
    story: [
      "Mariana e Felipe chegaram com referências muito claras: queriam uma cerimônia elegante, emocional e com transições musicais bem cuidadas.",
      "A construção da trilha priorizou a fluidez. Cada entrada recebeu uma textura diferente, mas todas conversavam entre si para que a cerimônia parecesse uma única narrativa.",
      "Na troca de alianças, a música escolhida pelo casal ganhou um arranjo mais íntimo, deixando espaço para os votos e para o silêncio do momento.",
    ],
    moments: ["Repertório clássico de abertura", "Troca de alianças com arranjo intimista", "Assinatura com clima leve"],
  },
  {
    slug: "camila-andre",
    name: "Camila & André",
    date: "Janeiro de 2025",
    location: "Celebração com saída marcante",
    image: "raw-15.png",
    cover: "raw-15.png",
    gallery: ["raw-15.png", "raw-11.png", "raw-16.png"],
    song: "Perfect",
    songNote: "Tema da saída dos noivos",
    quote: "Escolher o Trio Clássico foi uma das melhores decisões que tomamos. Talento, sensibilidade e muita excelência.",
    summary: "Uma cerimônia com início delicado e final vibrante, pensada para valorizar a celebração do casal.",
    story: [
      "Camila e André queriam que a cerimônia tivesse um percurso emocional claro: delicadeza no início, profundidade nos votos e alegria na saída.",
      "A direção musical cuidou para que cada momento tivesse sua própria intenção, mantendo a elegância da cerimônia e preparando a transição para a festa.",
      "A música da saída foi escolhida para marcar a primeira caminhada do casal depois do sim, com uma interpretação mais luminosa e celebrativa.",
    ],
    moments: ["Entrada com atmosfera delicada", "Votos com sustentação emocional", "Saída dos noivos em clima vibrante"],
  },
];

export const getCoupleStory = (slug: string) => coupleStories.find((story) => story.slug === slug);
