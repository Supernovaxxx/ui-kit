// Record a given value into DOM root style
// @param {String} property - The custom property name to store value on
// @param {Any} value - The value to be stored
const set = setCustomProperty
export default function setCustomProperty(property, value){
    document.documentElement.style.setProperty(`--${property}`, String(value))
}


export function setScroll(){
    set('scroll-y', window.scrollY)
    set('scroll-x', window.scrollX)

    const offsetHeight = document.body.offsetHeight - window.innerHeight
    set('scroll-offsetHeight', offsetHeight)
    set('scroll-rate', window.scrollY / offsetHeight)
}

export function setWindow() {
    set('win-innerHeight', window.innerHeight)
    set('win-innerWidth', window.innerWidth)
}
