import { ReportData } from '@/types/report'

interface ChartProps {
  data: Record<string, number>
  title: string
  type?: 'bar' | 'pie' | 'doughnut'
  colors?: string[]
}

export function SimpleChart({ data, title, type = 'bar', colors }: ChartProps) {
  const entries = Object.entries(data).sort(([,a], [,b]) => b - a)
  const total = Object.values(data).reduce((sum, val) => sum + val, 0)
  
  const defaultColors = [
    '#5A439B', '#7B68B0', '#E85A9B', '#F472B6', '#8B5CF6',
    '#A78BFA', '#C084FC', '#DDD6FE', '#EDE9FE', '#F3F4F6'
  ]

  const chartColors = colors || defaultColors

  if (type === 'pie' || type === 'doughnut') {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="w-48 h-48 relative">
            <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
              {entries.map(([key, value], index) => {
                const percentage = (value / total) * 100
                const angle = (percentage / 100) * 360
                const startAngle = entries.slice(0, index).reduce((sum, [,v]) => sum + (v / total) * 360, 0)
                
                const x1 = 100 + 90 * Math.cos((startAngle * Math.PI) / 180)
                const y1 = 100 + 90 * Math.sin((startAngle * Math.PI) / 180)
                const x2 = 100 + 90 * Math.cos(((startAngle + angle) * Math.PI) / 180)
                const y2 = 100 + 90 * Math.sin(((startAngle + angle) * Math.PI) / 180)
                
                const largeArcFlag = angle > 180 ? 1 : 0
                
                return (
                  <path
                    key={key}
                    d={`M 100 100 L ${x1} ${y1} A 90 90 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                    fill={chartColors[index % chartColors.length]}
                    stroke="white"
                    strokeWidth="2"
                  />
                )
              })}
              {type === 'doughnut' && (
                <circle cx="100" cy="100" r="50" fill="white" />
              )}
            </svg>
          </div>
          <div className="flex-1 ml-6">
            {entries.map(([key, value], index) => (
              <div key={key} className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded mr-2"
                    style={{ backgroundColor: chartColors[index % chartColors.length] }}
                  />
                  <span className="text-sm text-gray-700 capitalize">
                    {key.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {value} ({((value / total) * 100).toFixed(1)}%)
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Bar chart
  const maxValue = Math.max(...Object.values(data))
  
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
      <div className="space-y-3">
        {entries.map(([key, value], index) => (
          <div key={key} className="flex items-center">
            <div className="w-32 text-sm text-gray-700 capitalize truncate">
              {key.replace(/_/g, ' ')}
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-200 rounded-full h-4 relative overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${(value / maxValue) * 100}%`,
                    backgroundColor: chartColors[index % chartColors.length]
                  }}
                />
              </div>
            </div>
            <div className="w-16 text-sm font-medium text-gray-900 text-right">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
