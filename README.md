# gradient-base.js

This module creates base gradient output for gradient.js modules.

## Table of contents
* [gradient.js](#gradient.js)
* [Usage](#usage)
* [Parameters](#parameters)
    * [Colors](#colors)
    * [Options](#options)
    * [Opacity](#opacity)

---
## gradient.js
### Gradient creation library running in the browser 🖌🌈

gradient.js is a javascript module that takes your source colors array and configuration object, and returns a gradient suitable for your needs.

---
## Usage
`Base.get` function takes 2 parameters: the colors array and the configuration object.
```javascript
const base = new Base()

const g = base.get(colors, options)
// [[0,222,31,0.4],[1.3265624999999999,199.890625,31.331640625,0.466328125], (...)]
```

## Parameters
### Colors
Colors input should be an array of numbers in rgb or rgba format or array of css rgb(a) strings.

### Options

Options object stands for the basic settings of the gradient creation, mandatory for the chroma-js library. Its interface looks like below:

```typescript
{
    interpolation: 'linear' | 'bezier'
    mode: 'none' | 'lch' | 'lab' | 'rgb' | 'hsv' | 'hsl' | 'hsi' | 'hcl'
    samples: number
    lightnessCorrection: boolean
}
```
The `mode` entry is ommited when the `interpolation` is set to `bezier`.

Usefullness of setting the lightness correction to `true` (combined with the `bezier` interpolation) is [very well described by Gregor Aisch here](https://www.vis4.net/blog/2013/09/mastering-multi-hued-color-scales/).

The `samples` stand for the number of the output colors. The more you set, the nicer gradient you get (but with worse performance of course).

## Opacity
Alpha values will be not preserved in the output if the `interpolation` will be set to the `bezier` value.