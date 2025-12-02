import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, ArrowLeft } from "lucide-react";

const PoliticaPrivacidade = () => {
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
              Política de Privacidade
            </h1>
            
            <div className="space-y-6 text-foreground">
              <p className="text-muted-foreground text-sm">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A proteção dos seus dados pessoais é uma prioridade para o Momento RH. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Dados Coletados</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Coletamos os seguintes tipos de dados pessoais:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">2.1. Dados Fornecidos por Você</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Nome completo</li>
                      <li>E-mail</li>
                      <li>Telefone/WhatsApp</li>
                      <li>Perfil LinkedIn</li>
                      <li>Cidade e Estado</li>
                      <li>Nível de escolaridade</li>
                      <li>Experiência profissional</li>
                      <li>Currículo e documentos anexados</li>
                      <li>Informações da empresa (para recrutadores)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">2.2. Dados Coletados Automaticamente</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Endereço IP</li>
                      <li>Tipo de navegador e dispositivo</li>
                      <li>Páginas visitadas e tempo de navegação</li>
                      <li>Cookies e tecnologias similares</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Finalidade do Uso dos Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Utilizamos seus dados pessoais para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Criar e gerenciar sua conta na plataforma</li>
                  <li>Processar candidaturas a vagas de emprego</li>
                  <li>Conectar candidatos com oportunidades relevantes</li>
                  <li>Comunicar sobre vagas, atualizações e novidades</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                  <li>Prevenir fraudes e garantir a segurança da plataforma</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Seus dados pessoais podem ser compartilhados com:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Empresas Recrutadoras:</strong> Quando você se candidata a uma vaga, suas informações são compartilhadas com a empresa responsável pela vaga</li>
                  <li><strong>Prestadores de Serviços:</strong> Fornecedores que nos auxiliam na operação da plataforma (hospedagem, análise de dados, etc.)</li>
                  <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou para proteger nossos direitos legais</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  <strong>Importante:</strong> Não vendemos seus dados pessoais a terceiros.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Armazenamento e Segurança</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Implementamos medidas técnicas e organizacionais para proteger seus dados:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Controles de acesso rigorosos</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Backups regulares</li>
                  <li>Treinamento de equipe em proteção de dados</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Seus dados são armazenados em servidores seguros e mantidos pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos (LGPD)</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  De acordo com a LGPD, você tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Acesso:</strong> Confirmar se tratamos seus dados e solicitar uma cópia</li>
                  <li><strong>Correção:</strong> Solicitar a correção de dados incompletos ou desatualizados</li>
                  <li><strong>Exclusão:</strong> Solicitar a exclusão de dados desnecessários ou tratados inadequadamente</li>
                  <li><strong>Portabilidade:</strong> Solicitar a transferência de seus dados para outro fornecedor</li>
                  <li><strong>Revogação do Consentimento:</strong> Retirar seu consentimento a qualquer momento</li>
                  <li><strong>Oposição:</strong> Se opor ao tratamento de dados em determinadas situações</li>
                  <li><strong>Informação:</strong> Obter informações sobre entidades com as quais compartilhamos dados</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Para exercer seus direitos, entre em contato através dos canais disponíveis na plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Cookies e Tecnologias Similares</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência, analisar o uso da plataforma e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. No entanto, a desativação de cookies pode afetar o funcionamento de alguns recursos da plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Dados de Menores</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa plataforma não é direcionada a menores de 18 anos. Não coletamos conscientemente dados de menores. Se tomarmos conhecimento de que coletamos dados de um menor, tomaremos medidas para excluir essas informações.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Transferência Internacional de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Seus dados podem ser transferidos e processados em servidores localizados fora do Brasil. Nesses casos, garantimos que medidas adequadas de proteção estejam em vigor, em conformidade com a LGPD.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Alterações nesta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações significativas através da plataforma ou por e-mail. A data da última atualização será sempre indicada no início desta política.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Encarregado de Dados (DPO)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para questões relacionadas à proteção de dados pessoais, você pode entrar em contato com nosso Encarregado de Dados através dos canais disponíveis na plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para dúvidas sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato conosco através dos canais disponíveis na plataforma.
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

export default PoliticaPrivacidade;
