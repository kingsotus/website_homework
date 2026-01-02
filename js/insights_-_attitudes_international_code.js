
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#20c5c5",
                        "primary-dark": "#1aa3a3",
                        "accent-gold": "#d4af37",
                        "background-light": "#f6f8f8",
                        "background-dark": "#0f172a", // Dark Slate/Navy base
                        "surface-dark": "#1e293b", // Slightly lighter for cards
                        "surface-darker": "#020617", // Darker for footer/header
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "body": ["Inter", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "0.375rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px"},
                },
            },
        }
    

        function filterArticles(category, element) {
            // Update active state of buttons
            const buttons = document.querySelectorAll('.filter-chip');
            buttons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('bg-primary');
                btn.classList.remove('text-surface-darker');
                btn.classList.add('bg-white', 'dark:bg-surface-dark', 'text-slate-600', 'dark:text-slate-300');
            });
            
            // Add styles to clicked button
            element.classList.add('active');
            element.classList.remove('bg-white', 'dark:bg-surface-dark', 'text-slate-600', 'dark:text-slate-300');
            // Note: The specific active styles are handled by CSS class .active defined in head style tag for simplicity override

            const articles = document.querySelectorAll('.article-card');
            let visibleCount = 0;

            articles.forEach(article => {
                const categories = article.getAttribute('data-category');
                if (category === 'all' || categories.includes(category)) {
                    article.classList.remove('hidden');
                    article.classList.add('flex');
                    visibleCount++;
                } else {
                    article.classList.add('hidden');
                    article.classList.remove('flex');
                }
            });

            // Show no results message if needed
            const noResults = document.getElementById('no-results');
            if (visibleCount === 0) {
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
            }
        }
    