const SPAM_WORDS = ["1xbet", "xxx"];

function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  for(let word of SPAM_WORDS) {
    if (lowerStr.includes(word))
      return true;
  }
  return false;
}
