# PROMPT — CONSTRUÇÃO DA LANDING PAGE DO KIT CONSULTÓRIO TEEN

> Cole este arquivo inteiro no Claude Code dentro da pasta do projeto. Ele contém contexto, stack, design system, estrutura, copy literal de cada seção e diretrizes técnicas. Construa a landing page seguindo este documento como fonte da verdade.

---

## 1. CONTEXTO DO PROJETO

Você vai construir uma **landing page de vendas (single-page)** para um infoproduto chamado **Kit Consultório Teen**.

**O que é o produto:** uma biblioteca de +80 recursos visuais terapêuticos prontos pra aplicar, voltados para psicólogos brasileiros que atendem adolescentes. Os recursos são organizados por demanda (ansiedade, autoestima, redes sociais, conflito com os pais, identidade, regulação emocional, vestibular/futuro, relacionamentos). O diferencial é serem feitos especificamente para adolescente — não material infantil adaptado.

**Quem compra:** psicóloga (predominantemente mulher, 25-45 anos) que atende adolescente no consultório, sofre com a dificuldade de fazer o paciente abrir, e não encontra material adequado no mercado (quase tudo é feito pra criança).

**Linha de produtos do mesmo criador:** já existe o "Kit Consultório Lúdico" (infantil) que vendeu para ~918 clientes. Este novo kit é a versão para adolescente. A página segue a mesma estrutura de conversão da página do Lúdico, mas com identidade visual deliberadamente oposta (ver seção 3) para sinalizar "isso não é coisa de criança".

**Página de referência estrutural (visite para entender as seções):** https://kitconsultorioludico.vercel.app
(Use só como referência de **estrutura e mecânica de conversão**. NÃO copie a identidade visual — ela é pastel/infantil e queremos o oposto.)

---

## 2. STACK TÉCNICO

- **Framework:** Next.js 14 (App Router)
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Componentes:** shadcn/ui (use Accordion para FAQ, Button para CTAs, Dialog para exit popup, Card para os bônus e planos)
- **Ícones:** lucide-react
- **Fontes:** Anton (display) + Inter (body) — carregar via `next/font/google`
- **Deploy alvo:** Vercel
- **TypeScript:** sim

Inicializar o projeto se ainda não existir. Caso já exista, adaptar à estrutura presente.

---

## 3. DESIGN SYSTEM

### Filosofia visual
**Anti-infantil, sofisticado, moderno, com leve agressividade editorial.** Imagine um cruzamento entre uma revista de design contemporânea e uma marca clínica premium. Espaço em branco generoso, hierarquia tipográfica forte, contraste alto. Nada de gradientes coloridos suaves, nada de ilustrações fofas, nada de bordas arredondadas grandes. Cantos moderadamente arredondados (rounded-lg/rounded-xl no máximo), bordas finas, animações sutis.

### Paleta (configurar em `tailwind.config.ts` como cores customizadas)

```
background:    #0F0F12   (off-black quente, base da página)
surface-1:     #18181C   (seções alternadas, cards leves)
surface-2:     #22222A   (cards de bônus, plano destacado, CTA boxes)
border:        #2A2A33   (bordas sutis)
text-primary:  #F5F5F0   (off-white quente, texto principal)
text-muted:    #9CA3AF   (texto secundário, sub-headlines)
text-subtle:   #6B7280   (textos auxiliares, captions)
accent:        #FF5A1F   (laranja vibrante — CTAs primários, destaques, headlines de impacto)
accent-hover:  #E64A0E   (hover do accent)
highlight:     #C4F542   (verde-lima — usado APENAS no plano "Completo" para destacar)
success:       #4ADE80   (selo de garantia)
```

### Tipografia

```
Display (headlines de seção, números grandes): Anton, sans-serif
  - Letter-spacing levemente negativo (-0.02em)
  - Line-height apertado (0.95 a 1.05)
  - Uso em uppercase nos títulos de seção
  
Body (parágrafos, bullets, sub-headlines): Inter, sans-serif
  - Pesos usados: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
  - Line-height confortável (1.5 a 1.7)
```

### Escala tipográfica (mobile-first, escalando no desktop via `md:`/`lg:`)

```
Hero headline (Anton):     text-4xl / md:text-6xl / lg:text-7xl
Section titles (Anton):    text-3xl / md:text-5xl
Sub-headlines (Inter):     text-lg  / md:text-xl
Body paragraph (Inter):    text-base / md:text-lg
Body small (Inter):        text-sm
Captions (Inter):          text-xs uppercase tracking-wider
```

### Padding/spacing

- Padding lateral mobile: `px-5`
- Padding lateral desktop: `px-8` ou `px-12`
- Espaçamento vertical entre seções: `py-16 md:py-24`
- Largura máxima de conteúdo: `max-w-6xl mx-auto`
- Em seções de copy longo (dor, transformação): `max-w-3xl`

### Princípios de UI

- **Botões primários:** background `accent`, texto preto, peso 700, padding `px-8 py-4`, cantos `rounded-md`. Hover: leve scale-up (1.02) + sombra.
- **Botões secundários (CTA de bônus, FAQ):** background `surface-2`, borda `border`, texto `text-primary`.
- **Cards:** background `surface-1` ou `surface-2`, borda 1px `border`, cantos `rounded-xl`, padding generoso.
- **Divisores:** linha 1px com cor `border`, ou separação por mudança de background entre seções.
- **Hover em links/cards:** transição de 200-300ms.

---

## 4. ANIMAÇÕES (Framer Motion)

Usar com moderação — só pra reforçar hierarquia, não pra enfeitar.

- **Fade-in + sutil translate-y** ao entrar no viewport (delay escalonado em listas)
- **Stagger** nos bullets da seção de dor e transformação
- **Hover scale** nos cards de plano (1.02) e botões (1.02)
- **Sticky CTA mobile** na parte inferior depois que o usuário rolar 50% da página
- **NÃO usar:** parallax exagerado, animações de rotação, bounce, confetes ou qualquer coisa lúdica.

---

## 5. ESTRUTURA DA PÁGINA (ordem fixa das seções)

1. Hero
2. Reconhecimento do problema (gancho emocional curto)
3. Apresentação do produto (o que é + diferencial)
4. Galeria / prova visual (mockups)
5. Identificação com a dor (a seção que mais converte)
6. Transformação (o "depois")
7. Custo da inação (breve)
8. Stack do produto + bônus
9. Prova social (placeholder)
10. Escada de preço (Básico vs Completo)
11. Garantia
12. FAQ
13. Footer minimalista
14. Exit-intent popup

Sticky CTA no mobile aparece a partir da seção 5.

---

## 6. COPY LITERAL DE CADA SEÇÃO

> Use exatamente este texto. Pode quebrar linhas e parágrafos como achar melhor visualmente, mas não reescreva o conteúdo.

### 6.1 — HERO

**Caption (cima, pequena, uppercase, accent):**
PARA PSICÓLOGAS QUE ATENDEM ADOLESCENTE

**Headline (Anton, gigante):**
+80 recursos visuais organizados por demanda pra fazer o adolescente fechado se abrir — sem nada de cara de criança.

**Sub-headline (Inter, abaixo):**
Material pronto pra aplicar na sessão, com a linguagem que o seu paciente adolescente respeita.

**CTA primário:**
QUERO MEU KIT AGORA

**Micro-prova (logo abaixo do CTA, em texto pequeno):**
Mais de 900 psicólogas já confiam nos Kits Consultório.

**Visual ao lado/abaixo do texto:** placeholder de mockup do produto (use um container `aspect-square` ou `aspect-[4/5]` com background `surface-1`, borda, e o texto "MOCKUP DO PRODUTO" no centro — será substituído depois).

---

### 6.2 — RECONHECIMENTO DO PROBLEMA

**Título da seção (Anton, médio):**
SE VOCÊ ATENDE ADOLESCENTE, JÁ ENTENDEU.

**Parágrafo (Inter, max-w-2xl):**
Ele não chega de braços abertos. Chega resistente, no celular, respondendo "sei lá" pra tudo. Foi arrastado pelos pais e acha terapia "coisa de doido". E quase tudo que existe pra trabalhar com ele... foi feito pra criança.

**Linha final, destacada (accent):**
Aqui você não vai precisar mais improvisar.

---

### 6.3 — APRESENTAÇÃO DO PRODUTO

**Caption:**
O QUE É O KIT CONSULTÓRIO TEEN

**Título:**
+80 recursos visuais. Organizados por demanda. Prontos pra você aplicar na próxima sessão.

**Parágrafo de abertura:**
Uma biblioteca completa pensada do zero pra quem atende adolescente. Cartas de conversa, dilemas, fichas visuais, materiais projetivos maduros, registros TCC adaptados — tudo com a estética que o seu paciente respeita.

**Três cards lado a lado (grid 1 col mobile, 3 col desktop):**

**Card 1**
Ícone: lucide `LayoutGrid`
Título: Organizado por demanda
Texto: Ansiedade, autoestima, redes sociais, conflito com os pais, identidade, regulação emocional, futuro, relacionamentos. Você abre, escolhe a demanda, aplica.

**Card 2**
Ícone: lucide `Eye`
Título: 100% visual e indireto
Texto: O adolescente não abre pela porta da frente. Cada recurso foi pensado pra ele falar pela via lateral — sem se sentir interrogado nem infantilizado.

**Card 3**
Ícone: lucide `Zap`
Título: Pronto pra aplicar
Texto: Sem precisar adaptar, recortar ou inventar. Você imprime (ou usa na tela) e tem um material de sessão profissional na mão.

---

### 6.4 — GALERIA / PROVA VISUAL

**Caption:**
COMO É O MATERIAL POR DENTRO

**Título:**
Material com a cara do seu paciente. Não com a cara da estante infantil.

**Sub-texto:**
Veja alguns exemplos do que vem dentro do kit:

**Grid de 6 mockups (2 col mobile, 3 col desktop):** cada um é um placeholder `aspect-[4/5]` com `surface-1`, borda e texto interno descritivo. Use estes labels:

1. "BARALHO DE CONVERSA — ANSIEDADE"
2. "DILEMAS — IDENTIDADE"
3. "FICHA TCC — PENSAMENTO/EMOÇÃO"
4. "REDES SOCIAIS — COMPARAÇÃO"
5. "AUTOESTIMA — IMAGEM"
6. "CONFLITO COM OS PAIS"

**Caption abaixo do grid (text-muted):**
Mockups ilustrativos. O kit final contém +80 recursos no padrão visual acima.

---

### 6.5 — IDENTIFICAÇÃO COM A DOR (SEÇÃO MAIS IMPORTANTE)

**Título (Anton, grande):**
SE VOCÊ JÁ VIVEU ALGUMA DESSAS CENAS, ESSE KIT FOI FEITO PRA VOCÊ.

**Sub-título (Inter, muted):**
Marque mentalmente quantas você reconhece.

**Lista de 6 itens (cada item: ícone `Check` em accent + texto Inter; com stagger animation entrando no viewport):**

1. Ele senta, cruza os braços e responde "sei lá" pra qualquer pergunta — e a sessão inteira passa sem você conseguir chegar nele.
2. Você pega um material da sua estante e percebe, no segundo seguinte, que ele vai achar infantil demais — e desiste de usar na hora.
3. Os pais te ligam preocupados perguntando "tá funcionando?" — e você não sabe exatamente o que responder.
4. Ele fica no celular a sessão inteira, e você não sabe se chama atenção (e ele se fecha mais) ou se finge que não vê.
5. Você tenta uma técnica e ele responde com deboche ou aquele olhar de quem já passou da idade pra "essas coisas".
6. Você quer trabalhar ansiedade, autoestima, comparação nas redes — e percebe que todo material que você tem foi feito pra criança.

**Fechamento da seção (box destacado com background `surface-2`, borda, padding generoso):**

Se você marcou três ou mais, não é falta de competência. É falta de material certo.
Quase tudo que existe foi feito pra criança — e você foi obrigada a improvisar adaptando.
O Kit Consultório Teen muda isso: foi feito desde o primeiro recurso pro adolescente que você atende.

---

### 6.6 — TRANSFORMAÇÃO

**Caption:**
COMO VAI SER A PRÓXIMA SESSÃO

**Título:**
Imagina chegar na sessão e:

**Lista (mesma estrutura visual da seção de dor, mas com ícone `ArrowRight` em accent):**

1. Abrir uma pasta organizada por demanda e em 30 segundos saber exatamente o que aplicar.
2. Entregar um material que ele olha e pensa "ok, isso aqui é diferente do que minha mãe me mostrava".
3. Ver ele começar a falar pela via lateral — sem perceber que tá sendo "analisado".
4. Responder com segurança quando os pais perguntam "tá funcionando?" — porque você tem registro do que tá trabalhando.
5. Atender adolescente com a mesma firmeza com que você atende criança.
6. Parar de improvisar. Começar a aplicar.

---

### 6.7 — CUSTO DA INAÇÃO (BREVE)

**Box em `surface-2`, borda accent, padding generoso, max-w-3xl:**

**Título (Anton, médio):**
QUANTO TEMPO VOCÊ AINDA VAI ADAPTAR MATERIAL INFANTIL?

**Parágrafo:**
Cada sessão que você entra sem material adequado é uma sessão em que o seu paciente pode te ver como "mais uma adulta que não entende". E adolescente que se sente não-entendido na segunda sessão, raramente volta pra terceira.

---

### 6.8 — STACK DO PRODUTO + BÔNUS

**Caption:**
O QUE VOCÊ RECEBE

**Título:**
Tudo que vem no kit hoje:

**Lista vertical de itens (cada um: ícone `Check` em accent, nome do item bold, descrição curta abaixo):**

**Produto principal**
- **+80 recursos visuais terapêuticos** organizados por 8 demandas adolescentes — *valor R$197*

**Bônus inclusos (com tag "BÔNUS GRÁTIS" em accent ao lado):**

- **Bônus 1 — Guia de Primeira Sessão com Adolescente**
  O roteiro de 8 passos pra fazer ele falar mais do que "sei lá" no primeiro encontro.
  *valor R$47 — grátis*

- **Bônus 2 — Cartilha "Conversando com os Pais"**
  Como conduzir a devolutiva familiar sem expor o adolescente e sem perder a confiança dele.
  *valor R$37 — grátis*

- **Bônus 3 — Banco de Frases pra Destravar a Sessão**
  60 perguntas e provocações testadas pra usar quando o adolescente trava ou responde monossilábico.
  *valor R$27 — grátis*

**Linha de ancoragem (Inter, grande, com strikethrough no número):**
~~Valor total: R$308~~

**Linha seguinte (Anton, accent):**
Hoje por R$37,90.

> **Observação para o dev:** os bônus acima são placeholders estratégicos. O texto fica neste formato; o nome/preço do bônus pode ser ajustado posteriormente sem mexer no layout.

---

### 6.9 — PROVA SOCIAL (PLACEHOLDER)

**Caption:**
O QUE DIZEM AS PSICÓLOGAS QUE JÁ APLICARAM

**Título:**
Quem já testou conta:

**Grid de 3 cards de depoimento (1 col mobile, 3 col desktop):**

Cada card tem:
- Avatar circular (placeholder `surface-2` com inicial)
- Nome (bold)
- Sub-texto: "Psicóloga, CRP XX/XXXXX, atende [demanda]"
- Texto do depoimento entre aspas, em itálico
- Star rating (5 estrelas em accent)

**Placeholder de texto dos 3 depoimentos:**

Card 1: "[DEPOIMENTO 1 — substituir após beta]"
Card 2: "[DEPOIMENTO 2 — substituir após beta]"
Card 3: "[DEPOIMENTO 3 — substituir após beta]"

> **Observação para o dev:** deixar estrutura pronta com comentário no código indicando onde substituir os depoimentos reais.

---

### 6.10 — ESCADA DE PREÇO (DECOY)

**Caption:**
ESCOLHA O SEU ACESSO

**Título (Anton, centralizado):**
QUAL SE ENCAIXA MELHOR NA SUA REALIDADE?

**Dois cards lado a lado (1 col mobile, 2 col desktop). O segundo é o destacado.**

**CARD 1 — BÁSICO (visual sóbrio, sem highlight)**

Tag superior: "BÁSICO"
Preço: R$19,90
Sub-preço: "à vista"
Lista de inclusões (ícone Check em muted):
- ✓ +80 recursos visuais terapêuticos
- ✗ Guia de Primeira Sessão *(em muted/strikethrough)*
- ✗ Cartilha Conversando com os Pais *(em muted/strikethrough)*
- ✗ Banco de Frases pra Destravar *(em muted/strikethrough)*

CTA secundário (button outline): "QUERO O BÁSICO"

**CARD 2 — COMPLETO (DESTACADO — borda highlight, badge superior, leve scale)**

Badge no topo (background highlight, texto preto): "92% ESCOLHEM ESSE"
Tag: "COMPLETO"
Preço: R$37,90
Sub-preço: "à vista ou 12x de R$3,89"
Lista (todos com ícone Check em accent):
- ✓ +80 recursos visuais terapêuticos
- ✓ Bônus 1 — Guia de Primeira Sessão
- ✓ Bônus 2 — Cartilha Conversando com os Pais
- ✓ Bônus 3 — Banco de Frases pra Destravar
- ✓ Acesso vitalício
- ✓ Garantia de 15 dias

CTA primário (button accent grande): "QUERO O KIT COMPLETO"

---

### 6.11 — GARANTIA

**Layout:** ícone de escudo (lucide `Shield`) em verde success grande, ao lado de:

**Título (Anton):**
GARANTIA INCONDICIONAL DE 15 DIAS

**Parágrafo:**
Compre, baixe, use o quanto quiser nas primeiras duas semanas. Se em qualquer momento desses 15 dias você sentir que o kit não é pra você, manda um e-mail e a gente devolve cada centavo. Sem pergunta, sem burocracia, sem cara feia.

**Linha final (accent, peso medium):**
O risco é todo nosso.

---

### 6.12 — FAQ

**Caption:**
DÚVIDAS FREQUENTES

**Título (Anton):**
RESPONDENDO O QUE VOCÊ TÁ PENSANDO AGORA.

**Usar shadcn `Accordion` (type single, collapsible). 7 itens:**

**1. Esse kit serve pra atender adolescente de qualquer idade?**
Sim. Os recursos foram pensados pra faixa de 12 a 18 anos, com adaptações sugeridas em cada material pra calibrar conforme a maturidade do paciente. Adolescente de 12 e adolescente de 17 não recebem a mesma intervenção — o kit te dá a base e indica onde ajustar.

**2. Eu já tenho o Kit Consultório Lúdico. Faz sentido pegar esse também?**
Faz total. O Lúdico atende criança de 0 a 11. Esse atende dos 12 em diante. Juntos, você cobre seu caseload inteiro com material de qualidade — sem precisar improvisar quando o paciente "cresce demais" pro Lúdico.

**3. Funciona em sessão online?**
Sim. Todos os recursos foram pensados pra funcionar tanto presencial (imprime ou usa em tablet) quanto online (compartilha tela ou envia previamente). O material foi desenhado pensando nos dois cenários.

**4. Os materiais são editáveis?**
Os recursos vêm em PDF de alta resolução pra imprimir ou usar na tela. Alguns recursos têm versão editável (.docx) pra você adaptar nome do paciente e detalhes específicos — sinalizamos quais.

**5. Quanto tempo eu tenho de acesso?**
Acesso vitalício. Você baixa o kit, salva no seu computador/nuvem e usa pra sempre. Atualizações futuras do kit também vão pra quem já comprou.

**6. Posso parcelar?**
Sim. O plano Completo pode ser parcelado em até 12x de R$3,89 no cartão, ou pago à vista por R$37,90 (Pix ou cartão).

**7. E se eu não gostar?**
15 dias de garantia incondicional. Manda um e-mail, devolvemos 100% do valor. Sem perguntas.

---

### 6.13 — FOOTER

Footer minimalista. 1 linha:
- Esquerda: "Kit Consultório Teen © 2026"
- Direita: links — "Política de Privacidade" / "Termos" / "Contato"

Cor: `surface-1` no background, `text-subtle` no texto.

---

### 6.14 — EXIT-INTENT POPUP

Trigger: quando o cursor sai pela parte superior da janela (desktop) OU depois de 60 segundos sem scroll no mobile.

**Modal centralizado, fundo escurecido. Conteúdo:**

**Título (Anton):**
ESPERA — ANTES DE FECHAR.

**Parágrafo:**
Se você quase comprou, mas ficou em dúvida no preço, dá uma olhada nisso:

**Box destacado (surface-2, borda accent):**
**CUPOM: TEEN10**
**10% de desconto** — válido só nessa visita. Aplique no checkout.

**CTA:**
USAR O CUPOM E IR PRO CHECKOUT

> **Observação para o dev:** implementar o exit-intent com `mouseleave` no body (desktop) e setTimeout (mobile). O cupom é apenas visual aqui — a integração real com plataforma de pagamento será feita à parte.

---

## 7. RESPONSIVIDADE

- **Mobile-first.** Toda a estilização inicial deve presumir tela `< 768px`.
- Cards em grid: 1 coluna no mobile, 2 no tablet (md:), 3 no desktop (lg:).
- Hero: texto e mockup empilhados no mobile, lado a lado no desktop.
- Headlines reduzem ~30% no mobile.
- Sticky CTA mobile a partir da seção 5.
- Touch targets mínimos de 44px em botões.

---

## 8. PERFORMANCE E SEO

### Performance
- Imagens com `next/image` e lazy loading.
- Fontes via `next/font/google` com `display: 'swap'`.
- Tailwind purge configurado.
- Sem bibliotecas pesadas além do necessário.
- Lighthouse alvo: 90+ em performance.

### SEO (em `app/layout.tsx` ou `app/page.tsx`)

```
title: "Kit Consultório Teen — Recursos visuais para psicólogos que atendem adolescente"
description: "+80 recursos terapêuticos prontos, organizados por demanda, feitos especificamente para adolescentes. Sem cara de material infantil."
og:image: gerar imagem 1200x630 com headline principal sobre fundo dark + accent
```

### Tracking
- Deixar um `<Script>` placeholder no `<head>` pra Meta Pixel e Google Analytics (comentar com `// TODO: inserir IDs reais`).

---

## 9. ESTRUTURA DE ARQUIVOS SUGERIDA

```
/app
  /page.tsx                  → home (a landing inteira)
  /layout.tsx                → metadata + fontes
  /globals.css               → reset + variáveis Tailwind
/components
  /sections
    Hero.tsx
    ProblemRecognition.tsx
    ProductIntro.tsx
    Gallery.tsx
    PainIdentification.tsx
    Transformation.tsx
    InactionCost.tsx
    Stack.tsx
    SocialProof.tsx
    PricingLadder.tsx
    Guarantee.tsx
    FAQ.tsx
    Footer.tsx
  /ui                        → componentes shadcn
  StickyCTA.tsx              → sticky CTA mobile
  ExitPopup.tsx              → exit-intent modal
/lib
  utils.ts
```

Cada seção é um componente isolado, sem dependência entre elas. Isso facilita iteração rápida sobre uma seção específica depois.

---

## 10. CHECKLIST FINAL ANTES DE ENTREGAR

- [ ] Headline do hero é a primeira coisa visível no mobile (acima da fold).
- [ ] CTAs primários estão visíveis em pelo menos 4 pontos da página: hero, após apresentação, após dor, no bloco de preço, e como sticky mobile.
- [ ] Nenhuma seção quebra no mobile (testar em viewport 375px).
- [ ] FAQ funcional com Accordion (abrir/fechar com animação).
- [ ] Exit-intent dispara corretamente no desktop.
- [ ] Cores seguem exatamente a paleta definida — nenhum azul/cinza não-listado.
- [ ] Fontes Anton + Inter carregadas e aplicadas conforme escala.
- [ ] Todas as animações são sutis e respeitam `prefers-reduced-motion`.
- [ ] Imagens são placeholders rotulados (não emojis, não ilustrações lúdicas).
- [ ] Lighthouse local roda 90+ em performance.

---

## 11. ORDEM DE EXECUÇÃO RECOMENDADA

1. Setup do projeto (Next + Tailwind + shadcn + fontes + paleta).
2. Layout global + Footer.
3. Hero (primeira impressão é tudo).
4. Seções 2 a 8 em sequência (a copy já está pronta acima — focar em hierarquia visual).
5. Bloco de preço (escada de preço) — testar visual do "destacado".
6. FAQ + Garantia.
7. Sticky CTA mobile.
8. Exit-intent popup.
9. SEO/Metadata.
10. Polish: animações Framer Motion + revisão mobile.

---

**Fim do documento.** Em caso de dúvida sobre alguma seção, priorize fidelidade ao texto da seção 6 e à paleta da seção 3 — esses são os elementos não-negociáveis. Detalhes visuais menores podem ser decididos com bom senso de design.
