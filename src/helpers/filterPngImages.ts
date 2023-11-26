export const filterPngImages = <T extends { image: string }>(arr: T[]) => {
  return arr.filter((item: T) => item.image.includes(".png"));
};
