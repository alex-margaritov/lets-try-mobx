import { action, observable } from 'mobx'
import { observer } from 'mobx-react'
import * as React from 'react'

export interface IAddProps {
  addNumber: (s: string) => void
}

@observer
export class Add extends React.Component<IAddProps, {}> {
  @observable input: string = ''
  render() {
    return (
      <div>
        <input type='text' placeholder='Enter number' value={this.input} onChange={this.handleInputChange} />
        <button onClick={this.handleAddClick}>Add</button>
      </div>
    )
  }

  @action handleInputChange = (event) => {
    this.input = event.target.value
  }

  @action handleAddClick = () => {
    this.props.addNumber(this.input)
  }
}
