"use client";

import React from "react";
// Importe componentes de UI e gráficos conforme necessário
// import { PieChart, BarChart, RadarChart, ... } from '...';
// import { useRelatorioData } from '@/hooks/useRelatorioData';

export default function RelatorioPage() {
  // const { data, loading, error } = useRelatorioData(); // Exemplo de hook para buscar dados

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold mb-2">Relatório Institucional – Juventude HAYAH MOVE</h1>
      <p className="text-gray-600 mb-8">Educação, Perfil Profissional e Empregabilidade Jovem</p>

      {/* 1. Introdução */}
      <section>
        <h2 className="text-xl font-semibold mb-2">1. Introdução</h2>
        <p className="mb-2">Objetivo: Apresentar uma análise detalhada sobre o perfil, aspirações, competências e desafios dos jovens participantes do projeto HAYAH MOVE, com base nos dados coletados pela plataforma Gubi.</p>
        <p className="mb-2">Metodologia: Cadastro inicial + game interativo para levantamento do perfil comportamental. Dados cruzados para gerar as análises.</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li><b>Total de Jovens:</b> <span className="font-mono">(consultar banco)</span></li>
          <li><b>Países:</b> <span className="font-mono">(consultar banco)</span></li>
          <li><b>Igrejas/Localização:</b> <span className="font-mono">(consultar banco)</span></li>
          <li><b>Período de Aplicação:</b> <span className="font-mono">(consultar banco)</span></li>
        </ul>
      </section>

      {/* 2. Sumário Executivo */}
      <section>
        <h2 className="text-xl font-semibold mb-2">2. Sumário Executivo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* KPIs principais */}
          <div className="bg-white rounded shadow p-4">
            <div className="text-2xl font-bold">--%</div>
            <div className="text-gray-600">Jovens querem ensino superior</div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <div className="text-2xl font-bold">--</div>
            <div className="text-gray-600">Área de interesse mais citada</div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <div className="text-2xl font-bold">--%</div>
            <div className="text-gray-600">Acesso à internet/dispositivos</div>
          </div>
        </div>
        <div className="mb-2">
          <b>Principais Insights:</b> <span className="font-mono">(preencher após análise dos dados)</span>
        </div>
        <div>
          <b>Recomendações Estratégicas:</b> <span className="font-mono">(preencher após análise dos dados)</span>
        </div>
      </section>

      {/* 3. Visão Geral dos Participantes */}
      <section>
        <h2 className="text-xl font-semibold mb-2">3. Visão Geral dos Participantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded shadow p-4">
            <div className="font-semibold mb-1">Gênero</div>
            {/* <PieChart data={...} /> */}
            <div className="text-center text-gray-400">[Gráfico de Pizza]</div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <div className="font-semibold mb-1">Idade</div>
            {/* <BarChart data={...} /> */}
            <div className="text-center text-gray-400">[Histograma]</div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <div className="font-semibold mb-1">Localização</div>
            {/* <HeatMap data={...} /> */}
            <div className="text-center text-gray-400">[Mapa de Calor]</div>
          </div>
        </div>
      </section>

      {/* 4. Interesses Profissionais */}
      <section>
        <h2 className="text-xl font-semibold mb-2">4. Interesses Profissionais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded shadow p-4">
            <div className="font-semibold mb-1">Áreas de Interesse</div>
            <div className="text-center text-gray-400">[Nuvem de Palavras / Barras]</div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <div className="font-semibold mb-1">Preferências de Trabalho</div>
            <div className="text-center text-gray-400">[Gráficos de Barras]</div>
          </div>
        </div>
      </section>

      {/* 5. Educação */}
      <section>
        <h2 className="text-xl font-semibold mb-2">5. Educação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded shadow p-4">
            <div className="font-semibold mb-1">Situação Educacional</div>
            <div className="text-center text-gray-400">[Gráficos de Pizza/Barras]</div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <div className="font-semibold mb-1">Necessidade de Apoio</div>
            <div className="text-center text-gray-400">[Gráficos de Pizza/Barras]</div>
          </div>
        </div>
      </section>

      {/* 6. Objetivos Profissionais */}
      <section>
        <h2 className="text-xl font-semibold mb-2">6. Objetivos Profissionais</h2>
        <div className="bg-white rounded shadow p-4">
          <div className="font-semibold mb-1">Metas para os Próximos 2 Anos</div>
          <div className="text-center text-gray-400">[Ranking com ícones]</div>
        </div>
      </section>

      {/* 7. Habilidades (Skills) */}
      <section>
        <h2 className="text-xl font-semibold mb-2">7. Habilidades (Skills)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded shadow p-4">
            <div className="font-semibold mb-1">Soft Skills</div>
            <div className="text-center text-gray-400">[Radar Chart]</div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <div className="font-semibold mb-1">Hard Skills</div>
            <div className="text-center text-gray-400">[Gráfico de Barras]</div>
          </div>
        </div>
      </section>

      {/* 8. Dificuldades Atuais */}
      <section>
        <h2 className="text-xl font-semibold mb-2">8. Dificuldades Atuais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded shadow p-4">
            <div className="font-semibold mb-1">Principais Desafios</div>
            <div className="text-center text-gray-400">[Gráfico de Barras / Nuvem de Palavras]</div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <div className="font-semibold mb-1">Acesso a Recursos</div>
            <div className="text-center text-gray-400">[Infográficos]</div>
          </div>
        </div>
      </section>

      {/* 9. Perfil Socioeconômico */}
      <section>
        <h2 className="text-xl font-semibold mb-2">9. Perfil Socioeconômico</h2>
        <div className="bg-white rounded shadow p-4">
          <div className="font-semibold mb-1">Estrutura Familiar e Renda</div>
          <div className="text-center text-gray-400">[Infográfico de Casa]</div>
        </div>
      </section>

      {/* 10. Perfil Comportamental (Game Gubi) */}
      <section>
        <h2 className="text-xl font-semibold mb-2">10. Perfil Comportamental (Game Gubi)</h2>
        <div className="bg-white rounded shadow p-4">
          <div className="font-semibold mb-1">Resultados do Game</div>
          <div className="text-center text-gray-400">[Gráficos de Pizza, Venn, Clusters]</div>
        </div>
      </section>

      {/* 11. Cruzamento de Dados Estratégicos */}
      <section>
        <h2 className="text-xl font-semibold mb-2">11. Cruzamento de Dados Estratégicos</h2>
        <div className="bg-white rounded shadow p-4">
          <div className="font-semibold mb-1">Análises Cruzadas</div>
          <div className="text-center text-gray-400">[Heatmaps, Bolhas, Matrizes]</div>
        </div>
      </section>

      {/* 12. Visão Segmentada */}
      <section>
        <h2 className="text-xl font-semibold mb-2">12. Visão Segmentada</h2>
        <div className="bg-white rounded shadow p-4">
          <div className="font-semibold mb-1">Análise por Segmento</div>
          <div className="text-center text-gray-400">[Tabelas, Mapas, Barras Agrupadas]</div>
        </div>
      </section>

      {/* 13. Perfis Personificados (Personas) */}
      <section>
        <h2 className="text-xl font-semibold mb-2">13. Perfis Personificados (Personas)</h2>
        <div className="bg-white rounded shadow p-4">
          <div className="font-semibold mb-1">Exemplo de Persona</div>
          <div className="text-center text-gray-400">[Card de Persona]</div>
        </div>
      </section>

      {/* 14. Painel de Indicadores Estratégicos (KPIs) */}
      <section>
        <h2 className="text-xl font-semibold mb-2">14. Painel de Indicadores Estratégicos (KPIs)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded shadow p-4">
            <div className="text-2xl font-bold">--%</div>
            <div className="text-gray-600">Jovens com clareza de carreira</div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <div className="text-2xl font-bold">--%</div>
            <div className="text-gray-600">Perfil para o mercado digital</div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <div className="text-2xl font-bold">--%</div>
            <div className="text-gray-600">Baixo apoio socioemocional/digital</div>
          </div>
        </div>
      </section>

      {/* 15. Sugestão de Plano de Ação */}
      <section>
        <h2 className="text-xl font-semibold mb-2">15. Sugestão de Plano de Ação</h2>
        <div className="bg-white rounded shadow p-4">
          <div className="font-semibold mb-1">Exemplo de Plano de Ação</div>
          <div className="text-center text-gray-400">[Tabela de Ações]</div>
        </div>
      </section>

      {/* 16. Conclusão */}
      <section>
        <h2 className="text-xl font-semibold mb-2">16. Conclusão</h2>
        <div className="bg-white rounded shadow p-4">
          <div className="font-semibold mb-1">Resumo do Impacto</div>
          <div className="text-center text-gray-400">[Texto de Conclusão]</div>
        </div>
      </section>

      {/* 17. Anexos */}
      <section>
        <h2 className="text-xl font-semibold mb-2">17. Anexos</h2>
        <div className="bg-white rounded shadow p-4">
          <div className="font-semibold mb-1">Glossário e Tabelas</div>
          <div className="text-center text-gray-400">[Glossário/Tabelas de Dados]</div>
        </div>
      </section>
    </div>
  );
}
