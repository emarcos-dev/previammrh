import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Briefcase, Search, MapPin, Building2, GraduationCap, FileText } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data - será substituído por dados reais do banco
const mockJobs = [
  {
    id: "1",
    cargo: "Vendedor",
    empresa: "Rede Varejo Plus",
    loja: "Shopping Center Norte",
    cidade: "São Paulo",
    estado: "SP",
    tipoContratacao: "CLT",
    modeloTrabalho: "Presencial",
    escolaridade: "Ensino Médio Completo",
    categoria: "Operacional"
  },
  {
    id: "2",
    cargo: "Gerente de Loja",
    empresa: "SuperMercado Nacional",
    loja: "Unidade Paulista",
    cidade: "São Paulo",
    estado: "SP",
    tipoContratacao: "CLT",
    modeloTrabalho: "Presencial",
    escolaridade: "Superior Completo",
    categoria: "Gestão"
  },
  {
    id: "3",
    cargo: "Assistente Administrativo",
    empresa: "Farmácias Brasil",
    loja: "Matriz",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    tipoContratacao: "CLT",
    modeloTrabalho: "Híbrido",
    escolaridade: "Ensino Médio Completo",
    categoria: "Administrativo"
  },
  {
    id: "4",
    cargo: "Operador de Caixa",
    empresa: "Rede Varejo Plus",
    loja: "Shopping Jardins",
    cidade: "São Paulo",
    estado: "SP",
    tipoContratacao: "CLT",
    modeloTrabalho: "Presencial",
    escolaridade: "Ensino Médio Completo",
    categoria: "Operacional"
  },
];

const Vagas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [selectedCity, setSelectedCity] = useState("todas");

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.empresa.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "todas" || job.categoria === selectedCategory;
    const matchesCity = selectedCity === "todas" || job.cidade === selectedCity;
    return matchesSearch && matchesCategory && matchesCity;
  });

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
        <div className="container mx-auto">
          {/* Search and Filters */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              <span className="text-gradient">Vagas Disponíveis</span>
            </h1>
            
            <div className="card-gradient p-6 max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative md:col-span-3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Buscar por cargo ou empresa..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background border-border"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas as categorias</SelectItem>
                    <SelectItem value="Operacional">Operacional</SelectItem>
                    <SelectItem value="Administrativo">Administrativo</SelectItem>
                    <SelectItem value="Gestão">Gestão</SelectItem>
                    <SelectItem value="Tecnologia">Tecnologia</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas as cidades</SelectItem>
                    <SelectItem value="São Paulo">São Paulo</SelectItem>
                    <SelectItem value="Rio de Janeiro">Rio de Janeiro</SelectItem>
                    <SelectItem value="Belo Horizonte">Belo Horizonte</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="btn-primary">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground text-lg">
              Encontramos <span className="text-primary font-semibold">{filteredJobs.length}</span> vagas para você
            </p>
          </div>

          {/* Job Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <Link key={job.id} to={`/vaga/${job.id}`}>
                <div className="card-gradient p-6 h-full hover:scale-105 transition-transform cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{job.cargo}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{job.empresa}</span>
                      </div>
                    </div>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {job.categoria}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{job.loja} - {job.cidade}/{job.estado}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="w-4 h-4" />
                      <span>{job.tipoContratacao} • {job.modeloTrabalho}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4" />
                      <span>{job.escolaridade}</span>
                    </div>
                  </div>

                  <Button className="w-full btn-primary">
                    Ver Detalhes
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vagas;
