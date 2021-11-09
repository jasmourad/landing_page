
/**
 *
 * DOM manipulation exercise. Build a dynamic landing page.
 *
 * Prerequisites:
 * HTML and CSS files provided.
 * Starter package obtained from https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page
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



//Defining global variables 


/** Invoking method (forEach) to add a list item for every section)
 * References: 
 * 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * 2. https://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript 
 * 3. https://stackoverflow.com/questions/61052045/how-to-create-a-nav-menu-li-using-javascript-and-how-to-scroll-smoothly-to-sect
 */



 const navMenu = document.querySelectorAll("page_header");
 const navList = document.getElementById("menu_list");
 const items = Array.document.getElementsByClassName('section');
 
 items.forEach((item, i) => {
   const el = document.createElement("a");
   el.innerText = item;
   el.classList.add("menu-items");
   el.setAttribute("id", `menu-${i + 1}`);
   el.href = `#section${i + 1}`;
   navList.appendChild(el);
 });
 
}

//Create a navigation bar based on retrieved attributes of querySelectorAll method




//Create a navigation bar based on the retrieved attribute names from sections (querySelectorAll method)


//Iterate through sections to create an unordered list




//Loop through each section to build an unordered list with anchor tags and the right attributes retrieved from data-nav.









//** Using forEach() method to iterate through each section stored in the documentFragment variable.
//
//Build navigation menu as unordered list with related anchors and list items.




// function createNavigationMenu() {
//     const documentFragment = document.createDocumentFragment();

//     navMenuSections.forEach((navMenu) => {
//         const listItem = document.createElement('a');
//         const anchorTag = document.createElement('li');
//         anchorTag.innerText = navMenu.getAttribute('data-nav');
//         anchorTag.setAttribute('class', 'menu-link');
//         listItem.appendChild(anchorTag);
//         documentFragment.appendChild(listItem);
//     });
//     navMenuList.appendChild(documentFragment);
// };









// elem.innerText = listItem.getAttribute('data-nav');
// anchorTag.setAttribute('id', 'menu-link');


// const anchorTag = document.createElement("a");
// const listItem = document.createElement("li");



// listItem.appendChild(anchorTag);
// menuSection.appendChild(listItem);
// navBarSection.appendChild(menuSection);










/** Function to check if element is in viewport. 
 * Reference and cred: https://gist.github.com/davidtheclark/5515733 (Approval given by Udacity to use this snippet) */

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 *
 */