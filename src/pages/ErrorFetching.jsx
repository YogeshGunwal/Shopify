/* eslint-disable react/prop-types */

import '../styles/ErrorFetching.scss';

export default function ErrorFetching({error}) {
  return (
    <div className='error'>
      {error}
    </div>
  )
}
