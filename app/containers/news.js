/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	TouchableHighlight,
	ToastAndroid,
	PropTypes,
	Text,
	View
}
from 'react-native';
import {addCount} from '../actions/news'


const propTypes = {
	dispatch: PropTypes.func.isRequired,
	news: PropTypes.object.isRequired
}

class ReactNews extends React.Component {
	constructor(props) {
		super(props);
	this.onPress=this.onPress.bind(this);
	}

	onPress(){
		const {dispatch}=this.props;
		dispatch(addCount());
	}

	render() {
		const {
				news
			
		} = this.props;
		return (
			
        <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor='transparent'>
        <Text style={styles.instructions}>
          {news.count+'数目'}
        </Text>
         </TouchableHighlight>
     
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

ReactNews.propTypes = propTypes;
export default ReactNews;