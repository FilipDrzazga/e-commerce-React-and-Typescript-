export const splitIntoChunks = <T>(arr: T[], chunk: number) => {
  let tempArr: Array<T[]> = [];
  while (arr.length > 0) {
    let splitChunk = arr.splice(0, chunk);
    tempArr.push(splitChunk);
  }
  return tempArr;
};
