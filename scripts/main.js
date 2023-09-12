
const introductionTitle = document.getElementsByClassName("header-title")[0];
const navLinks = document.querySelectorAll('.nav-link');

// Define a callback function to be executed when the target element enters or exits the viewport
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            
            // console.log('intersecting');
            // Element is now in the viewport
            // You can perform actions like loading an image, playing a video, etc.
            entry.target.classList.add('in-viewport'); // Add a CSS class, for example
            // observer.unobserve(entry.target); // Stop observing once it's in the viewport
        } else {
            // console.log('remove');
            // Element has exited the viewport
            entry.target.classList.remove('in-viewport'); // Remove the CSS class
        }
    });
}

// Create an Intersection Observer instance with the callback function
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // Margin around the root (in this case, none)
    threshold: 0.5, // 50% of the target element must be visible to trigger the callback
});

// Select the elements you want to observe using querySelectorAll
const sectionElements = document.querySelectorAll('.section-container');

// Iterate through the section elements and start observing each of them
sectionElements.forEach((section) => {
    observer.observe(section);
});

function handleClick(event) {
    // This function will be called when a nav-link element is clicked
    // You can access the clicked element using `event.target`
    // For example, you can get the href attribute of the clicked element like this:
    const href = event.target.getAttribute('href');

    // Now, you can perform any actions you want when a nav-link is clicked
    // For example, you can scroll to the corresponding section
    scrollToElement(href);

    // Prevent the default behavior of the link (e.g., navigating to a new page)
    event.preventDefault();
}

// Attach the click event listener to each nav-link element
navLinks.forEach(navLink => {
    navLink.addEventListener('click', handleClick);
});

const headerTexts = [
    `My name is\n Fenlianto Nanda Setiawan`,
    `I'm a passionate\n Full Stack Developer`,
];

const headerWithMarkTexts = [
    `My name is<mark class="name"><br> Fenlianto Nanda Setiawan</mark>`,
    `I'm a passionate <mark class="name"><br> Full Stack Developer</mark>`,
];

let currentIndex = 0;
let charIndex = 0;

let eraseMode = false;

function typeText() {
    if (charIndex < headerTexts[currentIndex].length) {
        var titleChar = headerTexts[currentIndex].charAt(charIndex);
 
        introductionTitle.textContent += titleChar;

        charIndex++;
        setTimeout(typeText, 35); 
    } else {
        introductionTitle.innerHTML = headerWithMarkTexts[currentIndex];
        // Typing finished, wait before erasing
        eraseMode = true;
        setTimeout(eraseText, 2000); // Adjust wait time before erasing
    }
}

function eraseText() {
    if(eraseMode){
        introductionTitle.textContent = headerTexts[currentIndex];
        eraseMode = false;
    }

    if (introductionTitle.textContent.length > 0) {
        introductionTitle.textContent = introductionTitle.textContent.slice(0, -1);
        setTimeout(eraseText, 25); // Adjust erasing speed (lower value for faster erasing)
    } else {
        // Erasing finished, move to the next text
        currentIndex = (currentIndex + 1) % headerTexts.length;
        charIndex = 0;
        setTimeout(typeText, 500); // Adjust wait time before typing the next text
        return
    }
}

function scrollToElement(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const navHeight = document.querySelector('nav').offsetHeight;
        console.log(navHeight);
        const targetOffset = targetElement.offsetTop - navHeight;
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth' // Use smooth scrolling for a nice effect
        });
    }
}

// Start the typing animation
typeText();
