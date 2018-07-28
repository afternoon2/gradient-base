import Base from './index'

test(
    'If base class does not accept mixed typed color arrays',
    () => {
        const fakeColors = [
            [0, 12, 33, 0.4], 
            'rgb(20, 34, 40)'
        ]
        const config = {
            interpolation: 'bezier',
            samples: 10,
            lightnessCorrection: true
        }
        const safeExecution = () => {
            new Base(fakeColors, config)
        }
        expect(safeExecution).toThrowError('Mixed color types ')
    }
)


const opts = {
    interpolation: 'linear',
    samples: 10,
    mode: 'none',
    lightnessCorrection: true
}

test(
    'If Base component generates a base of valid length',
    () => {
        const colors = [
            [9, 9, 9, 0.5],
            [255, 255, 240, 1]
        ]
        const base = new Base(colors, opts)
        const baseResult = base.get()
        expect(baseResult.length).toBe(opts.samples)
    }
)

test(
    'If Base component generates a base as an array of arrays of numbers',
    () => {
        const cols = [
            [66, 134, 244, 0.6], [244, 241, 65, 0.10]
        ]
        const base = new Base(cols, opts)
        const baseResult = base.get()
        expect(Array.isArray(baseResult[0])).toBe(true)
        expect(baseResult[0].length).toBe(4)
        expect(typeof baseResult[0][0]).toBe('number')
    }
)

test(
    'If base creation preserves opacity values',
    () => {
        const colors = [
            [9, 9, 9, 0.5],
            [255, 255, 240, 1]
        ]
        const base = new Base(colors, opts)
        const baseResult = base.get()
        const opacityNotPreserved = baseResult
            .findIndex(res => res.length < 4) > -1 ?
            true : false
        expect(opacityNotPreserved).toBe(false)
    }
)