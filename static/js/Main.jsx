function Main() {
	const [playing, updatePlaying] = React.useState(false);
	const [deck, updateDeck] = React.useState([]);
	const [cardsInPlay, updateCardsInPlay] = React.useState([]);

	React.useEffect(() => {
		fetch('/cards.json')
			.then((res) => res.json())
			.then((data) => updateDeck(data));
	}, []);

	function initialDeal() {
		updatePlaying(true);
		updateCardsInPlay(deck.slice(0, 16));
		updateDeck(deck.slice(16, deck.length));
	}

	let nullCount = 0;
	for (const card of cardsInPlay) {
		if (card === null){
			nullCount ++;
		}
	}

	if (playing) {
		return (
			<React.Fragment>
				<p id='deck-count'>{deck.length} Cards Left in Deck</p>
				<p id='table-count'>{cardsInPlay.length - nullCount} Cards on Table</p>
				<PlayArea
					deck={deck}
					updateDeck={updateDeck}
					cardsInPlay={cardsInPlay}
					updateCardsInPlay={updateCardsInPlay}
				/>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<button onClick={initialDeal}>Deal</button>
			</React.Fragment>
		);
	}
}
