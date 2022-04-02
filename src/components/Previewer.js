import React from 'react'
import { marked } from "marked"

const Previewer = ({ text }) => {
  return (
    <div>
      <h2 className='heading'>Previewer</h2>
      <div
        id='preview'
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      ></div>
    </div>
  )
}
export default Previewer