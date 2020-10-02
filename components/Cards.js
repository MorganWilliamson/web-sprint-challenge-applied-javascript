// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

//javascript, bootstrap, technology, jquery, node.js

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        res.data.articles.javascript.forEach(obj => {
            cardMaker(obj);
        })
        res.data.articles.bootstrap.forEach(obj => {
            cardMaker(obj);
        })
        res.data.articles.technology.forEach(obj => {
            cardMaker(obj);
        })
        res.data.articles.jquery.forEach(obj => {
            cardMaker(obj);
        })
        res.data.articles.node.forEach(obj => {
            cardMaker(obj);
        })
    })
    .catch(error => {
        console.log(`Error! ${error}`);
    });


function cardMaker(object) {
    //Instantiating card elements (card(div), headline(div), author(div), imgContainer(div), img(img), span(span))
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')

    //Add classes to card elements (card, headline, author, imgContainer)
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    
    //Add text content and attributes to card elements
    headline.textContent = object.headline
    span.textContent = `By ${object.authorName}`
    
    img.src = object.authorPhoto

    //Append elements (headline and author to card, image to img-container. Come back to this.)
    card.append(headline)
    card.append(author)
    imgContainer.append(img)

    //Append card to DOM
    const cardContainer = document.querySelector('.cards-container')
    cardContainer.append(card);

    //return something
    return cardContainer
}

