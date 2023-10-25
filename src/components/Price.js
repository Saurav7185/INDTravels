import './PriceStyle.css';
import { Link } from 'react-router-dom';

function Price(props) {
  const hoverStyle = {
    textDecoration: 'none'
  };

  return (
    <Link to="/book" style={hoverStyle}>
      <div className='price-btn'>
        {props.value}
      </div>
    </Link>
  );
}

export default Price;
