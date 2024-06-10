import PropTypes from 'prop-types';

export default function ItemList({ items, onDelete }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button className='btn' onClick={() => onDelete(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};