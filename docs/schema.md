

enum UserInterestsEnum {
  saude
  tecnologia
  negocios
  engenharia
  arte_design
  comunicacao
  meio_ambiente
  educacao
  empreendedorismo
  financas
  outro
}

enum UserSkillsEnum {
  comunicacao
  organizacao
  criatividade
  logica
  lideranca
  adaptabilidade
  trabalho_equipe
  idiomas
  programacao
  excel
  ferramentas_digitais
  resolucao_problemas
  outra
}

enum TwoYearGoalsEnum {
  conseguir_emprego
  ingressar_faculdade
  curso_tecnico
  empreender
  aprender_ferramenta_tecnica
  melhorar_habilidades_sociais
  fazer_intercambio
  aprender_idioma
  ainda_nao_sei
}

enum SoftSkillsEnum {
  comunicacao
  criatividade
  persistencia
  organizacao
  trabalho_equipe
  empatia
  lideranca
  flexibilidade
  resolucao_problemas
  inteligencia_emocional
}

enum HardSkillsEnum {
  excel
  power_bi
  canva
  python
  banco_dados
  atendimento_cliente
  criacao_conteudo
  vendas
  design_grafico
  nenhuma
}

enum DifficultiesEnum {
  organizacao
  entendimento
  ansiedade
  carreira
  estrutura_de_estudo
  nenhuma
}

enum DevicesEnum {
  celular
  computador
  tablet
  nenhum
}

enum DiscoveryLevel {
  library
  florest
  city
  cybercity
}

model User {
  id                  Int                  @id @default(autoincrement())
  
  name                String
  lastName            String

  email               String               @unique
  password            String

  country             String
  phoneNumber         String

  birthDate           DateTime
  gender              String
  customGender        String?
  location            String

  createdAt           DateTime             @default(now())

  interests           Interests?
  education           Education?
  employment          Employment?
  skills              Skills?
  challenges          Challenges?
  socioeconomic       Socioeconomic?
  completion          Completion?
  discoveryProgress   DiscoveryProgress?
}

model Interests {
  id                  Int                  @id @default(autoincrement())
  userId              Int                  @unique

  userInterests       UserInterestsEnum[]
  customInterest      String?
  workPreference      String
  workEnvironment     String
  companyType         String
  userSkills          UserSkillsEnum[]
  customSkill         String?

  user                User                 @relation(fields: [userId], references: [id])
}

model Education {
  id                      Int      @id @default(autoincrement())
  userId                  Int      @unique
  
  grade                   String
  wantsFaculty            String
  currentInstitution      String?
  institution             String?
  courseName              String?
  startCourseDate         String?
  endCourseDate           String?
  studyFormat             String
  needsFinancialSupport   String
  wantsFinancialInfo      String

  user                    User     @relation(fields: [userId], references: [id])
}

model Employment {
  id                        Int                     @id @default(autoincrement())
  userId                    Int                     @unique
  
  twoYearGoals              TwoYearGoalsEnum[]
  workWhileStudying         String
  hasInternshipExperience   String

  user                      User                    @relation(fields: [userId], references: [id])
}

model Skills {
  id                Int              @id @default(autoincrement())
  userId            Int              @unique
  
  softSkills        SoftSkillsEnum[]
  skillsToImprove   SoftSkillsEnum[]
  hardSkills        HardSkillsEnum[]
  learningPreference String
  studyFrequency     String

  user              User             @relation(fields: [userId], references: [id])
}

model Challenges {
  id                    Int     @id @default(autoincrement())
  userId                Int     @unique
  
  currentDifficulties   DifficultiesEnum[]
  thoughtAboutQuitting  String
  internetAccess        String
  availableDevices      DevicesEnum[]

  user                  User    @relation(fields: [userId], references: [id])
}

model Socioeconomic {
  id                            Int     @id @default(autoincrement())
  userId                        Int     @unique

  participatesInSocialProgram  String
  socialProgram                String
  householdSize                String
  peopleWithIncome             String

  user                          User    @relation(fields: [userId], references: [id])
}

model Completion {
  id                Int       @id @default(autoincrement())
  userId            Int       @unique

  howFoundUs        String
  customHowFoundUs  String
  acceptsTerms      Boolean
  acceptsDataUsage  Boolean

  user              User      @relation(fields: [userId], references: [id])
}

model PasswordReset {
  id        String   @id @default(uuid())

  email     String
  code      String

  expiresAt DateTime
  used      Boolean  @default(false)
  
  createdAt DateTime @default(now())
}


model DiscoveryProgress {
  id               Int              @id @default(autoincrement())
  userId           Int              @unique
  
  resume           String?
  completedLevels  DiscoveryLevel[]
  answers          String[]

  user             User             @relation(fields: [userId], references: [id])
}