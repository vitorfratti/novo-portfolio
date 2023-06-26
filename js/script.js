const app = Vue.createApp({
    data() {
        return {
            section: 'home',
            activeHeader: null,
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
        }
    },
    mounted() {
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