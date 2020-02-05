import React from 'react'
import {View,Image} from 'react-native'

class PokeLoader extends React.Component{
	render(){
		return(
			<View sytle={{flex:1}}>
				<Image  
					source={{uri:"https://media1.giphy.com/media/l0HlLMeBgzK2UuHVS/giphy.gif"}}
					style={styles.img} 
				>
				</Image>
			</View>
			)
	}
}
const styles={
	img:{
		height: 400
		,width: 400
		,justifyContent: 'center'
		,alignItems: 'center'
	}
}

export default PokeLoader;