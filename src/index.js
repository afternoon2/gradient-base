import chroma from 'chroma-js'

/**
 * @typedef {(number[][]|string[])} Colors - colors input 
 */

/**
 * @typedef {object} Options - Base component's configuration object
 * @property {string} interpolation - 'linear' or 'bezier'
 * @property {string} [mode] - 'none', 'lch', 'lab', 'rgb', 'hsv', 'hsl', 'hsi', or 'hcl' (only for linear interpolation)
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
        this.colors = this._checkColorsType(colors)
        this.options = options
    }

    /**
     * @returns {number[][]} base colors array
     */
    get() {
        const scale = this._createScale()
        return this._normalize(
            this._createBase(scale)
        )
    }

    /**
     * Checks the type of the colors input. 
     * It throws an error if the array is mixed typed
     * and returns array of arrays of numbers if the input is valid
     * @param {Colors} colors 
     * @returns {(number[][]|void)}
     * @private
     */
    _checkColorsType(colors) {
        const containsNum = colors
            .findIndex(color => Array.isArray(color) && typeof color[0] === 'number')

        const containsString = colors
            .findIndex(color => typeof color === 'string')

        if (
            containsNum > -1 &&
            containsString > -1
        ) {
            throw new Error('Mixed color types are forbidden')
        } else if (
            containsNum > -1 &&
            containsString === -1
        ) {
            return this._stringifyColors(colors)
        } else {
            return colors
        }
    }

    /**
     * Converts array of rgb(a) arrays into rgb(a) strings
     * @param {Colors} colors 
     * @returns {string[]}
     * @private
     */
    _stringifyColors(colors) {
        return colors.map(color => {
            color[3] = !color[3] ? 1 : color[3]
            return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`
        })
    }

    /**
     * Removes clipped values from the scaling output
     * @param {Object[]} base
     * @returns {number[][]} 
     * @private
     */
    _normalize(base) {
        return base.map(color => color._rgb)
            .map(val => val.filter(
                el => typeof el !== 'boolean'
            ))
    }

    /**
     * Creates base colors array using given scale
     * @param {void} scale 
     * @returns {Object[]}
     * @private
     */
    _createBase(scale) {
        const base = []
        for (let i = 0; i < this.options.samples; i++) {
            base.push(scale(i / this.options.samples))
        }
        return base
    }

    /**
     * Creates scale
     * @returns {Function}
     * @private
     */
    _createScale() {
        return this[`_${this.options.interpolation}Scale`]()
    }

    /**
     * Creates linear scale
     * @returns {Function}
     * @private
     */
    _linearScale() {
        if (this.options.mode !== 'none') {
            if (this.options.lightnessCorrection) {
                return chroma
                    .scale(this.colors)
                    .mode(this.options.mode)
                    .correctLightness()
            } else {
                return chroma
                    .scale(this.colors)
                    .mode(this.options.mode)
            }
        } else {
            if (this.options.lightnessCorrection) {
                return chroma
                    .scale(this.colors)
                    .correctLightness()
            } else {
                return chroma
                    .scale(this.colors)
            }
        }
    }

    /**
     * Creates bezier scale
     * @returns {Function}
     * @private
     */
    _bezierScale() {
        if (this.options.lightnessCorrection) {
            return chroma
                .bezier(this.colors)
                .scale()
                .correctLightness()
        } else {
            return chroma
                .bezier(this.colors)
        }
    }
}
