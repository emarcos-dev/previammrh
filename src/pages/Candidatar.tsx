import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Briefcase, Upload, CheckCircle2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Candidatar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    linkedin: "",
    escolaridade: "",
    cidade: "",
    estado: "",
    disponibilidade: "",
    experienciaVarejo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio - será substituído por lógica real
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Candidatura enviada!",
        description: "A equipe da Momento RH analisará seu perfil e retornará pelo WhatsApp ou e-mail.",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="card-gradient p-12 text-center max-w-2xl">
          <CheckCircle2 className="w-24 h-24 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Candidatura Enviada com Sucesso!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A equipe da Momento RH analisará seu perfil e retornará pelo WhatsApp ou e-mail em breve.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/vagas">
              <Button className="btn-primary">
                Ver Mais Vagas
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="btn-outline">
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm fixed w-full z-50 bg-background/80">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-gradient">Momento RH</span>
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          {/* Back Button */}
          <Link to={`/vaga/${id}`} className="inline-flex items-center text-primary hover:underline mb-6">
            ← Voltar para detalhes da vaga
          </Link>

          {/* Form */}
          <div className="card-gradient p-8">
            <h1 className="text-3xl font-bold mb-2">Candidatar-se à Vaga</h1>
            <p className="text-muted-foreground mb-8">
              Preencha o formulário abaixo com suas informações. Todos os campos são obrigatórios.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dados Pessoais */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-primary">Dados Pessoais</h2>
                
                <div>
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input
                    id="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="bg-background border-border"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="bg-background border-border"
                      placeholder="(11) 98765-4321"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="linkedin">LinkedIn (opcional)</Label>
                  <Input
                    id="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="bg-background border-border"
                    placeholder="https://linkedin.com/in/seuperfil"
                  />
                </div>
              </div>

              {/* Formação e Localização */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-primary">Formação e Localização</h2>
                
                <div>
                  <Label htmlFor="escolaridade">Escolaridade *</Label>
                  <Select value={formData.escolaridade} onValueChange={(value) => setFormData({ ...formData, escolaridade: value })}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Selecione sua escolaridade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fundamental">Ensino Fundamental</SelectItem>
                      <SelectItem value="medio_cursando">Ensino Médio Cursando</SelectItem>
                      <SelectItem value="medio_completo">Ensino Médio Completo</SelectItem>
                      <SelectItem value="superior_cursando">Ensino Superior Cursando</SelectItem>
                      <SelectItem value="superior_completo">Ensino Superior Completo</SelectItem>
                      <SelectItem value="pos_graduacao">Pós-graduação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cidade">Cidade *</Label>
                    <Input
                      id="cidade"
                      type="text"
                      required
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      className="bg-background border-border"
                      placeholder="Sua cidade"
                    />
                  </div>

                  <div>
                    <Label htmlFor="estado">Estado *</Label>
                    <Select value={formData.estado} onValueChange={(value) => setFormData({ ...formData, estado: value })}>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Selecione o estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SP">São Paulo</SelectItem>
                        <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                        <SelectItem value="MG">Minas Gerais</SelectItem>
                        <SelectItem value="ES">Espírito Santo</SelectItem>
                        <SelectItem value="PR">Paraná</SelectItem>
                        <SelectItem value="SC">Santa Catarina</SelectItem>
                        <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Perguntas Específicas */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-primary">Perguntas Específicas</h2>
                
                <div>
                  <Label htmlFor="disponibilidade">Disponibilidade para início *</Label>
                  <Select value={formData.disponibilidade} onValueChange={(value) => setFormData({ ...formData, disponibilidade: value })}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Quando você pode começar?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="imediato">Imediato</SelectItem>
                      <SelectItem value="15_dias">15 dias</SelectItem>
                      <SelectItem value="30_dias">30 dias</SelectItem>
                      <SelectItem value="a_combinar">A combinar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experienciaVarejo">Você já trabalhou no varejo? *</Label>
                  <Textarea
                    id="experienciaVarejo"
                    required
                    value={formData.experienciaVarejo}
                    onChange={(e) => setFormData({ ...formData, experienciaVarejo: e.target.value })}
                    className="bg-background border-border min-h-[100px]"
                    placeholder="Conte-nos sobre sua experiência no varejo..."
                  />
                </div>
              </div>

              {/* Currículo */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-primary">Currículo</h2>
                
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Clique para fazer upload do seu currículo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Formato PDF, tamanho máximo 5MB
                  </p>
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    id="curriculo"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button type="submit" size="lg" className="btn-primary w-full text-lg shadow-glow">
                  Enviar Candidatura
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Ao enviar, você concorda com o processamento de seus dados para fins de recrutamento.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidatar;
