import Popup from '../src'

describe('Popup', () => {
  it('should get an instance of Popup', () => {
    expect(new Popup({})).toMatchInlineSnapshot(`
      Popup {
        "animationFrameId": null,
        "check": [Function],
        "currentWindow": null,
        "exit": [Function],
        "onClose": undefined,
        "onLocationChange": undefined,
        "open": [Function],
      }
    `)
  })
})
