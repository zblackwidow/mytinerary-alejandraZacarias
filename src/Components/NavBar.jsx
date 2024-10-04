import React from 'react'

export default function NavBar() {
  return (
   <>
   <nav className='bg-color5 h-[7vh] flex justify-around items-center'>
    <div className='flex items-center'><img className='w-14' src="https://cdn-icons-png.flaticon.com/512/826/826070.png" alt="planet and world" />
    <p>My Tineraries</p></div>
    <ul className='flex gap-4'>
        <li>Home</li>
        <li>Cities</li>
    </ul>
    <button><img className='w-8' src="https://cdn-icons-png.freepik.com/512/1057/1057692.png" alt="login icon" /></button>
   </nav>
   </>
  )
}
