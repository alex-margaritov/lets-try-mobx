import { action, computed, observable } from 'mobx'

import { API_URI } from '../constants'

export interface IFunNumber {
  number: string
  fact: string
  loading: boolean
  fetchFact: () => void
  funNumberString: string
}

export class FunNumber implements IFunNumber {
  @observable number: string = ''
  @observable fact: string = ''
  @observable loading: boolean = true

  constructor(num: string) {
    this.number = num
    this.fetchFact()
  }

  @action fetchFact() {
    window.fetch(`${API_URI}/${this.number}`)
    .then(res => res.text())
    .then(action((text: string) => {
      this.fact = text
      this.loading = false
    }))
    .catch(err => {
      this.loading = false
      this.fact = `Error loading fact about number. Error message: ${err.message}`
    })
  }

  @computed get funNumberString() {
    return this.loading ? `${this.number}: Fact is loading...` : `${this.number}: ${this.fact}`
  }
}
