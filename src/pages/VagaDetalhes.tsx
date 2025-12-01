import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Briefcase, MapPin, Building2, GraduationCap, FileText, Clock, DollarSign, Users } from "lucide-react";

// Mock data - será substituído por dados reais do banco
const mockJobDetails = {
  id: "1",
  cargo: "Vendedor",
  empresa: "Rede Varejo Plus",
  loja: "Shopping Center Norte",
  cidade: "São Paulo",
  estado: "SP",
  tipoContratacao: "CLT",
  modeloTrabalho: "Presencial",
  escolaridade: "Ensino Médio Completo",
  categoria: "Operacional",
  descricao: "Estamos em busca de profissionais dinâmicos e orientados para resultados para compor nossa equipe de vendas. O vendedor será responsável por atender clientes, realizar vendas e manter o ambiente da loja organizado.",
  requisitos: [
    "Ensino Médio Completo",
    "Experiência prévia em vendas (desejável)",
    "Boa comunicação e relacionamento interpessoal",
    "Disponibilidade para trabalhar em finais de semana",
    "Proatividade e foco em resultados"
  ],
  diferenciais: [
    "Experiência no varejo de moda",
    "Conhecimento em técnicas de vendas",
    "Cursos na área comercial"
  ],
  beneficios: [
    "Vale transporte",
    "Vale refeição",
    "Plano de saúde",
    "Plano odontológico",
    "Desconto em produtos da loja",
    "Comissões sobre vendas"
  ],
  faixaSalarial: "R$ 1.800,00 - R$ 2.500,00 + comissões",
  processoSeletivo: {
    etapas: 3,
    prazo: "15 dias"
  },
  vagasDisponiveis: 3
};

const VagaDetalhes = () => {
  const { id } = useParams();

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
            <Link to="/vagas" className="text-primary font-medium">
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

      {/* Page Content */}
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Back Button */}
          <Link to="/vagas" className="inline-flex items-center text-primary hover:underline mb-6">
            ← Voltar para vagas
          </Link>

          {/* Job Header */}
          <div className="card-gradient p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">{mockJobDetails.cargo}</h1>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg">
                    <Building2 className="w-5 h-5 text-primary" />
                    <span>{mockJobDetails.empresa}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span>{mockJobDetails.loja} - {mockJobDetails.cidade}/{mockJobDetails.estado}</span>
                  </div>
                </div>
              </div>
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium self-start">
                {mockJobDetails.categoria}
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Contratação</p>
                  <p className="font-medium">{mockJobDetails.tipoContratacao}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Modelo</p>
                  <p className="font-medium">{mockJobDetails.modeloTrabalho}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                <GraduationCap className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Escolaridade</p>
                  <p className="font-medium text-sm">{mockJobDetails.escolaridade}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                <DollarSign className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Faixa Salarial</p>
                  <p className="font-medium text-sm">{mockJobDetails.faixaSalarial}</p>
                </div>
              </div>
            </div>

            <Link to={`/candidatar/${id}`}>
              <Button size="lg" className="btn-primary w-full md:w-auto text-lg px-12 shadow-glow">
                Candidatar-se à Vaga
              </Button>
            </Link>
          </div>

          {/* Job Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Descrição */}
              <div className="card-gradient p-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Descrição da Vaga</h2>
                <p className="text-muted-foreground leading-relaxed">{mockJobDetails.descricao}</p>
              </div>

              {/* Requisitos */}
              <div className="card-gradient p-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Requisitos</h2>
                <ul className="space-y-2">
                  {mockJobDetails.requisitos.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diferenciais */}
              <div className="card-gradient p-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Diferenciais</h2>
                <ul className="space-y-2">
                  {mockJobDetails.diferenciais.map((dif, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span className="text-muted-foreground">{dif}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Benefícios */}
              <div className="card-gradient p-6">
                <h2 className="text-xl font-semibold mb-4 text-primary">Benefícios</h2>
                <ul className="space-y-2">
                  {mockJobDetails.beneficios.map((ben, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-muted-foreground">{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Processo Seletivo */}
              <div className="card-gradient p-6">
                <h2 className="text-xl font-semibold mb-4 text-primary">Processo Seletivo</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Prazo estimado</p>
                      <p className="font-medium">{mockJobDetails.processoSeletivo.prazo}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Etapas do processo</p>
                      <p className="font-medium">{mockJobDetails.processoSeletivo.etapas} etapas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Vagas disponíveis</p>
                      <p className="font-medium">{mockJobDetails.vagasDisponiveis} vagas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link to={`/candidatar/${id}`}>
                <Button size="lg" className="btn-primary w-full shadow-glow">
                  Candidatar-se Agora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VagaDetalhes;
