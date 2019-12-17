import {
  getWindowSize,
  getCenteredBoxPosition,
  guessPopupSize,
} from '../../src/utils/size'

describe('Size', () => {
  it('should get current window size', () => {
    expect(getWindowSize()).toMatchInlineSnapshot(`
      Object {
        "height": 768,
        "width": 1024,
      }
    `)
  })

  it('should get centered box position', () => {
    expect(getCenteredBoxPosition({ height: 200, width: 200 }))
      .toMatchInlineSnapshot(`
      Object {
        "left": 412,
        "top": 284,
      }
    `)
  })

  it('should guess popup size', () => {
    expect(guessPopupSize({})).toMatchSnapshot()
    expect(guessPopupSize({ height: 200, width: 200 })).toMatchSnapshot()
    expect(guessPopupSize({ height: 1000, width: 1000 })).toMatchSnapshot()
  })
})
