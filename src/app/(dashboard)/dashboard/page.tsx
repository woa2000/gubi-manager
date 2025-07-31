'use client';

import React from 'react';
import { 
  Users, 
  Target, 
  TrendingUp, 
  DollarSign, 
  Award, 
  Calendar, 
  BarChart3, 
  PieChart,
  Activity,
  Bell,
  Settings,
  Plus,
  ChevronDown,
  Star,
  Zap,
  Trophy
} from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardContent, Badge, Progress } from '@/components/ui';

// Dados mock para o dashboard
const dashboardData = {
  stats: [
    {
      title: 'Usuários Ativos',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'bg-[#5A439B]'
    },
    {
      title: 'Campanhas Ativas',
      value: '24',
      change: '+3',
      trend: 'up',
      icon: Target,
      color: 'bg-[#E85A9B]'
    },
    {
      title: 'Taxa de Conversão',
      value: '68.2%',
      change: '+5.4%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-[#00A9E0]'
    },
    {
      title: 'Receita Mensal',
      value: 'R$ 45.2K',
      change: '+8.1%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-[#34C759]'
    }
  ],
  recentActivities: [
    {
      id: 1,
      user: 'Ana Silva',
      action: 'completou a campanha',
      target: 'Desafio de Vendas Q3',
      time: '2 min atrás',
      points: 250,
      badge: 'gold'
    },
    {
      id: 2,
      user: 'Carlos Santos',
      action: 'atingiu meta de',
      target: '100 leads qualificados',
      time: '15 min atrás',
      points: 150,
      badge: 'silver'
    },
    {
      id: 3,
      user: 'Marina Costa',
      action: 'subiu de nível no',
      target: 'Programa de Treinamento',
      time: '1h atrás',
      points: 300,
      badge: 'gold'
    },
    {
      id: 4,
      user: 'Roberto Lima',
      action: 'conquistou o badge',
      target: 'Cliente Fidelizado',
      time: '2h atrás',
      points: 100,
      badge: 'bronze'
    }
  ],
  topPerformers: [
    { name: 'Ana Silva', score: 2840, department: 'Vendas', growth: '+15%' },
    { name: 'Carlos Santos', score: 2650, department: 'Marketing', growth: '+12%' },
    { name: 'Marina Costa', score: 2380, department: 'Produto', growth: '+8%' },
    { name: 'Roberto Lima', score: 2120, department: 'Suporte', growth: '+5%' }
  ]
};

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#1F2933] mb-2">
              Dashboard Gubi
            </h1>
            <p className="text-[#7B8794]">
              Transformando trabalho em jogo, dados em resultados
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="tertiary" size="md">
              <Calendar className="w-4 h-4 mr-2" />
              Último mês
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="secondary" size="md">
              <Plus className="w-4 h-4 mr-2" />
              Nova Campanha
            </Button>
            <Button variant="ghost" size="md">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="md">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardData.stats.map((stat, index) => (
            <Card key={index} variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant={stat.trend === 'up' ? 'success' : 'warning'}>
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-[#1F2933] mb-1">
                  {stat.value}
                </h3>
                <p className="text-[#7B8794] text-sm">
                  {stat.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Performance Chart */}
          <div className="lg:col-span-2">
            <Card variant="elevated">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Performance da Equipe</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <PieChart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Gráfico Mock */}
                <div className="h-64 bg-gradient-to-br from-[#5A439B]/10 to-[#E85A9B]/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="w-12 h-12 text-[#5A439B] mx-auto mb-3" />
                    <p className="text-[#7B8794]">Gráfico de Performance</p>
                    <p className="text-sm text-[#CBD2D9]">Dados em tempo real</p>
                  </div>
                </div>
                
                {/* Progress Bars */}
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-[#1F2933]">Meta Mensal</span>
                      <span className="text-sm text-[#7B8794]">78%</span>
                    </div>
                    <Progress value={78} variant="purple" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-[#1F2933]">Engajamento</span>
                      <span className="text-sm text-[#7B8794]">92%</span>
                    </div>
                    <Progress value={92} variant="success" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-[#1F2933]">Qualidade</span>
                      <span className="text-sm text-[#7B8794]">85%</span>
                    </div>
                    <Progress value={85} variant="pink" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performers */}
          <div>
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 text-[#5A439B] mr-2" />
                  Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.topPerformers.map((performer, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#F5F7FA] rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                          index === 0 ? 'bg-[#FFD700]' : 
                          index === 1 ? 'bg-[#C0C0C0]' : 
                          index === 2 ? 'bg-[#CD7F32]' : 'bg-[#7B8794]'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-[#1F2933]">{performer.name}</p>
                          <p className="text-sm text-[#7B8794]">{performer.department}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#1F2933]">{performer.score}</p>
                        <p className="text-sm text-[#34C759]">{performer.growth}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 text-[#E85A9B] mr-2" />
                Atividades Recentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardData.recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-[#F5F7FA] rounded-lg transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#5A439B] to-[#E85A9B] rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#1F2933]">
                        <span className="font-medium">{activity.user}</span> {activity.action}{' '}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-[#7B8794]">{activity.time}</p>
                        <div className="flex items-center space-x-2">
                          <Badge variant={
                            activity.badge === 'gold' ? 'warning' : 
                            activity.badge === 'silver' ? 'default' : 'info'
                          }>
                            +{activity.points} pts
                          </Badge>
                          <Star className="w-4 h-4 text-[#FFD700]" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="tertiary" className="w-full">
                  Ver todas as atividades
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="primary" className="h-20 flex-col">
                  <Target className="w-6 h-6 mb-2" />
                  <span className="text-sm">Nova Meta</span>
                </Button>
                <Button variant="secondary" className="h-20 flex-col">
                  <Users className="w-6 h-6 mb-2" />
                  <span className="text-sm">Gerenciar Equipe</span>
                </Button>
                <Button variant="tertiary" className="h-20 flex-col">
                  <BarChart3 className="w-6 h-6 mb-2" />
                  <span className="text-sm">Relatórios</span>
                </Button>
                <Button variant="ghost" className="h-20 flex-col border-2 border-dashed border-[#CBD2D9]">
                  <Plus className="w-6 h-6 mb-2" />
                  <span className="text-sm">Personalizar</span>
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-[#5A439B]/10 to-[#E85A9B]/10 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-[#1F2933]">Gamificação Ativa</h4>
                    <p className="text-sm text-[#7B8794]">Próximo nível em 340 pontos</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="warning">Nível 8</Badge>
                  </div>
                </div>
                <div className="mt-3">
                  <Progress value={73} variant="purple" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
