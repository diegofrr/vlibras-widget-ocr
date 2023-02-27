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