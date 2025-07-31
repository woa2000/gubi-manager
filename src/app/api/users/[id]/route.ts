import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id)

    if (isNaN(userId)) {
      return NextResponse.json(
        { error: 'ID do usuário inválido' },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        interests: true,
        education: true,
        employment: true,
        skills: true,
        challenges: true,
        socioeconomic: true,
        completion: true,
        discoveryProgress: true,
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      )
    }

    // Adicionar idade calculada
    const userWithAge = {
      ...user,
      age: user.birthDate ? new Date().getFullYear() - new Date(user.birthDate).getFullYear() : null,
    }

    return NextResponse.json({ user: userWithAge })
  } catch (error) {
    console.error('Erro ao buscar usuário:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
