import chroma from 'chroma-js'

/**
 * @typedef {(number[][]|string[])} Colors - colors input 
 */

/**
 * @typedef {object} Options - Base component's configuration object
 * @property {string} interpolation - 'linear' or 'bezier'
 * @property {string} mode - 'none', 'lch', 'lab', 'rgb', 'hsv', 'hsl', 'hsi', or 'hcl'
 * @property {number} samples - number of output colors
 * @property {boolean} lightnessCorrection - lightness correction applier
 */

/**
 * @class Base
 * @classdesc provides base array of gradient data
 * @param {Colors} colors - input colors as an array of rgb(a) number arrays or css rgb(a) strings
 * @param {Options} options - base configuration object
 */
export default class Base {
    constructor(colors, options) {
        this.colors = colors
        this.options = options
    }
}