import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Mail,
  Menu,
  Music,
  Phone,
  Play,
  Quote,
  X,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
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
  { label: "Sobre", href: "#sobre" },
  { label: "Formações", href: "#formacoes" },
  { label: "Integrantes", href: "#integrantes" },
  { label: "Momentos", href: "#momentos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Histórias", href: "#historias" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
  { label: "V2", href: pagePath("v2") },
];

const videos = [
  { title: "Entrada da noiva", image: "raw-01.png" },
  { title: "Troca de alianças", image: "raw-03.png" },
  { title: "Saída dos noivos", image: "raw-06.png" },
];

const formations = [
  {
    title: "Trio Standard",
    image: "raw-05.png",
    subtitle: "Piano, violino e voz",
    text: "Formato versátil e elegante para cerimônias intimistas, com presença musical equilibrada do início ao fim.",
    ideal: "Ideal para cerimônias intimistas, capelas e espaços ao ar livre.",
  },
  {
    title: "Trio Plus",
    image: "raw-17.png",
    subtitle: "Piano, violino, violoncelo e voz",
    text: "Uma experiência mais encorpada para casais que desejam momentos marcantes e arranjos com mais camadas.",
    ideal: "Ideal para casais que querem entradas mais impactantes e momentos de destaque.",
  },
  {
    title: "Trio Strings",
    image: "raw-06.png",
    subtitle: "Violino, viola e violoncelo, acompanhados de voz e piano",
    text: "Sonoridade refinada, com presença e elegância. Uma sensação de uma mini orquestra na sua cerimônia.",
    ideal: "Ideal para cerimônias com estética clássica, sofisticada e emocional.",
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

const ceremonyMoments = [
  { title: "Padrinhos", text: "A celebração da união e a presença de quem faz parte da história do casal." },
  { title: "Noivo", text: "Expectativa, emoção e a realização de estar prestes a viver um dos momentos mais importantes da sua vida." },
  { title: "Noiva", text: "O ápice da expectativa. Um momento de encantamento, emoção e grandeza." },
  { title: "Troca das Alianças", text: "Amor, compromisso e a promessa de uma vida compartilhada." },
  { title: "Votos", text: "Intimidade, verdade e a expressão dos sentimentos mais profundos do casal." },
  { title: "Beijo", text: "A celebração do amor e o instante em que a promessa se transforma em realidade." },
  { title: "Saída dos Noivos", text: "Alegria, celebração e o início de uma nova história juntos." },
];

const gallery = [
  { label: "Making of musical" },
  { label: "Entrada da noiva" },
  { label: "Cerimônia ao ar livre" },
  { label: "Troca de alianças" },
  { label: "Saída dos noivos" },
];

const testimonials = coupleStories.map((story) => ({
  slug: story.slug,
  name: story.name,
  date: `Casamento em ${story.date}`,
  image: story.image,
  text: story.quote,
  song: story.song,
}));

const processSteps = [
  { icon: "frame-13.svg", step: "PASSO 01", title: "Faça seu orçamento", text: "Recebemos as informações principais da cerimônia para preparar uma proposta personalizada." },
  { icon: "frame-14.svg", step: "PASSO 02", title: "Conte sua história", text: "Entendemos estilo, cerimônia e referências." },
  { icon: "frame-16.svg", step: "PASSO 03", title: "Consultoria Musical", text: "Orientamos vocês nas escolhas musicais e na construção da experiência da cerimônia." },
  { icon: "frame-17.svg", step: "PASSO 04", title: "Ensaios", text: "Ensaiamos e gravamos para os noivos acompanharem o processo." },
  { icon: "step-5.svg", step: "PASSO 05", title: "Vivemos esse momento", text: "Chegamos preparados para conduzir cada entrada, pausa e celebração com presença." },
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
      <DialogContent className="max-w-[560px] border-[#d7ccc2] bg-[#f7f3ef] p-0">
        <DialogHeader className="border-b border-[#d7ccc2] px-7 py-6">
          <DialogTitle className="font-serif text-3xl font-normal text-[#2c2b2a]">Faça seu orçamento</DialogTitle>
          <DialogDescription className="text-[#53574e]">
            Conte alguns detalhes e retornamos com uma proposta personalizada.
          </DialogDescription>
        </DialogHeader>
        <form className="px-7 py-6" onSubmit={handleSubmit}>
          <FieldGroup className="gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="name">Nome</FieldLabel>
                <Input id="name" name="name" required autoComplete="name" />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" name="email" required type="email" autoComplete="email" />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="phone">Telefone</FieldLabel>
                <Input id="phone" name="phone" required type="tel" autoComplete="tel" />
              </Field>
              <Field>
                <FieldLabel htmlFor="city">Cidade</FieldLabel>
                <Input id="city" name="city" required autoComplete="address-level2" />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="instagram">Instagram</FieldLabel>
                <Input id="instagram" name="instagram" placeholder="@perfil" />
              </Field>
              <Field>
                <FieldLabel htmlFor="couple">Nome do casal</FieldLabel>
                <Input id="couple" name="couple" required />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="ceremony-date">Data da cerimônia</FieldLabel>
                <Input id="ceremony-date" name="ceremony-date" required type="date" />
              </Field>
              <Field>
                <FieldLabel htmlFor="ceremony-time">Horário da cerimônia</FieldLabel>
                <Input id="ceremony-time" name="ceremony-time" required type="time" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="ceremony-place">Local da cerimônia</FieldLabel>
              <Input id="ceremony-place" name="ceremony-place" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="notes">Observações</FieldLabel>
              <Textarea id="notes" name="notes" placeholder="Conte como imagina a cerimônia" className="min-h-24" />
            </Field>
          </FieldGroup>
          <p className="mt-4 text-xs leading-relaxed text-[#82674f]">
            Usaremos essas informações apenas para retornar com uma proposta para a cerimônia.
          </p>
          <Button className="mt-5 h-12 w-full rounded bg-[#a6623f] text-white hover:bg-[#704d3c]">Enviar pedido de orçamento</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [videoOpen, setVideoOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialDragStart = useRef<number | null>(null);

  const currentTestimonial = testimonials[testimonialIndex];
  const goToPreviousTestimonial = () => {
    setTestimonialIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  };
  const goToNextTestimonial = () => {
    setTestimonialIndex((index) => (index + 1) % testimonials.length);
  };
  const handleTestimonialPointerUp = (positionX: number) => {
    if (testimonialDragStart.current === null) return;

    const distance = testimonialDragStart.current - positionX;
    testimonialDragStart.current = null;

    if (Math.abs(distance) < 36) return;

    if (distance > 0) {
      goToNextTestimonial();
    } else {
      goToPreviousTestimonial();
    }
  };
  const heroStyle = useMemo(
    () => ({
      backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.78), rgba(0,0,0,.28) 55%, rgba(0,0,0,.55)), url(${asset("raw-04.jpeg")})`,
    }),
    []
  );

  return (
    <main className="trio-react-page">
      <header className="trio-nav">
        <a className="trio-logo" href="#inicio" aria-label="Trio Clássico">
          <img src={logoAsset} alt="" />
          <span>Trio Clássico</span>
        </a>
        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <a key={item.href} className="trio-nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <BudgetDialog>
            <Button className="hidden rounded bg-[#a6623f] px-6 text-xs font-semibold uppercase tracking-[.18em] text-white hover:bg-[#704d3c] md:inline-flex">
              Faça seu orçamento
            </Button>
          </BudgetDialog>
          <Button
            variant="ghost"
            size="icon"
            className="text-white xl:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-x-4 top-20 z-40 rounded-lg border border-white/10 bg-[#232424]/95 p-5 text-white shadow-2xl backdrop-blur xl:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="inicio" className="trio-hero" style={heroStyle}>
        <div className="trio-hero-content">
          <motion.div initial={{ y: 12 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
            <div className="trio-ornament" />
            <h1>Transformando o amor em música</h1>
            <div className="trio-ornament" />
            <p>Trilha ao vivo para cerimônias de casamento, criada com sensibilidade, elegância e atenção a cada momento.</p>
            <div className="flex flex-wrap gap-4 pt-3">
              <BudgetDialog>
                <Button className="h-12 rounded bg-[#a6623f] px-7 text-xs font-semibold uppercase tracking-[.18em] text-white hover:bg-[#704d3c]">
                  Faça seu orçamento
                  <ChevronRight data-icon="inline-end" />
                </Button>
              </BudgetDialog>
              <Button
                variant="ghost"
                className="h-12 rounded px-4 text-xs font-semibold uppercase tracking-[.18em] text-white hover:bg-white/10 hover:text-white"
                onClick={() => document.querySelector("#momentos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Veja momentos
                <ChevronRight data-icon="inline-end" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="sobre" className="trio-section bg-[#f7f3ef]">
        <div className="trio-container trio-about-grid">
          <SectionReveal className="trio-about-copy">
            <p className="trio-kicker">Sobre nós</p>
            <h2 className="trio-heading">Mais que música, criamos memórias.</h2>
            <p className="trio-copy">
              O Trio Clássico é especializado em música para cerimônias de casamento. Nosso propósito é emocionar e
              eternizar cada momento com interpretações únicas e personalizadas.
            </p>
            <p className="trio-script">Sua história, nossa melodia.</p>
          </SectionReveal>
          <SectionReveal className="trio-about-visual">
            <img src={lpAsset("about-couple-optimized.jpg")} alt="Casal caminhando na saída da cerimônia de casamento" />
          </SectionReveal>
        </div>
      </section>

      <section id="midia" className="trio-section bg-[#232424] text-white">
        <div className="trio-container grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
          <SectionReveal>
            <p className="trio-kicker">Assista e escute</p>
            <h2 className="trio-heading text-white">Sinta a emoção em cada nota.</h2>
            <p className="trio-copy text-[#d7ccc2]">
              Assista a trechos reais de cerimônias emocionantes que tiveram a nossa música como trilha sonora.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <button className="trio-text-link">Ver mais vídeos <ChevronRight /></button>
            </div>
          </SectionReveal>

          <div className="grid gap-5 md:grid-cols-3">
            {videos.map((video) => (
              <button
                key={video.title}
                className="trio-video-card"
                onClick={() => {
                  setSelectedVideo(video);
                  setVideoOpen(true);
                }}
              >
                <img src={asset(video.image)} alt={video.title} />
                <span>
                  <Play fill="currentColor" />
                </span>
                <strong>{video.title}</strong>
              </button>
            ))}
          </div>
        </div>
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="border-[#4c3b34] bg-[#232424] text-white">
            <DialogHeader>
              <DialogTitle className="font-serif text-3xl font-normal">{selectedVideo.title}</DialogTitle>
              <DialogDescription>Prévia visual do repertório selecionado.</DialogDescription>
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

      <section id="formacoes" className="trio-section bg-[#f7f3ef]">
        <div className="trio-container text-center">
          <SectionReveal>
            <p className="trio-kicker">Nossas formações</p>
            <h2 className="trio-heading mx-auto">A formação ideal para o seu casamento.</h2>
          </SectionReveal>
          <div className="trio-formation-grid mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {formations.map((formation) => (
              <Card key={formation.title} className="trio-formation-card">
                <img src={asset(formation.image)} alt={formation.title} />
                <CardHeader>
                  <CardTitle>{formation.title}</CardTitle>
                  <CardDescription>{formation.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{formation.text}</p>
                  <small>{formation.ideal}</small>
                </CardContent>
                <CardFooter>
                  <BudgetDialog>
                    <Button variant="outline" className="w-full rounded border-[#d8cdbd] bg-transparent hover:border-[#704d3c] hover:bg-[#704d3c] hover:text-white">
                      Faça seu orçamento
                    </Button>
                  </BudgetDialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="integrantes" className="trio-members bg-[#eee9e3]">
        <div className="trio-container">
          <SectionReveal className="trio-member-heading">
            <p className="trio-kicker">Integrantes</p>
            <h2 className="trio-heading">Cada músico, uma camada da cerimônia.</h2>
            <p className="trio-copy">
              O repertório é construído para cada casal. Por isso, mais do que uma lista pronta, apresentamos quem dá
              forma aos arranjos, à execução e à emoção de cada momento.
            </p>
          </SectionReveal>
          <div className="trio-member-grid">
            {members.map((member) => (
              <article className="trio-member-card" key={member.name}>
                <img src={asset(member.image)} alt={member.name} />
                <div>
                  <span>{member.name}</span>
                  <small>{member.role}</small>
                  <p>{member.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="momentos" className="trio-moments">
        <div className="trio-container trio-moments-layout">
          <div className="trio-moments-intro">
            <p className="trio-kicker">Cada momento, uma emoção</p>
            <h2 className="trio-heading">Do início ao fim, a trilha perfeita para sua cerimônia.</h2>
            <p>
              Cada entrada, pausa e celebração pede uma intenção musical própria. A cerimônia ganha fluidez quando a
              trilha acompanha a história do casal do primeiro olhar à saída final.
            </p>
          </div>
          <div className="trio-moment-line">
            {ceremonyMoments.map((item, index) => (
              <article className="trio-moment" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="trio-section bg-[#eee9e3]">
        <div className="trio-container">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="trio-kicker">Casamentos reais</p>
              <h2 className="trio-heading">Galeria em produção.</h2>
              <p className="trio-gallery-note">
                Em breve, este espaço receberá registros reais de cerimônias, bastidores e momentos musicais do Trio Clássico.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full" disabled>
                <ChevronLeft />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" disabled>
                <ChevronRight />
              </Button>
            </div>
          </div>
          <div className="trio-gallery-strip">
            {gallery.map((item) => (
              <button
                key={item.label}
                className="trio-gallery-thumb trio-gallery-empty"
                data-active={selectedImage.label === item.label}
                onClick={() => setSelectedImage(item)}
              >
                <span>{item.label}</span>
                <small>Em breve</small>
              </button>
            ))}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mx-auto mt-8 flex rounded bg-[#a6623f] text-white hover:bg-[#704d3c]">
                Ver espaço da galeria
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl border-[#d7ccc2] bg-[#f7f3ef]">
              <DialogHeader>
                <DialogTitle className="font-serif text-3xl font-normal">{selectedImage.label}</DialogTitle>
                <DialogDescription>Espaço reservado para os registros que serão produzidos pelo Trio Clássico.</DialogDescription>
              </DialogHeader>
              <div className="trio-gallery-modal-empty">
                <Music />
                <p>Conteúdo em produção</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section id="historias" className="trio-section bg-[#f7f3ef]">
        <div className="trio-container">
          <SectionReveal className="trio-stories-heading">
            <p className="trio-kicker">Histórias dos casais</p>
            <h2 className="trio-heading">Cada casamento pode virar uma memória para ler, ver e ouvir.</h2>
            <p className="trio-copy">
              A ideia é que cada casal tenha uma página com relato da cerimônia, fotos e a música que marcou aquele dia.
            </p>
          </SectionReveal>
          <div className="trio-story-grid">
            {coupleStories.map((story) => (
              <a className="trio-story-card" key={story.slug} href={pagePath(`historias/${story.slug}`)}>
                <img src={asset(story.image)} alt={story.name} />
                <div>
                  <small>{story.location}</small>
                  <h3>{story.name}</h3>
                  <p>{story.summary}</p>
                  <span>Conhecer essa história <ChevronRight /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="trio-section bg-[#232424] text-white">
        <div className="trio-container trio-testimonials-wrap">
          <SectionReveal className="trio-testimonials-heading">
            <p className="trio-kicker">Depoimentos</p>
            <h2 className="trio-heading text-white">O que nossos casais dizem.</h2>
          </SectionReveal>

          <div className="trio-testimonial-stage">
            <button
              type="button"
              className="trio-testimonial-arrow"
              onClick={goToPreviousTestimonial}
              aria-label="Ver depoimento anterior"
            >
              <ChevronLeft />
            </button>

            <AnimatePresence mode="wait">
              <motion.article
                key={currentTestimonial.name}
                className="trio-testimonial-feature"
                onPointerDown={(event) => {
                  testimonialDragStart.current = event.clientX;
                }}
                onPointerUp={(event) => handleTestimonialPointerUp(event.clientX)}
                onPointerCancel={() => {
                  testimonialDragStart.current = null;
                }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="trio-testimonial-content">
                  <Quote className="trio-testimonial-mark" />
                  <blockquote>“{currentTestimonial.text}”</blockquote>
                  <div className="trio-testimonial-person">
                    <Avatar className="size-14 border border-[#d29773]/35">
                      <AvatarImage src={asset(currentTestimonial.image)} alt={currentTestimonial.name} />
                      <AvatarFallback>{currentTestimonial.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span>
                      <strong>{currentTestimonial.name}</strong>
                      <small>{currentTestimonial.date}</small>
                    </span>
                  </div>
                  <a className="trio-testimonial-link" href={pagePath(`historias/${currentTestimonial.slug}`)}>
                    Ler a história do casal
                    <ChevronRight data-icon="inline-end" />
                  </a>
                </div>
              </motion.article>
            </AnimatePresence>

            <button
              type="button"
              className="trio-testimonial-arrow"
              onClick={goToNextTestimonial}
              aria-label="Ver próximo depoimento"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="trio-testimonial-dots" aria-label="Selecionar depoimento">
            {testimonials.map((testimonial, index) => (
              <button
                type="button"
                key={testimonial.name}
                aria-label={`Ver depoimento de ${testimonial.name}`}
                aria-current={index === testimonialIndex}
                onClick={() => setTestimonialIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="trio-section trio-process-section bg-[#f7f3ef]">
        <div className="trio-container trio-process-content">
          <p className="trio-kicker">Como funciona</p>
          <h2 className="trio-heading mx-auto">Do primeiro contato ao grande dia.</h2>
          <div className="trio-process-grid mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map(({ icon, step, title, text }) => (
              <div key={step} className="trio-process-step">
                <span>
                  <img src={lpAsset(icon)} alt="" />
                </span>
                <strong>{step}</strong>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="trio-cta">
        <img src={asset("raw-16.png")} alt="" />
        <div className="trio-container trio-cta-layout">
          <div className="trio-cta-copy">
            <h2>Vamos emocionar juntos?</h2>
            <p>Conte-nos um pouco sobre o seu casamento.</p>
            <div className="trio-cta-actions">
              <BudgetDialog>
                <Button className="h-12 rounded bg-[#a6623f] px-7 text-xs font-semibold uppercase tracking-[.18em] text-white hover:bg-[#704d3c]">
                  Faça seu orçamento
                  <ChevronRight data-icon="inline-end" />
                </Button>
              </BudgetDialog>
              <Button asChild variant="ghost" className="h-12 rounded text-white hover:bg-white/10 hover:text-white">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                Conversar pelo WhatsApp
                <ChevronRight data-icon="inline-end" />
                </a>
              </Button>
            </div>
          </div>
          <div className="trio-cta-contacts" aria-label="Canais de contato">
            <a className="trio-contact-link" href={whatsappHref} target="_blank" rel="noreferrer">
              <Phone />
              <span>
                <small>WhatsApp</small>
                (31) 99867-4394
              </span>
            </a>
            <a className="trio-contact-link" href="https://instagram.com/trioclassico">
              <Instagram />
              <span>
                <small>Instagram</small>
                @trioclassico
              </span>
            </a>
            <a className="trio-contact-link" href={emailHref}>
              <Mail />
              <span>
                <small>E-mail</small>
                trioclassicomusica@gmail.com
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#eee9e3] px-6 py-12 text-[#53574e]">
        <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
          <div>
            <div className="trio-footer-logo">
              <img src={logoAsset} alt="" />
              <span>Trio Clássico</span>
            </div>
            <p className="mt-4 max-w-xs">Música ao vivo para cerimônias de casamento.</p>
          </div>
          <div className="trio-footer-list">
            <strong>Navegação</strong>
            <a href="#sobre">Sobre nós</a>
            <a href="#formacoes">Formações</a>
            <a href="#integrantes">Integrantes</a>
          </div>
          <div className="trio-footer-list">
            <strong>Informações</strong>
            <a href="#galeria">Galeria</a>
            <a href="#historias">Histórias</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
          </div>
          <p className="text-sm">© 2026 Trio Clássico. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
