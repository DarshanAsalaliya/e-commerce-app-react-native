import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommonStrings, Route } from '../../constant';
import {
  AuthAction,
  CartAction,
  CategoryAction,
  OrderAction,
  ProductAction,
} from '../../redux';

/**
 * custom hook of home screen
 * @param navigation - it's represent navigation object
 * @returns - object for home screens
 */
const useHome = navigation => {
  const dispach = useDispatch();
  const userData = useSelector(state => state.AuthReducer.userData);
  const { products, isLoading } = useSelector(state => state.ProductReducer);

  useEffect(() => {
    dispach(CartAction.getCartPending(userData?.meta?.cartId));
    dispach(CategoryAction.getCategoryPending());
    dispach(ProductAction.getProductsPending());
  }, []);

  useEffect(() => {
    setAllProduct(products);
    setSearchProduct(products);
  }, [products]);

  const { categories } = useSelector(state => state.CategoryReducer);
  const { cartData, isCartLoading } = useSelector(state => state.CartReducer);
  const [search, setSearch] = useState('');
  const [allProducts, setAllProduct] = useState(() => []);
  const [searchProduct, setSearchProduct] = useState(() => []);
  const [selectedCategory, setSelectedCategory] = useState(
    CommonStrings.allToken,
  );

  useEffect(() => {
    if (selectedCategory !== CommonStrings.allToken) {
      const categoryProduct = products.filter(
        data => data.categories[0].id === selectedCategory,
      );
      setAllProduct(categoryProduct);
      setSearchProduct(categoryProduct);
    } else {
      setAllProduct(products);
      setSearchProduct(products);
    }
  }, [selectedCategory]);

  const onSearchHandle = text => {
    setSearch(text);
    const filterSearch = searchProduct.filter(data => {
      const dataString = data.name.toLowerCase();
      const searchtext = text.toLowerCase();
      return dataString.includes(searchtext);
    });
    setAllProduct(filterSearch);
  };

  const cartNavigation = () => navigation.navigate(Route.cartScreen);

  const logout = () => {
    dispach(OrderAction.clear());
    dispach(CartAction.clear());
    dispach(AuthAction.logOut());
  };

  return {
    dispach,
    isLoading,
    onSearchHandle,
    categories,
    allProducts,
    cartData,
    search,
    setSelectedCategory,
    selectedCategory,
    cartNavigation,
    isCartLoading,
    logout,
  };
};

export default useHome;
