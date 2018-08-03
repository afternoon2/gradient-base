import Base from './Base'

/**
 * @function _init
 * Creates base colors array and optios object
 * @param {Colors} colors - input colors as an array of rgb(a) number arrays or css rgb(a) strings
 * @param {object} options - base configuration object
 * @returns {object}
 * @private
 */
export default (colors, options) => {
    const _base = new Base(colors, options)
    return {
        colors: _base.get(),
        options: options
    }
}