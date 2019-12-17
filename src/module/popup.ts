import { guessPopupSize, getCenteredBoxPosition } from '../utils/size'

class Popup {
  animationFrameId: number | null = null
  currentWindow: Window | null = null

  exit = ({ onClose }: { onClose?: Function }) => {
    if (this.animationFrameId) {
      window.cancelAnimationFrame(this.animationFrameId)
    }
    if (onClose) {
      onClose()
    }
  }

  check = ({ onClose }: { onClose?: Function }) => {
    try {
      if (this.currentWindow && this.currentWindow.closed) {
        this.exit({ onClose })
      }
    } catch (e) {
      console.error(e)
    } finally {
      if (this.currentWindow && !this.currentWindow.closed) {
        this.animationFrameId = window.requestAnimationFrame(() =>
          this.check({ onClose })
        )
      }
    }
  }

  open = ({
    url,
    title,
    width,
    height,
    onClose,
  }: {
    url: string
    title: string
    width?: number
    height?: number
    onClose?: Function
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
      this.animationFrameId = window.requestAnimationFrame(() =>
        this.check({ onClose })
      )
    }
  }
}

export default Popup
