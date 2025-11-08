/**
 * NyxCrest Inc. - Website JavaScript
 * Handles navigation, forms, and interactive elements
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (mobileMenuToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle actual anchor links, not just "#"
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===================================
    // Contact Form Handling
    // ===================================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Simulate form submission (in real implementation, send to server)
            console.log('Form submitted:', data);
            
            // Show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // In a real implementation, you would send the data to a server:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error submitting your form. Please try again.');
            });
            */
        });
    }
    
    // ===================================
    // Newsletter Form Handling
    // ===================================
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Simulate newsletter signup
            console.log('Newsletter signup:', email);
            
            // Show success message
            alert('Thank you for subscribing! You will receive our latest updates.');
            emailInput.value = '';
            
            // In a real implementation:
            /*
            fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            })
            .then(response => response.json())
            .then(data => {
                alert('Thank you for subscribing!');
                emailInput.value = '';
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error. Please try again.');
            });
            */
        });
    });
    
    // ===================================
    // Navbar Scroll Effect
    // ===================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===================================
    // Animated Counter for Stats
    // ===================================
    const statNumbers = document.querySelectorAll('.stat-number, .result-number');
    
    const animateCounter = (element) => {
        const target = element.textContent;
        
        // Check if it's a percentage or number
        const isPercentage = target.includes('%');
        const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));
        
        if (isNaN(numericValue)) return;
        
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepValue = numericValue / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += stepValue;
            if (current >= numericValue) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                if (isPercentage) {
                    element.textContent = Math.floor(current) + '%';
                } else if (target.includes('.')) {
                    element.textContent = current.toFixed(1);
                } else {
                    element.textContent = Math.floor(current);
                }
            }
        }, duration / steps);
    };
    
    // Intersection Observer for stats animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // ===================================
    // Fade-in Animation on Scroll
    // ===================================
    const fadeElements = document.querySelectorAll('.solution-card, .value-card, .team-member, .news-card, .feature-detailed');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100); // Stagger the animation
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(element);
    });
    
    // ===================================
    // Form Validation Enhancement
    // ===================================
    const formInputs = document.querySelectorAll('input[required], select[required], textarea[required]');
    
    formInputs.forEach(input => {
        // Add validation on blur
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = '#e53e3e';
            } else {
                this.style.borderColor = '#38a169';
            }
        });
        
        // Reset border on focus
        input.addEventListener('focus', function() {
            this.style.borderColor = '#3182ce';
        });
        
        // Reset border on input
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.style.borderColor = '#e2e8f0';
            }
        });
    });
    
    // Email validation
    const emailInputs = document.querySelectorAll('input[type="email"]');
    
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.style.borderColor = '#e53e3e';
                
                // Show error message if it doesn't exist
                let errorMsg = this.parentElement.querySelector('.error-message');
                if (!errorMsg) {
                    errorMsg = document.createElement('span');
                    errorMsg.className = 'error-message';
                    errorMsg.style.color = '#e53e3e';
                    errorMsg.style.fontSize = '0.875rem';
                    errorMsg.style.marginTop = '0.25rem';
                    errorMsg.textContent = 'Please enter a valid email address';
                    this.parentElement.appendChild(errorMsg);
                }
            } else if (this.value) {
                this.style.borderColor = '#38a169';
                
                // Remove error message
                const errorMsg = this.parentElement.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        });
    });
    
    // ===================================
    // Back to Top Button (Optional)
    // ===================================
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--accent-color);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(backToTopButton);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    backToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // ===================================
    // Loading Animation
    // ===================================
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // ===================================
    // Team Member Photo Fallback
    // ===================================
    const memberPhotos = document.querySelectorAll('.member-photo');
    
    memberPhotos.forEach(photo => {
        // If image fails to load, hide it and show avatar
        photo.addEventListener('error', function() {
            this.style.display = 'none';
            const avatar = this.nextElementSibling;
            if (avatar && avatar.classList.contains('member-avatar')) {
                avatar.style.display = 'flex';
            }
        });
        
        // If image loads successfully, show it and hide avatar
        photo.addEventListener('load', function() {
            if (this.complete && this.naturalHeight !== 0) {
                this.style.display = 'block';
                const avatar = this.nextElementSibling;
                if (avatar && avatar.classList.contains('member-avatar')) {
                    avatar.style.display = 'none';
                }
            }
        });
    });
    
    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%c NyxCrest Inc. ', 'background: #1a365d; color: white; font-size: 20px; padding: 10px;');
    console.log('%c Safety Through Vigilance ', 'color: #3182ce; font-size: 14px;');
    console.log('Website developed for community safety initiatives.');
    
});
