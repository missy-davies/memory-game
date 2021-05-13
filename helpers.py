from faker import Faker 

fake = Faker()

def create_cards(num_cards):
    """Generate fake word and color for card"""

    cards = []

    for i in range(num_cards):
        color = fake.safe_color_name()
        # ensure color is never white so the font is legible 
        while color == 'white':
            color = fake.safe_color_name()
        word = fake.unique.word()
        cards.extend([{'id': str(i) + 'a',
                       'word': word,
                       'color': color},
                      {'id': str(i) + 'b',
                       'word': word,
                       'color': color}])
    return cards 
