import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Briefcase } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const RecrutadorLogin = () => {
  const { signInWithGoogle, user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (!loading && user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const handleGoogleLogin = async () => {
    try {
      setIsLoggingIn(true);
      await signInWithGoogle();
    } catch (error: any) {
      toast({
        title: "Erro ao fazer login",
        description: error.message || "Ocorreu um erro ao tentar fazer login. Tente novamente.",
        variant: "destructive",
      });
      setIsLoggingIn(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <Briefcase className="w-10 h-10 text-primary" />
          <span className="text-3xl font-bold text-gradient">Momento RH</span>
        </Link>

        {/* Login Card */}
        <div className="card-gradient p-8">
          <h1 className="text-3xl font-bold text-center mb-2">Área do Recrutador</h1>
          <p className="text-muted-foreground text-center mb-8">
            Faça login para acessar o painel de gestão de vagas e candidatos
          </p>

          <div className="space-y-4">
            <Button
              onClick={handleGoogleLogin}
              size="lg"
              variant="outline"
              className="w-full flex items-center justify-center gap-3 border-2 border-border hover:border-primary hover:bg-background/80 py-6 text-lg"
              disabled={isLoggingIn}
            >
              <FcGoogle className="w-6 h-6" />
              {isLoggingIn ? "Conectando..." : "Entrar com Google"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-card px-4 text-muted-foreground">Primeira vez aqui?</span>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Após o primeiro login, você será solicitado a preencher informações da empresa e loja.
              </p>
              <p className="text-xs text-muted-foreground">
                Ao fazer login, você concorda com nossos{" "}
                <Link to="/termos-de-uso" className="text-primary hover:underline">
                  Termos de Uso
                </Link>{" "}
                e{" "}
                <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            ← Voltar para página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecrutadorLogin;
