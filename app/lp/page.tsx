'use client'

import Script from 'next/script'
import { lpCss } from './_components/styles'
import { initScript } from './_components/initScript'

export default function LpPage() {
  return (
    <>
      {/* <head> do fonte: title, favicons, fontes, utmify e CSS inline preservado */}
      <title>Cortes que Faturam</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/cropped-1384060-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/cropped-1384060-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/images/cropped-1384060-192x192.png" />

      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* CSS inline preservado EXATAMENTE como no fonte */}
      <style dangerouslySetInnerHTML={{ __html: lpCss }} />

      {/* utmify pixel (loader inline do <head>) */}
      <Script
        id="utmify-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  window.pixelId = "6a22e9983c66ac1b9c986167";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
`,
        }}
      />

      {/* utmify utms */}
      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck=""
        data-utmify-prevent-subids=""
        strategy="afterInteractive"
      />

      {/* wrapper com as classes/estilos que estavam no <body> do fonte (nao pode ter <body> aninhado) */}
      <div>
        <nav>
          <div className="nav-logo">Cortes que Faturam</div>
          <a
            href="https://go.perfectpay.com.br/PPU38CQCRS1"
            className="nav-cta checkout-link"
            target="_blank"
          >
            Quero começar agora
          </a>
        </nav>

        <section className="hero">
          <div className="badge">
            <span className="badge-dot"></span>
            Vagas abertas agora
          </div>
          <h1>
            Transforme cortes
            <br />
            de vídeo em
            <br />
            <em>renda real</em>
          </h1>
          <p className="hero-sub">
            Aprenda a criar, postar e monetizar cortes no Instagram — sem aparecer, sem
            equipamento e sem experiência anterior.
          </p>
          <a
            href="https://go.perfectpay.com.br/PPU38CQCRS1"
            className="hero-cta checkout-link"
            target="_blank"
          >
            Acessar o método agora
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <p className="hero-note">Acesso imediato · 100% online · Suporte completo</p>
        </section>

        <div className="proof-strip">
          <div className="proof-item">
            <div className="proof-number">+4.800</div>
            <div className="proof-label">Alunos ativos</div>
          </div>
          <div className="proof-item">
            <div className="proof-number">R$0</div>
            <div className="proof-label">Para começar</div>
          </div>
          <div className="proof-item">
            <div className="proof-number">100%</div>
            <div className="proof-label">Pelo celular</div>
          </div>
          <div className="proof-item">
            <div className="proof-number">100%</div>
            <div className="proof-label">Online e no celular</div>
          </div>
        </div>

        <section className="fade-in">
          <div className="section-label">Como funciona</div>
          <h2 className="section-title">3 passos. Resultado real.</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <h3>Escolha o nicho certo</h3>
              <p>
                Você aprende a encontrar criadores com conteúdo viral e alta demanda — sem
                precisar criar nada do zero.
              </p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>Corte, edite e poste</h3>
              <p>
                Com ferramentas gratuitas no celular, você monta cortes em minutos e publica de
                forma estratégica para alcançar mais pessoas.
              </p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>Monetize no automático</h3>
              <p>
                Parcerias, comissões, links de afiliado e bonificações do próprio Instagram. Seu
                perfil trabalha enquanto você dorme.
              </p>
            </div>
          </div>
        </section>

        <div className="for-who">
          <div className="for-who-inner fade-in">
            <div className="section-label">Para quem é</div>
            <h2 className="section-title">Se encaixa na sua realidade?</h2>
            <div className="for-who-grid">
              <div className="for-who-card">
                <div className="check-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7l3 3 6-6"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Quer uma renda extra</h4>
                  <p>
                    Sem abrir empresa, sem chefe e sem precisar sair de casa. Ideal pra quem quer
                    ganhar mais no tempo livre.
                  </p>
                </div>
              </div>
              <div className="for-who-card">
                <div className="check-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7l3 3 6-6"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Não sabe editar vídeo</h4>
                  <p>
                    O método é feito pra quem começa do zero. Ferramentas simples, passo a passo
                    visual, sem complicação.
                  </p>
                </div>
              </div>
              <div className="for-who-card">
                <div className="check-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7l3 3 6-6"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Não quer aparecer</h4>
                  <p>
                    Você trabalha nos bastidores. Nenhum vídeo seu no rosto, nenhuma câmera
                    apontada pra você.
                  </p>
                </div>
              </div>
              <div className="for-who-card">
                <div className="check-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7l3 3 6-6"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Tem pouco tempo livre</h4>
                  <p>
                    Você encaixa no seu ritmo, sem precisar abrir mão da rotina atual. A operação
                    se adapta ao seu tempo disponível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="fade-in">
          <div className="section-label">O que você recebe</div>
          <h2 className="section-title">Tudo que você precisa para começar hoje.</h2>
          <div className="what-get-list">
            <div className="get-item">
              <div className="get-left">
                <div className="get-num">01</div>
                <div>
                  <h4>Método Completo de Cortes</h4>
                  <p>Do zero à publicação: nicho, corte, edição e estratégia de postagem</p>
                </div>
              </div>
              <div className="get-tag">Essencial</div>
            </div>
            <div className="get-item">
              <div className="get-left">
                <div className="get-num">02</div>
                <div>
                  <h4>Mapa de Monetização</h4>
                  <p>
                    Todos os canais de receita disponíveis: afiliados, parcerias e bonificações
                    Instagram
                  </p>
                </div>
              </div>
              <div className="get-tag">Novo</div>
            </div>
            <div className="get-item">
              <div className="get-left">
                <div className="get-num">03</div>
                <div>
                  <h4>Templates Prontos para Edição</h4>
                  <p>Arquivos editáveis pra acelerar sua produção e manter padrão profissional</p>
                </div>
              </div>
              <div className="get-tag">Bônus</div>
            </div>
            <div className="get-item">
              <div className="get-left">
                <div className="get-num">04</div>
                <div>
                  <h4>Comunidade de Suporte</h4>
                  <p>Acesso ao grupo com outros alunos e suporte direto para dúvidas</p>
                </div>
              </div>
              <div className="get-tag">Bônus</div>
            </div>
          </div>
        </section>

        <div className="testimonials">
          <div className="testimonials-inner fade-in">
            <div className="section-label">Resultados reais</div>
            <h2 className="section-title" style={{ color: 'white' }}>
              O que os alunos estão dizendo
            </h2>
            <div className="testi-grid">
              <div className="testi-card">
                <div className="stars">
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>
                <p className="testi-text">
                  "Já estava ganhando minha primeira comissão logo no início. Nunca pensei que
                  editar vídeo no celular podia gerar renda de verdade."
                </p>
                <div className="testi-author">
                  <div className="testi-avatar">MR</div>
                  <div>
                    <div className="testi-name">Mariana R.</div>
                    <div className="testi-detail">Aluna desde jan/2024</div>
                  </div>
                </div>
              </div>
              <div className="testi-card">
                <div className="stars">
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>
                <p className="testi-text">
                  "Trabalho de casa, 1 hora por dia e já bati R$2.400 no mês. O método é simples
                  mas muito bem estruturado."
                </p>
                <div className="testi-author">
                  <div className="testi-avatar">CT</div>
                  <div>
                    <div className="testi-name">Carlos T.</div>
                    <div className="testi-detail">Aluno desde fev/2024</div>
                  </div>
                </div>
              </div>
              <div className="testi-card">
                <div className="stars">
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>
                <p className="testi-text">
                  "Não apareço em nenhum vídeo e mesmo assim cresci do zero para muitos seguidores.
                  Incrível demais."
                </p>
                <div className="testi-author">
                  <div className="testi-avatar">JF</div>
                  <div>
                    <div className="testi-name">Juliana F.</div>
                    <div className="testi-detail">Aluna desde dez/2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="final-cta fade-in">
          <div className="section-label">Pronto para começar?</div>
          <h2 className="section-title">Sua renda do Instagram começa hoje.</h2>
          <p className="hero-sub">Acesso imediato ao método, suporte direto e pagamento seguro.</p>
          <a
            href="https://go.perfectpay.com.br/PPU38CQCRS1"
            className="hero-cta checkout-link"
            target="_blank"
          >
            Quero acessar agora
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <p className="hero-note" style={{ marginTop: '16px' }}>
            🔒 Pagamento seguro · Acesso imediato · Suporte completo
          </p>
        </div>

        <footer>
          <div className="footer-logo">Cortes que Faturam</div>
          <div>© 2024 · Todos os direitos reservados</div>
        </footer>
      </div>

      {/* Script inline final do fonte: reescreve checkout-links e ativa fade-in observer */}
      <Script
        id="lp-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: initScript }}
      />
    </>
  )
}
