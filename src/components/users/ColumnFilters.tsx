import { useState, useEffect } from 'react'
import { ChevronDown, X, Filter } from 'lucide-react'

interface ColumnFilter {
  field: string
  value: string
  label: string
}

interface ColumnFiltersProps {
  users: any[]
  onFiltersChange: (filters: ColumnFilter[]) => void
}

export function ColumnFilters({ users, onFiltersChange }: ColumnFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<ColumnFilter[]>([])
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Extrair valores únicos para cada coluna
  const getUniqueValues = (field: string) => {
    const values = new Set<string>()
    
    users.forEach(user => {
      let value: string
      switch (field) {
        case 'country':
          value = user.country
          break
        case 'location':
          value = user.location
          break
        case 'gender':
          value = user.gender || 'Não informado'
          break
        case 'education':
          value = user.education?.grade || 'Não informado'
          break
        case 'ageRange':
          if (user.age) {
            if (user.age < 18) value = 'Menor de 18'
            else if (user.age <= 25) value = '18-25'
            else if (user.age <= 35) value = '26-35'
            else value = 'Maior de 35'
          } else {
            value = 'Não informado'
          }
          break
        case 'interests':
          if (user.interests?.userInterests?.length > 0) {
            user.interests.userInterests.forEach((interest: string) => {
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
              values.add(interestLabels[interest] || interest)
            })
            return
          } else {
            value = 'Não informado'
          }
          break
        default:
          return []
      }
      
      if (value) values.add(value)
    })
    
    return Array.from(values).sort()
  }

  const handleFilterAdd = (field: string, value: string, label: string) => {
    const newFilter = { field, value, label }
    const existingFilterIndex = activeFilters.findIndex(f => f.field === field && f.value === value)
    
    if (existingFilterIndex === -1) {
      const newFilters = [...activeFilters, newFilter]
      setActiveFilters(newFilters)
      onFiltersChange(newFilters)
    }
    
    setOpenDropdown(null)
  }

  const handleFilterRemove = (field: string, value: string) => {
    const newFilters = activeFilters.filter(f => !(f.field === field && f.value === value))
    setActiveFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearAllFilters = () => {
    setActiveFilters([])
    onFiltersChange([])
  }

  const filterOptions = [
    { field: 'country', label: 'País' },
    { field: 'location', label: 'Localização' },
    { field: 'gender', label: 'Gênero' },
    { field: 'education', label: 'Escolaridade' },
    { field: 'ageRange', label: 'Faixa Etária' },
    { field: 'interests', label: 'Interesses' }
  ]

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
      <div className="flex items-center gap-2 mb-3">
        <Filter className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filtros por Coluna</span>
        {activeFilters.length > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-xs text-red-600 hover:text-red-800 ml-2"
          >
            Limpar todos
          </button>
        )}
      </div>
      
      {/* Filtros Ativos */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {activeFilters.map((filter, index) => (
            <span
              key={`${filter.field}-${filter.value}-${index}`}
              className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {filter.label}: {filter.value}
              <button
                onClick={() => handleFilterRemove(filter.field, filter.value)}
                className="hover:text-blue-900"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}
      
      {/* Dropdowns de Filtro */}
      <div className="flex flex-wrap gap-2">
        {filterOptions.map(option => (
          <div key={option.field} className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === option.field ? null : option.field)}
              className="inline-flex items-center gap-1 px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {option.label}
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {openDropdown === option.field && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                {getUniqueValues(option.field).map(value => {
                  const isSelected = activeFilters.some(f => f.field === option.field && f.value === value)
                  return (
                    <button
                      key={value}
                      onClick={() => {
                        if (isSelected) {
                          handleFilterRemove(option.field, value)
                        } else {
                          handleFilterAdd(option.field, value, option.label)
                        }
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                        isSelected ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{value}</span>
                        {isSelected && <span className="text-blue-600">✓</span>}
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
