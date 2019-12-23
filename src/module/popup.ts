import { EPopupAction, TOnClose, TOnLocationChange } from '../../types'
import { getCenteredBoxPosition, guessPopupSize } from '../utils/size'

class Popup {
  animationFrameId: number | null
  currentWindow: Window | null
  onClose: TOnClose | undefined
  onLocationChange: TOnLocationChange | undefined

  constructor({
    onClose,
    onLocationChange,
  }: {
    onClose?: TOnClose
    onLocationChange?: TOnLocationChange
  }) {
    this.animationFrameId = null
    this.currentWindow = null
    this.onClose = onClose
    this.onLocationChange = onLocationChange
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
    if (this.currentWindow) {
      try {
        const shouldExit =
          (this.onLocationChange &&
            this.onLocationChange(this.currentWindow.location) ===
              EPopupAction.CLOSE) ||
          this.currentWindow.closed

        if (shouldExit) {
          this.exit()
        }
      } catch (e) {
        console.error(e)
      } finally {
        if (!this.currentWindow.closed) {
          this.animationFrameId = window.requestAnimationFrame(() =>
            this.check()
          )
        }
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
