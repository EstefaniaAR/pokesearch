import React from 'react'
import {View,Text} from 'react-native'
import {Header, Item, Icon, Input, Button} from 'native-base'

class Search extends React.Component
{
	state={
		pokeSearch:""
	}
	searchPoke=()=>{

	}
	render(){
		return(
			<View style ={{flex:1, width:'100%'}}>
				<Header 
				searchBar
				rounded
				>
					<Item>
						<Icon name="search" onPress={this.searchPoke}></Icon>
						<Input
							value = {this.state.pokeSearch}
							placeholder ="Search Pokemon"
							onChangeText={(pokeSeach) =>this.setState({pokeSeach})} 
						/>
					</Item>
				</Header>
			</View>
			)
	}
}

export default Search