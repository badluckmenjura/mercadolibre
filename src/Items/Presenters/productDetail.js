import React from 'react';
import PropTypes from 'prop-types'
import { toNumber } from "../../_helpers/toNumber";

const ProductDetail = ({
    title,
    price,
    condition,
    picture,
    sold_quantity,
    description
  }) => (

  < div className = "row row-top itemDetail">
    <div className="column-content column-content--7">
    < img className="product" src={picture}/>
    <div className="info">
      <h1>Descripción del producto</h1>
      <p>{description}</p>
    </div>
    
    </div>
    <div className="column-content column-content--3">
      <h4>{condition} - {sold_quantity} vendidos</h4>
      <h2>{title}</h2>
      <h2 className="value">${toNumber(price?.amount)}</h2>
      <button>Comprar</button>
      
    </div>
  </div>
)

ProductDetail.propTypes = {
  title: PropTypes.string,
  price: PropTypes.object,
  condition: PropTypes.string,
  free_shipping: PropTypes.bool,
  picture: PropTypes.string,
  state: PropTypes.string,
  id: PropTypes.string,
  sold_quantity: PropTypes.number,
  description: PropTypes.string
}

export default ProductDetail;