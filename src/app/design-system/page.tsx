'use client';

import { useState } from 'react';
import { Search, Mail, AlertCircle, Plus, Settings } from 'lucide-react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Input, 
  Alert, 
  Badge, 
  Progress 
} from '@/components/ui';

export default function DesignSystemShowcase() {
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="max-w-6xl mx-auto p-gubi-6 space-y-gubi-8">
      {/* Header */}
      <div className="text-center space-y-gubi-4">
        <h1 className="gubi-display-1 text-gubi-purple">Design System Gubi</h1>
        <p className="gubi-body-1 text-gubi-gray-700 max-w-2xl mx-auto">
          Sistema de design completo para a plataforma Gubi, focado em gamificação, 
          inclusão e experiência do usuário.
        </p>
      </div>

      {/* Typography Showcase */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Tipografia</CardTitle>
          <CardDescription>Escala tipográfica do Design System Gubi</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-gubi-4">
            <div>
              <h1 className="gubi-display-1 text-gubi-purple">Display 1 - Hero Headlines</h1>
            </div>
            <div>
              <h1 className="gubi-h1 text-gubi-gray-900">H1 - Títulos de Página</h1>
            </div>
            <div>
              <h2 className="gubi-h2 text-gubi-gray-900">H2 - Seções Principais</h2>
            </div>
            <div>
              <h3 className="gubi-h3 text-gubi-gray-900">H3 - Subtítulos</h3>
            </div>
            <div>
              <p className="gubi-body-1 text-gubi-gray-700">Body 1 - Texto padrão para leitura e interface</p>
            </div>
            <div>
              <p className="gubi-body-2 text-gubi-gray-700">Body 2 - Texto secundário e descrições</p>
            </div>
            <div>
              <p className="gubi-caption text-gubi-gray-500">Caption - Legendas e textos pequenos</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Colors Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Paleta de Cores</CardTitle>
          <CardDescription>Cores principais do Design System Gubi</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gubi-4">
            {/* Primary Colors */}
            <div className="space-y-gubi-2">
              <div className="w-full h-16 bg-gubi-purple rounded-gubi-md"></div>
              <p className="gubi-caption text-center">Purple</p>
            </div>
            <div className="space-y-gubi-2">
              <div className="w-full h-16 bg-gubi-pink rounded-gubi-md"></div>
              <p className="gubi-caption text-center">Pink</p>
            </div>
            <div className="space-y-gubi-2">
              <div className="w-full h-16 bg-gubi-light-blue rounded-gubi-md"></div>
              <p className="gubi-caption text-center">Light Blue</p>
            </div>
            <div className="space-y-gubi-2">
              <div className="w-full h-16 bg-gubi-dark-blue rounded-gubi-md"></div>
              <p className="gubi-caption text-center">Dark Blue</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Buttons Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Botões</CardTitle>
          <CardDescription>Variações de botões seguindo o design system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-gubi-6">
            {/* Variants */}
            <div>
              <h4 className="gubi-h3 mb-gubi-4">Variações</h4>
              <div className="flex flex-wrap gap-gubi-3">
                <Button variant="primary">Primário</Button>
                <Button variant="secondary">Secundário</Button>
                <Button variant="tertiary">Terciário</Button>
                <Button variant="destructive">Destrutivo</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="gubi-h3 mb-gubi-4">Tamanhos</h4>
              <div className="flex flex-wrap items-center gap-gubi-3">
                <Button size="sm">Pequeno</Button>
                <Button size="md">Médio</Button>
                <Button size="lg">Grande</Button>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h4 className="gubi-h3 mb-gubi-4">Com Ícones</h4>
              <div className="flex flex-wrap gap-gubi-3">
                <Button icon={Plus}>Adicionar</Button>
                <Button variant="secondary" icon={Settings}>Configurações</Button>
                <Button variant="tertiary" icon={Mail}>Email</Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h4 className="gubi-h3 mb-gubi-4">Estados</h4>
              <div className="flex flex-wrap gap-gubi-3">
                <Button loading>Carregando</Button>
                <Button disabled>Desabilitado</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inputs Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Campos de Entrada</CardTitle>
          <CardDescription>Componentes de formulário do design system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-gubi-6">
            <div className="space-y-gubi-4">
              <Input 
                label="Nome completo"
                placeholder="Digite seu nome"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
              
              <Input 
                label="Email"
                type="email"
                placeholder="seu@email.com"
                leftIcon={Mail}
                hint="Usaremos este email para entrar em contato"
              />
              
              <Input 
                label="Buscar"
                placeholder="Digite para buscar..."
                leftIcon={Search}
                rightIcon={AlertCircle}
              />
            </div>
            
            <div className="space-y-gubi-4">
              <Input 
                label="Campo com erro"
                placeholder="Digite algo"
                error="Este campo é obrigatório"
              />
              
              <Input 
                label="Campo desabilitado"
                placeholder="Não editável"
                disabled
                value="Valor fixo"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Alertas</CardTitle>
          <CardDescription>Mensagens de feedback para diferentes estados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-gubi-4">
            <Alert variant="success" title="Sucesso!">
              Sua ação foi executada com sucesso.
            </Alert>
            
            <Alert variant="warning" title="Atenção">
              Verifique os dados antes de continuar.
            </Alert>
            
            <Alert variant="error" title="Erro" dismissible onDismiss={() => setShowAlert(false)}>
              Ocorreu um erro ao processar sua solicitação.
            </Alert>
            
            <Alert variant="info">
              Esta é uma informação importante para você saber.
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Badges Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>Tags e indicadores de status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-gubi-4">
            <div>
              <h4 className="gubi-h3 mb-gubi-3">Variações</h4>
              <div className="flex flex-wrap gap-gubi-2">
                <Badge variant="default">Padrão</Badge>
                <Badge variant="success">Sucesso</Badge>
                <Badge variant="warning">Aviso</Badge>
                <Badge variant="error">Erro</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="purple">Purple</Badge>
                <Badge variant="pink">Pink</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="gubi-h3 mb-gubi-3">Tamanhos</h4>
              <div className="flex flex-wrap items-center gap-gubi-2">
                <Badge size="sm">Pequeno</Badge>
                <Badge size="md">Médio</Badge>
                <Badge size="lg">Grande</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Barras de Progresso</CardTitle>
          <CardDescription>Indicadores de progresso para gamificação</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-gubi-6">
            <div>
              <h4 className="gubi-h3 mb-gubi-4">Progresso do Curso</h4>
              <Progress 
                value={75} 
                variant="purple" 
                size="lg" 
                showLabel 
                label="JavaScript Básico"
              />
            </div>
            
            <div>
              <h4 className="gubi-h3 mb-gubi-4">Conquistas</h4>
              <div className="space-y-gubi-3">
                <Progress value={100} variant="success" showLabel label="Primeiro Login" />
                <Progress value={60} variant="pink" showLabel label="Jogos Completados" />
                <Progress value={30} variant="default" showLabel label="Perfil Preenchido" />
              </div>
            </div>
            
            <div>
              <h4 className="gubi-h3 mb-gubi-4">Diferentes Tamanhos</h4>
              <div className="space-y-gubi-3">
                <Progress value={40} size="sm" variant="purple" />
                <Progress value={60} size="md" variant="pink" />
                <Progress value={80} size="lg" variant="success" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card Variants Showcase */}
      <div className="grid md:grid-cols-3 gap-gubi-6">
        <Card variant="default">
          <CardHeader>
            <CardTitle>Card Padrão</CardTitle>
            <CardDescription>Sombra sutil</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="gubi-body-2 text-gubi-gray-700">
              Este é um card com estilo padrão, ideal para conteúdo geral.
            </p>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Card Elevado</CardTitle>
            <CardDescription>Sombra mais forte</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="gubi-body-2 text-gubi-gray-700">
              Este card tem mais destaque visual com sombra elevada.
            </p>
          </CardContent>
        </Card>

        <Card variant="interactive">
          <CardHeader>
            <CardTitle>Card Interativo</CardTitle>
            <CardDescription>Hover e animações</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="gubi-body-2 text-gubi-gray-700">
              Este card responde ao hover com animações suaves.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Interagir</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center py-gubi-8">
        <p className="gubi-body-2 text-gubi-gray-500">
          Design System Gubi v1.0 - Transformando o futuro do trabalho com jogos e dados
        </p>
      </div>
    </div>
  );
}
