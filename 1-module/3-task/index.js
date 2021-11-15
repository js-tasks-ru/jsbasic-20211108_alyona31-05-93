function ucFirst(str) {
  // ваш код...если строка не пустая, то делать преобразования,
  //иначе выводить её же без преобразований, просто return?
  if (str != null && str !== "" && str.trim() != "") {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return str;
  }
}