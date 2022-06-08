import React from 'react'
import './Country.css'
const Country = (props) => {
  const { name, flag, population, capital } = props.country;
  console.log(props.country);

  // const png = '.png';
  // const {name, flags} = props;
  // console.log(flags)

  return (
  <div className='flagStyle' >
      <h3>This is:{name.common} </h3>
      <img src={props.flags.png} />
      <h3>Capital is:{capital}</h3>
      <h3>Population is:{population}</h3>
    </div>

  )
}

export default Country