export type CardType = {
  key: number;
  username: string;
  cardName: string;
  price: string;
  email: string;
  picture?: string;
};

const getCardList = (): CardType[] => {
  const cards: CardType[] = JSON.parse(
    localStorage.getItem("database") as string
  );
  return cards || [];
};

const postCardData = (card: CardType): void => {
  const cards: CardType[] =
    JSON.parse(localStorage.getItem("database") as string) || [];
  cards.push(card);

  localStorage.setItem("database", JSON.stringify(cards));
};

const getCardListByCardName = (cardName: string): CardType => {
  const cards: CardType[] = JSON.parse(
    localStorage.getItem("database") as string
  );

  return cards.find(
    (data: CardType) => data.cardName.toLowerCase() === cardName.toLowerCase()
  ) as CardType;
};

export { getCardList, postCardData, getCardListByCardName };
