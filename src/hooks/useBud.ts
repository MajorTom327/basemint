export const useBud = (id: number) => {
  const budImage = `https://storage.googleapis.com/basemint-buds.appspot.com/BaseMint%20Buds%20-%20Updated/${id}.gif`
  // const budImage = `https://storage.googleapis.com/basemint-buds.appspot.com/${id}.gif`
  return {
    image: budImage
  };
}
