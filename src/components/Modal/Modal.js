import React, {useContext} from 'react';
import './Modal.scss';
import { context } from '../../context/context';
// import { CartButton } from '../Cart/CartButton';
const Price = React.lazy(()=>import('../Price/Price'))
const Button = React.lazy(()=>import('../Button/Button'))

const Modal = ({ productDetail, open, onClose }) => {
  const { addProductToCart } = useContext(context);
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
                <h2>{productDetail?.brand}</h2>
                <p>{productDetail?.description}</p>
                <Price product={productDetail} />
          </div>
          <div className='btnContainer'>
            <Button onClick={() => addProductToCart(productDetail)} children="Add TO Cart" className="btn" />
            <Button onClick={onClose} children="Close" className="btnOutline" />            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;