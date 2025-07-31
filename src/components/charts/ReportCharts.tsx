'use client'

import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts'
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'

const COLORS = [
  '#6E459B', // Gubi Purple
  '#E6007E', // Gubi Pink
  '#00B4D8', // Blue
  '#90E0EF', // Light Blue
  '#F72585', // Hot Pink
  '#7209B7', // Purple
  '#560BAD', // Dark Purple
  '#480CA8', // Deep Purple
  '#3F37C9', // Indigo
  '#3F37C9'  // Extra color
]

interface ChartProps {
  data: Array<{ name: string; value: number; percentage?: string }>
  title: string
  description?: string
  height?: number
}

export function DonutChart({ data, title, description, height = 300 }: ChartProps) {
  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-xs font-semibold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gubi-purple-dark">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-sm text-gray-600">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              innerRadius={40}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name) => [`${value} pessoas`, name]}
              labelFormatter={(label) => `${label}`}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function BarChartComponent({ data, title, description, height = 300 }: ChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gubi-purple-dark">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-sm text-gray-600">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              formatter={(value, name) => [`${value} pessoas`, 'Quantidade']}
              labelFormatter={(label) => `${label}`}
            />
            <Bar dataKey="value" fill={COLORS[0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function HorizontalBarChart({ data, title, description, height = 300 }: ChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gubi-purple-dark">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-sm text-gray-600">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <BarChart 
            data={data} 
            layout="horizontal"
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tick={{ fontSize: 12 }} />
            <YAxis 
              type="category" 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              width={120}
            />
            <Tooltip 
              formatter={(value, name) => [`${value} pessoas`, 'Quantidade']}
              labelFormatter={(label) => `${label}`}
            />
            <Bar dataKey="value" fill={COLORS[1]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

interface AreaChartProps {
  data: Array<{ name: string; value: number }>
  title: string
  description?: string
  height?: number
}

export function AreaChartComponent({ data, title, description, height = 300 }: AreaChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gubi-purple-dark">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-sm text-gray-600">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              formatter={(value, name) => [`${value} pessoas`, 'Quantidade']}
              labelFormatter={(label) => `${label}`}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={COLORS[2]} 
              fill={COLORS[2]} 
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

interface KPICardProps {
  title: string
  value: number
  percentage: string
  description: string
  icon?: React.ReactNode
  trend?: 'up' | 'down' | 'stable'
}

export function KPICard({ title, value, percentage, description, icon, trend }: KPICardProps) {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    stable: 'text-yellow-600'
  }

  return (
    <Card className="border-l-4 border-l-gubi-purple">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        {icon && <div className="text-gubi-purple">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gubi-purple-dark">{value}</div>
        <p className={`text-sm font-medium ${trend ? trendColors[trend] : 'text-gray-600'}`}>
          {percentage}% do total
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

interface MetricCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: React.ReactNode
  color?: 'purple' | 'pink' | 'blue' | 'green'
}

export function MetricCard({ title, value, subtitle, icon, color = 'purple' }: MetricCardProps) {
  const colorClasses = {
    purple: 'border-l-gubi-purple text-gubi-purple-dark',
    pink: 'border-l-gubi-pink text-gubi-pink',
    blue: 'border-l-blue-500 text-blue-700',
    green: 'border-l-green-500 text-green-700'
  }

  return (
    <Card className={`border-l-4 ${colorClasses[color].split(' ')[0]}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        {icon && <div className={colorClasses[color].split(' ')[1]}>{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${colorClasses[color].split(' ')[1]}`}>
          {value}
        </div>
        {subtitle && (
          <p className="text-xs text-gray-500 mt-1">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
