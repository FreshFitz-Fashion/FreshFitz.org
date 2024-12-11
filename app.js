document.addEventListener('DOMContentLoaded', () => {
    // Navigation Scroll Effect
    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'var(--primary-dark)';
            nav.style.padding = '1rem 5%';
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.style.padding = '1.5rem 5%';
        }
    });

    // Filter Interaction
    const filterItems = document.querySelectorAll('.filter-item');
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            filterItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Scroll Indicator Animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('.product-grid').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Parallax Background Effect
    window.addEventListener('mousemove', (e) => {
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((el, index) => {
            const multiplier = index + 1;
            const x = (e.clientX * -1 * multiplier) / 100;
            const y = (e.clientY * -1 * multiplier) / 100;
            el.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Dynamic Cart Count (just for visual effect)
    const cartTrigger = document.querySelector('.cart-trigger');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    cartTrigger.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
        
        // Visual feedback
        cartCount.style.transform = 'scale(1.5)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    });
});