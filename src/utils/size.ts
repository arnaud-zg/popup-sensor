export const getWindowSize = () => ({
  width: window.screenX + window.outerWidth,
  height: window.screenY + window.outerHeight,
})

export const getCenteredBoxPosition = ({
  height,
  width,
}: {
  height: number
  width: number
}) => {
  const left = window.screenX + (window.outerWidth - width) / 2
  const top = window.screenY + (window.outerHeight - height) / 2

  return {
    top,
    left,
  }
}

export const guessPopupSize = ({
  width,
  height,
}: {
  width?: number
  height?: number
}) => {
  const { width: windowWidth, height: windowHeight } = getWindowSize()
  const initialPopupWidth = windowWidth / 2
  const initialPopupHeight = windowHeight / 2
  const popupWidth = width && initialPopupWidth >= width ? width : null
  const popupHeight = height && initialPopupHeight >= height ? height : null

  return {
    width: popupWidth ?? initialPopupWidth,
    height: popupHeight ?? initialPopupHeight,
  }
}
