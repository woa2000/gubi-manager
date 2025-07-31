export type UserWithRelations = {
  id: number
  name: string
  lastName: string
  email: string
  country: string
  phoneNumber: string
  birthDate: Date
  gender: string
  customGender?: string | null
  location: string
  createdAt: Date
  age?: number | null
  interests?: any | null
  education?: any | null
  employment?: any | null
  skills?: any | null
  challenges?: any | null
  socioeconomic?: any | null
  completion?: any | null
  discoveryProgress?: any | null
}

export type UserListItem = {
  id: number
  name: string
  lastName: string
  email: string
  country: string
  phoneNumber: string
  birthDate: Date
  gender: string
  location: string
  createdAt: Date
  age?: number | null
  interests?: {
    userInterests: string[]
  } | null
  education?: {
    grade: string
    institution?: string | null
  } | null
  skills?: {
    softSkills: string[]
    hardSkills: string[]
  } | null
}

export type UsersResponse = {
  users: UserListItem[]
  pagination: {
    total: number
    page: number
    limit: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export type UserDetailResponse = {
  user: UserWithRelations
}
