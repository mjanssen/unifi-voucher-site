module.exports = {
    mode: 'jit',
    content: ["./template/**/*.{html,js,ejs}"],
    darkMode: 'media',
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/forms'),
        require("tailwindcss-text-fill")
    ]
};
