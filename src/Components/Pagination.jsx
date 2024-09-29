import React from 'react'

const Pagination = ({paginate,setPage}) => {
  return (
      <div className="flex justify-center gap-10">
      {paginate?.map((item,index)=>{
        return(
          <div key={index}>
            <p onClick={()=> setPage(item)} className="p-5 text-2xl border-2 rounded-2xl">{item}</p>
          </div>
        )
      })}
      </div>
  )
}

export default Pagination