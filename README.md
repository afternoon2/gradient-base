# gradient.base.js

This module creates base gradient output for gradient.js modules.

## gradient.js
### Gradient creation library running in the browser 🖌🌈

Gradient maker is a javascript module that takes your source colors array and configuration object, and returns a gradient suitable for your needs.


## Usage
`Base.get` function takes 2 parameters: the colors array and the configuration object.
```javascript
const base = new Base()

const g = base.get(colors, options)
```

## Parameters
### Colors
Colors input should be an array of numbers in rgb or rgba format.

```javascript
[
    [0, 222, 31, 0.4],
    [12, 22, 34]
]
```

or array of css rgb(a) strings.

```javascript
[
    'rgba(0, 222, 31, 0.4)',
    'rgb(12, 22, 34)'
]
```

Please note, that input colors are the source for further creation of probably bigger amount of output colors, so try to insert max. 5 colors as an input for better visual effect.

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