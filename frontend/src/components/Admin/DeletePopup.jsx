import React from 'react'
import { TiWarningOutline } from "react-icons/ti";

const DeletePopup = ({type,setShowDelete}) => {
  return (
    <div class="fixed inset-0 flex font-poppins justify-center items-center bg-[rgba(0,0,0,0.3)]" id="productDelete">
        <form action="/admin/products/delete" method="post" class=" bg-white rounded-lg w-fit  py-3 px-5  text-sm ">
           <div class="flex flex-col items-center justify-center space-y-2">
                <div class=" flex items-center justify-center px-2 py-2 bg-[#FEE2E1] rounded-full w-14 h-14">
                    <TiWarningOutline className='text-3xl text-red-500'/>
                </div>
                <div>
                    <h2 class="font-semibold text-lg">Are you sure??</h2>
                </div>
                <div class="max-w-xs text-center text-[#666666]">
                    <p>This action cannot be undone. This {type}
                         &nbsp;will be permanently removed</p>
                </div>
                <div class="w-full mt-4">
                    <div class="flex flex-col lg:flex-row gap-3">
                        <button type="submit" class="w-full bg-red-600 text-white font-medium p-2 rounded-sm">
                            Delete {type}
                        </button>
                        <button onClick={() => setShowDelete(false)} type="button" class="w-full border  text-black font-medium p-2 rounded-sm ">
                            Cancel
                        </button>
                    </div>
                   
                </div>
           </div>
        </form>
        
    </div>
  )
}

export default DeletePopup