function Filter({setSort,setSearch}) {
  return (
    <div className="my-10 flex flex-col items-center">
      <input onChange={(e)=> setSearch(e.target.value)} type="text" placeHolder="enter your favorite product" className="outline-none border-2 p-3 rounded-3xl"/>
      <select onChange={(e)=> setSort(e.target.value)} className="p-3 mt-1.5 rounded rounded-2xl">
        <option value="d">Default</option>
        <option value="p">price</option>
        <option value="c">category</option>
      </select>
    </div>
  );
}

export default Filter;
