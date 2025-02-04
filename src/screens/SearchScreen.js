import React from 'react'
import { View, Text ,FlatList,TouchableWithoutFeedback,ImageBackground,StyleSheet, Dimensions} from 'react-native'  
import SearchComponent from '../components/SearchComponent'
import { filterData2 } from '../global/Data'
import { colors } from '../global/styles'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen ({navigation})
{
    return (
        <View style={{flex:1,marginBottom:10}}>
            <SearchComponent />
            <View style={{ marginTop:10 }}>
                <FlatList
                    style={{  }}
                    data={filterData2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback
                            onPress={() =>
                            {
                                navigation.navigate("SearchResultScreen",{item:item.name})
                        }}
                        >
                            <View style={styles.imageView}>
                                <ImageBackground
                                    style={styles.image}
                                    source={{ uri:item.image}}
                                >
                                    <View style={styles.textView}>
                                        <Text style={{ color: colors.Cardbackground }}>{ item.name}</Text>
                                    </View>
                                 </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                        
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={<Text style={styles.listHeader}>Top Catagories</Text>}
                    ListFooterComponent={<Footer/>}
                />
                    
                
            </View>
        </View>
    )
}


const Footer = () =>
{
    return (
        <View style={{ marginTop: 20,marginBottom: 30 }}>
         <View style={{  }}>
                <FlatList
                    style={{marginBottom:10 }}
                    data={filterData2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback
                         onPress={() =>
                            {
                                navigation.navigate("SearchResultScreen",{item:item.name})
                        }}
                        >
                            <View style={styles.imageView}>
                                <ImageBackground
                                    style={styles.image}
                                    source={{ uri:item.image}}
                                >
                                    <View style={styles.textView}>
                                        <Text style={{ color: colors.Cardbackground }}>{ item.name}</Text>
                                    </View>
                                 </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                        
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={<Text style={styles.listHeader}>More Catagories</Text>}
                   
                />
                    
                </View>
            </View>
    )
}
    


const styles = StyleSheet.create({
    imageView: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center',
        width: SCREEN_WIDTH * 0.4475,
        height: SCREEN_WIDTH * 0.4475,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035,
        
       
        
    },
    image: {
         width: SCREEN_WIDTH * 0.4475,
        height: SCREEN_WIDTH * 0.4475,
        borderRadius:10,    
    },
    listHeader: {
        fontSize: 16,
        color: colors.gray2,
        paddingBottom: 10,
        marginLeft:12
    },
    textView: {
        
        width: SCREEN_WIDTH * 0.4475,
        height: SCREEN_WIDTH * 0.4475,
        justifyContent: 'center',
       
        backgroundColor: 'rgba(52,52,52,0.3)',
        alignItems:'center'
        
    }
})