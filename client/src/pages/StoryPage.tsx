import { Button } from "@/components/ui/button";
import type { RouteComponentProps } from "wouter";
import { Calendar, ChevronLeft, Headphones, MapPin, Music } from "lucide-react";
import { getCoupleStory } from "@/data/stories";

const pagePath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
const asset = (name: string) => pagePath(`figma-assets/${name}`);
const lpAsset = (name: string) => pagePath(`lp-assets/${name}`);
const logoAsset = pagePath("lp-assets/trio-classico-logo-transparent-cropped.png");

type StoryRouteParams = {
  slug: string;
};

export default function StoryPage({ params }: RouteComponentProps<StoryRouteParams>) {
  const story = getCoupleStory(params.slug);

  if (!story) {
    return (
      <main className="story-page story-not-found">
        <div className="story-container">
          <a className="story-logo" href={pagePath("")}>
            <img src={logoAsset} alt="" />
            <span>Trio Clássico</span>
          </a>
          <h1>História não encontrada.</h1>
          <p>Essa página pode ter mudado de endereço ou ainda estar em produção.</p>
          <Button asChild className="rounded bg-[#a6623f] text-white hover:bg-[#704d3c]">
            <a href={pagePath("")}>Voltar para o site</a>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="story-page">
      <header className="story-header">
        <a className="story-logo" href={pagePath("")} aria-label="Trio Clássico">
          <img src={logoAsset} alt="" />
          <span>Trio Clássico</span>
        </a>
        <a className="story-back" href={pagePath("#historias")}>
          <ChevronLeft />
          Voltar para histórias
        </a>
      </header>

      <section className="story-hero">
        <img src={asset(story.cover)} alt={story.name} />
        <div className="story-hero-overlay" />
        <div className="story-container story-hero-content">
          <p className="story-kicker">História real</p>
          <h1>{story.name}</h1>
          <p>{story.summary}</p>
          <div className="story-meta">
            <span><Calendar /> {story.date}</span>
            <span><MapPin /> {story.location}</span>
          </div>
        </div>
      </section>

      <section className="story-section story-intro">
        <div className="story-container story-intro-grid">
          <div>
            <p className="story-kicker">Relato da cerimônia</p>
            <h2>Uma página para lembrar como a música fez parte desse dia.</h2>
          </div>
          <blockquote>
            <span>“</span>
            {story.quote}
          </blockquote>
        </div>
      </section>

      <section className="story-section">
        <div className="story-container story-content-grid">
          <article className="story-text">
            {story.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <aside className="story-song-card">
            <Headphones />
            <p className="story-kicker">Música marcante</p>
            <h3>{story.song}</h3>
            <p>{story.songNote}</p>
            <div className="story-player">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <small>Espaço preparado para receber o áudio ou vídeo enviado pelo casal.</small>
          </aside>
        </div>
      </section>

      <section className="story-section story-gallery-section">
        <div className="story-container">
          <div className="story-section-title">
            <p className="story-kicker">Fotos e momentos</p>
            <h2>Alguns instantes dessa cerimônia.</h2>
          </div>
          <div className="story-gallery-grid">
            {story.gallery.map((image, index) => (
              <img key={image} src={asset(image)} alt={`${story.name} momento ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="story-section story-moments-section">
        <div className="story-container story-moments-grid">
          <div>
            <p className="story-kicker">Na trilha desse dia</p>
            <h2>O que a música ajudou a marcar.</h2>
          </div>
          <div className="story-moment-list">
            {story.moments.map((moment, index) => (
              <article key={moment}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{moment}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-cta">
        <div className="story-container">
          <Music />
          <h2>Quer imaginar a trilha da sua cerimônia?</h2>
          <p>Envie um pedido de orçamento e vamos pensar, juntos, na música que pode transformar esse momento em memória.</p>
          <Button asChild className="rounded bg-[#a6623f] text-white hover:bg-[#704d3c]">
            <a href={pagePath("#contato")}>Faça seu orçamento</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
