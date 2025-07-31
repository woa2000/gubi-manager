import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // 1. Dados demográficos básicos
    const totalUsers = await prisma.user.count()
    
    // Distribuição por gênero
    const genderDistribution = await prisma.user.groupBy({
      by: ['gender'],
      _count: { gender: true },
      orderBy: { _count: { gender: 'desc' } }
    })

    // Distribuição por país
    const countryDistribution = await prisma.user.groupBy({
      by: ['country'],
      _count: { country: true },
      orderBy: { _count: { country: 'desc' } }
    })

    // Distribuição por localização (cidades)
    const locationDistribution = await prisma.user.groupBy({
      by: ['location'],
      _count: { location: true },
      orderBy: { _count: { location: 'desc' } },
      take: 15
    })

    // Período de aplicação
    const periodData = await prisma.user.aggregate({
      _min: { createdAt: true },
      _max: { createdAt: true }
    })

    // 2. Cálculo de idades e distribuição etária mais detalhada
    const usersWithAge = await prisma.user.findMany({
      select: { birthDate: true }
    })

    const currentYear = new Date().getFullYear()
    const ages = usersWithAge.map((user: any) => 
      currentYear - new Date(user.birthDate).getFullYear()
    )

    const ageDistribution = {
      '15-17': ages.filter(age => age >= 15 && age <= 17).length,
      '18-20': ages.filter(age => age >= 18 && age <= 20).length,
      '21-23': ages.filter(age => age >= 21 && age <= 23).length,
      '24-26': ages.filter(age => age >= 24 && age <= 26).length,
      '27-29': ages.filter(age => age >= 27 && age <= 29).length,
      '30+': ages.filter(age => age >= 30).length
    }

    const averageAge = ages.reduce((sum: any, age: any) => sum + age, 0) / ages.length
    const medianAge = ages.sort((a, b) => a - b)[Math.floor(ages.length / 2)]

    // 3. Dados de educação expandidos
    const educationData = await prisma.education.groupBy({
      by: ['grade'],
      _count: { grade: true },
      orderBy: { _count: { grade: 'desc' } }
    })

    const wantsFacultyData = await prisma.education.groupBy({
      by: ['wantsFaculty'],
      _count: { wantsFaculty: true }
    })

    const financialSupportData = await prisma.education.groupBy({
      by: ['needsFinancialSupport'],
      _count: { needsFinancialSupport: true }
    })

    const studyFormatData = await prisma.education.groupBy({
      by: ['studyFormat'],
      _count: { studyFormat: true },
      orderBy: { _count: { studyFormat: 'desc' } }
    })

    const wantsFinancialInfoData = await prisma.education.groupBy({
      by: ['wantsFinancialInfo'],
      _count: { wantsFinancialInfo: true }
    })

    // 4. Interesses profissionais expandidos
    const interestsData = await prisma.interests.findMany({
      select: { 
        userInterests: true,
        workPreference: true,
        companyType: true,
        workEnvironment: true,
        customInterest: true
      }
    })

    // Contar interesses
    const interestCounts = interestsData.reduce((acc: any, item: any) => {
      item.userInterests?.forEach((interest: any) => {
        acc[interest] = (acc[interest] || 0) + 1
      })
      return acc
    }, {} as Record<string, number>)

    // Preferências de trabalho
    const workPreferences = interestsData.reduce((acc: any, item: any) => {
      if (item.workPreference) {
        acc[item.workPreference] = (acc[item.workPreference] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    // Tipos de empresa preferidos
    const companyTypePreferences = interestsData.reduce((acc: any, item: any) => {
      if (item.companyType) {
        acc[item.companyType] = (acc[item.companyType] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    // Ambiente de trabalho preferido
    const workEnvironmentPreferences = interestsData.reduce((acc: any, item: any) => {
      if (item.workEnvironment) {
        acc[item.workEnvironment] = (acc[item.workEnvironment] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    // 5. Objetivos profissionais expandidos
    const employmentData = await prisma.employment.findMany({
      select: { 
        twoYearGoals: true,
        workWhileStudying: true,
        hasInternshipExperience: true
      }
    })

    const goalCounts = employmentData.reduce((acc: any, item: any) => {
      item.twoYearGoals?.forEach((goal: any) => {
        acc[goal] = (acc[goal] || 0) + 1
      })
      return acc
    }, {} as Record<string, number>)

    // Dados sobre trabalho durante estudos
    const workWhileStudyingData = employmentData.reduce((acc: any, item: any) => {
      if (item.workWhileStudying) {
        acc[item.workWhileStudying] = (acc[item.workWhileStudying] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    // Experiência com estágios
    const internshipExperienceData = employmentData.reduce((acc: any, item: any) => {
      if (item.hasInternshipExperience) {
        acc[item.hasInternshipExperience] = (acc[item.hasInternshipExperience] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    // 6. Habilidades expandidas
    const skillsData = await prisma.skills.findMany({
      select: { 
        softSkills: true,
        hardSkills: true,
        skillsToImprove: true,
        learningPreference: true,
        studyFrequency: true
      }
    })

    const softSkillCounts = skillsData.reduce((acc: any, item: any) => {
      item.softSkills?.forEach((skill: any) => {
        acc[skill] = (acc[skill] || 0) + 1
      })
      return acc
    }, {} as Record<string, number>)

    const hardSkillCounts = skillsData.reduce((acc: any, item: any) => {
      item.hardSkills?.forEach((skill: any) => {
        acc[skill] = (acc[skill] || 0) + 1
      })
      return acc
    }, {} as Record<string, number>)

    const skillsToImproveCounts = skillsData.reduce((acc: any, item: any) => {
      item.skillsToImprove?.forEach((skill: any) => {
        acc[skill] = (acc[skill] || 0) + 1
      })
      return acc
    }, {} as Record<string, number>)

    // Preferências de aprendizado
    const learningPreferences = skillsData.reduce((acc: any, item: any) => {
      if (item.learningPreference) {
        acc[item.learningPreference] = (acc[item.learningPreference] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    // Frequência de estudos
    const studyFrequency = skillsData.reduce((acc: any, item: any) => {
      if (item.studyFrequency) {
        acc[item.studyFrequency] = (acc[item.studyFrequency] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    // 7. Desafios expandidos
    const challengesData = await prisma.challenges.findMany({
      select: { 
        currentDifficulties: true,
        internetAccess: true,
        availableDevices: true,
        thoughtAboutQuitting: true
      }
    })

    const difficultyCounts = challengesData.reduce((acc: any, item: any) => {
      item.currentDifficulties?.forEach((difficulty: any) => {
        acc[difficulty] = (acc[difficulty] || 0) + 1
      })
      return acc
    }, {} as Record<string, number>)

    const internetAccessData = challengesData.reduce((acc: any, item: any) => {
      if (item.internetAccess) {
        acc[item.internetAccess] = (acc[item.internetAccess] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    // Dispositivos disponíveis
    const deviceCounts = challengesData.reduce((acc: any, item: any) => {
      item.availableDevices?.forEach((device: any) => {
        acc[device] = (acc[device] || 0) + 1
      })
      return acc
    }, {} as Record<string, number>)

    // Pensaram em desistir
    const thoughtAboutQuittingData = challengesData.reduce((acc: any, item: any) => {
      if (item.thoughtAboutQuitting) {
        acc[item.thoughtAboutQuitting] = (acc[item.thoughtAboutQuitting] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    // 8. Dados socioeconômicos expandidos
    const socioeconomicData = await prisma.socioeconomic.groupBy({
      by: ['participatesInSocialProgram'],
      _count: { participatesInSocialProgram: true }
    })

    const socialProgramData = await prisma.socioeconomic.groupBy({
      by: ['socialProgram'],
      _count: { socialProgram: true },
      orderBy: { _count: { socialProgram: 'desc' } }
    })

    const householdSizeData = await prisma.socioeconomic.groupBy({
      by: ['householdSize'],
      _count: { householdSize: true },
      orderBy: { _count: { householdSize: 'desc' } }
    })

    const peopleWithIncomeData = await prisma.socioeconomic.groupBy({
      by: ['peopleWithIncome'],
      _count: { peopleWithIncome: true },
      orderBy: { _count: { peopleWithIncome: 'desc' } }
    })

    // 9. KPIs Estratégicos expandidos
    const jovensComClarezaCarreira = employmentData.filter((item: any) => 
      item.twoYearGoals && !item.twoYearGoals?.includes('ainda_nao_sei')
    ).length

    const jovensPerfilDigital = interestsData.filter((item: any) => 
      item.userInterests?.some((interest: any) => 
        ['tecnologia', 'comunicacao', 'marketing_digital'].includes(interest)
      )
    ).length

    const jovensComAnsiedade = challengesData.filter((item: any) =>
      item.currentDifficulties?.includes('ansiedade')
    ).length

    const jovensComDificuldadeFinanceira = challengesData.filter((item: any) =>
      item.currentDifficulties?.some((difficulty: any) => 
        difficulty.includes('financeira') || difficulty.includes('dinheiro')
      )
    ).length

    const jovensComAcessoLimitado = challengesData.filter((item: any) =>
      item.internetAccess !== 'sim' || 
      !item.availableDevices?.includes('computador')
    ).length

    const jovensQueQueremFaculdade = await prisma.education.count({
      where: { wantsFaculty: 'sim' }
    })

    const jovensComExperienciaEstagio = employmentData.filter((item: any) =>
      item.hasInternshipExperience === 'sim'
    ).length

    // 10. Dados do Discovery Progress expandidos
    const discoveryData = await prisma.discoveryProgress.findMany({
      select: { 
        completedLevels: true,
        resume: true,
        answers: true
      }
    })

    const levelCompletionData = discoveryData.reduce((acc: any, item: any) => {
      const levels = item.completedLevels?.length || 0
      acc[levels] = (acc[levels] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const resumeTypes = discoveryData.reduce((acc: any, item: any) => {
      if (item.resume) {
        acc[item.resume] = (acc[item.resume] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    // Análise de engajamento no game
    const completionRates = {
      naoComecaram: discoveryData.filter(d => !d.completedLevels || d.completedLevels.length === 0).length,
      baixoEngajamento: discoveryData.filter(d => d.completedLevels && d.completedLevels.length > 0 && d.completedLevels.length <= 3).length,
      medioEngajamento: discoveryData.filter(d => d.completedLevels && d.completedLevels.length > 3 && d.completedLevels.length <= 7).length,
      altoEngajamento: discoveryData.filter(d => d.completedLevels && d.completedLevels.length > 7).length
    }

    // 11. Análises cruzadas para insights estratégicos
    const crossAnalysisData = await prisma.user.findMany({
      select: {
        id: true,
        country: true,
        location: true,
        birthDate: true,
        interests: {
          select: { 
            userInterests: true,
            workPreference: true
          }
        },
        employment: {
          select: { 
            twoYearGoals: true,
            hasInternshipExperience: true
          }
        },
        challenges: {
          select: { 
            currentDifficulties: true,
            internetAccess: true,
            availableDevices: true
          }
        },
        socioeconomic: {
          select: { 
            participatesInSocialProgram: true,
            peopleWithIncome: true
          }
        },
        education: {
          select: { 
            needsFinancialSupport: true,
            wantsFaculty: true,
            grade: true
          }
        },
        skills: {
          select: {
            hardSkills: true,
            softSkills: true
          }
        },
        discoveryProgress: {
          select: { 
            resume: true,
            completedLevels: true
          }
        }
      }
    })

    // Calcular correlações importantes
    const brazilianUsers = crossAnalysisData.filter(u => u.country === 'Brasil')
    const digitalInterestedUsers = crossAnalysisData.filter(u => 
      u.interests?.userInterests?.some(i => ['tecnologia', 'comunicacao'].includes(i))
    )
    const vulnerableUsers = crossAnalysisData.filter(u => 
      u.socioeconomic?.participatesInSocialProgram === 'sim' &&
      u.challenges?.currentDifficulties?.some((difficulty: any) => 
        difficulty.includes('financeira') || difficulty.includes('dinheiro')
      )
    )

    return NextResponse.json({
      metadata: {
        totalUsers,
        period: {
          start: periodData._min.createdAt,
          end: periodData._max.createdAt
        },
        averageAge: Math.round(averageAge * 10) / 10,
        medianAge: Math.round(medianAge),
        generatedAt: new Date()
      },
      demographics: {
        gender: genderDistribution,
        country: countryDistribution,
        locations: locationDistribution,
        age: ageDistribution,
        ageStats: {
          average: Math.round(averageAge * 10) / 10,
          median: medianAge,
          total: ages.length
        }
      },
      education: {
        grades: educationData,
        wantsFaculty: wantsFacultyData,
        financialSupport: financialSupportData,
        studyFormat: studyFormatData,
        wantsFinancialInfo: wantsFinancialInfoData,
        totalEducationRecords: educationData.reduce((sum, item) => sum + item._count.grade, 0)
      },
      interests: {
        areas: interestCounts,
        workPreferences,
        companyTypes: companyTypePreferences,
        workEnvironment: workEnvironmentPreferences,
        totalInterestsRecords: interestsData.length
      },
      employment: {
        goals: goalCounts,
        workWhileStudying: workWhileStudyingData,
        internshipExperience: internshipExperienceData,
        totalEmploymentRecords: employmentData.length
      },
      skills: {
        soft: softSkillCounts,
        hard: hardSkillCounts,
        toImprove: skillsToImproveCounts,
        learningPreferences,
        studyFrequency,
        totalSkillsRecords: skillsData.length
      },
      challenges: {
        difficulties: difficultyCounts,
        internetAccess: internetAccessData,
        devices: deviceCounts,
        thoughtAboutQuitting: thoughtAboutQuittingData,
        totalChallengesRecords: challengesData.length
      },
      socioeconomic: {
        participatesInPrograms: socioeconomicData,
        socialPrograms: socialProgramData,
        householdSize: householdSizeData,
        peopleWithIncome: peopleWithIncomeData
      },
      gameAnalysis: {
        levelCompletion: levelCompletionData,
        resumeTypes,
        completionRates,
        totalGameRecords: discoveryData.length,
        totalWithResume: discoveryData.filter(d => d.resume).length
      },
      kpis: {
        clarezaCarreira: {
          value: jovensComClarezaCarreira,
          percentage: ((jovensComClarezaCarreira / totalUsers) * 100).toFixed(1),
          total: employmentData.length
        },
        perfilDigital: {
          value: jovensPerfilDigital,
          percentage: ((jovensPerfilDigital / totalUsers) * 100).toFixed(1),
          total: interestsData.length
        },
        ansiedade: {
          value: jovensComAnsiedade,
          percentage: ((jovensComAnsiedade / totalUsers) * 100).toFixed(1),
          total: challengesData.length
        },
        dificuldadeFinanceira: {
          value: jovensComDificuldadeFinanceira,
          percentage: ((jovensComDificuldadeFinanceira / totalUsers) * 100).toFixed(1)
        },
        acessoLimitado: {
          value: jovensComAcessoLimitado,
          percentage: ((jovensComAcessoLimitado / totalUsers) * 100).toFixed(1)
        },
        queremFaculdade: {
          value: jovensQueQueremFaculdade,
          percentage: ((jovensQueQueremFaculdade / totalUsers) * 100).toFixed(1)
        },
        experienciaEstagio: {
          value: jovensComExperienciaEstagio,
          percentage: ((jovensComExperienciaEstagio / totalUsers) * 100).toFixed(1)
        }
      },
      insights: {
        brazilianUsers: {
          total: brazilianUsers.length,
          percentage: ((brazilianUsers.length / totalUsers) * 100).toFixed(1)
        },
        digitalInterestedUsers: {
          total: digitalInterestedUsers.length,
          percentage: ((digitalInterestedUsers.length / totalUsers) * 100).toFixed(1)
        },
        vulnerableUsers: {
          total: vulnerableUsers.length,
          percentage: ((vulnerableUsers.length / totalUsers) * 100).toFixed(1)
        }
      },
      crossAnalysisData: crossAnalysisData.slice(0, 100) // Amostra para análises adicionais
    })

  } catch (error) {
    console.error('Erro ao gerar relatório:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
