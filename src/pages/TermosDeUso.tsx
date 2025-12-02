import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, ArrowLeft } from "lucide-react";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm fixed w-full z-50 bg-background/80">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-gradient">Momento RH</span>
          </Link>
          <Link to="/recrutador/login">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
        </nav>
      </header>

      {/* Content */}
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="card-gradient p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Termos de Uso
            </h1>
            
            <div className="space-y-6 text-foreground">
              <p className="text-muted-foreground text-sm">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ao acessar e usar a plataforma Momento RH, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Descrição dos Serviços</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  O Momento RH é uma plataforma digital que conecta candidatos a oportunidades de emprego no setor de varejo. Oferecemos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Publicação e busca de vagas de emprego</li>
                  <li>Sistema de candidatura online</li>
                  <li>Ferramentas de gestão de recrutamento para empresas</li>
                  <li>Armazenamento de currículos e dados profissionais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Cadastro e Conta</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Para utilizar determinados recursos da plataforma, você precisará criar uma conta. Ao criar uma conta, você concorda em:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Fornecer informações verdadeiras, precisas e completas</li>
                  <li>Manter a confidencialidade de suas credenciais de acesso</li>
                  <li>Atualizar suas informações para mantê-las precisas</li>
                  <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Uso Aceitável</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Você concorda em NÃO:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Usar a plataforma para qualquer propósito ilegal ou não autorizado</li>
                  <li>Publicar conteúdo falso, enganoso ou discriminatório</li>
                  <li>Violar direitos de propriedade intelectual de terceiros</li>
                  <li>Transmitir vírus ou códigos maliciosos</li>
                  <li>Coletar dados de outros usuários sem consentimento</li>
                  <li>Interferir no funcionamento adequado da plataforma</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Conteúdo do Usuário</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Você mantém todos os direitos sobre o conteúdo que enviar à plataforma (currículos, informações profissionais, etc.). Ao enviar conteúdo, você nos concede uma licença mundial, não exclusiva e isenta de royalties para usar, reproduzir e exibir esse conteúdo exclusivamente para fornecer os serviços da plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Propriedade Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todo o conteúdo da plataforma, incluindo design, textos, gráficos, logos e software, é propriedade do Momento RH ou de seus licenciadores e está protegido por leis de direitos autorais e propriedade intelectual.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O Momento RH atua como intermediário entre candidatos e empresas. Não somos responsáveis por:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                  <li>Decisões de contratação ou não contratação</li>
                  <li>Veracidade das informações fornecidas por usuários</li>
                  <li>Relacionamentos entre candidatos e empregadores</li>
                  <li>Danos diretos ou indiretos decorrentes do uso da plataforma</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Modificações dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamos o direito de modificar estes termos a qualquer momento. Notificaremos os usuários sobre mudanças significativas através da plataforma ou por e-mail. O uso continuado da plataforma após as modificações constitui aceitação dos novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Rescisão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos suspender ou encerrar seu acesso à plataforma imediatamente, sem aviso prévio, por qualquer violação destes termos ou por qualquer outro motivo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Lei Aplicável</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida à jurisdição exclusiva dos tribunais brasileiros.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para questões sobre estes termos, entre em contato conosco através dos canais disponíveis na plataforma.
                </p>
              </section>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <Link to="/recrutador/login">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermosDeUso;
