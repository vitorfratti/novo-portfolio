const app = Vue.createApp({
    data() {
        return {
            section: 'home',
            activeHeader: null,
            sliderPosition: 0,
            projetos: [
                {
                    nome: 'Exemplo 1',
                    descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    buttons: false
                },
                {
                    nome: 'Exemplo 2',
                    descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    buttons: false
                },
                {
                    nome: 'Exemplo 3',
                    descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    buttons: false
                },
                {
                    nome: 'Exemplo 4',
                    descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    buttons: false
                },
                {
                    nome: 'Exemplo 5',
                    descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    buttons: false
                },
                {
                    nome: 'Exemplo 6',
                    descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    buttons: false
                }
            ],
            conhecimentos: [
                {
                    name: 'HTML',
                    level: 'Avançado',
                    descricao: 'HTML é uma linguagem de marcação usada para estruturar e exibir conteúdo na web. Composta por elementos e tags, o HTML define a estrutura e semântica de uma página, permitindo adicionar texto, imagens e links. Combinado com CSS e JavaScript, o HTML possibilita criar páginas web dinâmicas e interativas.',
                    src: 'image/svg/html.svg'
                },
                {
                    name: 'CSS',
                    level: 'Avançado',
                    descricao: 'CSS é uma linguagem de estilo utilizada para controlar a apresentação e o layout de elementos em uma página da web. Com o CSS, é possível definir cores, fontes, tamanhos, posicionamento e outros aspectos visuais dos elementos HTML. ',
                    src: 'image/svg/css.svg'
                },
                {
                    name: 'JavaScript',
                    level: 'Avançado',
                    descricao: 'JavaScript é uma linguagem de programação utilizada para adicionar interatividade a páginas web. Com ele, é possível manipular elementos HTML, responder a eventos e criar funcionalidades dinâmicas. Executado no lado do cliente, o JavaScript é essencial para o desenvolvimento web moderno.',
                    src: 'image/svg/js.svg'
                },
                {
                    name: 'Php',
                    level: 'Intermediário',
                    descricao: 'PHP é uma linguagem de programação do lado do servidor, usada principalmente para criar páginas da web dinâmicas. Com o PHP, é possível interagir com bancos de dados, processar formulários, gerar conteúdo personalizado e muito mais. Sua sintaxe é semelhante ao HTML, permitindo a incorporação fácil de código PHP em arquivos HTML.',
                    src: 'image/svg/php.svg'
                },
                {
                    name: 'Sass',
                    level: 'Avançado',
                    descricao: 'Sass é uma linguagem de folhas de estilo que estende o CSS. Ele oferece recursos adicionais, como variáveis, mixins e aninhamento de seletores, que tornam a escrita de estilos mais eficiente e modular. O Sass é compilado para CSS, permitindo que os estilos sejam utilizados pelos navegadores.',
                    src: 'image/svg/sass.svg'
                },
                {
                    name: 'Vue.js',
                    level: 'Avançado',
                    descricao: 'Vue.js é um framework JavaScript progressivo e de código aberto, usado para criar interfaces de usuário interativas. Ele adota uma abordagem baseada em componentes para a construção de aplicativos web reativos e escaláveis.',
                    src: 'image/svg/vue.svg'
                },
                {
                    name: 'WordPress',
                    level: 'Intermediário',
                    descricao: 'WordPress é uma plataforma de gerenciamento de conteúdo (CMS) popular e de código aberto, usada para criar e gerenciar sites e blogs. Com recursos flexíveis e uma grande variedade de plugins e temas, o WordPress permite criar sites personalizados de forma acessível e amigável.',
                    src: 'image/svg/wordpress.svg'
                },
                {
                    name: 'Git',
                    level: 'Avançado',
                    descricao: 'Git é um sistema de controle de versão distribuído amplamente utilizado para o rastreamento de mudanças em projetos de desenvolvimento de software. Ele permite que equipes colaborem no desenvolvimento de código-fonte de forma eficiente, controlando as versões e facilitando a integração de alterações.',
                    src: 'image/svg/git.svg'
                },
                {
                    name: 'jQuery',
                    level: 'Intermediário',
                    descricao: 'jQuery é uma biblioteca JavaScript de alto desempenho que simplifica a manipulação e interação com elementos HTML, tratamento de eventos, animações e requisições assíncronas. Com uma sintaxe concisa e poderosa, o jQuery agiliza o desenvolvimento web e garante compatibilidade com diferentes navegadores.',
                    src: 'image/svg/jquery.svg'
                },
                {
                    name: 'React',
                    level: 'Intermediário',
                    descricao: 'É uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
                    src: 'image/svg/react.svg'
                },
                {
                    name: 'SQL',
                    level: 'Intermediário',
                    descricao: 'É uma linguagem de domínio específico desenvolvida para gerenciar dados relacionais em um sistema de gerenciamento de banco de dados, ou para processamento de fluxo de dados em um sistema de gerenciamento de fluxo de dados.',
                    src: 'image/svg/sql.svg'
                },
                {
                    name: 'Linux',
                    level: 'Intermediário',
                    descricao: 'Linux é um Sistema Operacional, assim como o Windows e o Mac OS, que possibilita a execução de programas em um computador e outros dispositivos. Linux pode ser livremente modificado e distribuído. Apesar desta interpretação ser simplista é perfeitamente correta e aceitável.',
                    src: 'image/svg/linux.svg'
                }
            ],
            conhecimentoActive: [
                {
                    name: 'HTML',
                    level: 'Avançado',
                    descricao: '',
                    src: ''
                }
            ]
        }
    },
    methods: {
        changeSection() {
            const element = document.getElementById(this.section);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        },
        toggleMenu() {
            document.querySelector('.menu-lateral').classList.toggle('closed')
        },
        scrollBack() {
            const slider = this.$refs.slider;
            if(this.sliderPosition < 1) {
                this.sliderPosition = this.projetos.length - 1;
            } else {
                this.sliderPosition--;
            }
            slider.scrollTo({
                left: this.$refs.projeto[this.sliderPosition].offsetLeft,
                behavior: 'smooth'
            });
        },
        scrollNext() {
            const slider = this.$refs.slider;
            if(this.sliderPosition >= 5) {
                this.sliderPosition = 0;
            } else {
                this.sliderPosition++;
            }
            slider.scrollTo({
                left: this.$refs.projeto[this.sliderPosition].offsetLeft,
                behavior: 'smooth'
            });
        }
    },
    mounted() {
        this.projetos = [...this.projetos, ...this.projetos]; // duplica a matriz de projetos

        window.addEventListener('scroll', () => {
            const element = document.getElementById('sobremim').offsetTop;
          
            if (window.scrollY >= element) {
                this.activeHeader = true
            } else {
                this.activeHeader = false
            }
        });
    }
})

app.mount('#app')