
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#20c5c5", // Turquoise/Teal
                        "accent": "#d4af37", // Soft Gold
                        "background-light": "#f0f4f4",
                        "background-dark": "#121717", // Dark Slate/Navy base
                        "surface-dark": "#1a2323", // Slightly lighter for cards
                        "border-dark": "#2a3737",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "sans": ["Inter", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    