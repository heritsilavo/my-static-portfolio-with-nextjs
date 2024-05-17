export function senDtheme(theme) {
    localStorage.setItem('theme-value',theme)    
}

export function getTheme() {
    return localStorage.getItem("theme-value")
}