import React from 'react'
import { connect } from 'react-redux'
import { readMessage, readErrorMessage } from '../Store/Notify/Actions'

class Messages extends React.Component {
  deleteMessage (m) {
    return () => {
      this.props.readMessage(m.messageId)
    }
  }
  render () {
    const read = (m) => (e) => {
      this.props.readMessage(m.messageId)
    }
    const readError = (m) => (e) => {
      this.props.readErrorMessage(m.messageId)
    }
    if (this.props.messages.length === 0) {
      return null
    }
    const alerts = this.props.errors.map((m) =>
      (<div className='alertBox' key={'error' + m.messageId}>
        <a className='close' onClick={readError(m)}/>
        <span className="gray">{m.message}</span>
      </div>))
    const messages = this.props.messages.map((m) => (
      <div className="messageBox" key={m.messageId}>
        <a className='close' onClick={read(m)}/>
        <span className="gray">{m.message}</span>
      </div>
    ))
    return <div>{alerts}{messages}</div>
  }
}

export default connect(
  (state) => ({
    messages: state.notify.messages,
    errors: state.notify.errors,
    loading: state.notify.loading
  }),
  { readMessage, readErrorMessage }
)(Messages)
