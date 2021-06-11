const ItemDisplay = ({ item }) => (
  <div>
    <img src={item.image} alt={item.itemName} style={{ maxHeight: '500px', maxWidth: '500px'}} />
    <div>{item.itemName}</div>
  </div>
)

export default ItemDisplay;
