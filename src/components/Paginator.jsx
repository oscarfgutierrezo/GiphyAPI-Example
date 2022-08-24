export const Paginator = ( {totalPages, changePage} ) => {
  
  const pagesNumber = [];
  for (let index = 1; index <= totalPages; index++) {
    pagesNumber.push(index)
  }

  const handleClick = (e) => {
    const selectPage = Number(e.target.value);
    changePage(selectPage);
  }
  
  return (
    <div className="paginator-container">
      {pagesNumber.map(number => ( 
        <button value={number} onClick={handleClick} key={number} >{number}</button> 
      ))}
    </div>
  )
}
