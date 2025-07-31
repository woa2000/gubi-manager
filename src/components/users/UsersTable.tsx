import { useState } from 'react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { UserListItem } from '@/types/user'

interface UsersTableProps {
  users: UserListItem[]
  onUserClick: (user: UserListItem) => void
  onSort: (field: string) => void
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export function UsersTable({ users, onUserClick, onSort, sortBy, sortOrder }: UsersTableProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('pt-BR')
  }

  const formatInterests = (interests: string[]) => {
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
      financas: 'Finanças',
      outro: 'Outro'
    }
    
    return interests.slice(0, 2).map(interest => interestLabels[interest] || interest)
  }

  const SortButton = ({ field, children }: { field: string; children: React.ReactNode }) => (
    <button
      onClick={() => onSort(field)}
      className="flex items-center gap-1 text-left font-medium text-gray-700 hover:text-gray-900"
    >
      {children}
      {sortBy === field && (
        <span className="text-xs">
          {sortOrder === 'asc' ? '↑' : '↓'}
        </span>
      )}
    </button>
  )

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4 text-left">
              <SortButton field="name">Nome</SortButton>
            </th>
            <th className="py-3 px-4 text-left">
              <SortButton field="email">Email</SortButton>
            </th>
            <th className="py-3 px-4 text-left">Idade</th>
            <th className="py-3 px-4 text-left">País</th>
            <th className="py-3 px-4 text-left">Localização</th>
            <th className="py-3 px-4 text-left">Interesses</th>
            <th className="py-3 px-4 text-left">Escolaridade</th>
            <th className="py-3 px-4 text-left">
              <SortButton field="createdAt">Cadastro</SortButton>
            </th>
            <th className="py-3 px-4 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="py-4 px-4">
                <div>
                  <div className="font-medium text-gray-900">
                    {user.name} {user.lastName}
                  </div>
                  <div className="text-sm text-gray-500">ID: {user.id}</div>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="text-sm text-gray-900">{user.email}</div>
              </td>
              <td className="py-4 px-4">
                <div className="text-sm text-gray-900">
                  {user.age ? `${user.age} anos` : '-'}
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="text-sm text-gray-900">{user.country}</div>
              </td>
              <td className="py-4 px-4">
                <div className="text-sm text-gray-900">{user.location}</div>
              </td>
              <td className="py-4 px-4">
                <div className="flex flex-wrap gap-1">
                  {user.interests?.userInterests ? (
                    formatInterests(user.interests.userInterests).map((interest) => (
                      <Badge
                        key={interest}
                        variant="default"
                        className="text-xs"
                      >
                        {interest}
                      </Badge>
                    ))
                  ) : (
                    <span className="text-gray-400 text-xs">Não informado</span>
                  )}
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="text-sm text-gray-900">
                  {user.education?.grade || '-'}
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="text-sm text-gray-900">
                  {formatDate(user.createdAt)}
                </div>
              </td>
              <td className="py-4 px-4">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => onUserClick(user)}
                >
                  Ver Detalhes
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
