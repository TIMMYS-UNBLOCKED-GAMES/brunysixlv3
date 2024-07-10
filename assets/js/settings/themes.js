        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });


        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setTheme(savedTheme, false);
            }
        }


        function setTheme(theme, save = true) {
            switch (theme) {
                case 'theme-ocean':
                    document.documentElement.style.setProperty('--navbar-color', '#272973');
                    document.documentElement.style.setProperty('--background-color', '#4043a8');
                    document.documentElement.style.setProperty('--cover-color', '#4043a8');
                    document.documentElement.style.setProperty('--select-color', '#fff');
                    document.documentElement.style.setProperty('--footer-background', '#272973');
                    break;
                default:
                    document.documentElement.style.setProperty('--navbar-color', '#000');
                    document.documentElement.style.setProperty('--background-color', '#000');
                    document.documentElement.style.setProperty('--cover-color', '#000');
                    document.documentElement.style.setProperty('--select-color', '#000');
                    document.documentElement.style.setProperty('--content-background', '#000');
                    document.documentElement.style.setProperty('--footer-background', '#000');
            }
            if (save) {
                localStorage.setItem('theme', theme);
            }
        }

        window.onload = loadTheme;
