import React from 'react'
import "./Navbar.css"

const navigation = [
  { id: '1', name: 'Dashboard', href: '#' },
  { id: '2', name: 'Team', href: '#' },
  { id: '3', name: 'Projects', href: '#' },
  { id: '4', name: 'Calendar', href: '#' },
]

const NavButton = (item: any) => {
  return (
    <>
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="bg-inherit text-white bg-button hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  )
}

export default NavButton