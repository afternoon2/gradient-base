/**
 * @typedef {object} Arguments
 * @property {Colors} colors - input colors array
 * @property {Options} options - base configuration object
 */

 /**
  * @typedef {string|object} RegExp - Regular Expression type
  */

/**
 * @class Validator
 * @classdesc Base validation module
 * @param {Arguments} arguments
 * @private
 */
export default class Validator {
    constructor(arguments) {
        this.arguments = arguments

        /**
         * @property {RegExp} _rgba
         * Regular expression for rgba string validation
         * @private
         */
        this._rgba = /(rgba\()(([0-9]+\,\s?)+([0-9]?\.?[0-9]+)\))/

        /**
         * @property {string[]} _modes
         * Modes for the base generation
         * @private
         */
        this._modes = [
            'none',
            'lch',
            'lab',
            'rgb',
            'hsv',
            'hsl',
            'hsi',
            'hcl'
        ]
    }

    /**
     * Validates colors array
     * @private
     */
    _validateColors() {
        
    }

    /**
     * Validates configuration object
     * @private
     */
    _validateOptions() {

    }
}