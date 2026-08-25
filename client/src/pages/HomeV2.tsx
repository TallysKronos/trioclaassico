import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Heart,
  Instagram,
  Mail,
  Menu,
  Music,
  Phone,
  Play,
  Quote,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { coupleStories } from "@/data/stories";

const pagePath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
const asset = (name: string) => pagePath(`figma-assets/${name}`);
const lpAsset = (name: string) => pagePath(`lp-assets/${name}`);
const logoAsset = pagePath("lp-assets/trio-classico-logo-transparent-cropped.png");
const whatsappHref = "https://wa.me/5531998674394";
const emailHref = "mailto:trioclassicomusica@gmail.com";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Formações", href: "#formacoes" },
  { label: "Momentos", href: "#momentos" },
  { label: "Histórias", href: "#historias" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
  { label: "V1", href: pagePath("v1") },
];

const benefits = [
  {
    icon: Music,
    title: "Direção musical da cerimônia",
    text: "Acompanhamos entradas, transições e momentos simbólicos para que a música sustente o rito com naturalidade.",
  },
  {
    icon: Heart,
    title: "Consultoria Musical",
    text: "Orientamos o casal na escolha das músicas, entradas e formação que melhor traduzem o estilo da cerimônia.",
  },
  {
    icon: Users,
    title: "Presença profissional no grande dia",
    text: "Chegada organizada, cuidado com cronograma e execução preparada para ambientes internos ou externos.",
  },
];

const videos = [
  { title: "Entrada da noiva", detail: "Abertura emocional da cerimônia", image: "raw-01.png" },
  { title: "Troca de alianças", detail: "Momento íntimo e simbólico", image: "raw-03.png" },
  { title: "Saída dos noivos", detail: "Celebração com presença musical", image: "raw-06.png" },
];

const formations = [
  {
    title: "Trio Standard",
    image: "raw-05.png",
    subtitle: "Piano, violino e voz",
    ideal: "Para cerimônias intimistas, capelas e espaços ao ar livre, com uma presença musical delicada e acolhedora.",
    features: ["Leveza para entradas", "Clima afetivo", "Sonoridade elegante"],
  },
  {
    title: "Trio Plus",
    image: "raw-17.png",
    subtitle: "Piano, violino, violoncelo e voz",
    ideal: "Para casais que sonham com momentos mais marcantes, entradas cantadas e arranjos com mais camadas de emoção.",
    features: ["Entradas memoráveis", "Voz como destaque", "Arranjos mais envolventes"],
  },
  {
    title: "Trio Strings",
    image: "raw-06.png",
    subtitle: "Violino, viola e violoncelo, acompanhados de voz e piano",
    ideal: "Sonoridade refinada, com presença e elegância. Uma sensação de uma mini orquestra na sua cerimônia.",
    features: ["Textura refinada", "Presença e elegância", "Sensação de mini orquestra"],
  },
];

const members = [
  {
    name: "Amanda",
    role: "Voz",
    image: "raw-05.png",
    text: "Eu busco transformar cada entrada em uma memória viva, cantando com delicadeza e atenção à história de cada casal.",
  },
  {
    name: "Breno",
    role: "Piano",
    image: "raw-03.png",
    text: "Eu conduzo os arranjos e a consultoria musical para que a cerimônia tenha fluidez, intenção e emoção do início ao fim.",
  },
  {
    name: "Louise",
    role: "Voz",
    image: "raw-10.png",
    text: "Eu cuido das melodias com presença e sensibilidade, para que cada nota acompanhe o significado de cada momento.",
  },
  {
    name: "João",
    role: "Piano",
    image: "raw-12.png",
    text: "Eu trago textura e profundidade aos arranjos, criando uma base acolhedora para os momentos mais íntimos da cerimônia.",
  },
  {
    name: "Pierre",
    role: "Cordas (violino e violão)",
    image: "raw-15.png",
    text: "Eu sustento a emoção com o violoncelo, dando corpo, elegância e intensidade às passagens mais simbólicas do grande dia.",
  },
];

const moments = [
  { title: "Padrinhos", text: "A celebração da união e a presença de quem faz parte da história do casal." },
  { title: "Noivo", text: "Expectativa, emoção e a realização de estar prestes a viver um dos momentos mais importantes da sua vida." },
  { title: "Noiva", text: "O ápice da expectativa. Um momento de encantamento, emoção e grandeza." },
  { title: "Troca das Alianças", text: "Amor, compromisso e a promessa de uma vida compartilhada." },
  { title: "Votos", text: "Intimidade, verdade e a expressão dos sentimentos mais profundos do casal." },
  { title: "Beijo", text: "A celebração do amor e o instante em que a promessa se transforma em realidade." },
  { title: "Saída dos Noivos", text: "Alegria, celebração e o início de uma nova história juntos." },
];

const gallery = [
  { label: "Making of musical", image: "raw-02.png" },
  { label: "Entrada da noiva", image: "raw-12.png" },
  { label: "Cerimônia ao ar livre", image: "raw-13.png" },
  { label: "Troca de alianças", image: "raw-15.png" },
  { label: "Saída dos noivos", image: "raw-11.png" },
];

const testimonials = coupleStories.map((story) => ({
  slug: story.slug,
  name: story.name,
  date: `Casamento em ${story.date}`,
  image: story.image,
  text: story.quote,
}));

const processSteps = [
  { icon: "frame-13.svg", step: "01", title: "Faça seu orçamento", text: "Recebemos as informações principais da cerimônia para preparar uma proposta personalizada." },
  { icon: "frame-14.svg", step: "02", title: "Ouvimos a história", text: "Conversamos sobre o casal, referências musicais e momentos que precisam ser lembrados." },
  { icon: "frame-16.svg", step: "03", title: "Consultoria Musical", text: "Orientamos vocês nas escolhas musicais e na construção da experiência da cerimônia." },
  { icon: "frame-17.svg", step: "04", title: "Ensaios", text: "Ensaiamos e gravamos para os noivos acompanharem o processo." },
  { icon: "frame-5.svg", step: "05", title: "Vivemos esse momento", text: "Chegamos preparados para conduzir cada entrada, pausa e celebração com presença." },
];

function BudgetDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("Pedido recebido. Em breve entraremos em contato com uma proposta personalizada.");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[620px] border-[#d7ccc2] bg-[#f7f3ef] p-0">
        <DialogHeader className="border-b border-[#d7ccc2] px-7 py-6">
          <DialogTitle className="font-serif text-4xl font-normal text-[#2c2b2a]">Faça seu orçamento</DialogTitle>
          <DialogDescription className="text-base text-[#52483e]">
            Envie os detalhes principais para começarmos a imaginar a trilha da cerimônia com vocês.
          </DialogDescription>
        </DialogHeader>
        <form className="px-7 py-6" onSubmit={handleSubmit}>
          <FieldGroup className="gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="v2-name">Nome</FieldLabel>
                <Input id="v2-name" required autoComplete="name" />
              </Field>
              <Field>
                <FieldLabel htmlFor="v2-email">Email</FieldLabel>
                <Input id="v2-email" required type="email" autoComplete="email" />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="v2-phone">Telefone</FieldLabel>
                <Input id="v2-phone" required type="tel" autoComplete="tel" />
              </Field>
              <Field>
                <FieldLabel htmlFor="v2-city">Cidade</FieldLabel>
                <Input id="v2-city" required autoComplete="address-level2" />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="v2-instagram">Instagram</FieldLabel>
                <Input id="v2-instagram" placeholder="@perfil" />
              </Field>
              <Field>
                <FieldLabel htmlFor="v2-couple">Nome do casal</FieldLabel>
                <Input id="v2-couple" required />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="v2-date">Data da cerimônia</FieldLabel>
                <Input id="v2-date" required type="date" />
              </Field>
              <Field>
                <FieldLabel htmlFor="v2-time">Horário da cerimônia</FieldLabel>
                <Input id="v2-time" required type="time" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="v2-place">Local da cerimônia</FieldLabel>
              <Input id="v2-place" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="v2-notes">Observações</FieldLabel>
              <Textarea id="v2-notes" placeholder="Conte como imagina a cerimônia" className="min-h-24" />
            </Field>
          </FieldGroup>
          <p className="mt-4 text-xs leading-relaxed text-[#82674f]">
            Usaremos essas informações apenas para retornar com uma proposta para a cerimônia.
          </p>
          <Button className="mt-6 h-12 w-full rounded bg-[#a6623f] text-white hover:bg-[#704d3c]">
            Enviar pedido de orçamento
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomeV2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [videoOpen, setVideoOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(1);

  const heroStyle = useMemo(
    () => ({
      backgroundImage: `linear-gradient(90deg, rgba(35,36,36,.92), rgba(35,36,36,.52) 42%, rgba(35,36,36,.28)), url(${asset("raw-04.jpeg")})`,
    }),
    []
  );

  const activeGallery = gallery[galleryIndex];

  return (
    <main className="trio-v2">
      <header className="v2-header">
        <a className="v2-logo" href="#inicio" aria-label="Trio Clássico">
          <img src={logoAsset} alt="" />
          <span>Trio Clássico</span>
        </a>
        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <a key={item.href} className="v2-nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <BudgetDialog>
            <Button className="hidden h-11 rounded bg-[#a6623f] px-6 text-sm font-bold text-white hover:bg-[#704d3c] md:inline-flex">
              Faça seu orçamento
            </Button>
          </BudgetDialog>
          <Button variant="ghost" size="icon" className="text-white xl:hidden" onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {menuOpen && (
        <motion.nav className="v2-mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </motion.nav>
      )}

      <section id="inicio" className="v2-hero" style={heroStyle}>
        <div className="v2-container v2-hero-grid">
          <motion.div initial={{ y: 18 }} animate={{ y: 0 }} transition={{ duration: 0.7 }}>
            <img src={lpAsset("separator.svg")} alt="" className="v2-divider" />
            <h1>Transformando o amor em música</h1>
            <p>
              Música ao vivo para cerimônias de casamento, criada com sensibilidade para acompanhar a história de cada
              casal do primeiro olhar à última celebração.
            </p>
            <div className="v2-hero-actions">
              <BudgetDialog>
                <Button className="h-12 rounded bg-[#a6623f] px-7 text-sm font-bold text-white hover:bg-[#704d3c]">
                  Faça seu orçamento
                  <ChevronRight data-icon="inline-end" />
                </Button>
              </BudgetDialog>
              <Button variant="outline" className="h-12 rounded border-white/45 bg-white/10 px-6 text-sm font-bold text-white hover:bg-white hover:text-[#232424]">
                Ver experiência
                <ChevronRight data-icon="inline-end" />
              </Button>
            </div>
            <p className="v2-hero-signature">Uma trilha para lembrar, sentir e reviver.</p>
          </motion.div>
        </div>
      </section>

      <section id="experiencia" className="v2-section v2-light">
        <div className="v2-container v2-intro-grid">
          <Reveal>
            <p className="v2-kicker">Sobre nós</p>
            <h2>Mais que música, criamos memórias.</h2>
            <p>
              O Trio Clássico é especializado em música para cerimônias de casamento. Cada detalhe musical é pensado
              para valorizar a história do casal e sustentar a emoção de cada momento.
            </p>
          </Reveal>
          <div className="v2-benefit-grid">
            {benefits.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <article className="v2-benefit-card">
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-section v2-dark">
        <div className="v2-container v2-media-grid">
          <Reveal>
            <p className="v2-kicker">Assista e escute</p>
            <h2>Sinta a emoção antes do grande dia.</h2>
            <p>
              Veja como a música ao vivo cria atmosfera, conduz entradas e torna cada momento da cerimônia mais
              memorável.
            </p>
          </Reveal>
          <div className="v2-video-layout">
            <button
              className="v2-video-feature"
              onClick={() => {
                setSelectedVideo(videos[0]);
                setVideoOpen(true);
              }}
            >
              <img src={asset(videos[0].image)} alt={videos[0].title} />
              <span><Play fill="currentColor" /></span>
              <strong>{videos[0].title}</strong>
            </button>
            <div className="v2-video-stack">
              {videos.slice(1).map((video) => (
                <button
                  key={video.title}
                  className="v2-video-row"
                  onClick={() => {
                    setSelectedVideo(video);
                    setVideoOpen(true);
                  }}
                >
                  <img src={asset(video.image)} alt={video.title} />
                  <span>
                    <strong>{video.title}</strong>
                    <small>{video.detail}</small>
                  </span>
                  <Play fill="currentColor" />
                </button>
              ))}
            </div>
          </div>
        </div>
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="border-[#4c3b34] bg-[#232424] text-white">
            <DialogHeader>
              <DialogTitle className="font-serif text-4xl font-normal">{selectedVideo.title}</DialogTitle>
              <DialogDescription>Prévia visual do momento selecionado.</DialogDescription>
            </DialogHeader>
            <div className="relative overflow-hidden rounded-xl">
              <img src={asset(selectedVideo.image)} alt={selectedVideo.title} className="aspect-video w-full object-cover" />
              <div className="absolute inset-0 grid place-items-center bg-black/20">
                <Play className="size-16 text-white" fill="currentColor" />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      <section id="formacoes" className="v2-section v2-light">
        <div className="v2-container">
          <Reveal className="v2-centered">
            <p className="v2-kicker">Nossas formações</p>
            <h2>A sonoridade que combina com a sua cerimônia.</h2>
            <p>
              Cada formação é um jeito diferente de traduzir o mesmo cuidado: criar presença musical para um dia que
              não volta.
            </p>
          </Reveal>
          <div className="v2-formation-grid">
            {formations.map((formation) => (
              <Card key={formation.title} className="v2-formation-card">
                <img src={asset(formation.image)} alt={formation.title} />
                <CardHeader>
                  <CardTitle>{formation.title}</CardTitle>
                  <CardDescription>{formation.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{formation.ideal}</p>
                  <ul>
                    {formation.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex-col items-stretch gap-4">
                  <span>Escolhida junto com o casal, a partir da história, do espaço e da emoção desejada.</span>
                  <BudgetDialog>
                    <Button className="h-11 rounded bg-[#a6623f] text-white hover:bg-[#704d3c]">
                      Faça seu orçamento
                    </Button>
                  </BudgetDialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-section v2-warm" id="integrantes">
        <div className="v2-container v2-member-layout">
          <Reveal className="v2-member-heading">
            <p className="v2-kicker">Integrantes</p>
            <h2>Cada músico, uma camada da cerimônia.</h2>
            <p>
              Mais do que uma lista pronta de músicas, o Trio Clássico cria uma experiência sonora pensada para a
              cerimônia e para a história do casal.
            </p>
          </Reveal>
          <div className="v2-member-grid">
            {members.map((member) => (
              <article className="v2-member-card" key={member.name}>
                <img src={asset(member.image)} alt={member.name} />
                <div>
                  <strong>{member.name}</strong>
                  <small>{member.role}</small>
                  <p>{member.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="momentos" className="v2-section v2-dark">
        <div className="v2-container">
          <Reveal className="v2-centered">
            <p className="v2-kicker">Cada momento, uma emoção</p>
            <h2>Uma trilha pensada para acompanhar toda a cerimônia.</h2>
          </Reveal>
          <div className="v2-timeline">
            {moments.map((moment, index) => (
              <article key={moment.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{moment.title}</strong>
                  <p>{moment.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="v2-section v2-light">
        <div className="v2-container v2-gallery-layout">
          <Reveal>
            <p className="v2-kicker">Casamentos reais</p>
            <h2>Registros por momento da cerimônia.</h2>
            <p>
              A galeria definitiva será atualizada com materiais reais. Por enquanto, a estrutura mostra como cada
              categoria será apresentada.
            </p>
          </Reveal>
          <div className="v2-gallery-preview">
            <img src={asset(activeGallery.image)} alt={activeGallery.label} />
            <strong>{activeGallery.label}</strong>
          </div>
          <div className="v2-gallery-strip">
            {gallery.map((item, index) => (
              <button key={item.label} data-active={index === galleryIndex} onClick={() => setGalleryIndex(index)}>
                <img src={asset(item.image)} alt={item.label} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="historias" className="v2-section v2-warm">
        <div className="v2-container">
          <Reveal className="v2-centered">
            <p className="v2-kicker">Histórias dos casais</p>
            <h2>Páginas para sentir como cada cerimônia aconteceu.</h2>
            <p>
              Cada história pode reunir relato, fotos e a música mais marcante daquele dia, criando uma experiência
              mais íntima para quem está conhecendo o Trio Clássico.
            </p>
          </Reveal>
          <div className="v2-story-grid">
            {coupleStories.map((story) => (
              <a className="v2-story-card" href={pagePath(`historias/${story.slug}`)} key={story.slug}>
                <img src={asset(story.image)} alt={story.name} />
                <div>
                  <small>{story.song}</small>
                  <h3>{story.name}</h3>
                  <p>{story.summary}</p>
                  <span>Entrar nessa história <ChevronRight /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="v2-section v2-dark">
        <div className="v2-container">
          <Reveal className="v2-centered">
            <p className="v2-kicker">Depoimentos</p>
            <h2>O que nossos casais dizem.</h2>
          </Reveal>
          <div className="v2-testimonial-grid">
            <a className="v2-testimonial-feature" href={pagePath(`historias/${testimonials[0].slug}`)}>
              <Quote />
              <p>{testimonials[0].text}</p>
              <Avatar className="size-16">
                <AvatarImage src={asset(testimonials[0].image)} alt={testimonials[0].name} />
                <AvatarFallback>JR</AvatarFallback>
              </Avatar>
              <strong>{testimonials[0].name}</strong>
              <span>{testimonials[0].date}</span>
              <small className="v2-read-story">Ler história do casal</small>
            </a>
            <div className="v2-testimonial-stack">
              {testimonials.slice(1).map((testimonial) => (
                <a key={testimonial.name} href={pagePath(`historias/${testimonial.slug}`)}>
                  <p>{testimonial.text}</p>
                  <div className="v2-testimonial-person">
                    <Avatar className="size-14">
                      <AvatarImage src={asset(testimonial.image)} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span>
                      <strong>{testimonial.name}</strong>
                      <small>{testimonial.date}</small>
                    </span>
                  </div>
                  <small className="v2-read-story">Ler história</small>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-light">
        <div className="v2-container">
          <Reveal className="v2-centered">
            <p className="v2-kicker">Como funciona</p>
            <h2>Do primeiro contato ao grande dia.</h2>
          </Reveal>
          <div className="v2-process-grid">
            {processSteps.map((item) => (
              <article key={item.step}>
                <img src={lpAsset(item.icon)} alt="" />
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="v2-cta">
        <img src={asset("raw-16.png")} alt="" />
        <div className="v2-container v2-cta-grid">
          <div>
            <p className="v2-kicker">Próximo passo</p>
            <h2>Vamos emocionar juntos?</h2>
            <p>Conte sobre a cerimônia e vamos pensar, com calma, na música que combina com esse momento.</p>
            <div className="v2-hero-actions">
              <BudgetDialog>
                <Button className="h-12 rounded bg-[#a6623f] px-7 text-sm font-bold text-white hover:bg-[#704d3c]">
                  Faça seu orçamento
                  <ChevronRight data-icon="inline-end" />
                </Button>
              </BudgetDialog>
              <Button asChild variant="outline" className="h-12 rounded border-white/45 bg-white/10 px-6 text-sm font-bold text-white hover:bg-white hover:text-[#232424]">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp
                  <ChevronRight data-icon="inline-end" />
                </a>
              </Button>
            </div>
          </div>
          <Card className="v2-contact-card">
            <CardContent>
              <a href={whatsappHref} target="_blank" rel="noreferrer"><Phone /> <span><small>WhatsApp</small>(31) 99867-4394</span></a>
              <a href="https://instagram.com/trioclassico"><Instagram /> <span><small>Instagram</small>@trioclassico</span></a>
              <a href={emailHref}><Mail /> <span><small>E-mail</small>trioclassicomusica@gmail.com</span></a>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="v2-footer">
        <div className="v2-container">
          <div className="v2-logo">
            <img src={logoAsset} alt="" />
            <span>Trio Clássico</span>
          </div>
          <nav>
            <a href="#experiencia">Experiência</a>
            <a href="#formacoes">Formações</a>
            <a href="#historias">Histórias</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
          </nav>
          <p>© 2026 Trio Clássico. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
