import { BannerCarousel } from "../BannerCarousel";
import { Card } from "../Card";
import { SearchBar } from "../SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { addCard, removeCard } from "@store/cardCollectionSlice";
import cardBg from "@assets/imgs/dapp/card.png";
import { CardList } from "../CardList";
import classNames from "classnames";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const Marketplace = () => {
  const view = useSelector((state) => state.view.view);
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const handleOnSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const filteredCards = useMemo(() => {
    return cards.filter(
      (card) =>
        card.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        card.ownerId.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [cards, searchValue]);

  useEffect(() => {
    // fetch data
    dispatch(
      addCard({
        id: 1,
        title: "Card 1",
        ownerId: "ownerId 1",
        price: "0.13434",
        img: cardBg,
      }),
    );
    dispatch(
      addCard({
        id: 2,
        title: "Card 2",
        ownerId: "ownerId 2",
        price: "0.1345678",
        img: cardBg,
      }),
    );
    dispatch(
      addCard({
        id: 3,
        title: "Card 3",
        ownerId: "ownerId 3",
        price: "0.13467",
        img: cardBg,
      }),
    );
    dispatch(
      addCard({
        id: 4,
        title: "Card 4",
        ownerId: "ownerId 4",
        price: "0.1345436",
        img: cardBg,
      }),
    );
    dispatch(
      addCard({
        id: 5,
        title: "Card 5",
        ownerId: "ownerId 5",
        price: "0.134456",
        img: cardBg,
      }),
    );
    dispatch(
      addCard({
        id: 6,
        title: "Card 6",
        ownerId: "ownerId 6",
        price: "0.134456",
        img: cardBg,
      }),
    );
  }, []);
  return (
    <>
      <BannerCarousel />
      <SearchBar onSearchChange={handleOnSearchChange} />
      <div
        className={classNames("flex flex-row flex-wrap", {
          "gap-x-6 gap-y-10": view === "grid",
        })}
      >
        {view === "grid" &&
          filteredCards.map((card, i) => (
            <Link to={`/marketplace/${card.id}`} key={card.id}>
              <Card
                title={card.title}
                ownerId={card.ownerId}
                price={card.price}
                img={card.img}
              />
              </Link>
          ))}

        {view === "list" && (
          <div className="bg-neutral-900/opacity-90 inline-flex w-full flex-col rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2">
            <CardList
              title={"card.title"}
              ownerId={"card.ownerId"}
              price={"card.price"}
              img={"card.img"}
              isTitle
              removeBottomBorder
            />

            {filteredCards.map((card, i) => (
              <CardList
                key={card.id}
                title={card.title}
                ownerId={card.ownerId}
                price={card.price}
                img={card.img}
                removeBottomBorder={i === filteredCards.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Marketplace;
