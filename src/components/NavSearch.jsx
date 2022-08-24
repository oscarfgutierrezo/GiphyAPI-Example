export const NavSearch = ({onNewCategory, category}) => {
  
  const items = ['Animals', 'Actions', 'Anime', 'Cartoons', 'Clips', 'Emoticons', 'Food', 'Gaming', 'Greetings', 'Sports' ];

  const handleChange = (e) => {
    onNewCategory(e.target.value);
  };

  return (
    <div className="nav-search">
      {items.map(( item ) => ( 
        <div className={`${category === item && 'nav-search__item--active'} nav-search__item`} key={item} >
          <input type="radio" name="search-category" id={item} value={item} onChange={handleChange} />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </div>
  );
}
