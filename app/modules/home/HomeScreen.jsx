import {
  MagnifyingGlass,
  ShoppingCartSimple,
  SignOut,
} from 'phosphor-react-native';
import React from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { CategoryCard, Loader, ProductCard } from '../../components';
import { CommonStrings } from '../../constant';
import { light, moderateScale } from '../../theme';
import styles from './HomeScreenStyle';
import useHome from './useHome';
import { EmptyCategory, EmptyProduct } from './components';

/**
 * home screen
 * @param navigation - it's represent navigation object
 * @returns - jsx element for home screen
 */
const HomeScreen = ({ navigation }) => {
  const {
    onSearchHandle,
    search,
    cartData,
    isLoading,
    categories,
    allProducts,
    setSelectedCategory,
    selectedCategory,
    cartNavigation,
    isCartLoading,
    logout,
  } = useHome(navigation);
  const emptyProduct = () => <EmptyProduct />;
  const renderProductCard = item => <ProductCard item={item} />;
  const emptyCategory = () => <EmptyCategory />;
  const renderCategory = item => (
    <CategoryCard
      item={item}
      setCategory={setSelectedCategory}
      category={selectedCategory}
    />
  );

  return (
    <View style={styles.container}>
      {isLoading || isCartLoading ? (
        <Loader />
      ) : (
        <>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.cartIconContainer} onPress={logout}>
              <View style={styles.backButtonContainer}>
                <SignOut
                  size={moderateScale(24, 0.4)}
                  color={light.darkGrey}
                  weight="bold"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cartIconContainer}
              onPress={cartNavigation}>
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>
                  {cartData?.total_items ?? 0}
                </Text>
              </View>
              <View style={styles.backButtonContainer}>
                <ShoppingCartSimple
                  size={moderateScale(24, 0.4)}
                  color={light.darkGrey}
                  weight="bold"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer}>
            <MagnifyingGlass
              size={moderateScale(24)}
              color={light.darkGrey}
              weight="duotone"
            />
            <TextInput
              value={search}
              onChangeText={onSearchHandle}
              style={styles.textInput}
              inputMode="text"
              placeholder={CommonStrings.search}
            />
          </View>
          <View style={styles.verticalSpacing}></View>
          <View style={styles.rowContainer}>
            <View style={styles.subRowContainer}>
              <Text style={styles.subHeading}>{CommonStrings.category}</Text>
              <Text style={styles.subTitle}>{categories?.length - 1 ?? 0}</Text>
            </View>
          </View>
          <FlatList
            horizontal
            style={styles.flatList}
            data={categories}
            renderItem={renderCategory}
            ListEmptyComponent={emptyCategory}
            keyExtractor={key => key.id.toString()}
          />
          <View style={[styles.rowContainer]}>
            <View style={styles.subRowContainer}>
              <Text style={styles.subHeading}>{CommonStrings.products}</Text>
              <Text style={styles.subTitle}>{allProducts?.length ?? 0}</Text>
            </View>
          </View>
          <FlatList
            data={allProducts}
            numColumns={2}
            columnWrapperStyle={styles.columnGap}
            ListEmptyComponent={emptyProduct}
            showsVerticalScrollIndicator={false}
            renderItem={renderProductCard}
            keyExtractor={key => key.id.toString()}
          />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
