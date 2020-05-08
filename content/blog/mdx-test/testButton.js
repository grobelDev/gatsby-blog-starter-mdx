import React from "react"

export default function TestButton() {
  const onClick = () => {
    alert("clicked")
  }

  return <button onClick={onClick}>This is a Test Button</button>
}
