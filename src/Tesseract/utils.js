export function formattedText(text) {
  text = removeSymbols(text);
  text = text.replace(/\s{2,}/g, " ").replace(/[\r\n]/gm, " ");
  return text.toUpperCase().trim();
}

function removeSymbols(text) {
  let symbols = `'",._()[];|-—:~` + "`´";
  for (let s of symbols) text = text.replaceAll(s, "");
  return text;
}

export function contrastImage(imgData, contrast) {
  var d = imgData.data;
  contrast = contrast / 100 + 1;
  var intercept = 128 * (1 - contrast);
  for (var i = 0; i < d.length; i += 4) {
    d[i] = d[i] * contrast + intercept;
    d[i + 1] = d[i + 1] * contrast + intercept;
    d[i + 2] = d[i + 2] * contrast + intercept;
  }
  return imgData;
}
