'use client'

import { useState, useEffect, useCallback } from 'react'
import Card from '@/components/ui/Card'
import { UsersTable } from '@/components/users/UsersTable'
import { UsersFilters } from '@/components/users/UsersFilters'
import { Pagination } from '@/components/users/Pagination'
import { UserDetailModal } from '@/components/users/UserDetailModal'
import { UserListItem, UsersResponse } from '@/types/user'

export default function UsersPage() {
  const [users, setUsers] = useState<UserListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
  
  // Filtros e paginação
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false
  })

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '20',
        search: searchQuery,
        sortBy,
        sortOrder
      })

      const response = await fetch(`/api/users?${params}`)
      if (!response.ok) {
        throw new Error('Erro ao carregar usuários')
      }

      const data: UsersResponse = await response.json()
      setUsers(data.users)
      setPagination(data.pagination)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }, [currentPage, searchQuery, sortBy, sortOrder])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1) // Reset para primeira página
  }

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
    setCurrentPage(1) // Reset para primeira página
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleUserClick = (user: UserListItem) => {
    setSelectedUserId(user.id)
  }

  const handleRefresh = () => {
    fetchUsers()
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Usuários</h1>
        <p className="text-gray-600">Gerencie e visualize informações dos usuários cadastrados</p>
      </div>

      <UsersFilters
        onSearch={handleSearch}
        onRefresh={handleRefresh}
        totalUsers={pagination.total}
      />

      <Card className="overflow-hidden">
        {loading && (
          <div className="text-center py-12">
            <div className="text-lg text-gray-600">Carregando usuários...</div>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="text-red-600 mb-4">{error}</div>
            <button
              onClick={handleRefresh}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Tentar Novamente
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <UsersTable
              users={users}
              onUserClick={handleUserClick}
              onSort={handleSort}
              sortBy={sortBy}
              sortOrder={sortOrder}
            />
            
            <Pagination
              currentPage={currentPage}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
              hasNext={pagination.hasNext}
              hasPrev={pagination.hasPrev}
            />
          </>
        )}
      </Card>

      <UserDetailModal
        userId={selectedUserId}
        onClose={() => setSelectedUserId(null)}
      />
    </div>
  )
}
