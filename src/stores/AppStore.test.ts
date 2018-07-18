import { expect } from 'chai'
import fetchMock = require('fetch-mock')

import { AppStore } from './AppStore'

describe('\n ===> AppStore', function() {

  const testAppStore = new AppStore()

  it('initial AppStore.numbers.length must be 0', function() {
    expect(testAppStore.numbers.length).to.equal(0)
  })

  it('when number added to AppStore it must fetch fact and AppStore.numbers.length must be 1', function() {
    const testNumber = '228'
    const testFact = '228 is a very fun number in Russian Law!'

    fetchMock.get('*', testFact)
    testAppStore.addNumber(testNumber)

    setTimeout(function name() {
      expect(testAppStore.numbers.length).to.equal(1)
      expect(testAppStore.numbers[0].fact).to.equal(testFact)
    }, 10)

    fetchMock.restore()
  })
})
