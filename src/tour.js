import React, { useState, useEffect } from 'react'
import { data } from './ourdata'

const Tours = () => {
  const [oursData, setOurData] = useState(data)
  const removeItem = (id) => {
    let card = oursData.filter((item) => item.id !== id)
    setOurData(card)
  }
  const ReadMore = ({ children }) => {
    const text = children
    console.log
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore)
    }
    return (
      <p className='text'>
        {isReadMore ? text.slice(0, 210) : text}
        <span onClick={toggleReadMore} className='read-or-hide'>
          {isReadMore ? '...read more' : ' show less'}
        </span>
      </p>
    )
  }

  const clickToReStore = () => {
    useEffect(() => {
      setOurData(data)
    })
  }
  {
    /* <button onClick={clickToReStore}>click</button> */
  }

  if (oursData.length <= 0) {
    setOurData(''); // dont set string on array
    return <h2>No Tours Left</h2>;
  }
  return (
    <React.Fragment>
      {oursData.map((card, index, arr) => {
        const { id, img, title, heading, price, button } = card
        return (
          <div key={id} className='card'>
            <div className='image'>
              <img src={img}></img>
            </div>
            <div className='information'>
              <div className='box'>
                <div className='pragraph'>{heading}</div>
                <div className='price'>{price}</div>
              </div>
              <ReadMore>{title}</ReadMore>
              <button onClick={() => removeItem(id)}>{button}</button>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}
export default Tours
