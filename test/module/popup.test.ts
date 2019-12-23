import Popup from '../../src/module/popup'

describe('Popup', () => {
  it('should call window.open', () => {
    const popupInstance = new Popup({})
    const url = 'https://www.google.com/'
    const title = 'Google'

    popupInstance.check = jest.fn()
    window.open = jest.fn()
    popupInstance.open({ url, title })
    // expect(typeof popupInstance.animationFrameId === 'number').toBeTruthy()
    expect(window.open).toBeCalledTimes(1)
    expect(window.open).toBeCalledWith(
      url,
      title,
      'scrollbars=yes,width=512,height=384,top=192,left=256'
    )
  })

  // it('should call popupInstance.check', () => {
  //   const popupInstance = new Popup()
  //   const url = 'https://www.google.com/'
  //   const title = 'Google'

  //   popupInstance.check = jest.fn()
  //   popupInstance.open({ url, title })
  //   jest.setTimeout(1000)
  //   expect(popupInstance.check).toBeCalled()
  //   expect(popupInstance.check).toBeCalledWith()
  // })
})
