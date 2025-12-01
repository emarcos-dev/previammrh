import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Target, Eye, Heart, TrendingUp } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm fixed w-full z-50 bg-background/80">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-gradient">Momento RH</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/vagas" className="text-foreground hover:text-primary transition-colors">
              Vagas
            </Link>
            <Link to="/sobre" className="text-primary font-medium">
              Sobre
            </Link>
            <Link to="/recrutador/login">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Área do Recrutador
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre a <span className="text-gradient">Momento RH</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma startup dedicada a transformar o recrutamento e seleção no varejo brasileiro, 
            conectando talentos às melhores oportunidades com agilidade e transparência.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="card-gradient p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Nossa História</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A Momento RH nasceu da identificação de um grande desafio no mercado de varejo brasileiro: 
              a dificuldade de conectar empresas a profissionais qualificados de forma rápida e eficiente. 
              Com processos complexos e demorados, tanto candidatos quanto recrutadores perdiam oportunidades valiosas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa plataforma foi desenvolvida especialmente para o varejo, considerando suas necessidades 
              específicas de alto volume de contratações, rotatividade natural do setor e a importância de 
              encontrar profissionais que se identifiquem com a cultura do varejo. Hoje, ajudamos centenas 
              de empresas e milhares de candidatos a encontrarem o match perfeito.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="card-gradient p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Agilizar o processo de recrutamento para o varejo, conectando empresas a profissionais 
                qualificados de forma rápida, eficiente e humanizada.
              </p>
            </div>

            {/* Visão */}
            <div className="card-gradient p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a principal plataforma de recrutamento para o varejo no Brasil, reconhecida pela 
                agilidade, qualidade e experiência positiva tanto para candidatos quanto para empresas.
              </p>
            </div>

            {/* Valores */}
            <div className="card-gradient p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Valores</h3>
              <ul className="text-left text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Transparência em todo o processo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Respeito ao candidato e à empresa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Agilidade e eficiência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Inovação constante</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
          <div className="space-y-6">
            <div className="card-gradient p-6 flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Especialização em Varejo</h3>
                <p className="text-muted-foreground">
                  Entendemos profundamente o setor de varejo, suas necessidades específicas e cultura organizacional.
                </p>
              </div>
            </div>

            <div className="card-gradient p-6 flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Processo Simplificado</h3>
                <p className="text-muted-foreground">
                  Candidatura em poucos cliques, sem burocracias desnecessárias. Foco na experiência do usuário.
                </p>
              </div>
            </div>

            <div className="card-gradient p-6 flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Acompanhamento Transparente</h3>
                <p className="text-muted-foreground">
                  Candidatos e recrutadores sempre sabem em que etapa está cada processo seletivo.
                </p>
              </div>
            </div>

            <div className="card-gradient p-6 flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Suporte Dedicado</h3>
                <p className="text-muted-foreground">
                  Equipe disponível para auxiliar em todas as etapas do processo, tanto candidatos quanto empresas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="card-gradient p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            <h2 className="text-4xl font-bold mb-4 relative z-10">
              Faça parte da nossa história!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 relative z-10">
              Seja você um candidato em busca de oportunidades ou uma empresa procurando talentos, 
              estamos aqui para conectar você ao futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/vagas">
                <Button size="lg" className="btn-primary text-lg px-10 py-6 shadow-glow">
                  Ver Vagas
                </Button>
              </Link>
              <Link to="/recrutador/login">
                <Button size="lg" variant="outline" className="btn-outline text-lg px-10 py-6">
                  Área do Recrutador
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
