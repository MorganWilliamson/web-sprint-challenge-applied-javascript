// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

//request is returning an object containing five topics (javascript, bootstrap, technology, jquery, and node.js)
const topics = document.querySelector('.topics');

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
        res.data.topics.forEach(obj =>{
            //creating div for tab elements
            const tab = document.createElement('div');
            tab.classList.add('tab');
            
            //creating text content
            topics.textContent = `${obj}`;
            
            //applying text content to each tab
            topics.append(tab);
            
            return topics;
        })
    })
    .catch(error => {
        console.log(`Uh oh: ${error}`);
    });