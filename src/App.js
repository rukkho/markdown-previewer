import React from 'react'
import './App.css';
const initialState = `
  # Markdown Previewer
  ## Editor
  ### This is h3 tag
  #### This is h4 tag
  ##### This is h5 tag
  ###### This is h6 tag

  ### what?
  > This is a Blockquote

  And here is a code, \`<div>a + b</div>\`, or \`npm create-react-app\` as well.

  ### Even a block code,
  \`\`\`
  function addTwoNumbers(a,b){
    return a + b
  }
  \`\`\`
  ### list items
  - List item one 
    - list item two
      - Liset item three
      
  ### Text decoration
  *This is Rendererd in Italics*

  **And this is in Bold text**

  ***Whereas this is both***

  You can see a  [FreeCodeCamp](http://learn.freecodecamp.org "A non-profit Coding Organization")

  ### Even an embedded Lion Image
  ![lion](https://images.all-free-download.com/images/graphiclarge/lion_picture_168819.jpg)

  And if you want Table stuff

  First column | Second column | Third column
  ------------ | ------------ | ------------ 
  Yes | No | Maybe
  really | Maybe Yes | Idon't know
  
`

let marked= require("marked")
var renderer = new marked.Renderer()
renderer.link = function(href, title, text){
  return `<a href=${href} target="_blank">${text}</a>`;
}

marked.setOptions({
  renderer,
  breaks: true
})


class ControlledInput extends React.Component{
  constructor(props){
    super(props)
    this.state={
      markdown: initialState
    }
    // this.handleChange= this.handleChange.bind(this);
  }
  handleChange(markdown){
    this.setState({
      markdown 
    })
  } 
  render(){
    const {markdown}= this.state;
    console.log(markdown)
   
    return(
      <div className= 'App container-fluid '>
      <div className= "row justify-content-around">
        <div className="col-5 offset-1">
          <textarea id='editor' value={markdown} 
          onChange= {(e)=>this.handleChange(e.target.value)} />
        </div>
      
        <div className="col-5 offset-1 ">
          <div dangerouslySetInnerHTML={{__html: marked(markdown) }}
                  id='preview'>
          </div>
        </div>
                
      </div>  
      </div>
    )
  }
}

export default ControlledInput;
