function List(props) {
  //   console.log(props);
  let mappedVar = props.itemList.map((stringFromList) => (
    <li key={stringFromList}> {stringFromList} </li>
  ));

  return <ol>{mappedVar}</ol>;
}
export default List;
