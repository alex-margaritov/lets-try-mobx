import { observer } from 'mobx-react'
import * as React from 'react'

import { Add } from '../../components/Add'
import { IAppStore } from '../../stores/AppStore'

@observer
export class App extends React.Component<{store: IAppStore}> {
  render() {
    const numbersTemplate = this.props.store.numbers.map(item => {
      return <li key={item.number}>{item.funNumberString}</li>
    })

    return (
      <div>
        <h1>This App is stupid for now! But things will change with time!</h1>
        <Add addNumber={this.props.store.addNumber} />

        <div>
          {numbersTemplate}
        </div>
      </div>
    )
  }
}
