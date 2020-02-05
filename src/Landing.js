import React from 'react'
import {View,Text,ImageBackground,Dimensions} from 'react-native'
import {Button} from 'native-base'

var myBackground = require('../assets/landing.jpg')
var height = Dimensions.get('window').height
var width = Dimensions.get('window').width

class Landing extends React.Component{
	render()
	{
		return(
			<View>
				<ImageBackground source = {myBackground} style={styles.backgroundImage}>
      
			        <View style ={styles.viewStyle}>
			          <Text
			          style ={styles.titleStyle}>
			          Welcome to Pokesearch</Text>
			          <Button
			          block={true}
			          style={styles.buttonStyle}
			          onPress={()=>this.props.switchScreen("search")}>
			          <Text style ={styles.buttonText}>Start Searching</Text>
			          </Button>
			        </View>

		      	</ImageBackground>
			</View>
			)
	}
}

const styles = {
  viewStyle:{
    flex: 1
    ,flexDirection: 'column'
    ,justifyContent: 'center'
    ,alignItems: 'center'
  },
  titleStyle:{
    fontSize: 30
    ,color: 'blue'
    ,alignItems: 'center'
  },
  buttonStyle:{
    margin: 10
  },
  buttonText:{
    color: 'white'
  },
  backgroundImage:{
		flex:1
		,resizeMode: 'cover'
		,height: height
		,width: width
	}

};

export default Landing