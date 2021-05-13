function PlayArea() {
	const [cardData, updateCardData] = React.useState([]);
	const [cardsInPlay, updateCardsInPlay] = React.useState([]);

	React.useEffect(() => {
		fetch('/cards.json')
			.then((res) => res.json())
			.then((data) => updateCardData(data));
	}, []);

	updateCardsInPlay(cardData.slice(0, 16));

	return (
		<React.Fragment>
			{/* {cardData.map((card) => {
				<Card key={card.id} color={card.color} word={card.word} />;
			})} */}
			<Card id='1' color='red' word='oggi' />
			<Card id='2' color='green' word='ciao' />
		</React.Fragment>
	);
}
