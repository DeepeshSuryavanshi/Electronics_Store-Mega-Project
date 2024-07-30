import React, { useEffect, useState } from 'react'
import { View, Text,StyleSheet,Dimensions, FlatList,TouchableOpacity} from 'react-native'
import { PostData } from '../../services/FetchNodeServices'
const {width, height} = Dimensions.get('window');

export default function Color({data,setproductdata}) {
  const [details,setDetails] = useState([])
  var  selectedID = data.productdetailsid;
  const fetchProductDetails=async()=>{
    var result=await PostData('useinter/fetch_product_details_by_productid',{productid:data.productid})
    setDetails(result.data) 
  }
  const handleChange = (data) => {
    setproductdata(data)
   }
const ItemView =(Data)=>{
    var data = Data.Data.item
    return(
        <TouchableOpacity onPress={()=>handleChange(data)}>
        <View style={{display:'flex',marginRight:5,backgroundColor:selectedID == data.productdetailsid? '#12daa8':'#34495e',alignItems:'center',justifyContent:'center',borderRadius:10,borderWidth:1,width:width*.36,height:height*.051}} >
        <Text style={{fontSize:16,color:selectedID == data.productdetailsid? '#000':'#fff'}}>{data.color}</Text>
        </View>
        </TouchableOpacity>
    )
  }  

  useEffect(()=>{
    fetchProductDetails()
  },[data])

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Color</Text>
      <View styles={styles.buttonShow}>
        <FlatList
        horizontal
        data={details}
        renderItem={(item) => <ItemView Data={item}/>}
        keyExtractor={item => item.index}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        padding:2,
        marginLeft:5,
    },
    title:{
        color:'#fff',
        fontSize:18,
        fontWeight:'600',
        marginBottom:5
    },
    buttonShow:{
        flexDirection:'row',
        height:height*1,
        width:width*1,
    }
})