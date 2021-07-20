/**
 * Course: COMP 426
 * Assignment: a04
 * Author: Simon Low
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {
    // TODO: Generate HTML elements to represent the hero
    let date = hero.firstSeen;
    return `<div class = "card" style = "background-color: ${hero.backgroundColor}"> 
            <div class = "card-image">
                <figure>
                    <img src = "${hero.img}"></img>
                </figure>
            </div>
            <div class = "card-content" style = "color: ${hero.color}">
                <h1>${hero.name}</h1>
                <h2 style = "color: grey"><i>"${hero.subtitle}"</i></h2>
                <p><b>Alter ego: </b>${hero.first} ${hero.last}</p>
                <p><b>First <span style = "color: grey">appearance: </span> </b>${hero.firstSeen}</p>
                <p> ${hero.description}</p>
                <button class = "button">Edit</button>
            </div>
        </div>`

    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<div>${hero.name}</div>`;
};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Generate HTML elements to represent the hero edit form
    let date = hero.firstSeen;
    return `<div class = "card" id = ${hero.id}>
        <div class = "card-image">
            <figure>
                <img src = "${hero.img}"></img>
            </figure>
        </div>
        <div class = "card-content">
            <form>
                <div class="field">
                    <label class="label">Hero Name</label>
                    <div class="control">
                        <input class="input" type="text" value="${hero.name}">
                    </div>
                </div>
                <div class="field">
                    <label class="label">First Name</label>
                    <div class="control">
                        <input class="input" type="text" value="${hero.first}">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Last Name</label>
                    <div class="control">
                        <input class="input" type="text" value="${hero.last}">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Subtitle</label>
                    <div class="control">
                        <input class="input" type="text" value="${hero.subtitle}">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea class="textarea">${hero.description}</textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">First Seen Date</label>
                    <div class="control">
                        <textarea class="textarea">${hero.firstSeen}</textarea>
                    </div>
                </div>
                <footer class = "button">
                    <button class = "button">Cancel</button>
                    <button class = "button" type = "submit">Submit</button>
                </footer>
            </form>
        </div>
    </div>`
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<form>${hero.name}</form>`;
};



/**
 * Given an array of hero objects, this function converts the data into HTML and
 *     loads it into the DOM.
 * @param heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()
    let heroCards = $('<div class = "column is-multiline is-centered"/>');
    for(let i = 0; i < heroes.length; i++) {
        heroCards.append(renderHeroCard(heroes[i]));
    }
    // TODO: Append the hero cards to the $root element
    $root.addClass().append(heroCards);

    // Pick a hero from the list at random
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];

    // TODO: Generate the hero edit form using renderHeroEditForm()
    const edit = renderHeroEditForm(randomHero);

    // TODO: Append the hero edit form to the $root element
    $root.append(edit);
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);
});
