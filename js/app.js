
/**
 * 
 * DOM manipulation exercise. Build a dynamic landing page. 
 * 
 * Prerequisites:
 * files provided
 * 
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

/* Function to create an anchor link with appropriate values */
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

// Scroll to anchor ID using scrollTO function
function scrollToElement(event) {
    if (event.target == 'A') {
        const menu = document.getElementsByClassName('menu__Link');
        menu.scrollIntoView();
    }
}

// Add class 'active' to menuList item 

let menuItems = document.querySelectorAll('menu__link')

menuItems.forEach(newMenuListItem => {
    newMenuListItem.addEventListener('click', function setActiveClass() {
        if (menuItemInViewport(menuList[i])) {
            menuList[i].classList.add("your-active-class");
            menuList[i].classList.contains("your-active-class");
        } else {
            menuList[i].classList.remove("your-active-class");
        }
    });
});

const navBarMenu = document.getElementById('navbar__list')
navBarMenu.addEventListener('click', function (event) {
    scrollToElement(event)
})

// Call function to build the navigation menu 
createNavigation();