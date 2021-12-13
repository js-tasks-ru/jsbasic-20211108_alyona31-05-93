function getMinMax(str) {
  let numbers = str.split(" ").filter((s)=>!isNaN(s)).map((s)=> Number(s));
  return {
    min: Math.min.apply(null, numbers),
    max: Math.max.apply(null, numbers)
  };
}
