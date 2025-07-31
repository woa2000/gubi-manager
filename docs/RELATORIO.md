Relatório Institucional – Juventude HAYAH MOVE
Educação, Perfil Profissional e Empregabilidade Jovem
1. Introdução
Objetivo do Estudo: Apresentar uma análise detalhada sobre o perfil, as aspirações, competências e desafios dos jovens participantes do projeto HAYAH MOVE, com base nos dados coletados pela plataforma Gubi. O objetivo é gerar insights que possam guiar ações estratégicas de desenvolvimento e apoio a essa juventude.

Metodologia: A coleta de dados foi realizada por meio de um cadastro inicial na plataforma Gubi, seguido por um game interativo para levantamento do perfil comportamental. Os dados foram então cruzados para gerar as análises apresentadas neste relatório.

Amostragem:

Total de Jovens: Contagem total de registros na tabela User.

Países: Listagem e contagem de valores distintos no campo country da tabela User.

Igrejas/Localização: Análise do campo location na tabela User.

Período de Aplicação: Data do primeiro e último registro, com base no campo createdAt da tabela User.

2. Sumário Executivo (Resumo dos Principais Insights)
Indicadores-Chave:

Percentual de jovens que desejam cursar ensino superior (wantsFaculty na tabela Education).

Principais áreas de interesse profissional (userInterests na tabela Interests).

Nível de acesso à internet e dispositivos (internetAccess e availableDevices na tabela Challenges).

Principais Insights: (Será preenchido após a análise dos dados)

Exemplo: "Observa-se uma forte inclinação dos jovens para a área de Tecnologia, porém uma baixa autopercepção de competências técnicas como programação."

Recomendações Estratégicas: (Será preenchido após a análise dos dados)

Exemplo: "Desenvolver programas de capacitação em Hard Skills digitais, como Python e Banco de Dados, para suprir a lacuna entre o interesse e a competência."

3. Visão Geral dos Participantes
Perfil Demográfico:

Gênero: Análise dos campos gender e customGender da tabela User.

Idade: Cálculo a partir do birthDate da tabela User.

Localização: Análise do campo country da tabela User.

Visualização: Gráfico de Pizza (Gênero), Histograma (Idade) e Mapa de Calor (Países).

4. Interesses Profissionais
Áreas de Interesse:

Dados: userInterests e customInterest da tabela Interests.

Visualização: Nuvem de palavras ou gráfico de barras com as áreas mais citadas.

Preferências de Trabalho:

Formato de Trabalho: workPreference (Híbrido, Remoto, Presencial) da tabela Interests.

Tipo de Empresa: companyType (Tradicional, Inovadora) da tabela Interests.

Visualização: Gráficos de barras comparativos.

5. Educação
Situação Educacional:

Nível de Escolaridade: grade da tabela Education.

Interesse em Universidade: wantsFaculty da tabela Education.

Necessidade de Apoio Financeiro: needsFinancialSupport e wantsFinancialInfo da tabela Education.

Modalidade de Estudo Preferida: studyFormat da tabela Education.

Visualização: Gráficos de pizza e barras.

6. Objetivos Profissionais
Metas para os Próximos 2 Anos:

Dados: twoYearGoals da tabela Employment.

Visualização: Ranking com ícones representando cada objetivo (Ex: 🎓 para "Ingressar na faculdade", 💼 para "Conseguir um emprego").

7. Habilidades (Skills)
Soft Skills (Competências Comportamentais):

Autoavaliadas: softSkills da tabela Skills.

A Desenvolver: skillsToImprove da tabela Skills.

Visualização: Gráfico de Radar comparando as habilidades atuais com as que desejam desenvolver.

Hard Skills (Competências Técnicas):

Dados: hardSkills da tabela Skills.

Visualização: Gráfico de barras mostrando a prevalência de cada habilidade.

8. Dificuldades Atuais
Principais Desafios:

Dados: currentDifficulties da tabela Challenges.

Visualização: Gráfico de barras ou nuvem de palavras.

Contexto de Estudo/Trabalho:

Acesso à Internet: internetAccess da tabela Challenges.

Dispositivos Disponíveis: availableDevices da tabela Challenges.

Visualização: Infográficos que mostrem a proporção de jovens com e sem acesso a recursos básicos.

9. Perfil Socioeconômico
Estrutura Familiar e Renda:

Tamanho do Domicílio: householdSize da tabela Socioeconomic.

Pessoas com Renda Fixa: peopleWithIncome da tabela Socioeconomic.

Programas Sociais: participatesInSocialProgram e socialProgram da tabela Socioeconomic.

Visualização: Infográfico de uma casa com ícones representando as informações.

10. Perfil Comportamental (Game Gubi)
Resultados do Game:

Dados: resume, completedLevels e answers da tabela DiscoveryProgress.

Análise: Os dados brutos do jogo (answers) precisarão ser processados para extrair os perfis (ex: MBTI, área profissional dominante, estrutura profissional).

Visualização: Gráficos de Pizza (para distribuição de perfis), Diagramas de Venn (para interseções de características) e Clusters.

11. Cruzamento de Dados Estratégicos
Análises Cruzadas:

Perfil Comportamental vs. Interesses: Cruzar os resultados do DiscoveryProgress com userInterests da tabela Interests.

Dificuldades vs. Objetivos: Cruzar currentDifficulties da tabela Challenges com twoYearGoals da tabela Employment.

Renda vs. Necessidade de Apoio: Cruzar peopleWithIncome da tabela Socioeconomic com needsFinancialSupport da tabela Education.

Visualização: Heatmaps (mapas de calor), gráficos de bolhas e matrizes de correlação.

12. Visão Segmentada
Análise por Segmento:

Filtros: country, location da tabela User.

Dados a Comparar: Total de jovens, principais áreas de interesse (userInterests), perfis comportamentais (DiscoveryProgress), principais dificuldades (currentDifficulties).

Visualização: Tabelas comparativas, mapas interativos e gráficos de barras agrupadas.

13. Perfis Personificados (Personas)
Criação de Personas: Com base nos agrupamentos (clusters) identificados na análise de dados, criar de 3 a 5 perfis detalhados.

Exemplo de Persona:

Nome: "Sofia"

Idade: 19 anos (calculado de birthDate).

Perfil: Comunicadora, extrovertida (baseado em DiscoveryProgress).

Interesse: Marketing e Criação de Conteúdo (userInterests, hardSkills).

Objetivo: Conseguir um emprego na área (twoYearGoals).

Desafio: Ansiedade e necessidade de estrutura de estudo (currentDifficulties).

Necessidade: Apoio financeiro para um curso (needsFinancialSupport).

14. Painel de Indicadores Estratégicos (KPIs)
% de Jovens com Clareza de Carreira: Proporção de jovens que não marcaram "ainda_nao_sei" em twoYearGoals.

% de Jovens com Perfil para o Mercado Digital: Proporção de jovens com interesse em tecnologia ou comunicacao (userInterests) e que possuem hardSkills como python, power_bi, canva.

% de Jovens com Baixo Apoio Socioemocional/Digital: Proporção de jovens que relatam ansiedade como dificuldade (currentDifficulties) e/ou têm acesso limitado a internetAccess e availableDevices.

15. Sugestão de Plano de Ação
Perfil Identificado (Cluster)

Necessidade Principal

Ação Recomendada

Explorador Criativo (Interesse em Artes, Comunicação)

Desenvolvimento de Portfólio, Hard Skills

Workshops de Canva, Design Gráfico, Criação de Conteúdo.

Analítico Tecnológico (Interesse em Tecnologia, Engenharia)

Aprofundamento Técnico, Experiência Prática

Bootcamps de Python, Banco de Dados; Conexão com programas de estágio.

Empreendedor Social (Interesse em Negócios, Empreendedorismo)

Mentoria, Gestão Financeira

Programa de mentoria com empreendedores locais; Cursos de finanças básicas.

Jovem em Incerteza (Marcou "ainda_nao_sei")

Orientação Vocacional, Apoio Emocional

Sessões de coaching de carreira; Rodas de conversa sobre ansiedade e carreira.

16. Conclusão
Resumo do Impacto: Recapitular os principais achados do relatório, destacando o potencial da juventude HAYAH MOVE e os principais pontos de atenção.

Próximos Passos: Convidar à ação, sugerindo a implementação do plano de ação e o monitoramento contínuo dos indicadores.

Sugestões: Apontar oportunidades de parcerias com instituições de ensino, empresas e organizações sociais para fortalecer o apoio oferecido aos jovens.

17. Anexos
Glossário de termos (se necessário).

Tabelas de dados completas (opcional).