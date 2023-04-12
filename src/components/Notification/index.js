// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  const {heading, description, icon} = children

  let reslute
  let css
  switch (icon) {
    case 'AiFillCheckCircle':
      reslute = <AiFillCheckCircle className="icon-status icon-success" />
      css = 'icon-success'
      break
    case 'RiErrorWarningFill':
      reslute = <RiErrorWarningFill className="icon-status icon-error" />
      css = 'icon-error'
      break
    case 'MdWarning':
      reslute = <MdWarning className="icon-status icon-warning" />
      css = 'icon-warning'
      break
    default:
      reslute = <MdInfo className="icon-status icon-info" />
      css = 'icon-info'
      break
  }

  return (
    <li className="list">
      <div className="icon-container">{reslute}</div>
      <div className="middle-container">
        <h1 className={`reaction-heading ${css}`}>{heading}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="cancele-container">
        <GrFormClose className="cancelle-icon" />
      </div>
    </li>
  )
}

export default Notification
