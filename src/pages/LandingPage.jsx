export default function HanoteLandingV2() {
  const config = {
    brandName: "Hanote",
    niche:
      "Profissionais liberais: clínicas, arquitetos, advogados e especialistas que precisam atrair mais clientes com autoridade",
    whatsappNumber: "5519996678922",
    whatsappLabel: "(19) 99667-8922",
    formEndpoint: "https://formspree.io/f/xzdygrnq",
    primaryCta: "Quero receber uma proposta",
  };

  const realCases = [
    {
      title: "Psicóloga",
      tag: "Conteúdo recorrente e posicionamento",
      result:
        "Produzimos conteúdo para o perfil e dobramos a quantidade de seguidores no primeiro mês, além de triplicar o engajamento e gerar mais clientes clínicos.",
    },
    {
      title: "Loja de móveis",
      tag: "Campanhas com foco em venda",
      result:
        "Desenvolvemos campanhas em vídeo e aumentamos em 30% o faturamento em comparação com campanhas anteriores.",
    },
    {
      title: "Restaurante",
      tag: "Conteúdo para reconhecimento local",
      result:
        "Criamos materiais que fortaleceram o reconhecimento da marca localmente e contribuíram para aumentar o faturamento por delivery.",
    },
  ];

  const services = [
    {
      title: "Conteúdo recorrente",
      description:
        "Reels e vídeos estratégicos para manter sua marca ativa, relevante e presente na mente do cliente ideal.",
    },
    {
      title: "Vídeos institucionais",
      description:
        "Apresente sua marca com clareza, autoridade e uma imagem profissional que gera confiança desde o primeiro contato.",
    },
    {
      title: "Vídeos para campanhas",
      description:
        "Materiais pensados para atrair leads, fortalecer campanhas e aumentar a taxa de resposta do seu comercial.",
    },
  ];

  const steps = [
    "Entendemos seu momento, seu posicionamento e o perfil do cliente que você quer atrair.",
    "Definimos a melhor estratégia de conteúdo e vídeo para gerar interesse e confiança.",
    "Produzimos um material com estética forte e função comercial.",
    "Você recebe um ativo pronto para atrair mais contatos e oportunidades reais.",
  ];

  const benefits = [
    "Mais autoridade para sua marca",
    "Mais confiança no primeiro contato",
    "Mais clareza no posicionamento",
    "Mais chances de transformar visitas em oportunidades",
  ];

  const faqs = [
    {
      q: "A Hanote atende apenas empresas grandes?",
      a: "Não. Atendemos principalmente profissionais liberais e negócios locais que querem crescer com uma comunicação mais profissional, estratégica e forte visualmente.",
    },
    {
      q: "Vocês fazem só a gravação?",
      a: "Não. O trabalho envolve visão estratégica, direção, captação e entrega orientada para posicionamento, autoridade e geração de oportunidades.",
    },
    {
      q: "Como funciona o orçamento?",
      a: "Após o envio do formulário, entramos em contato para entender o seu cenário e indicar a melhor solução para o seu objetivo.",
    },
  ];

  const painPoints = [
    "Perfil sem consistência visual",
    "Baixa percepção de valor",
    "Pouca diferenciação frente à concorrência",
    "Dificuldade de transformar atenção em agendamento ou orçamento",
  ];

  const practicalChanges = [
    "Sua marca transmite mais autoridade",
    "Você atrai contatos mais qualificados",
    "Seu posicionamento fica mais claro",
    "O conteúdo deixa de ser só estético e passa a ter função estratégica",
  ];

  return (
    <main className="min-h-screen bg-[#111111] text-[#f3f5f7]">
      <section className="relative overflow-hidden border-b border-[#8b919c]/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,157,245,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_20%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#009df5]/30 bg-[#009df5]/10 px-4 py-1 text-sm font-medium text-[#009df5]">
              Produção estratégica para profissionais liberais
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Sua marca não precisa de mais vídeos.
              <span className="block text-[#009df5]">
                Precisa de vídeos que geram leads.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#f3f5f7]/75">
              A {config.brandName} cria vídeos e conteúdos estratégicos para
              profissionais e empresas que querem atrair mais contatos,
              fortalecer sua autoridade e transformar atenção em oportunidade
              comercial.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center rounded-2xl bg-[#009df5] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#009df5]/20 transition hover:bg-[#1ab0ff]"
              >
                {config.primaryCta}
              </a>
              <a
                href="#cases"
                className="inline-flex items-center justify-center rounded-2xl border border-[#8b919c]/25 bg-[#f3f5f7]/4 px-6 py-4 text-base font-semibold text-white transition hover:bg-[#f3f5f7]/8"
              >
                Ver resultados
              </a>
            </div>
          </div>

          <div id="formulario" className="lg:justify-self-end">
            <div className="rounded-[30px] border border-[#8b919c]/20 bg-[#0b2239]/45 p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-8">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.18em] text-[#009df5]">
                  Captação de leads
                </p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Receba uma proposta pensada para o seu negócio.
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#f3f5f7]/70">
                  Preencha o formulário e a Hanote entra em contato para entender
                  seu cenário, seu posicionamento e indicar o melhor formato para
                  atrair mais clientes.
                </p>
              </div>

              <form action={config.formEndpoint} method="POST" className="grid gap-4">
                <input
                  type="hidden"
                  name="_subject"
                  value={`Novo lead do site - ${config.brandName}`}
                />
                <input type="hidden" name="segmento" value={config.niche} />
                <input type="hidden" name="origem" value="Landing Page Hanote" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-[#f3f5f7]/75">
                    Primeiro nome
                    <input
                      name="nome"
                      type="text"
                      placeholder="Como você se chama?"
                      className="rounded-2xl border border-[#8b919c]/20 bg-[#111111]/55 px-4 py-4 text-white outline-none transition placeholder:text-[#8b919c]/70 focus:border-[#009df5]"
                      required
                    />
                  </label>

                  <label className="grid gap-2 text-sm text-[#f3f5f7]/75">
                    WhatsApp
                    <input
                      name="whatsapp"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="rounded-2xl border border-[#8b919c]/20 bg-[#111111]/55 px-4 py-4 text-white outline-none transition placeholder:text-[#8b919c]/70 focus:border-[#009df5]"
                      required
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm text-[#f3f5f7]/75">
                  E-mail
                  <input
                    name="email"
                    type="email"
                    placeholder="voce@empresa.com"
                    className="rounded-2xl border border-[#8b919c]/20 bg-[#111111]/55 px-4 py-4 text-white outline-none transition placeholder:text-[#8b919c]/70 focus:border-[#009df5]"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-[#f3f5f7]/75">
                    Área de atuação
                    <select
                      name="area_atuacao"
                      className="rounded-2xl border border-[#8b919c]/20 bg-[#111111]/55 px-4 py-4 text-white outline-none transition focus:border-[#009df5]"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecione sua área
                      </option>
                      <option value="clinica">Clínica / saúde</option>
                      <option value="arquitetura">Arquitetura / interiores</option>
                      <option value="advocacia">Advocacia</option>
                      <option value="estetica">Estética / beleza</option>
                      <option value="consultoria">Consultoria / serviços</option>
                      <option value="outro">Outro</option>
                    </select>
                  </label>

                  <label className="grid gap-2 text-sm text-[#f3f5f7]/75">
                    Principal objetivo
                    <select
                      name="objetivo"
                      className="rounded-2xl border border-[#8b919c]/20 bg-[#111111]/55 px-4 py-4 text-white outline-none transition focus:border-[#009df5]"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        O que você quer gerar?
                      </option>
                      <option value="mais_leads">Mais leads</option>
                      <option value="mais_autoridade">Mais autoridade</option>
                      <option value="mais_vendas">Mais vendas</option>
                      <option value="melhorar_redes">Melhorar redes sociais</option>
                      <option value="anuncios">Criar campanhas e anúncios</option>
                    </select>
                  </label>
                </div>

                <label className="grid gap-2 text-sm text-[#f3f5f7]/75">
                  O que faz mais sentido para você hoje?
                  <select
                    name="interesse"
                    className="rounded-2xl border border-[#8b919c]/20 bg-[#111111]/55 px-4 py-4 text-white outline-none transition focus:border-[#009df5]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Escolha uma opção
                    </option>
                    <option value="conteudo_recorrente">Conteúdo recorrente</option>
                    <option value="videos_institucionais">Vídeos institucionais</option>
                    <option value="videos_para_anuncios">Vídeos para anúncios</option>
                    <option value="estrategia_completa">
                      Quero entender a melhor estratégia
                    </option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm text-[#f3f5f7]/75">
                  Resuma seu momento atual
                  <textarea
                    name="mensagem"
                    rows={4}
                    placeholder="Ex.: Quero atrair mais clientes, melhorar meu posicionamento e produzir conteúdo com mais frequência."
                    className="rounded-2xl border border-[#8b919c]/20 bg-[#111111]/55 px-4 py-4 text-white outline-none transition placeholder:text-[#8b919c]/70 focus:border-[#009df5]"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[#009df5] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#009df5]/20 transition hover:bg-[#1ab0ff]"
                >
                  {config.primaryCta}
                </button>

                <a
                  href={`https://wa.me/${config.whatsappNumber}?text=Olá! Vim pela landing page da ${config.brandName} e quero solicitar um orçamento.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#8b919c]/20 bg-[#f3f5f7]/[0.04] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#f3f5f7]/[0.08]"
                >
                  Falar no WhatsApp
                </a>

                <p className="text-sm leading-6 text-[#8b919c]/80">
                  Resposta rápida para entender seu cenário e indicar o formato ideal
                  para o seu negócio.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#009df5]">
              O problema
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Muitos profissionais até aparecem.
              <span className="block text-[#f3f5f7]/65">
                Mas poucos realmente convencem.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f3f5f7]/70">
              Sem uma comunicação forte, seu serviço passa despercebido, perde
              autoridade e desperdiça oportunidades. O cliente vê, mas não sente
              confiança suficiente para avançar.
            </p>
          </div>

          <div className="grid gap-4">
            {painPoints.map((pain) => (
              <div
                key={pain}
                className="rounded-2xl border border-[#8b919c]/20 bg-[#f3f5f7]/[0.04] px-5 py-4 text-[#f3f5f7]/80"
              >
                {pain}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cases"
        className="border-y border-[#8b919c]/20 bg-[#f3f5f7]/[0.03]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#009df5]">
              A solução
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              A Hanote transforma autoridade em comunicação que atrai,
              posiciona e vende.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#f3f5f7]/70">
              Criamos materiais pensados para posicionar sua marca, gerar
              confiança e abrir mais portas para novos contatos, agendamentos e
              oportunidades.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {realCases.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-[#8b919c]/20 bg-[#0b2239]/35 p-6 shadow-xl shadow-black/20"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-[#009df5]">
                  {item.tag}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#f3f5f7]/70">
                  {item.result}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#009df5]">
              Soluções
            </span>
            <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
              Formatos que ajudam sua marca pessoal ou empresa a atrair,
              posicionar e converter melhor.
            </h3>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[24px] border border-[#8b919c]/20 bg-[#0b2239]/35 p-6 shadow-xl shadow-black/20"
              >
                <div className="mb-4 h-12 w-12 rounded-2xl bg-[#009df5]/15" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-[#f3f5f7]/70">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#009df5]">
              Como funciona
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Processo simples, estratégico e pensado para gerar resultado.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#f3f5f7]/70">
              Você não precisa entender de produção. Precisa de um parceiro que
              conduza sua comunicação com clareza e intenção comercial.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-2xl border border-[#8b919c]/20 bg-[#f3f5f7]/[0.04] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#009df5] font-semibold text-white">
                  {index + 1}
                </div>
                <p className="pt-1 leading-7 text-[#f3f5f7]/80">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#8b919c]/20 bg-[linear-gradient(180deg,rgba(0,157,245,0.08),rgba(255,255,255,0.02))]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#009df5]">
                Diferencial
              </span>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Mais que uma produtora.
                <span className="block text-[#009df5]">
                  Uma parceira estratégica para fortalecer sua autoridade e
                  atrair mais clientes.
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f3f5f7]/75">
                A Hanote pensa em percepção,
                posicionamento, presença e conversão. Cada material nasce para
                fortalecer sua imagem, aumentar confiança e gerar vendas.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#8b919c]/20 bg-[#0b2239]/35 p-8 shadow-2xl shadow-black/30">
              <p className="text-sm uppercase tracking-[0.18em] text-[#8b919c]/80">
                O que muda na prática
              </p>
              <div className="mt-6 space-y-4">
                {practicalChanges.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#8b919c]/20 bg-[#f3f5f7]/[0.04] px-5 py-4 text-[#f3f5f7]/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#8b919c]/20">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#009df5]">
              Perguntas frequentes
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Dúvidas comuns antes de solicitar um orçamento
            </h2>
          </div>

          <div className="mt-12 grid gap-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-[#8b919c]/20 bg-[#f3f5f7]/[0.04] p-6"
              >
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-3 leading-7 text-[#f3f5f7]/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 md:px-10">
        <div className="rounded-[28px] border border-[#8b919c]/20 bg-[#f3f5f7]/[0.04] p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#009df5]">
                Contato direto
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Prefere falar direto no WhatsApp?
              </h3>
              <p className="mt-2 text-[#f3f5f7]/65">
                Atendimento comercial da {config.brandName}: {config.whatsappLabel}
              </p>
            </div>

            <a
              href={`https://wa.me/${config.whatsappNumber}?text=Olá! Quero entender como a ${config.brandName} pode ajudar minha empresa.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#009df5] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#009df5]/20 transition hover:bg-[#1ab0ff]"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#8b919c]/20 bg-[#111111]/55">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[#8b919c]/80 md:px-10 md:flex-row md:items-center md:justify-between">
          <p>
            Hanote — produção estratégica para marcas e profissionais que querem
            crescer.
          </p>
          <a
            href="#formulario"
            className="text-[#f3f5f7]/70 transition hover:text-[#009df5]"
          >
            Solicitar contato
          </a>
        </div>
      </footer>
    </main>
  );
}
