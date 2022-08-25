export const Paginator = ( {totalPages, currentPage, setCurrentPage} ) => {
  
  const pagesNumber = [];
  for (let index = 1; index <= totalPages; index++) {
    pagesNumber.push(index)
  }

  const handleClick = (e) => {
    const selectPage = Number(e.target.value);
    setCurrentPage(selectPage);
  }
  
  return (
    <div className="paginator-container">
      {pagesNumber.map(number => ( 
        <button className={`${number === currentPage && 'paginator-container__button--active'} paginator-container__button`} value={number} onClick={handleClick} >{number}</button> 
      ))}
    </div>
  )
}
