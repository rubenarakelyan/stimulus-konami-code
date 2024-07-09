# @rubenarakelyan/stimulus-konami-code

[![CI][ci-badge]][ci]
[![npm][npm-badge]][npm]

[@rubenarakelyan/stimulus-konami-code][npm] is a [Stimulus](https://stimulus.hotwired.dev/) controller to implement the
[Konami code](https://en.wikipedia.org/wiki/Konami_Code) on a website.

## Usage

Register the controller in your application:

```javascript
import { Application } from "@hotwired/stimulus"
import KonamiCode from "@rubenarakelyan/stimulus-konami-code"

const application = Application.start()
application.register("konami-code", KonamiCode)
```

Next, define a callback function that will be called whenever the correct keyboard sequence is entered:

```javascript
function konamiCodeCallback(target) {
  // `target` is the `<body>`
}

Object.assign(window, { konamiCodeCallback })
```

Then, add the required Stimulus data attributes to your page:

```html
<html data-controller="konami-code" data-konami-code-callback-value="konamiCodeCallback">
  ...
  <body data-action="keydown->konami-code#keydown">
  </body>
  ...
</html>
```

Now, visit the page and enter the Konami code (&uarr; &uarr; &darr; &darr; &larr; &rarr; &larr; &rarr; b a).
Your `konamiCodeCallback` function will run.

## Licence

[MIT licence](LICENSE).

[ci-badge]: https://github.com/rubenarakelyan/stimulus-konami-code/actions/workflows/ci.yml/badge.svg
[ci]: https://github.com/rubenarakelyan/stimulus-konami-code/actions/workflows/ci.yml
[npm-badge]: https://badge.fury.io/js/rubenarakelyan%2Fstimulus-konami-code.svg
[npm]: https://www.npmjs.com/package/@rubenarakelyan/stimulus-konami-code
