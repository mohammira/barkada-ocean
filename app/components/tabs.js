'use client'
import { useState } from 'react'

export default function Tabs({category, toggle}) {
  const [activeTabId, setActiveTabId] = useState(0)
  const tabNames = [
    "all",
    "openness to experience",
    "conscientiousness",
    "extraversion",
    "agreeableness",
    "neuroticism"
  ]
  const handleClick = (id) => {
    setActiveTabId(id)
    toggle(id)

  }
  
  return (
    <div className="tabs tabs-boxed justify-center my-10 mx-72">
      {tabNames.map((text, id) => (
        <a key={id} className={id==activeTabId ? 'tab tab-active' : 'tab'} onClick={() => handleClick(id)}>
        {text}
        </a>
      ))}
    </div>
  )
}
