document.addEventListener('DOMContentLoaded', function() {

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️ Modo Claro';
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            darkModeToggle.textContent = '☀️ Modo Claro';
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            darkModeToggle.textContent = '🌙 Modo Noturno';
        }
    });

    const subtitleElement = document.querySelector('.subtitle');
    if(subtitleElement) {
        const text = subtitleElement.textContent;
        subtitleElement.textContent = ''; 
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                subtitleElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100); 
            }
        }
        
        typeWriter(); 
    }

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});