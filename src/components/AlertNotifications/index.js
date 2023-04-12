// Write your code here

import Notification from '../Notification'

import './index.css'

const alertList = [
  {
    id: 1,
    icon: 'AiFillCheckCircle',
    heading: 'SUCCESS',
    description: 'You can access all the files in the folder',
  },
  {
    id: 2,
    icon: 'RiErrorWarningFill',
    heading: 'Error',
    description:
      'Sorry,you are not authorized to have access to delete the file',
  },
  {
    id: 3,
    icon: 'MdWarning',
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 4,
    icon: 'MdInfo',
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <div className="bg-container">
    <h1 className="heading">Alert Notifications</h1>
    <ul className="un-order-list">
      {alertList.map(echValue => (
        <Notification key={echValue.id}>{echValue}</Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
