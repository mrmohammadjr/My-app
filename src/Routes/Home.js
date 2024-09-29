import React,{ useState,useEffect,useMemo } from "react"
export default function Home({data,page,sort,search}) {
  const [total,setTotal] = useState(0)
  const resultMemo = useMemo(()=>{
    return data.filter((item)=> { 
        return item.title.toLowerCase().includes(search.toLowerCase())
      })
  },[search,data])
  useEffect(() => { 
    setTotal(resultMemo.length);
   }, [resultMemo]);
  return (
    <div>
    <div className="grid grid-cols-2">
      {resultMemo.sort((x,y)=>{
        switch (sort) {
          case 'p':
            return x.price - y.price
          case 'c':
            return x.category.localeCompare(y.category)
          case 'd':
            return x.id - y.id
        }
      }).slice((page - 1) * 10, page * 10).map((item)=>{
        return(
         <div key={item?.id} className="flex flex-col items-center p-1 m-1 border-2 border-blue-950 rounded-2xl gap-5">
          <img className="h-44" src={item?.image}/>
          <h1 className="text-center">title : {item?.title}</h1>
          <h1>price :{item?.price}</h1>
          <h1 className={item?.rating?.count < 1 ? "text-red-500":"text-green-500"}>count : {item?.rating?.count}</h1>
         </div>
        )
      })}
    </div>
    <h1>total - {total}</h1>
    </div>
  );
}