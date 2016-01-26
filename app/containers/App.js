/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import add from '../actions/news'
import React from 'react-native';
import SplashView from './SplashContainer'

const {
  StyleSheet,
  Navigator,
  BackAndroid,
  PropTypes
} = React

var _navigator;

class ZhihuNavi extends React.Component{
	constructor(props){
		super(props);
		BackAndroid.addEventListener('hardwareBackPress',function(){
			return NaviGoBack(_navigator);
		});
	}


renderScene(route,navigator){
	let Component=route.component;
    _navigator = navigator;
	return(
		<Component navigator={navigator} route={route}/>
		);
}

configureScene(route){
	return Navigator.SceneConfigs.FadeAndroid;
}

	render(){
		return (
			<Navigator
			ref='navigator'
			style={styles.navigator}
			configureScene={this.configureScene}
			renderScene={this.renderScene}
			initialRoute={{
				component:SplashView,
				name:'SplashView'
			}}
			/>
			);
	}
}


let styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
})


export default ZhihuNavi;