'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button, Input, Alert, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { useAuth } from '@/hooks/features/useAuth';
import { debugAuth } from '@/lib/auth/auth-debug';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormErrors {
  email?: string;
  password?: string;
  general?: string;
}

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { signIn, signInWithProvider, isAuthenticated, loading: authLoading, user } = useAuth();
  
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Debug: Monitorar mudanças no estado de autenticação
  useEffect(() => {
    console.log('🔍 Auth state changed:', { 
      isAuthenticated, 
      authLoading, 
      userExists: !!user 
    });
  }, [isAuthenticated, authLoading, user]);

  // Redirecionamento para dashboard APENAS após login bem-sucedido
  useEffect(() => {
    // Este useEffect agora só serve para o caso de o usuário já estar logado
    // e tentar acessar /login diretamente. O middleware deve cuidar disso,
    // mas mantemos como um fallback client-side.
    if (isAuthenticated && !authLoading) {
      debugAuth.log('Usuário já autenticado, redirecionando para dashboard (fallback)...');
      router.replace('/dashboard');
    }
  }, [isAuthenticated, authLoading, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof LoginFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = {};

    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      debugAuth.log('Tentando fazer login...');
      const result = await signIn(formData.email, formData.password);
      
      if (result.success) {
        debugAuth.log('Login bem-sucedido! Redirecionando...');
        // Redireciona diretamente aqui para forçar o reload
        window.location.href = '/dashboard';
      } else {
        setErrors({
          general: result.error || 'Erro ao fazer login. Verifique suas credenciais.'
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setErrors({
        general: 'Erro ao fazer login. Verifique suas credenciais.'
      });
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const result = await signInWithProvider('google');
    if (!result.success && result.error) {
      setErrors({
        general: result.error
      });
    }
  };

  const handleFacebookLogin = async () => {
    const result = await signInWithProvider('facebook');
    if (!result.success && result.error) {
      setErrors({
        general: result.error
      });
    }
  };

  // Mostra loading durante verificação de autenticação
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gubi-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-gubi-4">
            {/* Logo Placeholder */}
            <div className="mx-auto w-16 h-16 bg-gubi-purple rounded-gubi-lg flex items-center justify-center">
              <span className="gubi-h2 text-gubi-white font-bold">G</span>
            </div>
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gubi-purple mx-auto mb-gubi-4"></div>
          <p className="gubi-body-1 text-gubi-gray-700">Verificando autenticação...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gubi-gray-100 flex items-center justify-center py-gubi-12 px-gubi-4 sm:px-gubi-6 lg:px-gubi-8">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-gubi-8">
          <div className="mb-gubi-6">
            {/* Logo Placeholder - Replace with actual logo component */}
            <div className="mx-auto w-16 h-16 bg-gubi-purple rounded-gubi-lg flex items-center justify-center">
              <span className="gubi-h2 text-gubi-white font-bold">G</span>
            </div>
          </div>
          <h1 className="gubi-h1 text-gubi-gray-900 mb-gubi-2">Bem-vindo de volta!</h1>
          <p className="gubi-body-1 text-gubi-gray-700">
            Entre na sua conta para continuar sua jornada
          </p>
        </div>

        {/* Login Card */}
        <Card variant="elevated" padding="lg">
          <CardContent>
            {/* Error Alert */}
            {errors.general && (
              <div className="mb-gubi-6">
                <Alert variant="error" title="Erro de Login">
                  {errors.general}
                </Alert>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-gubi-6">
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                leftIcon={Mail}
                autoComplete="email"
                required
              />

              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                label="Senha"
                placeholder="Sua senha"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
                leftIcon={Lock}
                rightIcon={showPassword ? EyeOff : Eye}
                onRightIconClick={() => setShowPassword(!showPassword)}
                autoComplete="current-password"
                required
              />

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gubi-gray-300 text-gubi-purple focus:ring-gubi-purple focus:ring-offset-0"
                  />
                  <span className="ml-gubi-2 gubi-body-2 text-gubi-gray-700">Lembrar-me</span>
                </label>
                <Link
                  href="/esqueci-senha"
                  className="gubi-body-2 text-gubi-purple hover:text-gubi-purple-dark transition-colors"
                >
                  Esqueci minha senha
                </Link>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                loading={isLoading || authLoading}
              >
                {isLoading ? 'Entrando...' : authLoading ? 'Verificando...' : 'Entrar'}
              </Button>
            </form>

            {/* Divisor */}
            <div className="my-gubi-8 flex items-center">
              <div className="flex-1 border-t border-gubi-gray-300"></div>
              <span className="px-gubi-4 gubi-body-2 text-gubi-gray-500 bg-gubi-white">ou</span>
              <div className="flex-1 border-t border-gubi-gray-300"></div>
            </div>

            {/* Login Social */}
            <div className="space-y-gubi-3">
              <Button
                type="button"
                variant="tertiary"
                size="lg"
                className="w-full"
                onClick={handleGoogleLogin}
              >
                <svg className="w-5 h-5 mr-gubi-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continuar com Google
              </Button>

              <Button
                type="button"
                variant="tertiary"
                size="lg"
                className="w-full"
                onClick={handleFacebookLogin}
              >
                <svg className="w-5 h-5 mr-gubi-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continuar com Facebook
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Link para Cadastro */}
        <div className="mt-gubi-6 text-center">
          <p className="gubi-body-2 text-gubi-gray-700">
            Não tem uma conta?{' '}
            <Link
              href="/cadastro"
              className="font-medium text-gubi-purple hover:text-gubi-purple-dark transition-colors"
            >
              Cadastre-se grátis
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-gubi-8 text-center">
          <p className="gubi-caption text-gubi-gray-500">
            © 2025 Gubi. Transformando o futuro do trabalho com jogos e dados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
