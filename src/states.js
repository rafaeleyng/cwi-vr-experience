export default [
  {
    name: 'start',
  },
  {
    name: 'welcome',
    properties: {
      room: {
        single: {
          skyColor: '#111111',
          skySound: './assets/sound/sl-hall.mp3',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-fachada',
            label: 'Iniciar',
            position: '0 9 -13',
          },
        ],
      },
      image: {
        all: [
          {
            src: '#image-welcome',
            width: '160',
            height: '90',
            position: '0 2 -60',
          },
        ],
      },
      assets: {
        all: [
        ],
      },
    },
  },
  /*
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  sl térreo
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  */
  /*
    sl-fachada
  */
  {
    name: 'sl-fachada',
    properties: {
      camera: {
        rotation: '0 110 0',
      },
      room: {
        single: {
          skySrc: '#sky-sl-fachada',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-hall',
            label: 'Entrar',
            position: '-30 4 4.5',
          },
        ],
      },
      assets: {
        all: [
          {
            id: 'sky-sl-fachada',
            src: './assets/sky/sl-fachada.jpg',
          },
        ],
      },
    },
  },
  /*
    sl-hall
  */
  {
    name: 'sl-hall',
    properties: {
      camera: {
        rotation: '0 230 0',
      },
      room: {
        single: {
          skySrc: '#sky-sl-hall',
          skySound: './assets/sound/sl-hall.mp3',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-fachada',
            label: 'Sair',
            position: '-20 0 4',
          },
          {
            state: 'sl-terceiro-desenvolvimento',
            label: 'Subir',
            position: '35 0 1',
          },
        ],
      },
      assets: {
        all: [
          {
            id: 'sky-sl-hall',
            src: './assets/sky/sl-hall.jpg',
          },
        ],
      },
    },
  },
  /*
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  sl 3º andar
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  */
  /*
    sl-terceiro-desenvolvimento
  */
  {
    name: 'sl-terceiro-desenvolvimento',
    properties: {
      room: {
        single: {
          skySrc: '#sky-sl-terceiro-desenvolvimento',
          skySound: './assets/sound/sl-terceiro-desenvolvimento.mp3',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-hall',
            label: 'Descer',
            position: '6 -4 -25',
          },
          {
            state: 'sl-quinto-meetingspace',
            label: 'Subir',
            position: '6 4 -25',
          },
          {
            state: 'sl-terceiro-auditorio',
            label: 'Auditório',
            position: '-30 2 -3',
          },
        ],
      },
      assets: {
        all: [
          {
            id: 'sky-sl-terceiro-desenvolvimento',
            src: './assets/sky/sl-terceiro-desenvolvimento.jpg',
          },
        ],
      },
    },
  },
  /*
    sl-terceiro-auditorio
  */
  {
    name: 'sl-terceiro-auditorio',
    properties: {
      room: {
        single: {
          skySrc: '#sky-sl-terceiro-auditorio',
          skySound: './assets/sound/sl-terceiro-auditorio.mp3',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-terceiro-desenvolvimento',
            label: 'Desenvolvimento',
            position: '27 0 1.5',
          },
        ],
      },
      assets: {
        all: [
          {
            id: 'sky-sl-terceiro-auditorio',
            src: './assets/sky/sl-terceiro-auditorio.jpg',
          },
        ],
      },
    },
  },
  /*
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  sl 5º andar
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  */
  /*
    sl-quinto-meetingspace
  */
  {
    name: 'sl-quinto-meetingspace',
    properties: {
      room: {
        single: {
          skySrc: '#sky-sl-quinto-meetingspace',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-terceiro-desenvolvimento',
            label: 'Descer',
            position: '24 -2 -1',
          },
          {
            state: 'sl-sexto-exterior',
            label: 'Subir',
            position: '24 4 -1',
          },
          {
            state: 'sl-quinto-desenvolvimento',
            label: 'Desenvolvimento',
            position: '-5 2 -25',
          },
        ],
      },
      assets: {
        all: [
          {
            id: 'sky-sl-quinto-meetingspace',
            src: './assets/sky/sl-quinto-meetingspace.jpg',
          },
        ],
      },
    },
  },
  /*
    sl-quinto-desenvolvimento
  */
  {
    name: 'sl-quinto-desenvolvimento',
    properties: {
      room: {
        single: {
          skySrc: '#sky-sl-quinto-desenvolvimento',
          skySound: './assets/sound/sl-quinto-desenvolvimento.mp3',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-quinto-meetingspace',
            label: 'Meeting space',
            position: '-25 -3 2',
          },
        ],
      },
      assets: {
        all: [
          {
            id: 'sky-sl-quinto-desenvolvimento',
            src: './assets/sky/sl-quinto-desenvolvimento.jpg',
          },
        ],
      },
    },
  },
  /*
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  sl 6º andar
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  */
  /*
    sl-sexto-exterior
  */
  {
    name: 'sl-sexto-exterior',
    properties: {
      room: {
        single: {
          skySrc: '#sky-sl-sexto-exterior',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-quinto-meetingspace',
            label: 'Descer',
            position: '-25 0 7',
          },
          {
            state: 'cg-hall',
            label: 'CWI Porto Alegre',
            position: '20 7 -5',
          },
          {
            state: 'sp-hall',
            label: 'CWI São Paulo',
            position: '18 7 25',
          },
        ],
      },
      assets: {
        all: [
          {
            id: 'sky-sl-sexto-exterior',
            src: './assets/sky/sl-sexto-exterior.jpg',
          },
        ],
      },
    },
  },
  /*
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  cg
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  */
  /*
    cg-hall
  */
  {
    name: 'cg-hall',
    properties: {
      room: {
        single: {
          skySrc: '#sky-cg-hall',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-fachada',
            label: 'CWI São Leopoldo',
            position: '30 2 -7',
          },
          {
            state: 'sp-hall',
            label: 'CWI São Paulo',
            position: '30 -3 -5',
          },
          {
            state: 'cg-desenvolvimento',
            label: 'Desenvolvimento',
            position: '-20 -2 5',
          },
        ],
      },
      assets: {
        all: [
          {
            id: 'sky-cg-hall',
            src: './assets/sky/cg-hall.jpg',
          },
        ],
      },
    },
  },
  /*
    cg-desenvolvimento
  */
  {
    name: 'cg-desenvolvimento',
    properties: {
      room: {
        single: {
          skySrc: '#sky-cg-desenvolvimento',
          skySound: './assets/sound/cg-desenvolvimento.mp3',
        },
      },
      nav: {
        all: [
          {
            state: 'cg-hall',
            label: 'Hall',
            position: '25 1 2',
          },
        ],
      },
      assets: {
        all: [
          {
            id: 'sky-cg-desenvolvimento',
            src: './assets/sky/cg-desenvolvimento.jpg',
          },
        ],
      },
    },
  },
  /*
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  sp
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  */
  /*
    sp-hall
  */
  {
    name: 'sp-hall',
    properties: {
      room: {
        single: {
          skySrc: '#sky-sp-hall',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-fachada',
            label: 'CWI São Leopoldo',
            position: '25 4 5',
          },
          {
            state: 'cg-hall',
            label: 'CWI Porto Alegre',
            position: '22 -1 7',
          },
          {
            state: 'sp-desenvolvimento',
            label: 'Desenvolvimento',
            position: '-25 0 3',
          },
        ],
      },
      assets: {
        all: [
          {
            id: 'sky-sp-hall',
            src: './assets/sky/sp-hall.jpg',
          },
        ],
      },
    },
  },
  /*
    sp-desenvolvimento
  */
  {
    name: 'sp-desenvolvimento',
    properties: {
      room: {
        single: {
          skySrc: '#sky-sp-desenvolvimento',
          skySound: './assets/sound/sp-desenvolvimento.mp3',
        },
      },
      nav: {
        all: [
          {
            state: 'sp-hall',
            label: 'Hall',
            position: '-22 0 -10',
          },
        ],
      },
      assets: {
        all: [
          {
            id: 'sky-sp-desenvolvimento',
            src: './assets/sky/sp-desenvolvimento.jpg',
          },
        ],
      },
    },
  },
]
