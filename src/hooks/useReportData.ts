import { useState, useEffect } from 'react'

interface ReportData {
  metadata: {
    totalUsers: number
    period: {
      start: string
      end: string
    }
    averageAge: number
    medianAge: number
    generatedAt: string
  }
  demographics: {
    gender: Array<{ gender: string; _count: { gender: number } }>
    country: Array<{ country: string; _count: { country: number } }>
    locations: Array<{ location: string; _count: { location: number } }>
    age: Record<string, number>
    ageStats: {
      average: number
      median: number
      total: number
    }
  }
  education: {
    grades: Array<{ grade: string; _count: { grade: number } }>
    wantsFaculty: Array<{ wantsFaculty: string; _count: { wantsFaculty: number } }>
    financialSupport: Array<{ needsFinancialSupport: string; _count: { needsFinancialSupport: number } }>
    studyFormat: Array<{ studyFormat: string; _count: { studyFormat: number } }>
    wantsFinancialInfo: Array<{ wantsFinancialInfo: string; _count: { wantsFinancialInfo: number } }>
    totalEducationRecords: number
  }
  interests: {
    areas: Record<string, number>
    workPreferences: Record<string, number>
    companyTypes: Record<string, number>
    workEnvironment: Record<string, number>
    totalInterestsRecords: number
  }
  employment: {
    goals: Record<string, number>
    workWhileStudying: Record<string, number>
    internshipExperience: Record<string, number>
    totalEmploymentRecords: number
  }
  skills: {
    soft: Record<string, number>
    hard: Record<string, number>
    toImprove: Record<string, number>
    learningPreferences: Record<string, number>
    studyFrequency: Record<string, number>
    totalSkillsRecords: number
  }
  challenges: {
    difficulties: Record<string, number>
    internetAccess: Record<string, number>
    devices: Record<string, number>
    thoughtAboutQuitting: Record<string, number>
    totalChallengesRecords: number
  }
  socioeconomic: {
    participatesInPrograms: Array<{ participatesInSocialProgram: string; _count: { participatesInSocialProgram: number } }>
    socialPrograms: Array<{ socialProgram: string; _count: { socialProgram: number } }>
    householdSize: Array<{ householdSize: string; _count: { householdSize: number } }>
    peopleWithIncome: Array<{ peopleWithIncome: string; _count: { peopleWithIncome: number } }>
  }
  gameAnalysis: {
    levelCompletion: Record<string, number>
    resumeTypes: Record<string, number>
    completionRates: {
      naoComecaram: number
      baixoEngajamento: number
      medioEngajamento: number
      altoEngajamento: number
    }
    totalGameRecords: number
    totalWithResume: number
  }
  kpis: {
    clarezaCarreira: {
      value: number
      percentage: string
      total: number
    }
    perfilDigital: {
      value: number
      percentage: string
      total: number
    }
    ansiedade: {
      value: number
      percentage: string
      total: number
    }
    dificuldadeFinanceira: {
      value: number
      percentage: string
    }
    acessoLimitado: {
      value: number
      percentage: string
    }
    queremFaculdade: {
      value: number
      percentage: string
    }
    experienciaEstagio: {
      value: number
      percentage: string
    }
  }
  insights: {
    brazilianUsers: {
      total: number
      percentage: string
    }
    digitalInterestedUsers: {
      total: number
      percentage: string
    }
    vulnerableUsers: {
      total: number
      percentage: string
    }
  }
  crossAnalysisData: Array<any>
}

export function useReportData() {
  const [data, setData] = useState<ReportData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchReportData = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/relatorio')
      
      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`)
      }

      const reportData = await response.json()
      setData(reportData)
    } catch (err) {
      console.error('Erro ao buscar dados do relatório:', err)
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchReportData()
  }, [])

  const refetch = () => {
    fetchReportData()
  }

  // Funções utilitárias para transformar dados para gráficos
  const getChartData = (data: Record<string, number>, limit?: number) => {
    const entries = Object.entries(data)
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit)
    
    return entries.map(([key, value]) => ({
      name: key,
      value: value,
      percentage: data ? ((value / Object.values(data).reduce((a, b) => a + b, 0)) * 100).toFixed(1) : '0'
    }))
  }

  const getPercentageData = (groupData: Array<{ [key: string]: any; _count: any }>, field: string) => {
    const total = groupData.reduce((sum, item) => sum + item._count[field], 0)
    return groupData.map(item => ({
      name: item[field],
      value: item._count[field],
      percentage: ((item._count[field] / total) * 100).toFixed(1)
    }))
  }

  return {
    data,
    loading,
    error,
    refetch,
    utils: {
      getChartData,
      getPercentageData
    }
  }
}

// Hook específico para KPIs
export function useKPIs() {
  const { data, loading, error } = useReportData()

  if (!data) return { kpis: null, loading, error }

  const kpis = [
    {
      title: 'Clareza de Carreira',
      value: data.kpis.clarezaCarreira.value,
      percentage: data.kpis.clarezaCarreira.percentage,
      total: data.kpis.clarezaCarreira.total,
      description: 'Jovens com objetivos profissionais definidos'
    },
    {
      title: 'Perfil Digital',
      value: data.kpis.perfilDigital.value,
      percentage: data.kpis.perfilDigital.percentage,
      total: data.kpis.perfilDigital.total,
      description: 'Jovens interessados em áreas digitais'
    },
    {
      title: 'Desafio: Ansiedade',
      value: data.kpis.ansiedade.value,
      percentage: data.kpis.ansiedade.percentage,
      total: data.kpis.ansiedade.total,
      description: 'Jovens que relatam ansiedade como dificuldade'
    },
    {
      title: 'Interesse em Faculdade',
      value: data.kpis.queremFaculdade.value,
      percentage: data.kpis.queremFaculdade.percentage,
      description: 'Jovens que desejam cursar ensino superior'
    },
    {
      title: 'Experiência com Estágios',
      value: data.kpis.experienciaEstagio.value,
      percentage: data.kpis.experienciaEstagio.percentage,
      description: 'Jovens com experiência em estágios'
    },
    {
      title: 'Acesso Limitado',
      value: data.kpis.acessoLimitado.value,
      percentage: data.kpis.acessoLimitado.percentage,
      description: 'Jovens com limitações de acesso digital'
    }
  ]

  return { kpis, loading, error }
}
