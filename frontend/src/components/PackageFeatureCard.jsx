import React from 'react'

const PackageFeatureCard = ({data}) => {
  return (
    <div>
        <div className="rounded-xl   shadow-[0px_2px_3px_rgba(0,0,0,.4)]">
                 <img className="rounded-t-xl w-full h-48 object-cover" src={data.imgUrl} alt="" />
                 <div className="px-3 py-3">
                     <h2 className="text-xl text-[#333333] my-1">{data.title}</h2>
                     <p className="text-[#666666] text-sm py-3 ">
                    {data.des}
                     </p>
                 </div>
        </div>
    </div>
  )
}

export default PackageFeatureCard
