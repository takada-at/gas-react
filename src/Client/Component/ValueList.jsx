import React from 'react'

class ValueList extends React.Component {
  render () {
    if (!this.props.values || this.props.values.length === 0) {
      return null
    }
    const list = this.props.values.map((e, idx) => (<div key={idx}>{e}</div>))
    return (<div>{list}</div>)
  }
}

export default ValueList
