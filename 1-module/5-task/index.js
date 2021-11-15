function truncate(str, maxlength) {
  // ваш код...
  if(str.length <= maxlength)
    return str;
  let substitute = "…";
  let sliced = str.slice(0, maxlength - substitute.length);
  return sliced + substitute;
}