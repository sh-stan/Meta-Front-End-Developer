function DessertsList(props) {
  const sortedList = props.data.map(element => {
    return (
      <li key={element.createdAt}>{`${ element.name } - ${ element.calories }`}</li>
    );
  });

  return (
    <ul>
      { sortedList }
    </ul>
  );
};
  
export default DessertsList;
  