import { EPopupAction } from '../../types'

describe('EPopupAction', () => {
  it('should make a snapshot', () => {
    expect(EPopupAction).toMatchInlineSnapshot(`
      Object {
        "CLOSE": "CLOSE",
        "NONE": "NONE",
      }
    `)
  })
})
