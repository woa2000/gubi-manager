interface KPICardProps {
  title: string
  value: number
  percentage: string
  description: string
  icon?: React.ReactNode
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple'
}

export function KPICard({ title, value, percentage, description, icon, color = 'blue' }: KPICardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    red: 'bg-red-50 border-red-200 text-red-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700'
  }

  const iconColorClasses = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    yellow: 'text-yellow-500',
    red: 'text-red-500',
    purple: 'text-purple-500'
  }

  return (
    <div className={`p-6 rounded-lg border-2 ${colorClasses[color]}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        {icon && (
          <div className={`p-2 rounded-full bg-white ${iconColorClasses[color]}`}>
            {icon}
          </div>
        )}
      </div>
      
      <div className="mb-1">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <span className="ml-2 text-lg font-semibold text-gray-600">({percentage}%)</span>
      </div>
      
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
