import { Outlet } from 'react-router-dom'

import cover from '../../assets/Cover.jpg'
import logo from '../../assets/Logo.svg'

export function HeaderLayout() {
  return (
    <div className="antialiased">
      <div className=" bg-red-50">
        <img
          src={cover}
          alt=""
          className="flex h-[18.5rem] w-full object-fill  "
        />
        <img
          src={logo}
          alt=""
          className="absolute left-[calc(((100vw)/2)-(9.25rem/2))] top-[calc((18.5rem-6.125rem)/2)]"
        />
      </div>

      <div className="mx-auto mt-[-5.5rem] max-w-[54rem] px-6 ">
        <Outlet />
        <div></div>
      </div>
    </div>
  )
}
