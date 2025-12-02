import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link, useParams } from "react-router-dom";
import { Briefcase, Upload, CheckCircle2, AlertCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Validation schema
const applicationSchema = z.object({
  nome: z.string()
    .trim()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
  email: z.string()
    .trim()
    .email("E-mail inválido")
    .max(255, "E-mail muito longo"),
  whatsapp: z.string()
    .trim()
    .regex(/^\(?[1-9]{2}\)?\s?9?\s?\d{4}-?\d{4}$/, "WhatsApp inválido. Use o formato: (11) 98765-4321")
    .max(20, "WhatsApp inválido"),
  linkedin: z.string()
    .trim()
    .url("URL do LinkedIn inválida")
    .max(500, "URL muito longa")
    .optional()
    .or(z.literal("")),
  escolaridade: z.string()
    .min(1, "Selecione sua escolaridade"),
  cidade: z.string()
    .trim()
    .min(2, "Cidade deve ter no mínimo 2 caracteres")
    .max(100, "Cidade muito longa")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Cidade deve conter apenas letras"),
  estado: z.string()
    .min(1, "Selecione o estado"),
  disponibilidade: z.string()
    .min(1, "Selecione sua disponibilidade"),
  experienciaVarejo: z.string()
    .trim()
    .min(10, "Descreva sua experiência com no mínimo 10 caracteres")
    .max(1000, "Descrição muito longa (máximo 1000 caracteres)"),
  curriculo: z.instanceof(File, { message: "Currículo é obrigatório" })
    .refine((file) => file.size <= 5 * 1024 * 1024, "Arquivo deve ter no máximo 5MB")
    .refine((file) => file.type === "application/pdf", "Apenas arquivos PDF são aceitos"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const Candidatar = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
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
  const [curriculo, setCurriculo] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form data
    const dataToValidate = {
      ...formData,
      curriculo: curriculo as File,
    };

    const result = applicationSchema.safeParse(dataToValidate);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        const path = error.path[0] as string;
        fieldErrors[path] = error.message;
      });
      setErrors(fieldErrors);
      
      toast({
        title: "Erro de validação",
        description: "Por favor, corrija os erros no formulário.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulação de envio - será substituído por lógica real
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Candidatura enviada!",
        description: "A equipe da Momento RH analisará seu perfil e retornará pelo WhatsApp ou e-mail.",
      });
    }, 1000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCurriculo(file);
      // Clear file error when a file is selected
      if (errors.curriculo) {
        setErrors({ ...errors, curriculo: "" });
      }
    }
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
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className={`bg-background border-border ${errors.nome ? "border-destructive" : ""}`}
                    placeholder="Seu nome completo"
                  />
                  {errors.nome && (
                    <p className="text-sm text-destructive mt-1">{errors.nome}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`bg-background border-border ${errors.email ? "border-destructive" : ""}`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className={`bg-background border-border ${errors.whatsapp ? "border-destructive" : ""}`}
                      placeholder="(11) 98765-4321"
                    />
                    {errors.whatsapp && (
                      <p className="text-sm text-destructive mt-1">{errors.whatsapp}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="linkedin">LinkedIn (opcional)</Label>
                  <Input
                    id="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className={`bg-background border-border ${errors.linkedin ? "border-destructive" : ""}`}
                    placeholder="https://linkedin.com/in/seuperfil"
                  />
                  {errors.linkedin && (
                    <p className="text-sm text-destructive mt-1">{errors.linkedin}</p>
                  )}
                </div>
              </div>

              {/* Formação e Localização */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-primary">Formação e Localização</h2>
                
                <div>
                  <Label htmlFor="escolaridade">Escolaridade *</Label>
                  <Select value={formData.escolaridade} onValueChange={(value) => setFormData({ ...formData, escolaridade: value })}>
                    <SelectTrigger className={`bg-background border-border ${errors.escolaridade ? "border-destructive" : ""}`}>
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
                  {errors.escolaridade && (
                    <p className="text-sm text-destructive mt-1">{errors.escolaridade}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cidade">Cidade *</Label>
                    <Input
                      id="cidade"
                      type="text"
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      className={`bg-background border-border ${errors.cidade ? "border-destructive" : ""}`}
                      placeholder="Sua cidade"
                    />
                    {errors.cidade && (
                      <p className="text-sm text-destructive mt-1">{errors.cidade}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="estado">Estado *</Label>
                    <Select value={formData.estado} onValueChange={(value) => setFormData({ ...formData, estado: value })}>
                      <SelectTrigger className={`bg-background border-border ${errors.estado ? "border-destructive" : ""}`}>
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
                    {errors.estado && (
                      <p className="text-sm text-destructive mt-1">{errors.estado}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Perguntas Específicas */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-primary">Perguntas Específicas</h2>
                
                <div>
                  <Label htmlFor="disponibilidade">Disponibilidade para início *</Label>
                  <Select value={formData.disponibilidade} onValueChange={(value) => setFormData({ ...formData, disponibilidade: value })}>
                    <SelectTrigger className={`bg-background border-border ${errors.disponibilidade ? "border-destructive" : ""}`}>
                      <SelectValue placeholder="Quando você pode começar?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="imediato">Imediato</SelectItem>
                      <SelectItem value="15_dias">15 dias</SelectItem>
                      <SelectItem value="30_dias">30 dias</SelectItem>
                      <SelectItem value="a_combinar">A combinar</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.disponibilidade && (
                    <p className="text-sm text-destructive mt-1">{errors.disponibilidade}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="experienciaVarejo">Você já trabalhou no varejo? *</Label>
                  <Textarea
                    id="experienciaVarejo"
                    value={formData.experienciaVarejo}
                    onChange={(e) => setFormData({ ...formData, experienciaVarejo: e.target.value })}
                    className={`bg-background border-border min-h-[100px] ${errors.experienciaVarejo ? "border-destructive" : ""}`}
                    placeholder="Conte-nos sobre sua experiência no varejo..."
                  />
                  {errors.experienciaVarejo && (
                    <p className="text-sm text-destructive mt-1">{errors.experienciaVarejo}</p>
                  )}
                </div>
              </div>

              {/* Currículo */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-primary">Currículo</h2>
                
                <label htmlFor="curriculo" className={`block border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer ${errors.curriculo ? "border-destructive" : "border-border"}`}>
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  {curriculo ? (
                    <>
                      <p className="text-primary mb-2 font-medium">
                        {curriculo.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {(curriculo.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-muted-foreground mb-2">
                        Clique para fazer upload do seu currículo
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Formato PDF, tamanho máximo 5MB
                      </p>
                    </>
                  )}
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    id="curriculo"
                    onChange={handleFileChange}
                  />
                </label>
                {errors.curriculo && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors.curriculo}</AlertDescription>
                  </Alert>
                )}
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
