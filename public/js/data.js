const questions = [
    {
        "question": "Qual destas marcas de refrigerante você bebe com mais frequência?",
        "options": ["Coca-Cola", "Guaraná Antarctica", "Pepsi", "Fanta Laranja", "Sprite"],
        "reward": 305.50
    },
    {
        "question": "Qual destes serviços de streaming você mais assiste no seu dia a dia?",
        "options": ["Netflix", "Globoplay", "Disney+", "Max", "Amazon Prime Video"],
        "reward": 326.30
    },
    {
        "question": "Qual destas marcas de smartphone você escolheria comprar hoje?",
        "options": ["Apple (iPhone)", "Samsung", "Xiaomi", "Motorola", "Realme"],
        "reward": 298.40
    },
    {
        "question": "Se você fosse almoçar algo rápido, qual rede de fast-food seria a sua favorita?",
        "options": ["McDonald's", "Burger King", "Subway", "Habib's", "Giraffas"],
        "reward": 334.60
    },
    {
        "question": "Em qual destes bancos você possui conta ou prefere utilizar?",
        "options": ["Nubank", "Itaú", "Inter", "Bradesco", "PicPay"],
        "reward": 320.20
    }
];

const initialBonus = 250.00;

const videoInfo = {
    title: "CONFIRMADO: O Youtube está pagando por assistir novos vídeos",
    views: "1.2M visualizações",
    timeAgo: "há 2 horas",
    channel: {
        name: "Youtube Recompensas",
        subscribers: "17.4M",
        avatarUrl: "assets/youtube_icon.svg"
    },
    stats: {
        likes: "45K",
        share: "Compartilhar",
        download: "Download",
        comments: "2,045"
    },
    cta: {
        text: "DESTRAVAR MEU SAQUE AGORA",
        delay: 830000,
        link: "https://go.perfectpay.com.br/PPU38COP9EJ"
    }
};

const comments = [
    {
        author: "Mariana Ribeiro",
        time: "há 2 min",
        text: "Gente, eu tava desconfiada, mas decidi testar e acabei de receber R$ 127 no meu Pix! Muito rápido! 😱",
        "avatar": "https://randomuser.me/api/portraits/women/32.jpg?v=20260609-names1",
        likes: "67",
        replies: []
    },
    {
        author: "Fernanda Souza",
        time: "há 14 min",
        text: "Meu irmão me mandou o link e eu ri da cara dele. Agora tô aqui com R$ 350 na conta e pagando o almoço pra ele kkkkk",
        "avatar": "https://randomuser.me/api/portraits/women/44.jpg?v=20260609-names1",
        likes: "154",
        replies: [
            {
                author: "Ana Paula",
                time: "há 5 min",
                text: "Sério mesmo?? Vou tentar agora!",
                avatar: "https://randomuser.me/api/portraits/women/46.jpg?v=20260609-names1",
                likes: "12"
            }
        ]
    },
    {
        author: "Bernardo Lima",
        time: "há 45 min",
        text: "Acabei de pagar um boleto que tava atrasado com o dinheiro que saquei aqui. Gratidão eterna! 🙏",
        "avatar": "https://randomuser.me/api/portraits/men/65.jpg?v=20260609-names1",
        likes: "208",
        replies: []
    },
    {
        author: "Rafael Santos",
        time: "há 1 h",
        text: "Funciona mesmo! Já tinha visto outros vídeos assim que eram golpe, mas esse é oficial do Google/Youtube.",
        "avatar": "https://randomuser.me/api/portraits/men/67.jpg?v=20260609-names1",
        likes: "342",
        replies: []
    },
    {
        author: "Carla Dias",
        time: "há 2 h",
        text: "Alguém sabe se precisa pagar alguma coisa pra sacar? Tô com medo.",
        "avatar": "https://randomuser.me/api/portraits/women/89.jpg?v=20260609-names1",
        likes: "15",
        replies: [
            {
                author: "Suporte Oficial",
                time: "há 10 min",
                text: "Oi Carla! O acesso é gratuito, mas para segurança de todos, há pequenas taxas de verificação que são devolvidas junto com seu saque.",
                avatar: "assets/youtube_icon.svg",
                likes: "89"
            }
        ]
    },
    {
        author: "Tiago Ferreira",
        time: "há 3 h",
        text: "Mano, o YouTube é foda! Com a grana dessa semana já consegui pagar a parcela da minha moto. Só gratidão por terem liberado essa ferramenta pro Brasil. 🙏",
        "avatar": "https://randomuser.me/api/portraits/men/22.jpg?v=20260609-names1",
        likes: "267",
        replies: []
    },
    {
        author: "Bruno Cavalcante",
        time: "há 4 h",
        text: "Eu tava zerado, usei meus últimos R$ 30 pra pagar a verificação e tava rezando... Graças a Deus funcionou! Recebi R$ 420 via PIX agora a pouco. Tô muito feliz, sério! 😭❤️",
        "avatar": "https://randomuser.me/api/portraits/men/12.jpg?v=20260609-names1",
        likes: "1250",
        replies: []
    },
    {
        author: "Marcelo Diniz",
        time: "há 5 h",
        text: "As perguntas são ridículas de fácil, você escolhe entre Coca ou Guaraná e ganha dinheiro kkkk. Queria que tivesse isso o dia todo. Saquei meus primeiros R$ 500 agora.",
        "avatar": "https://randomuser.me/api/portraits/men/55.jpg?v=20260609-names1",
        likes: "56",
        replies: []
    }
];

const tracking = {};

const upsells = {
    up1: {
        title: "Confirmar Status de Segurança",
        badge: "Ação Necessária",
        desc: "Para evitar bônus automatizados e garantir o uso justo, exigimos um pequeno depósito de segurança totalmente reembolsável.",
        price: "27,00",
        link: "https://go.perfectpay.com.br/PPU38CPBJ9C",
        icon: "priority_high",
        color: "red",
        cta: "PAGAR TAXA DE SEGURANÇA"
    },
    up2: {
        title: "Pronto para Transferência",
        badge: "Processando",
        desc: "Seus fundos foram aprovados. Uma taxa bancária padrão é necessária para processar a transferência instantânea para sua conta.",
        price: "27,00",
        link: "https://go.perfectpay.com.br/PPU38CPBJ9C",
        icon: "info",
        color: "blue",
        cta: "PAGAR TAXA DE PROCESSAMENTO"
    },
    up3: {
        title: "Registro Fiscal",
        badge: "Requisito Fiscal",
        desc: "Para cumprir as regulamentações fiscais locais, uma taxa única de registro fiscal é necessária antes que possamos transferir seus ganhos.",
        price: "27,00",
        link: "https://go.perfectpay.com.br/PPU38CPBJ9C",
        icon: "description",
        color: "gray",
        cta: "PAGAR TAXA FISCAL"
    },
    up4: {
        title: "Transferência Expressa",
        badge: "Serviço Expresso",
        desc: "Transferências padrão levam 3 dias úteis. Pague a taxa expressa para receber seus fundos em sua conta em questão de minutos.",
        price: "27,00",
        link: "https://go.perfectpay.com.br/PPU38CPBJ9C",
        icon: "rocket_launch",
        color: "amber",
        cta: "ATIVAR EXPRESSO"
    },
    up5: {
        title: "Ativar Conta",
        badge: "Ativação Necessária",
        desc: "Sua conta de ganhos está atualmente inativa. Uma taxa de ativação única é necessária para habilitar saques para este perfil.",
        price: "27,00",
        link: "https://go.perfectpay.com.br/PPU38CPBJ9C",
        icon: "account_circle",
        color: "emerald",
        cta: "ATIVAR CONTA"
    },
    up6: {
        title: "Taxa de Protocolo",
        badge: "Administração",
        desc: "Formalizar seu pedido de saque requer um protocolo de arquivamento administrativo. Esta taxa cobre o processamento da documentação.",
        price: "12,90",
        link: "https://go.perfectpay.com.br/PPU38CPBJ9C",
        icon: "approval",
        color: "indigo",
        cta: "PAGAR PROTOCOLO"
    },
    up7: {
        title: "Licença de Software",
        badge: "Tecnologia",
        desc: "Para continuar utilizando nossa plataforma de avaliações, é necessário renovar sua licença de uso do software YouTube Rewards.",
        price: "27,00",
        link: "https://go.perfectpay.com.br/PPU38CPBJ9C",
        icon: "terminal",
        color: "cyan",
        cta: "RENOVAR LICENÇA"
    },
    up8: {
        title: "Taxa de Câmbio",
        badge: "Conversão Internacional",
        desc: "Como os fundos são originários da matriz internacional, uma pequena taxa de conversão de câmbio é aplicada para o processamento em Reais.",
        price: "19,90",
        link: "https://go.perfectpay.com.br/PPU38CPBJ9C",
        icon: "currency_exchange",
        color: "teal",
        cta: "PAGAR CONVERSÃO"
    },
    up9: {
        title: "Verificação de Identidade",
        badge: "Segurança Avançada",
        desc: "Para garantir que o saque seja enviado ao titular correto, exigimos uma verificação biométrica processada por nossa parceira de segurança.",
        price: "14,90",
        link: "https://go.perfectpay.com.br/PPU38CPBJ9C",
        icon: "face",
        color: "violet",
        cta: "VERIFICAR AGORA"
    },
    up10: {
        title: "Desbloquear Saldo",
        badge: "Passo Final",
        desc: "Seu saldo total está pronto. Esta taxa final de descongelamento libera o valor total para sua conta bancária imediatamente.",
        price: "27,00",
        link: "https://go.perfectpay.com.br/PPU38CPBJ9C",
        icon: "lock_open",
        color: "amber",
        cta: "DESBLOQUEAR FUNDOS"
    }
};

window.funnelData = {
    questions,
    initialBonus,
    videoInfo,
    comments,
    tracking,
};


