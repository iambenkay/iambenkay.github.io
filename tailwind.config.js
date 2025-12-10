module.exports = {
    content: ["./templates/**/*.html", "./content/**/*.scss", "./templates/**/*.scss", "./styles/*.css"],
    variants: {},
    plugins: [],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Inter',
                    'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'Helvetica Neue', 'Arial'
                ]
            },
            colors: {
                slate: {
                    950: '#0b0c10'
                }
            },
            boxShadow: {
                soft: '0 20px 40px -20px rgba(0,0,0,0.2)'
            }
        }
    }
};