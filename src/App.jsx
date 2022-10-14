import { useState, useEffect } from 'react'
import './App.css'
import data from './data'
import Header from './Header'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {  
    let count = 0
    data.map(user => {
      if(user.read) {
        return setCount(count = count + 1)
      } 
    })
  }, [])
  const [markAsUnread, setMarkAsUnread] = useState(true)
  
  const markAllAsUnread = () => {
    return setCount(0)
     
  }
  
  const userElements = data.map(user => {
    return <Card 
    key={data.name} 
    src={user.src}
    name={user.name} 
    action={user.action} 
    post={user.post} 
    group={user.group} 
    pictureSrc={user.pictureSrc} 
    message={user.message} 
    time={user.time} 
    read={user.read}
    count={count}
     />
  })
  
  return (
    <div className="App">
      <Header 
        unread={count}
        markAllAsUnread={markAllAsUnread}
        
      />
      <main>
        {userElements}
      </main>
    </div>
  )
}

export default App
