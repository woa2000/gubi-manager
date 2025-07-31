import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  country: string
  location: string
  gender?: string
  birthDate?: string
  createdAt: string
  education?: {
    grade: string
  }
  interests?: {
    userInterests: string[]
  }
}

interface UsersTableProps {
  users: User[]
  onSort: (column: string) => void
  orderBy: string
  orderDirection: 'asc' | 'desc'
  pagination: {
    page: number
    pageSize: number
    totalUsers: number
    totalPages: number
  }
  onPageChange: (page: number) => void
  onPageSizeChange: (pageSize: number) => void
}

export function UsersTableNew({ 
  users, 
  onSort, 
  orderBy, 
  orderDirection, 
  pagination,
  onPageChange,
  onPageSizeChange
}: UsersTableProps) {
  const calculateAge = (birthDate?: string) => {
    if (!birthDate) return null
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  const getInterestBadges = (interests?: { userInterests: string[] }) => {
    if (!interests?.userInterests?.length) return 'Nenhum'
    
    const interestLabels: Record<string, string> = {
      saude: 'Saúde',
      tecnologia: 'Tecnologia',
      negocios: 'Negócios',
      engenharia: 'Engenharia',
      arte_design: 'Arte & Design',
      comunicacao: 'Comunicação',
      meio_ambiente: 'Meio Ambiente',
      educacao: 'Educação',
      empreendedorismo: 'Empreendedorismo',
      financas: 'Finanças'
    }

    return interests.userInterests.slice(0, 2).map(interest => (
      <span
        key={interest}
        className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1"
      >
        {interestLabels[interest] || interest}
      </span>
    ))
  }

  const SortIcon = ({ column }: { column: string }) => {
    if (orderBy !== column) {
      return <ChevronUp className="w-4 h-4 text-gray-400" />
    }
    return orderDirection === 'asc' 
      ? <ChevronUp className="w-4 h-4 text-blue-600" />
      : <ChevronDown className="w-4 h-4 text-blue-600" />
  }

  const pages = Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
  const startPage = Math.max(1, pagination.page - 2)
  const endPage = Math.min(pagination.totalPages, pagination.page + 2)
  const visiblePages = pages.slice(startPage - 1, endPage)

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="px-4 py-3 text-left text-sm font-medium text-gray-900 cursor-pointer hover:bg-gray-100"
                onClick={() => onSort('name')}
              >
                <div className="flex items-center gap-1">
                  Nome
                  <SortIcon column="name" />
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-sm font-medium text-gray-900 cursor-pointer hover:bg-gray-100"
                onClick={() => onSort('email')}
              >
                <div className="flex items-center gap-1">
                  Email
                  <SortIcon column="email" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                Idade
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                País
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                Localização
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                Gênero
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                Escolaridade
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                Interesses
              </th>
              <th 
                className="px-4 py-3 text-left text-sm font-medium text-gray-900 cursor-pointer hover:bg-gray-100"
                onClick={() => onSort('createdAt')}
              >
                <div className="flex items-center gap-1">
                  Cadastro
                  <SortIcon column="createdAt" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                  {user.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {user.email}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {calculateAge(user.birthDate) || 'N/A'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {user.country}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {user.location}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {user.gender || 'Não informado'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {user.education?.grade || 'Não informado'}
                </td>
                <td className="px-4 py-3 text-sm">
                  {getInterestBadges(user.interests)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {formatDate(user.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              Mostrando {(pagination.page - 1) * pagination.pageSize + 1} a{' '}
              {Math.min(pagination.page * pagination.pageSize, pagination.totalUsers)} de{' '}
              {pagination.totalUsers} usuários
            </span>
            <select
              value={pagination.pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="text-sm border border-gray-300 rounded px-2 py-1"
            >
              <option value={10}>10 por página</option>
              <option value={25}>25 por página</option>
              <option value={50}>50 por página</option>
            </select>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onPageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              className="p-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {visiblePages.map(page => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 text-sm rounded ${
                  page === pagination.page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => onPageChange(pagination.page + 1)}
              disabled={pagination.page === pagination.totalPages}
              className="p-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
