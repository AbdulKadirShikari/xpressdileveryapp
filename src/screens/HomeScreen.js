import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions,StatusBar} from 'react-native'
import CountDown from 'react-native-countdown-component'
import { Icon } from 'react-native-elements'
import HomeHeader from '../components/HomeHeader'
import { colors } from '../global/styles'
import {filterData,restaurantsData} from '../global/Data'
import FoodCard from '../components/FoodCard'

const SCREEN_WIDTH=Dimensions.get('window').width 

export default function HomeScreen ({navigation})
{

    const [delivery, setDelivery] = useState(true);
    const [indexCheck,setIndexCheck]=useState('0')
    return (
        <View style={styles.container}>
              
            <StatusBar
                translucent
                barStyle='light-content'
                backgroundColor="rgba(255,140,82,1)"
                
            />

            <HomeHeader navigation={navigation} />
            <ScrollView
            
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}            >
                <View style={{ backgroundColor: colors.Cardbackground, padding: 5 }} >
                    
                    
            <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-evenly'}}> 
                <TouchableOpacity
                    onPress={() =>
                    {
                        setDelivery(true)   
                        console.log(delivery)
                }}
                >
                    <View style={{ ...styles.deliveryButton,backgroundColor: delivery ? colors.buttons : colors.gray5 }}>
                        <Text style={styles.deliveryText}>Delivery</Text>

                    </View>
                </TouchableOpacity>
                 <TouchableOpacity
                
                onPress={() =>
                    {
                                setDelivery(false)
                                navigation.navigate('RestaurentsMapScreen')
                          console.log(delivery)
                    }
                        }>
                    <View style={{ ...styles.deliveryButton,backgroundColor: delivery ? colors.gray5 : colors.buttons }}>
                        <Text style={styles.deliveryText}>Pick Up</Text>

                    </View>
                </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.filterView}>
                <View style={styles.addressView}>
                    <View style={{flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                    <Icon
                        type='material-community'
                        name='map-marker'
                        color={colors.gray2}
                        size={26}/>
                        <Text style={{marginLeft:5}}>22 Bessie Street</Text>
                    </View>
                    <View style={styles.clockView}>
                    <Icon
                        type='material-community'
                        name='clock-time-four'
                        color={colors.gray1}
                        size={26}/>
                        <Text style={{marginLeft:5}}>Now</Text>
                        </View>
                    </View>
                    <View>
                        <Icon
                        type='material-community'
                        name='tune'
                        color={colors.gray1}
                        size={26}/>
                    </View>
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={filterData}
                    keyExtractor={(item) => item.id}
                    extraData={indexCheck}
                    renderItem={({ item, index }) => (
                        <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                        >
                            <View style={indexCheck===item.id?{...styles.smallCardSelected}:{...styles.smallCard}}>
                                <Image
                                    style={{ height: 60, width:60, borderRadius: 30 }}
                                    source={item.image}
                                />
                                <View>
                                    <Text style={indexCheck===item.id?{...styles.smallCardTextSelected}:{...styles.smallCardText }}>{item.name}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                />
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Free Delivery Now</Text>
                </View>
                <View style={{ flexDirection: 'row',alignItems:'center',marginTop:20 }}>
                        <Text style={{marginLeft:15,fontSize:16,marginTop:-10 ,marginRight:5,color:'#000000',fontWeight:'bold'}}>Options Changing In</Text>
                        <CountDown
                        until={3600}
                        size={14}
                        digitStyle={{ backgroundColor: colors.lightgreen }}
                        digitTxtStyle={{ color: colors.Cardbackground }}
                        timeToShow={['M', 'S']}
                        timeLabels={{m:'Min',s:'Sec'}}
                    />
                    </View>
                <View>
                    <FlatList
                        style={{ marginTop: 10, marginBottom: 10 }}
                        horizontal={true}
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{marginRight:5}}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                     numberOfReview={item.numberOfReview}

                                />
                            </View>
                        )}
                    />
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Promotions Available</Text>
                </View>
                <View>
                    <FlatList
                        style={{ marginTop: 10, marginBottom: 10 }}
                        horizontal={true}
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{marginRight:5}}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                     numberOfReview={item.numberOfReview}

                                />
                            </View>
                        )}
                    />
                </View>
                 <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Restaurants In Your Area</Text>
                </View>
                <View style={{width:SCREEN_WIDTH,paddingTop:10}}>
                    {
                        restaurantsData.map(item => (
                            <View key={item.id} style={{paddingBottom:20}}>
                             <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.95}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                     numberOfReview={item.numberOfReview}

                                />
                            </View>
                        ))
               }
                </View>
            </ScrollView>
            { delivery &&
                <View style={styles.floatButton}>
                    <TouchableOpacity
                        onPress={() =>
                        {
                            navigation.navigate('RestaurentsMapScreen')
                        }}
                    >
                        <Icon
                            name='place'
                            type='material'
                            size={32}
                            color={colors.buttons}
                        />
                        <Text style={{ color: colors.gray2 }}>Map</Text>
                    

                    </TouchableOpacity>
                </View>
            } 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20

    },
    deliveryButton: {
    paddingHorizontal:20,
     borderRadius:15,
     paddingVertical:5
    },
deliveryText:{
    marginLeft:5,
    fontSize:15
    },
    filterView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly",
        marginHorizontal: 10,
        borderRadius: 15,
        marginVertical: 10
    }, 
    clockView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        backgroundColor: colors.Cardbackground,
        borderRadius: 15, 
        marginRight: 15,
        paddingHorizontal: 5
        
        
    },
    addressView: {
        flexDirection: 'row',
        backgroundColor: colors.gray5,
        paddingVertical: 3,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderRadius:15 
    },
    headerText: {
        color: colors.gray2,
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft:10
    },
    headerTextView: {
        backgroundColor: colors.gray5,
        paddingVertical:4
    },
    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.gray5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height:100 
    },
    smallCardSelected: {
         borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height:100 
    },
    smallCardTextSelected: {
        fontWeight: 'bold',
        color: colors.Cardbackground
    },
     smallCardText: {
        fontWeight: 'bold',
        color: colors.gray2
    },
    floatButton: {
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: 'white',
        elevation: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems:'center'
     }
})  