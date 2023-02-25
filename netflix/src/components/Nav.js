import React, {useState,useEffect}from 'react'
import './Nav.css'

function Nav() {
  const[show,handleShow]=useState(false)
//   useEffect has one Effect,cleanupcode,dependency array
  useEffect(() => {
    // Effect part
    window.addEventListener("scroll",()=>{
        if (window.scrollY>100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    })
//when we use  eventlistener,click then we must use cleanupcode.
// Because it uses a memory.so after the use or purpose the memory must be release
// otherwise it uses more memory even if we use more eventlisteners
    return () => {
        // scrool then empty callback function
      window.removeEventListener("scroll",()=>{})
    }
    // []-dependency array
  }, [])
  
  return (
    // navblack is overwrite the nav if the show is truthy
    <div className={`nav ${show && "nav_black"}`}>
        <img className = "nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427" width="206" height="62"
        alt="Netflix logo"/>
    </div>
  )
}

export default Nav