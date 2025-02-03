import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {

    const {
        product_id,
        product_title,
        product_image,
        price,
    } = gadget;

    return (
        <div className="gadget-card h-[50vh] bg-white border-2 border-transparent rounded-lg px-4 w-[300px] mx-4 shadow-lg hover:shadow-xl transition-all">
            <img
                src={product_image}
                alt={product_title}
                className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold">{product_title}</h3>
                <p className="text-lg font-bold text-blue-600 mt-2">${price}</p>
            </div>

            <div >
                <Link className="btn curson-pointer border-2 p-2 rounded-3xl w-[150px] border-gray-500 " to={`/gadgets/${product_id}`}> View Details </Link>
            </div>
        </div>
    );
};

Gadget.propTypes = {
    gadget: PropTypes.shape({
        product_id: PropTypes.number.isRequired,
        product_title: PropTypes.string.isRequired,
        product_image: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        specifications: PropTypes.arrayOf(PropTypes.string).isRequired,
        availability: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        other_field: PropTypes.string,
    }).isRequired,
};

export default Gadget;
