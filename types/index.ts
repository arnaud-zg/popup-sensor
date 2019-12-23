export enum EPopupAction {
  NONE = 'NONE',
  CLOSE = 'CLOSE',
}

export type TOnClose = Function
export type TOnLocationChange = (location: Location) => EPopupAction
