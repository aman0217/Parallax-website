window.addEventListener('scroll', function() {
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        }
    });
});
window.addEventListener('scroll', function() {
    const contentSections = document.querySelectorAll('.content2');
    contentSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        }
    });
});window.addEventListener('scroll', function() {
    const contentSections = document.querySelectorAll('.content3');
    contentSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        }
    });
});
window.addEventListener('scroll', function() {
    const contentSections = document.querySelectorAll('.content4');
    contentSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        }
    });
});
window.addEventListener('scroll', function() {
    const contentSections = document.querySelectorAll('.content5');
    contentSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        }
    });
});
window.addEventListener('scroll', function() {
    const contentSections = document.querySelectorAll('.content6');
    contentSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        }
    });
});
window.addEventListener('scroll', function() {
    const contentSections = document.querySelectorAll('.content7');
    contentSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        }
    });
});
window.addEventListener('scroll', function() {
    const contentSections = document.querySelectorAll('.content8');
    contentSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        }
    });
});
window.addEventListener('scroll', function() {
    const contentSections = document.querySelectorAll('.content9');
    contentSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
        }
    });
});
window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressHeight = (window.scrollY / totalHeight) * 100;
    document.getElementById('progress-bar').style.width = progressHeight + '%';
});






