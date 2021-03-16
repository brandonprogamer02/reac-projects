import { IMapDispatchToProps, IDispatch } from './Redux'
import constants from '../constants/constants'


export interface CounterMapDispatchToProps { increment: () => void, decrement: () => void }

export interface CounterMapStateToProps { count: number }

export interface CounterProps extends CounterMapDispatchToProps, CounterMapStateToProps { }

export interface CounterAction { type: string }

export type CounterDispatch = (arg0: IActionReducer) => void


