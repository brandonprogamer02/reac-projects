export interface IPropsCounter { children?: any }

export interface IPropsTitle { click?: number,children?:(click:number)=> JSX.Element }

export interface IPropsButton { type?: string, onIncrement?: () => void, onDecrement?: () => void }

