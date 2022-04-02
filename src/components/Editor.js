import React from "react"

const Editor = ({ text, handleChange }) => {
  // console.log(text, handleChange)
  return (
    <div>
      <h2 className='heading'>Editor</h2>
      <textarea id='editor' value={text} onChange={handleChange}></textarea>
    </div>
  )
}

export default Editor
