import Base from './Base'

/**
 * @function _init
 * Creates base colors array and optios object
 * @param {void} parent - Css or Svg module
 * @param {Colors} colors - input colors as an array of rgb(a) number arrays or css rgb(a) strings
 * @param {object} options - base configuration object
 * @returns {object}
 * @private
 */
export default (parent, colors, options) => {
    parent.base = new Base()
    parent.colors = parent.base.get(colors, options.base)
    parent.options = options
}