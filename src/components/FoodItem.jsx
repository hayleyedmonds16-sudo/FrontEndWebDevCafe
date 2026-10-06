const FoodItem = ({ food }) => {
    return (
        <tr>
            <td>{food.name}</td>
            <td>{food.description}</td>
            <td>Price: ${food.price}</td>
        </tr>
    );
};

export default FoodItem;