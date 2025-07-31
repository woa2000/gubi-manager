import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export async function GET(request: Request) {
  try {
    console.log('GET /api/users - iniciando requisição')
    
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const pageSize = parseInt(searchParams.get('pageSize') || '10')
    const search = searchParams.get('search') || ''
    const orderBy = searchParams.get('orderBy') || 'createdAt'
    const orderDirection = (searchParams.get('orderDirection') || 'desc') as 'asc' | 'desc'
    
    // Novos filtros por coluna
    const countryFilter = searchParams.get('country')
    const locationFilter = searchParams.get('location')
    const genderFilter = searchParams.get('gender')
    const educationFilter = searchParams.get('education')
    const ageRangeFilter = searchParams.get('ageRange')
    const interestsFilter = searchParams.get('interests')

    const skip = (page - 1) * pageSize

    // Construir filtros
    const filters: any = {}

    // Filtro de busca geral
    if (search) {
      filters.OR = [
        { name: { contains: search, mode: 'insensitive' as Prisma.QueryMode } },
        { email: { contains: search, mode: 'insensitive' as Prisma.QueryMode } },
        { location: { contains: search, mode: 'insensitive' as Prisma.QueryMode } }
      ]
    }

    // Filtros específicos
    if (countryFilter) {
      filters.country = countryFilter
    }

    if (locationFilter) {
      filters.location = locationFilter
    }

    if (genderFilter && genderFilter !== 'Não informado') {
      filters.gender = genderFilter
    } else if (genderFilter === 'Não informado') {
      filters.gender = null
    }

    if (educationFilter && educationFilter !== 'Não informado') {
      filters.education = {
        grade: educationFilter
      }
    } else if (educationFilter === 'Não informado') {
      filters.education = null
    }

    // Filtro por faixa etária
    if (ageRangeFilter && ageRangeFilter !== 'Não informado') {
      const currentYear = new Date().getFullYear()
      switch (ageRangeFilter) {
        case 'Menor de 18':
          filters.birthDate = {
            gte: new Date(currentYear - 18, 0, 1)
          }
          break
        case '18-25':
          filters.birthDate = {
            gte: new Date(currentYear - 25, 0, 1),
            lte: new Date(currentYear - 18, 11, 31)
          }
          break
        case '26-35':
          filters.birthDate = {
            gte: new Date(currentYear - 35, 0, 1),
            lte: new Date(currentYear - 26, 11, 31)
          }
          break
        case 'Maior de 35':
          filters.birthDate = {
            lte: new Date(currentYear - 35, 11, 31)
          }
          break
      }
    } else if (ageRangeFilter === 'Não informado') {
      filters.birthDate = null
    }

    // Filtro por interesses
    if (interestsFilter && interestsFilter !== 'Não informado') {
      const interestMap: Record<string, string> = {
        'Saúde': 'saude',
        'Tecnologia': 'tecnologia',
        'Negócios': 'negocios',
        'Engenharia': 'engenharia',
        'Arte & Design': 'arte_design',
        'Comunicação': 'comunicacao',
        'Meio Ambiente': 'meio_ambiente',
        'Educação': 'educacao',
        'Empreendedorismo': 'empreendedorismo',
        'Finanças': 'financas'
      }
      
      const interestKey = interestMap[interestsFilter] || interestsFilter
      
      filters.interests = {
        userInterests: {
          has: interestKey
        }
      }
    } else if (interestsFilter === 'Não informado') {
      filters.OR = [
        { interests: null },
        { interests: { userInterests: { isEmpty: true } } }
      ]
    }

    // Log para debug
    console.log('Parâmetros da consulta:', {
      page,
      pageSize,
      search,
      orderBy,
      orderDirection,
      filters: JSON.stringify(filters, null, 2)
    })

    // Buscar usuários com relacionamentos
    const [users, totalUsers] = await Promise.all([
      prisma.user.findMany({
        where: filters,
        skip,
        take: pageSize,
        orderBy: {
          [orderBy]: orderDirection
        },
        include: {
          education: true,
          interests: true
        }
      }),
      prisma.user.count({
        where: filters
      })
    ])

    console.log(`Encontrados ${users.length} usuários de ${totalUsers} total`)

    const totalPages = Math.ceil(totalUsers / pageSize)

    return NextResponse.json({
      users,
      pagination: {
        page,
        pageSize,
        totalUsers,
        totalPages
      }
    })

  } catch (error: any) {
    console.error('Erro na API de usuários:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor', details: error.message },
      { status: 500 }
    )
  }
}
