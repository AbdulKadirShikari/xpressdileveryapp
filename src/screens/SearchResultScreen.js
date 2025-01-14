import { StyleSheet, Text, View,Dimensions,FlatList } from 'react-native'
import React from 'react'
import SearchResultCard from '../components/SearchResultCard'
import { restaurantsData } from '../global/Data'
import { productData } from '../global/Data'
import { colors } from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;


const SearchResultScreen = ({navigation,route}) => {
  return (
    <View style={styles.container}>
     
      <View>
        <FlatList
         style={{ backgroundColor:colors.Cardbackground }}
          data={restaurantsData}
          keyExtractor={( item, index ) => index.toString()}
          renderItem={({ item, index }) => (
         <SearchResultCard
        screenWidth={SCREEN_WIDTH}
        images={item.images}
        averageReview={item.averageReview}
        numberOfReview={item.numberOfReview}
        restaurantName={item.restaurantName}
        farAway={item.farAway}
              businessAddress={item.businessAddress}
              productData={item.productData}
              OnPressRestaurantCard={()=>{navigation.navigate("RestaurentHomeScreen",{id:index,restaurant:item.restaurantName})}}

      />
          )}
          ListHeaderComponent={
             <View>
            <Text style={styles.listHeader}>{restaurantsData.length} Result for {route.params.item}</Text>
      </View> 
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
      
    </View>
  )
}

export default SearchResultScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20
    
  },
  listHeader: {
    color: colors.gray1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontWeight:'bold'
  }
})