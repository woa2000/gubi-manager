'use client'

import { useReportData, useKPIs } from '@/hooks/useReportData'
import { 
  DonutChart, 
  BarChartComponent, 
  HorizontalBarChart, 
  KPICard, 
  MetricCard,
  AreaChartComponent 
} from '@/components/charts/ReportCharts'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { Users, Target, TrendingUp, AlertTriangle, GraduationCap, Briefcase } from 'lucide-react'

export default function RelatorioPage() {
  const { data, loading, error, utils } = useReportData()
  const { kpis, loading: kpisLoading } = useKPIs()

  if (loading || kpisLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-red-800">Erro ao carregar relatório</h2>
          <p className="text-red-600 mt-2">{error}</p>
        </div>
      </div>
    )
  }

  if (!data || !kpis) {
    return (
      <div className="p-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-yellow-800">Dados não disponíveis</h2>
          <p className="text-yellow-600 mt-2">Não foi possível carregar os dados do relatório.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header do Relatório */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gubi-purple-dark">
          Relatório Geral - HAYAH MOVE
        </h1>
        <p className="text-gray-600 mt-2">
          Análise abrangente dos {data.metadata.totalUsers} jovens participantes
        </p>
        <p className="text-sm text-gray-500">
          Período: {new Date(data.metadata.period.start).toLocaleDateString()} - {new Date(data.metadata.period.end).toLocaleDateString()} | 
          Gerado em: {new Date(data.metadata.generatedAt).toLocaleString()}
        </p>
      </div>

      {/* 1. Indicadores Estratégicos (KPIs) */}
      <section>
        <h2 className="text-2xl font-bold text-gubi-purple-dark mb-4">
          1. Indicadores Estratégicos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kpis.map((kpi, index) => (
            <KPICard
              key={index}
              title={kpi.title}
              value={kpi.value}
              percentage={kpi.percentage}
              description={kpi.description}
              icon={
                index === 0 ? <Target className="w-5 h-5" /> :
                index === 1 ? <TrendingUp className="w-5 h-5" /> :
                index === 2 ? <AlertTriangle className="w-5 h-5" /> :
                index === 3 ? <GraduationCap className="w-5 h-5" /> :
                index === 4 ? <Briefcase className="w-5 h-5" /> :
                <Users className="w-5 h-5" />
              }
            />
          ))}
        </div>
      </section>

      {/* 2. Visão Geral Demográfica */}
      <section>
        <h2 className="text-2xl font-bold text-gubi-purple-dark mb-4">
          2. Perfil Demográfico
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard
            title="Total de Participantes"
            value={data.metadata.totalUsers.toLocaleString()}
            subtitle="Jovens cadastrados"
            icon={<Users className="w-5 h-5" />}
            color="purple"
          />
          <MetricCard
            title="Idade Média"
            value={`${data.metadata.averageAge} anos`}
            subtitle={`Mediana: ${data.metadata.medianAge} anos`}
            color="blue"
          />
          <MetricCard
            title="Países"
            value={data.demographics.country.length}
            subtitle="Diversidade geográfica"
            color="green"
          />
          <MetricCard
            title="Cidades"
            value={data.demographics.locations.length}
            subtitle="Localidades ativas"
            color="pink"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DonutChart
            data={utils.getPercentageData(data.demographics.gender, 'gender')}
            title="Distribuição por Gênero"
            description="Equilíbrio de gênero entre os participantes"
          />
          
          <BarChartComponent
            data={utils.getChartData(data.demographics.age)}
            title="Distribuição Etária"
            description="Faixas etárias dos jovens"
          />
          
          <BarChartComponent
            data={utils.getPercentageData(data.demographics.country.slice(0, 8), 'country')}
            title="Principais Países"
            description="Top 8 países de origem"
          />
        </div>
      </section>

      {/* 3. Perfil Educacional */}
      <section>
        <h2 className="text-2xl font-bold text-gubi-purple-dark mb-4">
          3. Perfil Educacional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DonutChart
            data={utils.getPercentageData(data.education.grades, 'grade')}
            title="Grau de Escolaridade"
            description="Nível educacional atual"
          />
          
          <BarChartComponent
            data={utils.getPercentageData(data.education.wantsFaculty, 'wantsFaculty')}
            title="Interesse em Faculdade"
            description="Jovens que desejam cursar ensino superior"
          />
          
          <BarChartComponent
            data={utils.getPercentageData(data.education.studyFormat, 'studyFormat')}
            title="Formato de Estudo Preferido"
            description="Modalidades de ensino preferidas"
          />
        </div>
      </section>

      {/* 4. Interesses e Objetivos Profissionais */}
      <section>
        <h2 className="text-2xl font-bold text-gubi-purple-dark mb-4">
          4. Interesses e Objetivos Profissionais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BarChartComponent
            data={utils.getChartData(data.interests.areas, 10)}
            title="Top 10 Áreas de Interesse"
            description="Principais áreas profissionais de interesse"
            height={400}
          />
          
          <BarChartComponent
            data={utils.getChartData(data.employment.goals, 8)}
            title="Objetivos para 2 Anos"
            description="Principais metas profissionais"
            height={400}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <DonutChart
            data={utils.getChartData(data.interests.workPreferences)}
            title="Preferências de Trabalho"
            description="Modalidades de trabalho preferidas"
          />
          
          <DonutChart
            data={utils.getChartData(data.interests.companyTypes)}
            title="Tipos de Empresa"
            description="Preferências por porte de empresa"
          />
          
          <DonutChart
            data={utils.getChartData(data.interests.workEnvironment)}
            title="Ambiente de Trabalho"
            description="Preferências de ambiente profissional"
          />
        </div>
      </section>

      {/* 5. Competências e Habilidades */}
      <section>
        <h2 className="text-2xl font-bold text-gubi-purple-dark mb-4">
          5. Competências e Habilidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BarChartComponent
            data={utils.getChartData(data.skills.soft, 10)}
            title="Top 10 Soft Skills"
            description="Habilidades comportamentais mais presentes"
            height={400}
          />
          
          <BarChartComponent
            data={utils.getChartData(data.skills.hard, 10)}
            title="Top 10 Hard Skills"
            description="Habilidades técnicas mais presentes"
            height={400}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <BarChartComponent
            data={utils.getChartData(data.skills.toImprove, 8)}
            title="Habilidades a Desenvolver"
            description="Áreas de melhoria identificadas"
          />
          
          <DonutChart
            data={utils.getChartData(data.skills.learningPreferences)}
            title="Preferências de Aprendizado"
            description="Como preferem aprender"
          />
          
          <DonutChart
            data={utils.getChartData(data.skills.studyFrequency)}
            title="Frequência de Estudos"
            description="Dedicação aos estudos"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          Relatório gerado automaticamente pelo Sistema GUBI Manager - HAYAH MOVE
        </p>
        <p className="text-xs text-gray-400 text-center mt-1">
          Dados atualizados em tempo real do banco de dados
        </p>
      </footer>
    </div>
  )
}
