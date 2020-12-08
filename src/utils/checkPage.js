import { Products } from '../components/Products/Products';

export const checkPageType = (item, categoryPage) => {
  return (
    <Products
      key={Math.random() * 10}
      mobileRes={item.mobileUrl}
      tableRes={item.tableUrl}
      dcRes={item.dcUrl}
      name={item.name}
      subClass='big'
      isPrise={item.price}
      bool={true}
    />
  )
}