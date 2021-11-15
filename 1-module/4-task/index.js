function checkSpam(str) {
  // ваш код...
  let spamWords = ["1xbet", "xxx"];
  var lowerStr = str.toLowerCase();
  for(let word of spamWords) {
    if (lowerStr.includes(word))
      return true;
  }

  return false;
}
