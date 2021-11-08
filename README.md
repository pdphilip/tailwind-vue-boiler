# Tailwind2 - Vue3 boilerplate using SCSS

## Set up and build workflow
___
### 1 - Installation 

```shell
git clone https://github.com/pdphilip/tailwind-vue-boiler.git MY_PROJECT
cd MY_PROJECT
npm install
```

Done!

### 2 - Dev

```shell
npm run watch
```

- This will build the assets (JS and CSS) in the `/public` folder
- You can link the HTML pages with those assets found in there


### 3 - Production assets build (minify and tailwind purge)
```shell
npm run prod
```

## Building front end
___
#### Configuring Tailwind

`tailwind.config.js`

Example, naming/defining own color classes:

```js
const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './public/**/*.html',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        gray: colors.blueGray,
        primary: colors.teal,
        secondary: colors.sky,
        success: colors.green,
        info: colors.purple,
        warning: colors.yellow,
        danger: colors.red,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

```
### [-> Config docs](https://tailwindcss.com/docs/configuration)
___
#### Custom CSS via SCSS
```text
.
└── /resources
    └── /scss
        ├── app.scss    <--- entry SCSS
        └── /components
            ├── /buttons.scss
            ├── /cards.scss
            ├── /elements.scss
            ├── /forms.scss
            ├── /typography.scss
            └── .......
```

___
#### JS (Optional)
```text
.
└── /resources
    └── /js
        └── app.js    <--- entry JS
```
Only used for https://heroicons.com/ in the boiler setup. In this initial setup you can use these icons with vue out of the box, the icons are SVG based and can have any style/class applied to them in the same was as any other DOM element

example for icon name `check`

```html
<check-icon class="h-8 w-8 text-red-500 hover:text-red-800"></check-icon>
```

example for icon name `chat-alt-2`
```html
<chat-alt-2-icon class="h-8 w-8 text-red-500 hover:text-red-800"></chat-alt-2-icon>
```
...etc
___


## Resources

- [Tailwind](https://tailwindcss.com/docs)
- [Hero Icons](https://heroicons.com/)


