// Ensure TypeScript compiles this file into `scripts.js` for browser compatibility.
// Install TypeScript and compile using `tsc scripts.ts --outDir static/js`

// Contact Form Validation
const form = document.querySelector<HTMLFormElement>("#contact form");
if (form) {
    form.addEventListener("submit", (event) => {
        const nameInput = document.querySelector<HTMLInputElement>("#name");
        const emailInput = document.querySelector<HTMLInputElement>("#email");
        const messageInput = document.querySelector<HTMLTextAreaElement>("#message");

        let isValid = true;

        if (!nameInput || !nameInput.value.trim()) {
            alert("Name is required.");
            isValid = false;
        }

        if (!emailInput || !/^\S+@\S+\.\S+$/.test(emailInput.value)) {
            alert("Please provide a valid email address.");
            isValid = false;
        }

        if (!messageInput || !messageInput.value.trim()) {
            alert("Message is required.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
}

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll<HTMLAnchorElement>("nav a");
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            targetElement?.scrollIntoView({ behavior: "smooth" });
        }
    });
});
 // Add TypeScript interactivity for better dropdown handling
const menuItems = document.querySelectorAll<HTMLLIElement>('.menu-item');

menuItems.forEach((menuItem) => {
    const link = menuItem.querySelector<HTMLAnchorElement>('a');
    const dropdown = menuItem.querySelector<HTMLUListElement>('.dropdown');

    if (link && dropdown) {
        // Toggle dropdown on hover
        link.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
        });

        link.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
        });

        // For better mobile accessibility, handle focus
        link.addEventListener('focus', () => {
            dropdown.style.display = 'block';
        });

        link.addEventListener('blur', () => {
            dropdown.style.display = 'none';
        });
    }
});


const trendingLinks = document.querySelectorAll<HTMLAnchorElement>('.trending ul li a');

trendingLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
        // Simulate fetching extra info for the article
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.textContent = 'Click to read the full article.';
        popup.style.position = 'absolute';
        popup.style.left = `${link.getBoundingClientRect().left}px`;
        popup.style.top = `${link.getBoundingClientRect().top - 30}px`;
        popup.style.backgroundColor = '#003366';
        popup.style.color = 'white';
        popup.style.padding = '5px 10px';
        popup.style.borderRadius = '5px';
        popup.style.fontSize = '0.8rem';

        document.body.appendChild(popup);

        link.addEventListener('mouseleave', () => {
            popup.remove();
        });
    });
});


