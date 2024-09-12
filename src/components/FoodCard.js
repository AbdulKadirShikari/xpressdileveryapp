import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import { colors, parameters } from '../global/styles'


export default function FoodCard ({
    onPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,screenWidth 
})
{
    return (
        <TouchableOpacity>
            <View style={{ ...styles.carView, width: screenWidth }}>
                <Image
                    style={{ ...styles.image, width: screenWidth }}
                    source={{uri:images}}
                />
                    <View>
                <View>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.distancce}>
                        <Icon
                            name='place'
                            type='material'
                            color={colors.gray2}
                            size={18}
                            iconStyle={{marginTop:3}}
                        />
                        <Text style={styles.min}>{farAway} Min</Text>
                    </View>
                    <View style={{flex:9,flexDirection:'row'}}>
                        <Text style={styles.address}>{businessAddress}</Text>
                    </View>

                </View>
            </View>
            </View>
        
            <View style={styles.review}>
                <Text style={styles.average}>{averageReview}</Text>
                <Text style={styles.numberOfReview}>{numberOfReview} Reviews</Text>
            </View>
       </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    carView: {
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderWidth: 1,
        borderColor: colors.gray4,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius:5
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height:150
    },
    restaurantName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.gray1,
        marginTop: 5,
        marginLeft:10
    },
    distancce: {
        flex: 4,
        flexDirection: 'row',
        borderRightColor: colors.gray4,
        paddingHorizontal: 5,
        borderRightWidth:1
    },
    min: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 5,
        color:colors.gray3
    },
    address: {
        fontSize: 12,
        paddingTop: 5,
        color: colors.gray2,
        paddingHorizontal:10
    },
    review: {
        position:'absolute',
        top: 0,
        right: 10,
        backgroundColor: 'rgba(52,52,52,0.3)',
        padding: 2,
        alignItems: 'center',
        borderTopRightRadius: 5,
        borderBottomLeftRadius:12
    },
    average: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:-3 
    },
    numberOfReview: {
        color: "white",
        fontSize: 13,
        marginRight: 0,
        marginLeft:0
    }
})