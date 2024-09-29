import React,{useEffect,useState} from "react"
import Home from "./Routes/Home"
import Header from "./Components/Header"
import Pagination from "./Components/Pagination"
import Filter from "./Components/Filter"
import './App.css';
function App() {
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)
  const [sort,setSort] = useState("")
  const [search,setSearch] = useState("")
  const [paginate,setPaginate] = useState([])
  async function getData() {
    const res = await fetch("https://fakestoreapi.com/products")
    const result = await res.json()
    const arrayP = []
    for (let i = 0; i < result.length / 10; i++) {
      arrayP.push(i + 1)
    }
    setPaginate(arrayP)
    console.log(result)
    setData(result)
  }
  useEffect(()=>{
    getData()
  },[])
  return(
    <div>
      <Header />
      <Filter data={data} setData={setData} sort={sort} setSort={setSort} setSearch={setSearch} />
      <Home data={data} page={page} sort={sort} search={search}/>
      <Pagination setPage={setPage} paginate={paginate}/>
    </div>
  )
}

export default App;
