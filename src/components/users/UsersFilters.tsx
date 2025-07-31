import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

interface UsersFiltersProps {
  onSearch: (query: string) => void
  onRefresh: () => void
  totalUsers: number
}

export function UsersFilters({ onSearch, onRefresh, totalUsers }: UsersFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    onSearch('')
  }

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Buscar por nome, email ou localização..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit" variant="primary">
              Buscar
            </Button>
            {searchQuery && (
              <Button
                type="button"
                variant="secondary"
                onClick={handleClearSearch}
              >
                Limpar
              </Button>
            )}
          </form>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            Total: <span className="font-medium">{totalUsers}</span> usuários
          </div>
          <Button
            variant="secondary"
            onClick={onRefresh}
            size="sm"
          >
            Atualizar
          </Button>
        </div>
      </div>
    </div>
  )
}
