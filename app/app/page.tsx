'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { appCss } from './_components/styles'

export default function AppPage() {
  useEffect(() => {
    // --- Logica inline do fonte (corpo do handler DOMContentLoaded) ---
    const openModalBtn = document.getElementById('openModalBtn')
    const closeModalBtn = document.getElementById('closeModalBtn')
    const modalOverlay = document.getElementById('modalOverlay')

    const pixInput = document.getElementById('pixInput') as HTMLInputElement | null
    const loadingIcon = document.getElementById('loadingIcon')
    const successIcon = document.getElementById('successIcon')
    const pixMessage = document.getElementById('pixMessage')

    if (
      !openModalBtn ||
      !closeModalBtn ||
      !modalOverlay ||
      !pixInput ||
      !loadingIcon ||
      !successIcon ||
      !pixMessage
    ) {
      return
    }

    let typingTimer: ReturnType<typeof setTimeout>
    const doneTypingInterval = 1200 // Tempo em ms aguardando apos o lead parar de digitar para "validar"

    // Controle do Modal
    function openModal() {
      modalOverlay!.classList.add('active')
      document.body.style.overflow = 'hidden' // Evita rolagem da pagina fundo
    }

    function closeModal() {
      modalOverlay!.classList.remove('active')
      document.body.style.overflow = 'auto'
    }

    openModalBtn.addEventListener('click', openModal)
    closeModalBtn.addEventListener('click', closeModal)

    // Fechar clicando fora do card
    const overlayClick = (e: MouseEvent) => {
      if (e.target === modalOverlay) {
        closeModal()
      }
    }
    modalOverlay.addEventListener('click', overlayClick)

    // Logica de Microinteracao da Chave PIX
    const pixInputHandler = () => {
      clearTimeout(typingTimer)

      // Reseta estado para digitando
      pixInput.classList.remove('border-green-500', 'focus:border-green-500', 'focus:ring-green-500')
      pixInput.classList.add('border-gray-700')

      successIcon.classList.add('hidden')
      pixMessage.classList.add('hidden')

      if (pixInput.value.length > 0) {
        loadingIcon.classList.remove('hidden')

        // Inicia contagem para fingir processamento do sistema bancario
        typingTimer = setTimeout(validatePix, doneTypingInterval)
      } else {
        loadingIcon.classList.add('hidden')
      }
    }
    pixInput.addEventListener('input', pixInputHandler)

    function validatePix() {
      loadingIcon!.classList.add('hidden')

      // Aplica estilos de Sucesso
      pixInput!.classList.remove('border-gray-700')
      pixInput!.classList.add('border-green-500', 'focus:border-green-500', 'focus:ring-green-500')

      successIcon!.classList.remove('hidden')
      pixMessage!.classList.remove('hidden')
    }

    // --- Sistema de Notificacoes de Saque ---
    const notificationToast = document.getElementById('notificationToast')
    const notificationText = document.getElementById('notificationText')

    const names = [
      'Ana Silva',
      'Carlos M.',
      'Jo&atilde;o Pedro',
      'Maria F.',
      'Lucas T.',
      'Juliana C.',
      'Pedro R.',
      'Fernanda L.',
      'Rafael G.',
      'Amanda B.',
      'Diego A.',
      'Camila V.',
    ]

    const timers: Array<ReturnType<typeof setTimeout>> = []

    function showNotification() {
      if (!notificationToast || !notificationText) return
      // Valor entre 600 e 6000
      const value = Math.floor(Math.random() * (6000 - 600 + 1)) + 600
      const formattedValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

      // Nome aleatorio
      const randomName = names[Math.floor(Math.random() * names.length)]

      // Tempo aleatorio (1 a 59 minutos)
      const time = Math.floor(Math.random() * 59) + 1

      // Atualizar texto
      notificationText.innerHTML = `<span class="text-green-400 font-bold">${randomName}</span> acabou de sacar <span class="text-white font-bold">${formattedValue}</span> h&aacute; ${time} min.`

      // Mostrar animacao
      notificationToast.classList.remove('translate-y-[150%]')
      notificationToast.classList.add('translate-y-0')

      // Esconder apos 4.5 segundos
      timers.push(
        setTimeout(() => {
          notificationToast.classList.remove('translate-y-0')
          notificationToast.classList.add('translate-y-[150%]')
        }, 4500),
      )

      // Agendar proxima notificacao (entre 7 e 14 segundos)
      const nextTime = Math.floor(Math.random() * (14000 - 7000 + 1)) + 7000
      timers.push(setTimeout(showNotification, nextTime))
    }

    // Iniciar primeira notificacao apos 2 segundos
    timers.push(setTimeout(showNotification, 2000))

    // Cleanup ao desmontar (evita duplicar listeners/timers no React)
    return () => {
      clearTimeout(typingTimer)
      timers.forEach((t) => clearTimeout(t))
      openModalBtn.removeEventListener('click', openModal)
      closeModalBtn.removeEventListener('click', closeModal)
      modalOverlay.removeEventListener('click', overlayClick)
      pixInput.removeEventListener('input', pixInputHandler)
    }
  }, [])

  return (
    <>
      {/* <head> do fonte: title, favicons, CDNs e CSS inline preservado */}
      <title>YouTube x Kwai | Painel VIP</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/cropped-1384060-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/cropped-1384060-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/images/cropped-1384060-192x192.png" />

      {/* Tailwind via CDN (beforeInteractive para as classes funcionarem) */}
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />

      {/* Icones FontAwesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* CSS inline preservado EXATAMENTE como no fonte */}
      <style dangerouslySetInnerHTML={{ __html: appCss }} />

      {/* wrapper com as classes que estavam no <body> do fonte (nao pode ter <body> aninhado) */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        {/* Fundo */}
        <div className="bg-mosaic"></div>

        {/* Header */}
        <header className="fixed top-0 left-0 z-20 w-full px-4 pt-4 pb-3">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 rounded-[24px] border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-xl">
            <div className="flex w-full flex-col items-center gap-2 text-center select-none">
              <div className="flex items-center justify-center gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/youtube_icon.svg"
                    style={{
                      height: '28px',
                      width: 'auto',
                      filter: 'drop-shadow(0 0 10px rgba(255,0,0,0.14))',
                    }}
                    alt="YouTube"
                  />
                  <span className="font-roboto-condensed text-[1.75rem] font-black leading-none tracking-[-0.04em] text-white">
                    YouTube
                  </span>
                </div>
                <span className="text-lg font-light text-gray-400">&times;</span>
                <img
                  src="/assets/kwai_logo.png"
                  style={{
                    height: '62px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 12px rgba(255,145,0,0.14))',
                  }}
                  alt="Kwai"
                />
              </div>
              <span className="text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-gray-300 sm:text-[0.88rem]">
                Painel do Avaliador VIP
              </span>
            </div>

            <div className="flex w-full max-w-[520px] items-center justify-center gap-2 rounded-2xl border border-yellow-400/45 bg-yellow-400/92 px-3 py-2 text-center text-[11px] font-black leading-tight text-black shadow-[0_12px_30px_rgba(234,179,8,0.22)] sm:text-xs">
              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-red-600 blink-dot shadow-[0_0_5px_red]"></div>
              <span>
                CONVITE ATIVO PARA O SEU IP &bull; Apenas 3 vagas restantes na sua regi&atilde;o
              </span>
            </div>
          </div>
        </header>

        {/* Conteudo Principal */}
        <main className="z-10 flex w-full max-w-2xl flex-col items-center pt-40 sm:pt-44 md:pt-48">
          {/* Card Glassmorphism */}
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center w-full shadow-2xl relative border-t border-l border-white/20">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-[#E50914]/20 rounded-full flex items-center justify-center text-[#E50914] text-3xl shadow-[0_0_20px_rgba(229,9,20,0.3)]">
                <i className="fa-solid fa-gift"></i>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
              Identificamos uma carga de{' '}
              <span className="text-[#E50914]">recompensas retroativas</span> pendente para o seu
              perfil de usu&aacute;rio.
            </h2>

            <p className="text-gray-300 text-base md:text-lg mb-10 px-4">
              O seu hist&oacute;rico de visualiza&ccedil;&otilde;es nos qualificou para um saque
              imediato. Configure seu recebimento agora para liberar o painel.
            </p>

            {/* O Botao Principal */}
            <button
              id="openModalBtn"
              className="btn-primary w-full md:w-4/5 mx-auto py-5 px-6 rounded-xl text-white font-bold text-lg md:text-xl shadow-lg flex items-center justify-center gap-3 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500/50"
            >
              <span>DESBLOQUEAR MEU ACESSO E RECOMPENSAS</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </main>

        {/* Overlay do Modal (Fundo Escuro) */}
        <div
          id="modalOverlay"
          className="modal-overlay fixed inset-0 bg-black/90 z-50 flex items-end md:items-center justify-center backdrop-blur-sm"
        >
          {/* Formulario Pop-up (Desliza de baixo) */}
          <div
            id="modalContent"
            className="modal-content bg-[#1c1c1c] w-full md:w-[500px] max-h-[90vh] overflow-y-auto rounded-t-3xl md:rounded-3xl border border-gray-800 shadow-2xl relative flex flex-col"
          >
            {/* Botao Fechar */}
            <button
              id="closeModalBtn"
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition p-2"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>

            {/* Cabecalho do Formulario */}
            <div className="p-6 border-b border-gray-800 text-center">
              <div className="w-12 h-12 mx-auto bg-green-500/10 text-green-500 rounded-full flex items-center justify-center text-xl mb-3">
                <i className="fa-solid fa-lock"></i>
              </div>
              <h3 className="text-xl font-bold text-white">
                Cadastro do Canal de Recebimento via PIX
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Configure onde deseja receber seus saques.
              </p>
            </div>

            {/* Corpo do Formulario */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Campo 1: Tipo de Chave */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de Chave PIX
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <i className="fa-brands fa-pix text-teal-400"></i>
                  </div>
                  <select
                    defaultValue=""
                    className="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 appearance-none cursor-pointer transition"
                  >
                    <option value="" disabled>
                      Selecione o tipo de chave...
                    </option>
                    <option value="cpf">ðŸ“„ CPF / CNPJ</option>
                    <option value="celular">ðŸ“± N&uacute;mero de Celular</option>
                    <option value="email">ðŸ“§ E-mail</option>
                    <option value="aleatoria">ðŸ”‘ Chave Aleat&oacute;ria</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>

              {/* Campo 2: Insira sua Chave */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Insira sua Chave PIX
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="pixInput"
                    placeholder="Digite sua chave aqui..."
                    className="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition pr-10"
                  />

                  {/* Icone de Carregamento (Oculto por padrao) */}
                  <div
                    id="loadingIcon"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hidden"
                  >
                    <i className="fa-solid fa-circle-notch text-gray-400 spin-slow"></i>
                  </div>

                  {/* Icone de Sucesso (Oculto por padrao) */}
                  <div
                    id="successIcon"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hidden text-green-500"
                  >
                    <i className="fa-solid fa-check-circle"></i>
                  </div>
                </div>
                {/* Mensagem de Validacao */}
                <p
                  id="pixMessage"
                  className="text-xs mt-2 text-green-400 hidden font-medium flex items-center gap-1"
                >
                  <i className="fa-solid fa-check"></i> Chave estruturada e pronta para envio.
                </p>
              </div>

              {/* Campos 3 e 4: Senha */}
              <div className="space-y-4 pt-2 border-t border-gray-800">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Criar Senha Eletr&ocirc;nica de Saque (6 d&iacute;gitos num&eacute;ricos)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <i className="fa-solid fa-key"></i>
                    </div>
                    <input
                      type="password"
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="• • • • • •"
                      className="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-center tracking-widest text-lg font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirme sua Senha de Saque
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <input
                      type="password"
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="• • • • • •"
                      className="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-center tracking-widest text-lg font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Botao Checkout */}
              <a
                href="https://go.perfectpay.com.br/PPU38CQEDHN"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg transition duration-200 mt-4 flex items-center justify-center gap-2 decoration-transparent"
              >
                <i className="fa-solid fa-check-double"></i> ATIVAR RECEBIMENTO PIX
              </a>
            </div>

            {/* Rodape de Confianca */}
            <div className="p-5 bg-[#141414] rounded-b-3xl text-center border-t border-gray-800">
              <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed max-w-sm mx-auto">
                <i className="fa-solid fa-lock text-gray-600 mr-1"></i>
                Conex&atilde;o segura via protocolo de criptografia SSL de 256 bits. Seus dados
                cadastrais s&atilde;o protegidos de ponta a ponta e utilizados estritamente para o
                processamento e envio automatizado de valores via Banco Central.
              </p>
            </div>
          </div>
        </div>

        {/* Notificacao Flutuante de Saque */}
        <div
          id="notificationToast"
          className="fixed bottom-4 left-4 md:left-auto md:right-4 bg-[#1c1c1c] border border-gray-700 p-4 rounded-xl shadow-2xl flex items-center gap-4 transform translate-y-[150%] transition-transform duration-500 z-50 w-[calc(100%-2rem)] md:w-auto md:min-w-[300px]"
        >
          <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-xl flex-shrink-0">
            <i className="fa-solid fa-money-bill-trend-up"></i>
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-bold flex items-center gap-2">
              Saque Realizado! <i className="fa-solid fa-circle-check text-green-500"></i>
            </p>
            <p id="notificationText" className="text-gray-300 text-xs mt-1 leading-tight">
              ...
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
