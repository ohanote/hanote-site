import { Smartphone, Building2, Video } from "lucide-react";

export const navItems = [
  { label: "Serviços", id: "servicos", type: "scroll" },
  { label: "Diferenciais", id: "diferenciais", type: "scroll" },
  { label: "Portfólio", id: "/portfolio", type: "route" },
  { label: "Depoimentos", id: "depoimentos", type: "scroll" },
  { label: "Orçamento", id: "orcamento", type: "scroll" },
];

export const services = [
  {
    icon: Smartphone,
    title: "Vídeos para Redes Sociais",
    description: "Conteúdo pensado para prender atenção, fortalecer presença digital e manter sua marca relevante no dia a dia do público.",
  },
  {
    icon: Building2,
    title: "Vídeos Institucionais",
    description: "Filmes que apresentam sua empresa com clareza, autoridade e uma imagem à altura do que ela entrega.",
  },
  {
    icon: Video,
    title: "Filmagem de Eventos",
    description: "Cobertura com linguagem cinematográfica para transformar momentos importantes em materiais de divulgação, memória e posicionamento.",
  },
];

export const reasons = [
  {
    title: "Direção criativa com intenção",
    description: "Cada projeto nasce com um objetivo claro: comunicar valor, gerar conexão e construir percepção.",
  },
  {
    title: "Estética que fortalece a marca",
    description: "A imagem não é só bonita. Ela precisa traduzir identidade, posicionamento e credibilidade.",
  },
  {
    title: "Produção ágil, sem perder refinamento",
    description: "Organização, ritmo e execução para entregar com eficiência e alto padrão visual.",
  },
  {
    title: "Narrativa pensada para resultado",
    description: "Criamos peças que fazem a marca ser lembrada, percebida e desejada.",
  },
];

export const portfolio = [
  {
    title: "Vídeo Institucional",
    image: "/images/portfolio-1.jpg",
  },
  {
    title: "Reel para Redes Sociais",
    image: "/images/portfolio-2.jpg",
  },
  {
    title: "Cobertura de Evento",
    image: "/images/portfolio-3.jpg",
  },
];

export const portfolioCases = [
  // COBERTURA DE EVENTOS
  {
    id: 1,
    title: "Dia 4 - Camarote Pedrão Premium",
    category: "Cobertura de Eventos",
    youtubeId: "7BLDa-FZdc0",
    youtubeUrl: "https://www.youtube.com/watch?v=7BLDa-FZdc0",
    image: "https://img.youtube.com/vi/7BLDa-FZdc0/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Cobertura completa com foco em experiência e atmosfera do evento.",
  },
  {
    id: 2,
    title: "Dia 3 - Camarote Pedrão Premium",
    category: "Cobertura de Eventos",
    youtubeId: "Y05EnEsAjOM",
    youtubeUrl: "https://www.youtube.com/watch?v=Y05EnEsAjOM",
    image: "https://img.youtube.com/vi/Y05EnEsAjOM/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Registro dinâmico com edição ágil para redes sociais.",
  },
  {
    id: 3,
    title: "Dia 2 - Camarote Pedrão Premium",
    category: "Cobertura de Eventos",
    youtubeId: "pFxLmAAevkQ",
    youtubeUrl: "https://www.youtube.com/watch?v=pFxLmAAevkQ",
    image: "https://img.youtube.com/vi/pFxLmAAevkQ/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Captação estratégica focada em storytelling do evento.",
  },

  // AFTERMOVIES
  {
    id: 4,
    title: "Bruninho Soares - Forró Beija Eu",
    category: "Aftermovies",
    youtubeId: "LAGLDd3GsPU",
    youtubeUrl: "https://www.youtube.com/watch?v=LAGLDd3GsPU",
    image: "https://img.youtube.com/vi/LAGLDd3GsPU/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Aftermovie com ritmo envolvente e foco na energia do público.",
  },
  {
    id: 5,
    title: "Bruninho Soares - Festa da Tarifa",
    category: "Aftermovies",
    youtubeId: "3r17QgPMkhI",
    youtubeUrl: "https://www.youtube.com/watch?v=3r17QgPMkhI",
    image: "https://img.youtube.com/vi/3r17QgPMkhI/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Resumo dinâmico destacando momentos-chave do evento.",
  },

  // DOCUMENTÁRIOS
  {
    id: 6,
    title: "Alencar Souto de Oliveira - Documentário",
    category: "Documentários",
    youtubeId: "8CfYI_diEKk",
    youtubeUrl: "https://www.youtube.com/watch?v=8CfYI_diEKk",
    image: "https://img.youtube.com/vi/8CfYI_diEKk/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Narrativa documental com abordagem sensível e cinematográfica.",
  },
  {
    id: 7,
    title: "Lideranças Negras - Documentário",
    category: "Documentários",
    youtubeId: "3DeJat7KTqI",
    youtubeUrl: "https://www.youtube.com/watch?v=3DeJat7KTqI",
    image: "https://img.youtube.com/vi/3DeJat7KTqI/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Narrativa documental com abordagem sensível e cinematográfica.",
  },

  // DVD / AUDIOVISUAL
  {
    id: 8,
    title: "Ianzinho e o Comandante - Audiovisual Upgrade",
    category: "DVD / Audiovisual",
    youtubeId: "gynYUbyEhJE",
    youtubeUrl: "https://www.youtube.com/watch?v=gynYUbyEhJE",
    image: "https://img.youtube.com/vi/gynYUbyEhJE/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Produção musical com estética cinematográfica e alta qualidade técnica.",
  },
  {
    id: 9,
    title: "Bruninho Soares - Audiovisual Sem Limites Para Sofrer",
    category: "DVD / Audiovisual",
    youtubeId: "cOoskMyutr0",
    youtubeUrl: "https://www.youtube.com/watch?v=cOoskMyutr0",
    image: "https://img.youtube.com/vi/cOoskMyutr0/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Registro completo com direção e linguagem audiovisual moderna.",
  },

  // CASAMENTOS
  {
    id: 10,
    title: "Casamento - Wilke e Natália",
    category: "Casamentos",
    youtubeId: "l9TSMg7o31Y",
    youtubeUrl: "https://www.youtube.com/watch?v=l9TSMg7o31Y",
    image: "https://img.youtube.com/vi/l9TSMg7o31Y/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Filme emocional com foco em storytelling e momentos autênticos.",
  },

  // VIDEOCLIPES
  {
    id: 11,
    title: "Cassio e Paulinho - P do Pecado",
    category: "Videoclipes",
    youtubeId: "9JVJHRquVKs",
    youtubeUrl: "https://www.youtube.com/watch?v=9JVJHRquVKs",
    image: "https://img.youtube.com/vi/9JVJHRquVKs/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Videoclipe com narrativa visual marcante e direção criativa.",
  },
  {
    id: 12,
    title: "Cassio e Paulinho - A Putaria",
    category: "Videoclipes",
    youtubeId: "xnmp2kBbY8w",
    youtubeUrl: "https://www.youtube.com/watch?v=xnmp2kBbY8w",
    image: "https://img.youtube.com/vi/xnmp2kBbY8w/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Produção com estética moderna e ritmo dinâmico.",
  },
  {
    id: 13,
    title: "Cassio e Paulinho - Mar de Rosas",
    category: "Videoclipes",
    youtubeId: "22UOwKAtEcc",
    youtubeUrl: "https://www.youtube.com/watch?v=22UOwKAtEcc",
    image: "https://img.youtube.com/vi/22UOwKAtEcc/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Clipe com narrativa emocional e estética refinada.",
  },
  {
    id: 14,
    title: "Cassio e Paulinho - Pode Chegar",
    category: "Videoclipes",
    youtubeId: "5wuAacAf-cw",
    youtubeUrl: "https://www.youtube.com/watch?v=5wuAacAf-cw",
    image: "https://img.youtube.com/vi/5wuAacAf-cw/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Direção criativa com foco em performance e energia.",
  },
  {
    id: 15,
    title: "Cássio e Paulinho - Tubarões",
    category: "Videoclipes",
    youtubeId: "InUBE0ey2ks",
    youtubeUrl: "https://www.youtube.com/watch?v=InUBE0ey2ks",
    image: "https://img.youtube.com/vi/InUBE0ey2ks/maxresdefault.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Videoclipe com estética forte e identidade visual marcante.",
  },
  {
    id: 16,
    title: "Deivison Ferraz - Ainda Não é o Fim",
    category: "Videoclipes",
    youtubeId: "lSYo1eUEPPU",
    youtubeUrl: "https://www.youtube.com/watch?v=lSYo1eUEPPU",
    image: "public/images/devison_ferraz_ainda_nao_e_o_fim.jpg",
    videoType: "landscape",
    year: "2025",
    description: "Videoclipe com narrativa emocional e estética refinada.",
  },
];

export const landingData = {
  badge: "Captação de Leads com Vídeo Profissional",
  headline:
    "Transforme visitantes em clientes com uma landing page e vídeos que vendem sua empresa.",
  subheadline:
    "Criamos páginas de alta conversão com direção visual forte, captação profissional e proposta clara para campanhas, lançamentos, eventos e captação de leads.",
  ctaLabel: "Quero receber uma proposta",
  heroImage: "/images/landing-hero.jpg",
  authorityItems: [
    "+ de 50 produções entregues",
    "Atendimento ágil",
    "Captação e edição profissional",
    "Projetos para social, institucional e eventos",
  ],
  benefits: [
    {
      title: "Headline que prende atenção",
      description:
        "Mensagem clara, voltada para dor, desejo e posicionamento da sua oferta.",
    },
    {
      title: "Imagem e vídeo com valor percebido",
      description:
        "Seu serviço apresentado com linguagem visual premium e mais confiança na decisão de compra.",
    },
    {
      title: "Formulário objetivo",
      description:
        "Captação com poucos campos para reduzir atrito e aumentar conversão.",
    },
    {
      title: "Prova social real",
      description:
        "Depoimentos, resultados, bastidores e cases para reduzir objeções.",
    },
    {
      title: "Oferta clara",
      description:
        "Planos, entregáveis e CTA bem definidos para conduzir a próxima ação.",
    },
    {
      title: "Página pronta para tráfego pago",
      description:
        "Estrutura pensada para campanhas de Meta Ads, Google Ads e divulgação direta.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Briefing estratégico",
      description:
        "Entendemos sua oferta, público, objetivo da campanha e diferenciais do serviço.",
    },
    {
      step: "02",
      title: "Roteiro visual e página",
      description:
        "Definimos mensagem, estrutura da landing, direção criativa e captação necessária.",
    },
    {
      step: "03",
      title: "Produção e edição",
      description:
        "Executamos fotos, vídeos, cortes e montagem da página com foco em conversão.",
    },
    {
      step: "04",
      title: "Publicação e otimização",
      description:
        "Entregamos a página pronta para rodar campanha e captar contatos qualificados.",
    },
  ],
  testimonials: [
    {
      name: "Lucia Pereira",
      role: "Clínica Vitalis",
      quote:
        "Os vídeos da Ohanote elevaram nossa percepção de marca e ajudaram muito na apresentação dos serviços.",
    },
    {
      name: "Marcos Silva",
      role: "Empresa de Eventos",
      quote:
        "A entrega foi rápida, profissional e com um acabamento visual muito acima do que esperávamos.",
    },
    {
      name: "Juliana Costa",
      role: "Negócio local",
      quote:
        "A página ficou clara, bonita e muito mais alinhada com o nível do serviço que vendemos.",
    },
  ],
  offers: [
    {
      name: "Essencial",
      price: "Sob consulta",
      description:
        "Landing de captação com estrutura enxuta e visual profissional.",
      items: [
        "Headline estratégica",
        "Formulário de captação",
        "Seção de benefícios",
        "CTA otimizado",
      ],
    },
    {
      name: "Performance",
      price: "Sob consulta",
      description:
        "Página mais robusta com prova social, vídeos e maior profundidade de persuasão.",
      featured: true,
      items: [
        "Tudo do Essencial",
        "Vídeo principal",
        "Depoimentos / cases",
        "Oferta estruturada",
        "FAQ",
      ],
    },
    {
      name: "Premium",
      price: "Sob consulta",
      description:
        "Projeto completo com captação premium, direção visual e maior personalização.",
      items: [
        "Tudo do Performance",
        "Captação dedicada",
        "Mais blocos de conteúdo",
        "Ajustes finos para campanha",
      ],
    },
  ],
  faqs: [
    {
      question: "Essa landing page serve para tráfego pago?",
      answer:
        "Sim. A estrutura é pensada para campanhas e para reduzir distrações, facilitando a conversão do visitante.",
    },
    {
      question: "Vocês produzem os vídeos e a página?",
      answer:
        "Sim. Podemos unir estratégia, captação, edição e montagem da landing page em um único projeto.",
    },
    {
      question: "Posso usar com WhatsApp e formulário?",
      answer:
        "Sim. A página pode ter formulário, botão de WhatsApp ou os dois, dependendo da sua operação comercial.",
    },
    {
      question: "Essa estrutura funciona para empresas locais?",
      answer:
        "Sim. É especialmente útil para serviços locais, clínicas, especialistas, eventos, cursos e negócios que dependem de apresentação forte.",
    },
  ],
};

export const testimonials = [
  {
    testimonial:
      "A Hanote conseguiu traduzir exatamente o posicionamento que queríamos passar. O vídeo elevou a percepção da nossa marca e melhorou nossa apresentação digital.",
    name: "Maria Silva",
  },
  {
    testimonial:
      "Além da qualidade visual, o processo foi seguro e bem dirigido do começo ao fim.",
    name: "João Pereira",
  },
  {
    testimonial:
      "O material final não serviu só como registro; virou peça de comunicação para a marca.",
    name: "Ana Costa",
  },
];
