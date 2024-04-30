/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export default function EmptyPage({displayMessage,linkMessage}) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p style={{ fontSize: '22px', color: '#333' }}>{displayMessage}</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px'}}>{linkMessage}</Link>
    </div>
  )
}