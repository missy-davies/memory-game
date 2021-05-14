function PlayArea({ deck, updateDeck, cardsInPlay, updateCardsInPlay }) {
	const [selectedCards, updateSelectedCards] = React.useState([]);

	React.useEffect(() => {
		let setOfCards = new Set(cardsInPlay);
		if (setOfCards.size === 1 && setOfCards.has(null)) {
			alert('YOU WIN!!!!🎉');
		}
	}, [cardsInPlay]);

	function selectCard(card) {
		// select 1, then check a second selection
		if (selectedCards.length < 2) {
			// keep track of what we've selected
			let selected = [];
			// ... -> 'spread operator'
			selected = [...selectedCards, card];
			updateSelectedCards(selected);
			console.log('selectedCards', selectedCards);
			if (selected.length === 2) {
				// check card.word matches a previous selection
				if (selected[0].word === selected[1].word) {
					console.log('found match', selected[0].word);
					setTimeout(() => removeValidPair(selected), 1000);
				} else {
					setTimeout(() => updateSelectedCards([]), 1000);
				}
			}
		}
	}

	function removeValidPair(pairOfCards) {
		const replacementCards = [];
		const numNewCards = 16 - cardsInPlay.length + 2;
		const newCards = deck.slice(deck.length - numNewCards);
		// deck.length = 60 -> slice from 58 to end

		for (const card of cardsInPlay) {
			// iterate over all cards in play and check
			// if they are the ones to keep or change
			if (pairOfCards.includes(card)) {
				if (newCards.length > 0) {
					// update the cards in play -> remove the pair
					replacementCards.push(newCards.pop());
				} else {
					replacementCards.push(null);
				}
			} else {
				replacementCards.push(card);
			}
		}
		// get a new pair of cards out of the deck
		updateDeck(deck.slice(0, deck.length - numNewCards));
		// put the new cards into play
		updateCardsInPlay(replacementCards);
		// setTimeout(() => updateSelectedCards([]), 1000);
		updateSelectedCards([]);
	}

	return (
		<div id='play-area'>
			{cardsInPlay.map((card) =>
				card ? (
					<Card
						key={card.id}
						color={card.color}
						word={card.word}
						isSelected={selectedCards.includes(card)}
						onClick={
							selectedCards.includes(card) ? null : () => selectCard(card)
						}
					/>
				) : (
					<div className='card' />
				)
			)}
		</div>
	);
}
