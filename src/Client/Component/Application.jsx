import React from 'react'
import { connect } from 'react-redux'
import { loadMail, getSheetValues } from '../Store/Api/Actions'
import ValueList from './ValueList'
import Messages from './Messages'

class Application extends React.Component {
  componentDidMount () {
    this.props.loadMail()
  }

  constructor (props) {
    super(props)
    this.state = {
      text: '1'
    }
  }

  render () {
    const { loading } = this.props
    const onSubmit = (e) => {
      this.props.getSheetValues(parseInt(this.state.text))
      e.preventDefault()
    }
    const onChange = (e) => {
      this.setState({ text: e.target.value })
    }
    return (<div className="sidebar">
      <div className="block">
        <Messages />
        <form onSubmit={onSubmit}>
          <label>表示列</label>
          <input type="text" onChange={onChange} pattern="[0-9]+" required={true} value={this.state.text}/>
          <button className="action" disabled={this.props.loading} >
            Load
          </button>
        </form>
        <ValueList values={this.props.values} />
        {loading ? <span>loading...</span> : null}
      </div>
    </div>)
  }
}

export default connect(
  (state) => ({
    values: state.sheetValues.values,
    loading: state.rpc.loading
  }),
  { getSheetValues, loadMail }
)(Application)
