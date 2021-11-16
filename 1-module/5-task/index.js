function truncate(str, maxlength) {
  if(str.length <= maxlength)
    return str;
  let substitute = "…";
  return str.slice(0, maxlength - substitute.length) + substitute;
}