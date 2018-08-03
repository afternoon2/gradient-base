import Base from './Base'

/**
 * @class DOMLayer
 * @classdesc provides base generation for all gradient.js modules
 * @param {Colors} colors - input colors as an array of rgb(a) number arrays or css rgb(a) strings
 * @param {object} options - base configuration object
 * @private
 */
export default class DOMLayer {
    constructor(colors, options) {
        /**
         * @property {Base} _base
         * @private
         */
        this._base = new Base(colors, options.base)

        /**
         * @property {number[][]} colors
         */
        this.colors = this._base.get()

        /**
         * @property {Options} options
         */
        this.options = options
    }
}