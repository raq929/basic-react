const ItemDisplay = ({ item }) => (
  <div>
    <img src={item.image} alt={item.itemName} />
    <div>{item.itemName}</div>
  </div>
)

export default ItemDisplay;
