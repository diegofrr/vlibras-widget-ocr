# vlibras-widget-ocr

Feature para a extração de textos em imagens e tradução em Libras em sites que utilizam o VLibras Widget

### Sobre
O <b>VLibras Widget</b> faz parte do conjunto de ferramentas da suíte <b>VLibras</b> que tem como intuito traduzir conteúdos digitais em Português para Libras. Atualmente, sites que utiliza o Widget fornecem aos usuários a possiblidade de traduzirem para Libras os elementos de textos presentes no HTML na página, como por exemplo: títulos (h1, ..., h6), parágrafos (p), âncoras (a) e etc... Apesar da solução possibilitar o acesso à tradução da maior parte dos textos no site, existem outros que ficam fora desta solução - estes são os textos presentes em imagens.

Com o intuito de aumentar ainda mais o acesso à comunidade surda, esta feature em questão agrega aos usuários a possibilidade de traduzir também os textos dentro das imagens utilizando uma tecnologia de reconhecimento de caracteres (OCR) fornecida por uma biblioteca JavaScript open-source, esta, a Tesseract.js - uma implementação "traduzida" para JavaScript utilizando WebAssembly da biblioteca original Tesseract que é escrita na linguagem C.

...

### Como testar
1. Copie o script da feature já "buildado" em <a href="https://raw.githubusercontent.com/diegofrr/vlibras-widget-ocr/main/dist/bundle.js">/dist/bundle.js</a>;
2. Vá até um site que tenha o VLibras Widget. Ex.: <a href="https://www.gov.br/pt-br">gov.br</a>;
3. Cole e execute o script do bundle.js dentro do seu console;
4. Inicie o VLibras Widget: clique no botão flutuante das mãozinhas ao lado direito da página;
5. Utilize a funcionalidade selecionando uma imagem do site que contenha texto.

Obs.:
- <b>Após o passo 3</b>, caso obtenha o erro relacionado ao histórico do console cheio, clique `CTRL + SHIF + P`, procure e execute a funcionalidade "Limpar histórico do console", logo após, cole e execute o script novamente.
