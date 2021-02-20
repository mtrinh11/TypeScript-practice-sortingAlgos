import {CREATE_RANDOM_DATA, UPDATE_COLS, UPDATE_DATA, STOPPED} from '../types'

function createRandomBarValues(num: number):Array<Array<any>> {
  let numArr: Array<Array<any>> = []
  for (let i: number = 0; i < num; i++) {
    numArr.push([Math.floor(Math.random() * 100), 'aquamarine'])
  }
  return numArr
}

export const createRandomData = (cols: number) => ({
  type: CREATE_RANDOM_DATA,
  payload: createRandomBarValues(cols)
})

export const updateCols = (cols: number) => ({
  type: UPDATE_COLS,
  payload: cols
})

export const updateData = (data: number[]) => ({
  type: UPDATE_DATA,
  payload: data
})

export const flipStopped = (input: boolean) => ({
  type: STOPPED,
  payload: input
})