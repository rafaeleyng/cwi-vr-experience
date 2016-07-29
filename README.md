# cwi-vr-experience

```
nvm use
npm install
```

---

## Desenvolvimento:

  em um terminal:
  ```
  npm start
  ```

  e em outro
  ```
  npm run lint
  ```

---

## Build para produção (gera pasta ./dist):

```
npm run build
```

---

## Status do projeto / limitações

### Rede

O CWI VR Experience é bastante exigente em relação a banda de internet. A navegação para um novo ambiente só é liberada quando as imagens necessárias para exibi-lo já estiverem baixadas. Isso pode causar a demora em aparecer os ícones de navegação.

É recomendada a navegação usando Wi-fi, não conexão de dados móveis. Sem cache (como no primeiro uso do CWI VR Experience em um dispositivo/browser), uma navegação completa consome 18MB.

A primeira vez é muito mais lenta para liberar os próximos ambientes, por não ter as imagens em cache. A partir da segunda vez o tempo de espera para liberar o próximo ambiente tende a ficar em menos de 1 segundo.

Em alguns casos, especialmente no iPhone, houveram situações em que os logos de navegação não apareceram mesmo após muito tempo. Não consegui determinar o motivo, mas provavelmente as imagens demoraram demais para baixar e aconteceu um timeout do navegador.

### Mobile

#### Android

Dispositivos testados:

- Samsung A5: relativamente lento; o giro lateral não funciona pelo giroscópio, mas pode ser feito com drag.
- Moto G 3: muito lento.
- Moto X 2: muito bom, o melhor dispositivo testado. Todos recursos funcionam.

Considerando o Moto X 2, em relação aos navegadores:

No Chrome (51), todos os recursos funcionaram corretamente. A barra de navegação some no momento em que entramos no modo VR.

No Firefox (47), o navegador dá crash e fecha pouco após iniciar o tour. Inviável.

#### iOS

Dispositivos testados:

- iPhone 6

Considerando iPhone 6, em relação aos navegadores:

No Chrome (provavelmente versão 51, não tenho certeza), o som não é tocado, e a barra de navegação sempre fica visível. Todos demais recursos funcionam corretamente.

No Safari, o som não é tocado. Todos demais recursos funcionam corretamente. No entanto, após cerca de 8-10 ambientes navegados, o navegador dá crash e fecha. Inviável.

Sobre os problemas do iOS:

- som não é tocado: isso é uma limitação do iOS. Segundo o que foi pesquisado, para evitar páginas que tocam sons indesejados, o iOS bloqueia execução automática de sons. A execução teria que partir de uma ação do usuário. Ainda assim, tentei tocar o som na ação do usuário em um ícone destinado para isso e não tive sucesso. Mais informações em:
  - https://github.com/aframevr/aframe/issues/1684
  - http://stackoverflow.com/questions/38645716/cant-play-sound-on-ios
  - https://paulbakaus.com/tutorials/html5/web-audio-on-ios/
  - https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/PlayingandSynthesizingSounds/PlayingandSynthesizingSounds.html#//apple_ref/doc/uid/TP40009523-CH6-SW1
  - https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html

- Chrome não entra em modo fullscreen: é uma limitação do Chrome no iOS. Encontrei informações de que a barra é escondida ao rolar para baixo, mas o CWI VR Experience não tem rolagem. Mais informações:
  - https://github.com/aframevr/aframe/issues/1231
  - http://www.html5rocks.com/en/mobile/fullscreen/

### Desktop

Foi testado no Chrome, Firefox e Safari, e todos funcionaram perfeitamente.

### Conclusão

A melhor experiência testada foi usando um Moto X 2, com Chrome 51 (possivelmente qualquer versão superior também funcione), em uma conexão Wi-fi boa, e não sendo a primeira navegação (já tendo as imagens no cache do navegador).

Um dispositivo Android com hardware superior ao Moto X 2 tende a ter desempenho superior.

Um iPhone 6, com Chrome, atende relativamente bem, mas não irá tocar os sons.
