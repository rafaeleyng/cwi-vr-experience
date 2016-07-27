import React from 'react'
import AssetImg from './components/AssetImg'
import AssetSound from './components/AssetSound'

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
          <AssetImg key="sky-sl-fachada" id="sky-sl-fachada" src="./assets/sky/sl-fachada.jpg" />,
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
          // skySound: './assets/sound/sl-hall.mp3',
          skySound: '#sound-sl-hall',
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
            state: 'sl-terceiro-elevador',
            label: 'Subir',
            position: '35 0 1',
          },
        ],
      },
      assets: {
        all: [
          <AssetImg key="sky-sl-hall" id="sky-sl-hall" src="./assets/sky/sl-hall.jpg" />,
          <AssetSound key="sound-sl-hall" id="sound-sl-hall" src="./assets/sound/sl-hall.mp3" />,
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
    sl-terceiro-elevador
  */
  {
    name: 'sl-terceiro-elevador',
    properties: {
      room: {
        single: {
          skySrc: '#sky-sl-terceiro-elevador',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-hall',
            label: 'Descer',
            position: '11 -5 -15',
          },
          {
            state: 'sl-terceiro-desenvolvimento',
            label: 'Desenvolvimento',
            position: '-20 0 3',
          },
          {
            state: 'sl-quinto-elevador',
            label: 'Subir',
            position: '11 5 -15',
          },
        ],
      },
      assets: {
        all: [
          <AssetImg key="sky-sl-terceiro-elevador" id="sky-sl-terceiro-elevador" src="./assets/sky/sl-terceiro-elevador.jpg" />,
        ],
      },
    },
  },
  /*
    sl-terceiro-desenvolvimento
  */
  {
    name: 'sl-terceiro-desenvolvimento',
    properties: {
      room: {
        single: {
          skySrc: '#sky-sl-terceiro-desenvolvimento',
          // skySound: './assets/sound/sl-terceiro-desenvolvimento.mp3',
          skySound: '#sound-sl-terceiro-desenvolvimento',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-terceiro-elevador',
            label: 'Elevador',
            position: '4 0 -20',
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
          <AssetImg key="sky-sl-terceiro-desenvolvimento" id="sky-sl-terceiro-desenvolvimento" src="./assets/sky/sl-terceiro-desenvolvimento.jpg" />,
          <AssetSound key="sound-sl-terceiro-desenvolvimento" id="sound-sl-terceiro-desenvolvimento" src="./assets/sound/sl-terceiro-desenvolvimento.mp3" />,
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
          skySound: '#sound-sl-terceiro-auditorio',
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
          <AssetImg key="sky-sl-terceiro-auditorio" id="sky-sl-terceiro-auditorio" src="./assets/sky/sl-terceiro-auditorio.jpg" />,
          <AssetSound key="sound-sl-terceiro-auditorio" id="sound-sl-terceiro-auditorio" src="./assets/sound/sl-terceiro-auditorio.mp3" />,
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
    sl-quinto-elevador
  */
  {
    name: 'sl-quinto-elevador',
    properties: {
      room: {
        single: {
          skySrc: '#sky-sl-quinto-elevador',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-terceiro-elevador',
            label: 'Descer',
            position: '14 -5 -15',
          },
          {
            state: 'sl-quinto-meetingspace',
            label: 'Meeting space',
            position: '-10 -2 30',
          },
          {
            state: 'sl-sexto-interior',
            label: 'Subir',
            position: '14 5 -15',
          },
        ],
      },
      assets: {
        all: [
          <AssetImg key="sky-sl-quinto-elevador" id="sky-sl-quinto-elevador" src="./assets/sky/sl-quinto-elevador.jpg" />,
        ],
      },
    },
  },
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
            state: 'sl-quinto-elevador',
            label: 'Elevador',
            position: '25 2 1',
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
          <AssetImg key="sky-sl-quinto-meetingspace" id="sky-sl-quinto-meetingspace" src="./assets/sky/sl-quinto-meetingspace.jpg" />,
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
          skySound: '#sound-sl-quinto-desenvolvimento',
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
          <AssetImg key="sky-sl-quinto-desenvolvimento" id="sky-sl-quinto-desenvolvimento" src="./assets/sky/sl-quinto-desenvolvimento.jpg" />,
          <AssetSound key="sound-sl-quinto-desenvolvimento" id="sound-sl-quinto-desenvolvimento" src="./assets/sound/sl-quinto-desenvolvimento.mp3" />,
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
    sl-sexto-interior
  */
  {
    name: 'sl-sexto-interior',
    properties: {
      room: {
        single: {
          skySrc: '#sky-sl-sexto-interior',
        },
      },
      nav: {
        all: [
          {
            state: 'sl-quinto-elevador',
            label: 'Descer',
            position: '1 0 -20',
          },
          {
            state: 'sl-sexto-exterior',
            label: 'Terraço',
            position: '-20 2.8 1',
          },
        ],
      },
      assets: {
        all: [
          <AssetImg key="sky-sl-sexto-interior" id="sky-sl-sexto-interior" src="./assets/sky/sl-sexto-interior.jpg" />,
        ],
      },
    },
  },
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
            state: 'sl-sexto-interior',
            label: 'Salão de Festas',
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
          <AssetImg key="sky-sl-sexto-exterior" id="sky-sl-sexto-exterior" src="./assets/sky/sl-sexto-exterior.jpg" />,
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
          <AssetImg key="sky-cg-hall" id="sky-cg-hall" src="./assets/sky/cg-hall.jpg" />,
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
          <AssetImg key="sky-cg-desenvolvimento" id="sky-cg-desenvolvimento" src="./assets/sky/cg-desenvolvimento.jpg" />,
          <AssetSound key="sound-cg-desenvolvimento" id="sound-cg-desenvolvimento" src="./assets/sound/cg-desenvolvimento.mp3" />,
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
          <AssetImg key="sky-sp-hall" id="sky-sp-hall" src="./assets/sky/sp-hall.jpg" />,
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
          {
            state: 'sp-sacada',
            label: 'Sacada',
            position: '25 -2 8',
          },
        ],
      },
      assets: {
        all: [
          <AssetImg key="sky-sp-desenvolvimento" id="sky-sp-desenvolvimento" src="./assets/sky/sp-desenvolvimento.jpg" />,
          <AssetSound key="sound-sp-desenvolvimento" id="sound-sp-desenvolvimento" src="./assets/sound/sp-desenvolvimento.mp3" />,
        ],
      },
    },
  },
  /*
    sp-sacada
  */
  {
    name: 'sp-sacada',
    properties: {
      room: {
        single: {
          skySrc: '#sky-sp-sacada',
        },
      },
      nav: {
        all: [
          {
            state: 'sp-desenvolvimento',
            label: 'Desenvolvimento',
            position: '1 0 20',
          },
        ],
      },
      assets: {
        all: [
          <AssetImg key="sky-sp-sacada" id="sky-sp-sacada" src="./assets/sky/sp-sacada.jpg" />,
        ],
      },
    },
  },
]
