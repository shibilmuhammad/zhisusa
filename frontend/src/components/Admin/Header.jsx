import React from 'react'

const Header = () => {
  return (
    <div>
      	<div className="h-16 bg-PrimaryBlue-normal flex justify-between px-10 items-center">
				<a href="">
					<img className="w-40" src="/images/Logo.png" alt="" />
				</a>
				<a href="/admin/logOut">
					<img className="h-5" src="/images/logout white.png" alt="" />
				</a>
			</div>
    </div>
  )
}

export default Header
