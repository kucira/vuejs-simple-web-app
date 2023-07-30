export type CardType = {
  key: number;
  username: string;
  cardName: string;
  price: string;
  email: string;
  picture?: string;
};

const getCardList = (): any[] => {
  return [];
};

const postCardData = (card: any): void => {
};

const getCardListByCardName = (cardName: string): any => {
};

export { getCardList, postCardData, getCardListByCardName };
