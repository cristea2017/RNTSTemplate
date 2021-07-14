const fs = require('fs')
const fontFileNames = () => {
    const array = fs
        .readdirSync('src/assets/fonts')
        .map((file) => {
            return file.replace('.ttf', '')
        })
    return Array.from(new Set(array))
}
const generate = () => {
    const properties = fontFileNames()
        .map((name) => {
            const key = name.replace(/\s/g, '')
            return `${key.replace(/-+?/g, '_').toLowerCase()}: '${name}'`
        })
        .join(',\n  ')
    const string = `const fonts = {
  ${properties}
}
export default fonts
`
    fs.writeFileSync('App/utils/fonts.js', string, 'utf8')
}
generate()