import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Users, Zap, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm fixed w-full z-50 bg-background/80">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-gradient">Momento RH</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/vagas" className="text-foreground hover:text-primary transition-colors">
              Vagas
            </Link>
            <Link to="/sobre" className="text-foreground hover:text-primary transition-colors">
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
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Conectando{" "}
              <span className="text-gradient">Talentos</span>
              <br />
              ao Varejo Brasileiro
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Plataforma especializada em recrutamento para o varejo. 
              Vagas operacionais e administrativas com processo ágil e transparente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/vagas">
                <Button size="lg" className="btn-primary text-lg px-8 py-6 shadow-glow">
                  Ver Vagas Disponíveis
                </Button>
              </Link>
              <Link to="/recrutador/login">
                <Button size="lg" variant="outline" className="btn-outline text-lg px-8 py-6">
                  Sou Recrutador
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Por que escolher a{" "}
            <span className="text-gradient">Momento RH</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-gradient p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Processo Ágil</h3>
              <p className="text-muted-foreground">
                Candidatura simplificada e resposta rápida. Acompanhe cada etapa do processo em tempo real.
              </p>
            </div>

            <div className="card-gradient p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Vagas Qualificadas</h3>
              <p className="text-muted-foreground">
                Oportunidades reais em empresas de varejo reconhecidas. Encontre a vaga ideal para seu perfil.
              </p>
            </div>

            <div className="card-gradient p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Suporte Completo</h3>
              <p className="text-muted-foreground">
                Equipe dedicada para auxiliar candidatos e recrutadores durante todo o processo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="card-gradient p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6 relative z-10" />
            <h2 className="text-4xl font-bold mb-4 relative z-10">
              Pronto para o próximo passo na sua carreira?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 relative z-10">
              Cadastre-se agora e tenha acesso às melhores oportunidades do varejo brasileiro.
            </p>
            <Link to="/vagas">
              <Button size="lg" className="btn-primary text-lg px-10 py-6 shadow-glow relative z-10">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">Momento RH</span>
              </div>
              <p className="text-muted-foreground">
                Conectando talentos ao varejo brasileiro com transparência e agilidade.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Para Candidatos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/vagas" className="hover:text-primary transition-colors">
                    Vagas Disponíveis
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="hover:text-primary transition-colors">
                    Como Funciona
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Para Empresas</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/recrutador/login" className="hover:text-primary transition-colors">
                    Área do Recrutador
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="hover:text-primary transition-colors">
                    Sobre Nós
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Momento RH. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
