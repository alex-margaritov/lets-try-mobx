import { action, observable } from 'mobx'

import { FunNumber, IFunNumber } from './FunNumber'

export interface IAppStore {
  numbers: IFunNumber[]
  addNumber: (n: string) => void
}

export class AppStore implements IAppStore {
  @observable numbers = []

  @action addNumber = (n: string) => {
    const foundDublicates = this.numbers
      .map(item => item.number)
      .filter(num => num === n)
    if (foundDublicates.length > 0) {
      alert(`Number ${n} already was checked and can be found in a list below`)
      return null
    }
    this.numbers.push(new FunNumber(n))
  }
}
