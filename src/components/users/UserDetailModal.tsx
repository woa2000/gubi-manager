import { useEffect, useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { UserWithRelations } from '@/types/user'

interface UserDetailModalProps {
  userId: number | null
  onClose: () => void
}

export function UserDetailModal({ userId, onClose }: UserDetailModalProps) {
  const [user, setUser] = useState<UserWithRelations | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (userId) {
      fetchUserDetails(userId)
    }
  }, [userId])

  const fetchUserDetails = async (id: number) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/users/${id}`)
      if (!response.ok) {
        throw new Error('Erro ao carregar dados do usuário')
      }
      const data = await response.json()
      setUser(data.user)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  if (!userId) return null

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('pt-BR')
  }

  const formatEnum = (value: string) => {
    return value.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Detalhes do Usuário</h2>
            <Button variant="secondary" onClick={onClose}>
              Fechar
            </Button>
          </div>

          {loading && (
            <div className="text-center py-8">
              <div className="text-lg">Carregando...</div>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <div className="text-red-600">{error}</div>
              <Button variant="primary" onClick={() => fetchUserDetails(userId)} className="mt-4">
                Tentar Novamente
              </Button>
            </div>
          )}

          {user && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Informações Básicas */}
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Informações Básicas</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Nome</label>
                    <p className="text-gray-900">{user.name} {user.lastName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-gray-900">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Telefone</label>
                    <p className="text-gray-900">{user.phoneNumber || 'Não informado'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Data de Nascimento</label>
                    <p className="text-gray-900">{formatDate(user.birthDate)} ({user.age} anos)</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Gênero</label>
                    <p className="text-gray-900">{formatEnum(user.gender)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Localização</label>
                    <p className="text-gray-900">{user.location}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">País</label>
                    <p className="text-gray-900">{user.country}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Cadastro</label>
                    <p className="text-gray-900">{formatDate(user.createdAt)}</p>
                  </div>
                </div>
              </Card>

              {/* Interesses */}
              {user.interests && (
                <Card className="p-4">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Interesses</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Áreas de Interesse</label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {user.interests.userInterests?.map((interest: string) => (
                          <Badge key={interest} variant="info">
                            {formatEnum(interest)}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {user.interests.customInterest && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Interesse Personalizado</label>
                        <p className="text-gray-900">{user.interests.customInterest}</p>
                      </div>
                    )}
                    <div>
                      <label className="text-sm font-medium text-gray-500">Preferência de Trabalho</label>
                      <p className="text-gray-900">{formatEnum(user.interests.workPreference)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Ambiente de Trabalho</label>
                      <p className="text-gray-900">{formatEnum(user.interests.workEnvironment)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Tipo de Empresa</label>
                      <p className="text-gray-900">{formatEnum(user.interests.companyType)}</p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Educação */}
              {user.education && (
                <Card className="p-4">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Educação</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Escolaridade</label>
                      <p className="text-gray-900">{formatEnum(user.education.grade)}</p>
                    </div>
                    {user.education.institution && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Instituição</label>
                        <p className="text-gray-900">{user.education.institution}</p>
                      </div>
                    )}
                    {user.education.courseName && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Curso</label>
                        <p className="text-gray-900">{user.education.courseName}</p>
                      </div>
                    )}
                    <div>
                      <label className="text-sm font-medium text-gray-500">Quer Faculdade</label>
                      <p className="text-gray-900">{formatEnum(user.education.wantsFaculty)}</p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Habilidades */}
              {user.skills && (
                <Card className="p-4">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Habilidades</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Soft Skills</label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {user.skills.softSkills?.map((skill: string) => (
                          <Badge key={skill} variant="success">
                            {formatEnum(skill)}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Hard Skills</label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {user.skills.hardSkills?.map((skill: string) => (
                          <Badge key={skill} variant="warning">
                            {formatEnum(skill)}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Preferência de Aprendizado</label>
                      <p className="text-gray-900">{formatEnum(user.skills.learningPreference)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Frequência de Estudo</label>
                      <p className="text-gray-900">{formatEnum(user.skills.studyFrequency)}</p>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
