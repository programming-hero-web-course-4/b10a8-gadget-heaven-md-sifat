
const GadgetD = () => {
    const gadget = [];
    const {
        product_title,
        product_image,
        category,
        price,
        description,
        specifications,
        availability,
        rating,
        other_field,
    } = gadget;

    return (
        <div className="gadget-card border-2 rounded-lg p-4 w-[300px] m-4 shadow-lg hover:shadow-xl transition-all">
            <img
                src={product_image}
                alt={product_title}
                className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold">{product_title}</h3>
                <p className="text-sm text-gray-600">{category}</p>
                <p className="text-md text-gray-800 mt-2">{description}</p>
                <p className="text-lg font-bold text-blue-600 mt-2">${price}</p>
                <p className={`text-sm mt-2 ${availability ? 'text-green-500' : 'text-red-500'}`}>
                    {availability ? 'In Stock' : 'Out of Stock'}
                </p>
                <div className="mt-2">
                    <strong>Rating: </strong>
                    <span className="text-yellow-400">{rating}⭐</span>
                </div>
                {other_field && (
                    <p className="text-sm mt-2 text-gray-500">
                        <strong>Other Info: </strong>{other_field}
                    </p>
                )}
                <div className="mt-4">
                    <strong>Specifications:</strong>
                    <ul className="list-disc pl-6 text-sm text-gray-700">
                        {specifications.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};



export default GadgetD;
