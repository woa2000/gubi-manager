'use client'

import { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import { UsersTableNew } from '@/components/users/UsersTableNew'
import { UsersFilters } from '@/components/users/UsersFilters'
import { ColumnFilters } from '@/components/users/ColumnFilters'

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

interface ColumnFilter {
  field: string
  value: string
  label: string
}

export default function UsuariosPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([])
  const [orderBy, setOrderBy] = useState('createdAt')
  const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('desc')
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    totalUsers: 0,
    totalPages: 0
  })

  const fetchUsers = async () => {
    setLoading(true)
    try {
      // Construir parâmetros da URL
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        pageSize: pagination.pageSize.toString(),
        orderBy,
        orderDirection,
      })

      if (search) {
        params.append('search', search)
      }

      // Adicionar filtros por coluna
      columnFilters.forEach(filter => {
        params.append(filter.field, filter.value)
      })

      const response = await fetch(`/api/users?${params}`)
      
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`)
      }
      
      const data = await response.json()
      
      setUsers(data.users)
      setPagination(prev => ({
        ...prev,
        totalUsers: data.pagination.totalUsers,
        totalPages: data.pagination.totalPages
      }))
    } catch (error) {
      console.error('Erro ao buscar usuários:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [pagination.page, pagination.pageSize, search, columnFilters, orderBy, orderDirection])

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm)
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  const handleFiltersChange = (filters: ColumnFilter[]) => {
    setColumnFilters(filters)
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  const handleRefresh = () => {
    fetchUsers()
  }

  const handleSort = (column: string) => {
    if (orderBy === column) {
      setOrderDirection(orderDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setOrderBy(column)
      setOrderDirection('asc')
    }
  }

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, page: newPage }))
  }

  const handlePageSizeChange = (newPageSize: number) => {
    setPagination(prev => ({ ...prev, pageSize: newPageSize, page: 1 }))
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Usuários</h1>
        <p className="text-gray-600">
          Gerenciamento de usuários do sistema HAYAH MOVE
        </p>
      </div>

      {/* Filtros Básicos */}
      <UsersFilters
        onSearch={handleSearch}
        onRefresh={handleRefresh}
        totalUsers={pagination.totalUsers}
      />

      {/* Filtros por Coluna */}
      <ColumnFilters
        users={users}
        onFiltersChange={handleFiltersChange}
      />

      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
          <span className="ml-2 text-gray-600">Carregando usuários...</span>
        </div>
      )}

      {/* Tabela */}
      {!loading && (
        <UsersTableNew
          users={users}
          onSort={handleSort}
          orderBy={orderBy}
          orderDirection={orderDirection}
          pagination={pagination}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      )}
    </div>
  )
}
