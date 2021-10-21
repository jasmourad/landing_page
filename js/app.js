
/**
 * 
 * DOM manipulation exercise. Build a dynamic landing page. 
 * 
 * Prerequisites:
 * HTML and CSS code provided
 * 
 * 
 * Main requirements:
 * Structure of files according to below:
 *  css
    - styles.css    
    index.html
    js
    - app.js
    README.md
 * There are at least 4 sections that have been added to the page.
 * Navigation built dynamically as unordered list.
 * Clarity on which section is being viewed.
 * Link should directly scroll to appropriate section, when clicked.
 * 
 * 
*/

/* Declare variables for the fictive document and menu list to retrieve and store variables as unordered list */
const container = document.createDocumentFragment();
const menuList = document.getElementsByTagName('section');

/* Function to create the navigation menu as a clickable link */
function navigationLink(id, name) {
    const navLink = `<a class="menu__link" href="#${id}">${name}</a>`;
    return navLink;
}

/* Function for the navigation list, built as an unordered list */
function createNavigation() {
    for (let i = 0; i < menuList.length; i++) {
        const newMenuListItem = document.createElement('li');
        const menuListName = menuList[i].getAttribute('data-nav')
        const menuListID = menuList[i].getAttribute('id')
        newMenuListItem.innerHTML = navigationLink(menuListID, menuListName)
        container.appendChild(newMenuListItem);
    }
    /* Retrieve the id from the ul section to be added to the document fragment: container */
    const navBarMenu = document.getElementById('navbar__list')
    navBarMenu.appendChild(container);
}

function menuItemInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Add class 'active' to menuList when near top of viewport
function setActiveClass() {
    for (let i = 0; i < menuList.length; i++) {
        if (menuItemInViewport(menuList[i])) {
            menuList[i].classList.add("your-active-class");
        } else {
            menuList[i].classList.remove("your-active-class");
        }
    }
}

// Scroll to anchor ID using scrollTO function
function scrollToElement(event) {
    if (event.target == 'A') {
        const menu = document.getElementsByClassName('menu__Link');
        menu.scrollIntoView();
    }
}

document.addEventListener('scroll', function () {
    setActiveClass();
});

const navBarMenu = document.getElementById('navbar__list')
navBarMenu.addEventListener('click', function (event) {
    scrollToElement(event)
})

// Build menu 
createNavigation();

