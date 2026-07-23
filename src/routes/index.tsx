import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, ShieldCheck, Clock, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import imagemScore from "@/assets/imagem-score.jpg";
import fundoAnalise from "@/assets/fundo-analise.jpg";
import consultoriaImg from "@/assets/consultoria.jpg";
import whatsappAsset from "@/assets/whatsapp-icon.png.asset.json";

const ACTION_URL = "https://www.pontosolucoes.online/flashpontos";
const WHATSAPP_URL = ACTION_URL;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ponto Soluções — Aumente seu Score de Crédito" },
      { name: "description", content: "Consultoria financeira especializada em aumento de score. Rápido, seguro e sem burocracia. Recupere seu crédito no mercado." },
      { property: "og:title", content: "Ponto Soluções — Aumente seu Score de Crédito" },
      { property: "og:description", content: "Aumente seu score de forma rápida, segura e sem burocracia." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function CTAButton({
  children,
  className = "",
  large = false,
}: {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
}) {
  return (
    <a
      href={ACTION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-brand)] ${
        large ? "px-8 py-4 text-base sm:text-lg" : "px-6 py-3 text-sm sm:text-base"
      } ${className}`}
      style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-brand)" }}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* 1. TOP BANNER */}
      <div className="w-full text-white" style={{ background: "var(--gradient-brand)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-2.5 text-xs sm:text-sm font-medium">
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> Rápido</span>
          <span className="opacity-60">•</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> Seguro</span>
          <span className="opacity-60">•</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4" /> Sem Burocracia</span>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl text-white" style={{ background: "var(--gradient-brand)" }}>
              <TrendingUp className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">Ponto Soluções</span>
          </div>
          <a
            href={ACTION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border-2 px-5 py-2 text-sm font-semibold transition-colors hover:bg-accent"
            style={{ borderColor: "var(--brand-purple)", color: "var(--brand-purple)" }}
          >
            Consultar Agora
          </a>
        </div>
      </header>

      {/* 3. HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--brand-pink)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--brand-purple)" }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--brand-purple)" }} />
              Consultoria especializada
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Aumente seu Score no{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-text)" }}
              >
                mercado
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Pare de ter suas solicitações negadas. Nossa consultoria especializada ajuda você a organizar sua vida e atingir a pontuação que você merece, sem dor de cabeça.
            </p>
            <div className="mt-8">
              <CTAButton large>Quero Aumentar Meu Score</CTAButton>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -rotate-6 rounded-[2.5rem]"
              style={{ background: "var(--gradient-brand)", opacity: 0.9 }}
            />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src={imagemScore}
                alt="Cliente aumentando seu score"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Entenda seu cenário</h2>
          <p className="mt-3 text-muted-foreground">Uma abordagem completa para o seu sucesso.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              img: fundoAnalise,
              title: "Análise Detalhada",
              desc: "Avaliamos o seu perfil, identificamos os bloqueios e desenhamos a estratégia exata para alavancar a sua pontuação nos principais birôs.",
              cta: "Iniciar Análise",
            },
            {
              img: consultoriaImg,
              title: "Consultoria Pessoal",
              desc: "Acompanhamento lado a lado. Descubra as melhores práticas de mercado e tenha especialistas guiando você rumo à aprovação.",
              cta: "Falar com Especialista",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={b.img}
                  alt={b.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold">{b.title}</h3>
                <p className="mt-3 text-muted-foreground">{b.desc}</p>
                <div className="mt-6">
                  <CTAButton>{b.cta}</CTAButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <footer className="relative overflow-hidden text-white" style={{ background: "var(--gradient-brand)" }}>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <TrendingUp className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pronto para transformar sua vida?
          </h2>
          <div className="mt-8 flex justify-center">
            <a
              href={ACTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold transition-transform hover:scale-[1.03]"
              style={{ color: "var(--brand-purple-deep)" }}
            >
              Acessar Flash Pontos Agora
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-10 text-sm text-white/80">
            © {new Date().getFullYear()} Ponto Soluções. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* 6. WHATSAPP FLOATING BUTTON */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-2xl transition-transform hover:scale-110"
      >
        <img
          src={whatsappAsset.url}
          alt="WhatsApp"
          width={56}
          height={56}
          className="h-full w-full object-cover"
        />
      </a>
    </main>
  );
}
