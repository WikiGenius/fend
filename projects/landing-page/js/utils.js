// Author: Muhammed El-Yamani
// Website: https://muhammedelyamani.blogspot.com

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

        // Attach html content to the section
        new_secElem.innerHTML = html_content;
        // Append new section element to main element
        this.mainElement.appendChild(new_secElem);
    }
    create_NewNav() {
        // Create html content for navigation bar
        let html_content = `<li>
        <a href="#section${this.lastId}" class="menu__link"
        data-section-id="section${this.lastId}"
        id="nav${this.lastId}">Section ${this.lastId}</a></li>`
        // Create element
        this.list_menu.insertAdjacentHTML("beforeend", html_content);
    }

    addNewSection() {
        // create new section
        this.createNewSection();
        // create new navigation button
        this.create_NewNav();
    }
}

// helper function to make intital startup sections

function activeSection(mySections) {
    // loop over sections
    mySections.forEach(element => {
        let rect = element.getBoundingClientRect();
        // check there if there is new active section
        if (rect.top >= 0 && rect.top <= 200) {
            /*this desired section*/

            // the active section id
            section_id = element.id;
            // active the section 
            document.querySelector(`#${section_id}`).classList.add('your-active-class');
            // the active nav id
            nav_id = `nav${section_id.slice(7)}`;

            // active the nav 
            document.querySelector(`#${nav_id}`).classList.add('active_nav_element');

            if (active_section_id !== null) {
                // initial last section id
                last_section_id = active_section_id;
                // initial last nav id
                last_nav_id = `nav${last_section_id.slice(7)}`;
                if (section_id !== last_section_id) {
                    // deactive the last activated section 
                    document.querySelector(`#${last_section_id}`).classList.remove('your-active-class');
                    // deactive the last activated nav
                    document.querySelector(`#${last_nav_id}`).classList.remove('active_nav_element');
                }
            }
            // update the global active_section_id
            active_section_id = section_id;
        }
    })
}
