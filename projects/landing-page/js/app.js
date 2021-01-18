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
    addNewSection() {
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


section.addNewSection();
section.addNewSection();
section.addNewSection();
section.addNewSection();