import React from 'react';
import PropTypes from 'prop-types'
import { toNumber } from "../../_helpers/toNumber";

const Item = ({
  title,
  price,
  condition,
  free_shipping,
  picture,
  state,
  goTo,
  id
  }) => (

  < div className = "row row-top item" onClick={() => goTo(id)}>
    <div className="column-content column-content--2">
    < img className="product" src={picture}/>
    </div>
    <div className="column-content column-content--6">
      <h2 className="value">${toNumber(price.amount)}{price.decimals ? ','+price.decimals :'' }</h2>
      { free_shipping &&
        < img className="shipping" src='/img/ic_shipping.png' srcSet="/img/ic_shipping@2x.png 2x" alt='envio'/>
      }
      <h3>{title}</h3>
      <h3>{condition}</h3>
    </div>
    <div className="column-content column-content--2">
      <label>{state}</label>
    </div>
  </div>
)

Item.propTypes = {
  title: PropTypes.string,
  price: PropTypes.object,
  condition: PropTypes.string,
  free_shipping: PropTypes.bool,
  picture: PropTypes.string,
  state: PropTypes.string,
  goTo: PropTypes.func,
  id: PropTypes.string,
}

export default Item;