# vlibras-widget-ocr
Feature para a extração de textos em imagens e tradução em Libras em sites que utilizam o VLibras Widget

Como testar:

1) Copiei o script da feature já "buildado" em <a href="https://raw.githubusercontent.com/diegofrr/vlibras-widget-ocr/main/dist/bundle.js">/dist/bundle.js</a>;
2) Vá até um site que tenha o VLibras Widget. Ex.: <a href="https://www.gov.br/pt-br">gov.br</a>;
3) Inicie o VLibras Widget: clique no botão flutuante das mãozinhas ao lado direito da página;
4) Cole e execute o script do bundle.js dentro do seu console;

Obs.:
* Caso o console retorno algum erro relacionado ao navegador com histórico cheio, clique `CTRL + SHIF + P`, procure e execute a funcionalidade "Limpar histórico do console", após, cole e execute o script novamente.
* Execute também o script abaixo para evitar redirecionamento após clicar em imagens filhas de tags âncoras:
```javascript
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

```

5) Utilize a funcionalidade selecionando uma imagem do site que contenha textos.
