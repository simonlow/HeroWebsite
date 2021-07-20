/**
 * Course: COMP 426
 * Assignment: a05
 * Author: <type your name here>
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
    // TODO: Copy your code from a04 to render the hero card
    let date = hero.firstSeen;
    return `<div class = "card" style = "background-color: ${hero.backgroundColor}" id = "${hero.id}_hero"> 
            <div class = "card-image">
                <figure>
                    <img src = "${hero.img}" alt = "hero picture"></img>
                </figure>
            </div>
            <div class = "card-content" style = "color: ${hero.color}">
                <h1>${hero.name}</h1>
                <h2 style = "color: grey"><i>"${hero.subtitle}"</i></h2>
                <p><b>Alter ego: </b>${hero.first} ${hero.last}</p>
                <p><b>First <span style = "color: grey">appearance: </span> </b>${hero.firstSeen}</p>
                <p> ${hero.description}</p>
                <button class = "edit-button" id = "${hero.id}">Edit</button>
            </div>
        </div>`
};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Copy your code from a04 to render the hero edit form
    let date = hero.firstSeen;
    return `<div class = "card" id = "${hero.id}_card">
        <div class = "card-image">
            <figure>
                <img src = "${hero.img}" alt = "hero picture"></img>
            </figure>
        </div>
        <div class = "card-content">
            <form>
                <div class="field">
                    <label class="label">Hero Name</label>
                    <div class="control" >
                        <input class="input" type="text" id = "name" value="${hero.name}">
                    </div>
                </div>
                <div class="field">
                    <label class="label">First Name</label>
                    <div class="control" >
                        <input class="input" type="text" id = "first" value="${hero.first}">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Last Name</label>
                    <div class="control" >
                        <input class="input" type="text" id = "last" value="${hero.last}">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Subtitle</label>
                    <div class="control" >
                        <input class="input" type="text" id = "subtitle" value="${hero.subtitle}">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control" >
                        <textarea class="textarea" id = "description" >${hero.description}</textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label" type = "firstSeen">First Seen Date</label>
                    <div class="control">
                        <textarea class="textarea" id = "firstSeen">${hero.firstSeen}</textarea>
                    </div>
                </div>
                <footer class = "button">
                    <button class = "cancel-button" type = "cancel" id = "${hero.id}">Cancel</button>
                    <button class = "submit-button" type = "submit" id = "${hero.id}"}>Submit</button>
                </footer>
            </form>
        </div>
    </div>`
};



/**
 * Handles the JavaScript event representing a user clicking on the "edit"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled 
 */
export const handleEditButtonPress = function(event) {
    // TODO: Render the hero edit form for the clicked hero and replace the
    //       hero's card in the DOM with their edit form instead
    //console.log("pressed");
    const $root = $('#root');
    let heroID = event.target.getAttribute("id");
    let hero = heroicData.find(h => h.id == heroID);
    $('#' + heroID + '_hero').replaceWith(renderHeroEditForm(hero));
    
    //$('#' + heroID + '_hero').remove();
    //$root.append(renderHeroEditForm(hero));
    
};
 


/** 
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleCancelButtonPress = function(event) {
    // TODO: Render the hero card for the clicked hero and replace the
    //       hero's edit form in the DOM with their card instead
    const $root = $('#root');
    let heroID = event.target.getAttribute("id");
    let hero = heroicData.find(h => h.id == heroID);
    $('#' + heroID + '_card').replaceWith(renderHeroCard(hero));
    //$('# + hero').remove(hero);
    //$root.append(renderHeroCard(hero));
};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditFormSubmit = function(event) {
    // TODO: Render the hero card using the updated field values from the
    //       submitted form and replace the hero's edit form in the DOM with
    //       their updated card instead
    const $root = $('#root');

    let heroID = event.target.getAttribute("id");
    let newHero = heroicData.find(h => h.id == heroID);
    newHero.first = $('#first').val();
    newHero.last = $('#last').val();
    newHero.name = $('#name').val();
    newHero.description = $('#description').val();
    newHero.subtitle = $('#subtitle').val();
    let newDate = new Date($('#firstSeen').val()); 
    newHero.firstSeen = newDate;

    $('#' + heroID + '_card').replaceWith(renderHeroCard(newHero));
};



/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()
    //       NOTE: Copy your code from a04 for this part
    
    let h = heroes.map(hero => renderHeroCard(hero));

    // TODO: Append the hero cards to the $root element
    //       NOTE: Copy your code from a04 for this part
    $root.append(h);

    // TODO: Use jQuery to add handleEditButtonPress() as an event handler for
    //  clicking the edit button
    $root.on("click", ".edit-button", handleEditButtonPress);

    // TODO: Use jQuery to add handleEditFormSubmit() as an event handler for
    //       submitting the form
    $root.on("click", ".submit-button", handleEditFormSubmit);

    // TODO: Use jQuery to add handleCancelButtonPress() as an event handler for
    //       clicking the cancel button
    $root.on("click", ".cancel-button", handleCancelButtonPress);

    return $root; 
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);

});
