import { guessPopupSize, getCenteredBoxPosition } from '../utils/size'

class Popup {
  animationFrameId: number | null = null
  currentWindow: Window | null = null
  onClose: Function | undefined

  constructor({ onClose }: { onClose?: Function }) {
    this.onClose = onClose
  }

  exit = () => {
    if (this.animationFrameId) {
      window.cancelAnimationFrame(this.animationFrameId)
    }
    if (this.onClose) {
      this.onClose()
    }
  }

  check = () => {
    try {
      if (this.currentWindow && this.currentWindow.closed) {
        this.exit()
      }
    } catch (e) {
      console.error(e)
    } finally {
      if (this.currentWindow && !this.currentWindow.closed) {
        this.animationFrameId = window.requestAnimationFrame(() => this.check())
      }
    }
  }

  open = ({
    url,
    title,
    width,
    height,
  }: {
    url: string
    title: string
    width?: number
    height?: number
  }) => {
    const { width: popupWidth, height: popupHeight } = guessPopupSize({
      width,
      height,
    })
    const { top, left } = getCenteredBoxPosition({
      height: popupHeight,
      width: popupWidth,
    })
    this.currentWindow = window.open(
      url,
      title,
      `scrollbars=yes,width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
    )

    if (this.currentWindow && this.currentWindow.focus) {
      this.currentWindow.focus()
    }

    if (window.requestAnimationFrame && this.currentWindow) {
      this.animationFrameId = window.requestAnimationFrame(() => this.check())
    }
  }
}

export default Popup
