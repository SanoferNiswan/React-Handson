const List = () => {
    //map
    const listItems=[
        'apple',
        'orange',
        'grapes', 
        'banana'
    ]
    const list=listItems.map((item,index)=><li key={index}>{item},{index}</li>);

    //filter
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];

      const chemist=people.filter((person)=>person.profession==='chemist');
      const chemistDetails=chemist.map((person)=>(
        <li key={person.id}>
            <h4>{person.id}</h4>
            <h4>{person.name}</h4>
            <p>{person.profession}</p>
        </li>
      ))

  return (
    <ul>
        {list}
        {chemistDetails}
    </ul>
  )
}

export default List
