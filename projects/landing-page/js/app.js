/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Create section class 
class Section {
    constructor() {
        // property to track last id
        this.lastId = 0;
        // capture main element once in this class
        this.mainElement = document.querySelector("main");
        // capture #navbar__list element once in this class
        this.list_menu = document.querySelector("#navbar__list");
    }
    get HTML_Content() {
        // html content inside each section
        let html_content = `<div class="landing__container">
        <h2>Section ${this.lastId}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
          dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
          imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
          bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
          elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
          nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
          semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
          luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
          porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>`;
        return html_content;
    }
    createNewSection() {
        // increment lastId for each calling
        this.lastId += 1;
        // grab the html content that fill in each section
        let html_content = this.HTML_Content;
        // Create section element
        const new_secElem = document.createElement('section');
        /* set some attributes */
        // set id attribute
        new_secElem.setAttribute('id', `section${this.lastId}`);
        // set data attribute
        new_secElem.setAttribute('data-nav', `Section ${this.lastId}`);
        if (this.lastId === 1) {
            // set class attribute
            new_secElem.setAttribute('class', "your-active-class");
        }
        // Attach html content to the section
        new_secElem.innerHTML = html_content;
        // Append new section element to main element
        this.mainElement.appendChild(new_secElem);
    }
    create_NewNav() {
        // Create new list item
        const new_list = document.createElement("li");
        // Create new list anchor
        const new_anchor = document.createElement("a");
        // Set attribute ref to id section
        new_anchor.setAttribute('href', `#section${this.lastId}`);
        new_anchor.setAttribute('class', 'menu__link');

        // append new anchor to the new list
        new_list.appendChild(new_anchor);
        // Add text to the new list
        new_anchor.textContent = `Section ${this.lastId}`;
        // append new list to the list menue
        this.list_menu.appendChild(new_list);
    }
    addNewSection() {
        this.createNewSection();
        this.create_NewNav();
    }

}

/**
 * Define Global Variables
 *
*/
section = new Section();
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// helper function to make intital startup sections
function init_sections(num_sections) {
    for (let i = 0; i < num_sections; i++) { section.addNewSection(); }
}
function clickHandler_section()
{
    section.addNewSection();
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// Intial number of sections
init_sections(4);

// test
const elem = document.querySelector('#section3');
console.log(elem.dataset.nav)
