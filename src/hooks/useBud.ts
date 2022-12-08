const noPowerUrl = (id: number): string => `https://storage.googleapis.com/basemint-buds.appspot.com/${id}.gif`
const withPowerUrl = (id: number): string => `https://storage.googleapis.com/basemint-buds.appspot.com/BaseMint%20Buds%20-%20Updated/${id}.gif`

export const useBud = (id: number, hasPower: boolean) => {
  const budImage = hasPower ? withPowerUrl(id) : noPowerUrl(id);
  return {
    image: budImage
  };
}
