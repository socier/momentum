// https://www.ef.com/wwen/english-resources/english-quotes/famous/
const quotes = [
  ["A rose by any other name would smell as sweet.", "William Shakespeare"],
  ["All that glitters is not gold.", "William Shakespeare"],
  ["All the world’s a stage, and all the men and women merely players.", "William Shakespeare"],
  ["Ask not what your country can do for you; ask what you can do for your country.", "John Kennedy"],
  ["Ask, and it shall be given you; seek, and you shall find.", "the Bible"],
  ["Eighty percent of success is showing up.", "Woody Allen"],
  ["Elementary, my dear Watson.", "Sherlock Holmes (character)"],
  ["For those to whom much is given, much is required.", "the Bible"],
  ["Frankly, my dear, I don't give a damn.", "Rhett Butler (character)"],
  ["Genius is one percent inspiration and ninety-nine percent perspiration.", "Thomas Edison"],
  ["Go ahead, make my day.", "Harry Callahan (character)"],
  ["He travels the fastest who travels alone.", "Rudyard Kipling"],
  ["Hell has no fury like a woman scorned.", "William Congreve"],
  ["Hell is other people.", "Jean-Paul Sartre"],
  ["Here's looking at you, kid.", "Rick Blaine (character)"],
  ["Houston, we have a problem.", "Jim Lovell (character)"],
  ["I have always depended on the kindness of strangers.", "Blanche Dubois (character)"],
  ["I love the smell of napalm in the morning.", "Lt. Kilgore (character)"],
  ["I think therefore I am.", "Rene Descartes"],
  ["If at first you don’t succeed, try, try again.", "W. E. Hickson"],
  ["If you are going through hell, keep going.", "Winston Churchill"],
  ["If you build it, they will come.", "Joe Jackson (character)"],
  ["If you want something done right, do it yourself.", "Charles-Guillaume Étienne"],
  ["If you want something said, ask a man; if you want something done, ask a woman.", "Margaret Thatcher"],
  ["I'll be back.", "Terminator (character)"],
  ["I'm gonna make him an offer he can't refuse.", "Vito Corleone (character)"],
  ["I've got a feeling we're not in Kansas anymore.", "Dorothy (character)"],
  ["Keep your friends close, but your enemies closer.", "Michael Corleone (character)"],
  ["Knowledge is power.", "Sir Francis Bacon"],
  ["Life is like a box of chocolates. You never know what you’re gonna get.", "Forrest Gump (character)"],
  ["Life is like riding a bicycle. To keep your balance, you must keep moving.", "Albert Einstein"],
  ["May the Force be with you.", "Star Wars (many characters)"],
  ["No one can make you feel inferior without your consent.", "Eleanor Roosevelt"],
  ["Not all those who wander are lost.", "J. R. R. Tolkein"],
  ["Nothing is certain except for death and taxes.", "Benjamin Franklin"],
  ["Parting is such sweet sorrow", "William Shakespeare"],
  ["Power corrupts; absolute power corrupts absolutely.", "John Dalberg-Acton"],
  ["Speak softly and carry a big stick", "Theodore Roosevelt"],
  ["That’s one small step for a man, a giant leap for mankind.", "Neil Armstrong"],
  ["The love of money is the root of all evil.", "the Bible"],
  ["The only thing we have to fear is fear itself.", "Franklin D. Roosevelt"],
  ["The truth will set you free.", "the Bible"],
  ["There's no place like home.", "Dorothy (character)"],
  ["Three can keep a secret, if two of them are dead.", "Benjamin Franklin"],
  ["Tis better to have loved and lost than never to have loved at all.", "Alfred Lord Tennyson"],
  ["To be or not to be, that is the question.", "William Shakespeare"],
  ["To err is human; to forgive, divine.", "Alexander Pope"],
  ["To thine own self, be true.", "William Shakespeare"],
  ["United we stand, divided we fall.", "Aesop"],
  ["What doesn't kill us makes us stronger.", "Friedrich Nietzsche"],
  ["What we've got here is failure to communicate. Some men you just can't reach.", "Captain (character)"],
  ["Whatever you are, be a good one.", "Abraham Lincoln"],
  ["You must be the change you wish to see in the world.", "Mahatma Ghandi"],
  ["You talkin' to me?", "Bickle (character)"]
];

const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");

function displayQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];

  quoteText.innerText = quote[0];
  quoteAuthor.innerText = quote[1];
}

displayQuote();
setInterval(displayQuote, 5000);
