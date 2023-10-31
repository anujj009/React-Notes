import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom my app!</h1>
    </div>
  )
}

const anotherUser = " anuj sahu"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click to visit',
  anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <MyApp />
    reactElement
    // <App />
  // </React.StrictMode>,
)
