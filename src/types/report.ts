export interface ReportData {
  metadata: {
    totalUsers: number
    period: {
      start: Date
      end: Date
    }
    averageAge: number
  }
  demographics: {
    gender: Array<{ gender: string; _count: { gender: number } }>
    country: Array<{ country: string; _count: { country: number } }>
    age: Record<string, number>
  }
  education: {
    grades: Array<{ grade: string; _count: { grade: number } }>
    wantsFaculty: Array<{ wantsFaculty: string; _count: { wantsFaculty: number } }>
    financialSupport: Array<{ needsFinancialSupport: string; _count: { needsFinancialSupport: number } }>
  }
  interests: {
    areas: Record<string, number>
    workPreferences: Record<string, number>
  }
  goals: Record<string, number>
  skills: {
    soft: Record<string, number>
    hard: Record<string, number>
  }
  challenges: {
    difficulties: Record<string, number>
    internetAccess: Record<string, number>
  }
  socioeconomic: Array<{ participatesInSocialProgram: string; _count: { participatesInSocialProgram: number } }>
  kpis: {
    clarezaCarreira: {
      value: number
      percentage: string
    }
    perfilDigital: {
      value: number
      percentage: string
    }
    ansiedade: {
      value: number
      percentage: string
    }
  }
  discovery: {
    levelCompletion: Record<string, number>
    totalCompleted: number
  }
}
