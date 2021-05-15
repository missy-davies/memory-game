# React Memory Game 
## Overview
React Memory Game is a version of the classic 'memory' card matching game where
players attempt to match pairs of cards by turning two at a time. 

As pairs of cards are made, the cards are removed from the deck until the 
deck of cards is depleted and you win! 

To restart the game, hard reload your browser (on mac: cmd+shift+R). 

## Features 
- Deal Cards
- Make matches
- keep track of # cards left in the deck and on the table 
![Make word matches for classic memory game](/static/img/features/play.gif)

## Technologies
- JavaScript
- React
- Python 
- Flask
- HTML
- CSS

## Getting Started  
To download and use React Memory Game please follow these instructions:
1. In your terminal, `git clone` this repository 
2. Navigate to the directory with `cd memory-game`
3. Create a virtual environment with `virtualenv env`
4. Activate the virtual environment with `source env/bin/activate`
6. Install all requirements with `pip3 install -r requirements.txt`
7. Finally, launch the server with `python3 server.py`
8. Open http://localhost:5000/ to view the site!

## Coming Soon...
A few ideas of features to add in the future: 
[] Remove card placeholders on table when cards run out 
[] Add re-deal button at end with win alert 