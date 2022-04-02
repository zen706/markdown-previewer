import React from 'react'
import './index.css'
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import { marked } from 'marked'

const data = `
# Welcome!
***
### How to use
- input anything in the editor,
then the previewer renders the inputs parsed in markdown

---
# Heading level 1
## Heading level 2
### Heading level 3
This is **bold**

This is paragraph

This is the first line.  
And this is the second line  

This is a *italic*  
This is a ***bold and italic***  
~~this is cross~~

    this is code block.this is 
    this is code block.
this is \`code\`

\`this is more code \`
    

>   this is blockQuote    
>>  this is blockQuote
>>> this is blockQuote

this is ordered list:
1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

this is unordered list:
- unOrdered list
  - Second item
  * Third item
* Fourth item

this is \`<div></div>\` code
\`\`\`
This is multi line code
x = 5 
y = 7
z = x + y
 \`\`\`

[a markdown syntax link ](https://www.markdownguide.org/basic-syntax/)

![a image link](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.bo-9Gk0DsJpyHsKnvpZa_gHaEj%26pid%3DApi&f=1)
<fake@gmail.com>
`

marked.options({ breaks: true })
// marked.setOptions({
//   renderer: new marked.Renderer(),
//   highlight: function (code, lang) {
//     const hljs = require('highlight.js')
//     const language = hljs.getLanguage(lang) ? lang : 'plaintext'
//     return hljs.highlight(code, { language }).value
//   },
//   langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
//   pedantic: false,
//   gfm: true,
//   breaks: false,
//   sanitize: false,
//   smartLists: true,
//   smartypants: false,
//   xhtml: false,
// })

function App() {
  const [text, setText] = React.useState(data)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='container'>
      <h1 className='title'>Mark down previewer</h1>
      <div className='markDown'>
        <Editor text={text} handleChange={handleChange} />

        <Previewer text={text} />
      </div>
    </div>
  )
}

export default App
