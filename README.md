<div align="center">
<img height="60" src="https://user-images.githubusercontent.com/56923620/210437941-54e89bba-4a9f-4c64-94db-bfabf3eb88af.png" />

<b>` Versão BETA ` </b>

<b>Feature para a extração de textos em imagens e tradução em Libras em sites que utilizam o VLibras Widget</b>
</div>

#

### :pencil: Sobre
**VLibras Widget**

O <b>VLibras Widget</b> faz parte do conjunto de ferramentas da suíte <b>VLibras</b> que tem como intuito traduzir conteúdos digitais em Português para Libras. Atualmente, sites que utiliza o Widget fornecem aos usuários a possiblidade de traduzirem para Libras os elementos de textos presentes no HTML na página, como por exemplo: títulos (h1, ..., h6), parágrafos (p), âncoras (a) e etc.

**Motivação**

Apesar do VLibras Widget possibilitar o acesso à tradução da maior parte dos textos no site, existem outros que ficam fora desta solução - estes são os textos presentes em imagens. Tendo isto em mente, a fim de aumentar ainda mais o acesso à comunidade surda, esta feature agrega também aos usuários a possibilidade de traduzir textos presentes em imagens, utilizando uma tecnologia de reconhecimento de caracteres (OCR) fornecida por uma biblioteca _open-source_, esta, a <a href="https://github.com/naptha/tesseract.js/">Tesseract.js</a> - uma implementação "traduzida" para JavaScript utilizando WebAssembly da biblioteca original <a href="https://github.com/tesseract-ocr/tesseract">Tesseract OCR</a> que é escrita na linguagem C e C++.

<br/>

### :test_tube: Como testar
1. Copie o script da feature já "buildado" em <a href="https://raw.githubusercontent.com/diegofrr/vlibras-widget-ocr/main/dist/bundle.js">/dist/bundle.js</a>;
2. Vá até um site que tenha o VLibras Widget. Ex. de sites do governo: <a href="http://www4.planalto.gov.br/legislacao/
">Portal da Legislação</a>, <a href="https://www.gov.br/defesa/pt-br">Ministério da Defesa</a>, <a href="https://www.gov.br/saude/pt-br
">Ministério da Saúde<a/> e etc. (veja outros sites em: <a href="https://github.com/diegofrr/vlibras-widget-ocr/blob/main/sites-list.txt">/sites-list.txt</a>);
3. Abra o devtools do seu navegador com <kbd>F12</kbd> ou <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>, cole e execute o script do bundle.js;
4. Inicie o VLibras Widget: clique no botão flutuante das mãozinhas ao lado direito da página;
5. Utilize a funcionalidade selecionando uma imagem do site que contenha texto.

⚠️ _Existe a possiblidade de alguns sites ficarem mal formatados e/ou quebrados após a implementação, retornando ao normal ao fechar o Widget ou, em casos super isolados, sendo necessário atualizar a página._

<br/>  

### 🚀 Roadmap

**Ferramenta**

- [x] Aplicar escala de cinza nas imagens antes de enviar para reconhecimento de caracteres;
- [x] Atualização para as versões mais atuais das bibliotecas Tesseract.js e Cropper.js;
- [ ] Configurar ESlint + Prettier;
- [ ] Tratamento específico para imagens com background transparente;
- [ ] Implementar pré-processador CSS ao invés de CSS puro;
- [ ] Melhoria automática no contraste das imagens.

**Outros**
- [ ] Pesquisa de experiência de utilização junto a um grupo de deficientes auditivos;
- [ ] Transformar em função padrão do **VLibras Widget**.

<br/>  

### 🛠️ Stack
  
  - JavaScript
  - HTML
  - CSS 
  - Webpack
  - Tesseract.js
  - Cropperjs
  - Image-js
  - Feather Icons

<br/>

### :camera: Screenshots

![image](https://user-images.githubusercontent.com/56923620/209585701-90d5550a-163a-4556-b209-98ad4cfc99dd.png)
<div align="center">
<i>Modal que é aberto ao clicar em uma imagem. Aqui o usuário faz a seleção de uma área da imagem para extração e tradução do texto em Libras. A utilização deste passo (levando em consideração que o usuário faça a seleção adequada de uma área da imagem com textos) aumenta a chance de acerto do algorítimo que realiza o reconhecimento de caracteres, o que não seria possível se a imagem completa fosse passada diretamente.</i>
</div>

#

![image](https://user-images.githubusercontent.com/56923620/209585793-1e3760ee-3f66-4936-a60f-a7f3cb01cbf6.png)
<div align="center">
<i>Imagens filhas de tags âncoras/links que, ao serem clicadas, fazem o redirecionamento do usuário, têm o redirecionamento do seu pai removido e é adicionado o tooltip "Acessar link" próximo ao seu bottom, assim, possibilitando o usuário clicar na imagem sem ser redirecionado pelo site e, caso queira acessar o link, pode clicar no tooltip.</i>
</div>
