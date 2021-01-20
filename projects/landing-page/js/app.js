// Author: Muhammed El-Yamani
// Website: https://muhammedelyamani.blogspot.com


/**
 * Define Global Variables
 *
*/
section = new Section();
active_section_id = null;
list_menu = document.querySelector("#navbar__list");
srcoll_Top_element = document.querySelector("#scrolToTop");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

init_sections = (num_sections) => {
    for (let i = 0; i < num_sections; i++) { section.addNewSection(); }
}
/**
 * End Helper Functions
 * Begin Events
 *
*/

// Add event listener to Add section button
clickHandler_button_addNewSection = () => {
    section.addNewSection();
    // update mySections
    mySections = document.querySelectorAll('section');
}
// Add event listener to go To Section
clickHandler_goToSection = (event) => {
    event.preventDefault();
    // grap section id from event target
    let section_id = event.target.dataset.sectionId;
    let section_elem = document.querySelector(`#${section_id}`);
    section_elem.scrollIntoView({ behavior: 'smooth' });

}
// Add event listener to go To top
clickHandler_goToTop = () => {
    window.scrollTo(0, 0);
}
// Add event listener to scroll
scrollHandler = () => {
    // active section
    activeSection(mySections)

    if ((window.scrollY / window.innerHeight) * 100 < 40) {
        srcoll_Top_element.classList.add('display_none');
    }
    else {
        srcoll_Top_element.classList.remove('display_none');

    }
    if ((window.scrollY / window.innerHeight) * 100 < 40) {
        list_menu.classList.add('display_none');

    }
    else {
        list_menu.classList.remove('display_none');
    }
}
// Modify behavior Event to scrol smooth to section
list_menu.addEventListener('click', clickHandler_goToSection);
document.addEventListener('scroll', scrollHandler);
srcoll_Top_element.addEventListener('click', clickHandler_goToTop);


// Intial number of sections
init_sections(4);
mySections = document.querySelectorAll('section');