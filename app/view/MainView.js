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
	PropTypes,
	Text,
	ScrollView,
	ToolbarAndroid,
	RefreshControl,
	BackAndroid,
	TouchableOpacity,
	View
}
from 'react-native';

class MainView extends React.Component {
	constructor(props) {
		super(props);
		this.onRefresh = this.onRefresh.bind(this);
	}

		onRefresh() {
		
	}

	render() {
		
		return (	
        <View style={styles.container}>
          <ToolbarAndroid
            navIcon={require('../img/ic_back_white.png')}
            title='知乎日报'
            titleColor="white"
            style={styles.toolbar}
            />
         <ScrollView
					automaticallyAdjustContentInsets={false}
        	horizontal={false}
        	contentContainerStyle={styles.no_data}
					style={{flex: 1}}
					refreshControl={
						<RefreshControl
							refreshing={false}
							onRefresh={this.onRefresh}
							title="Loading..."
							colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
						/>
					}
				>
						<Text style={{fontSize: 16}}>
							目前没有新的通知
						</Text>
        </ScrollView>
        </View>
     
		);
	}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
  },
  toolbar: {
    backgroundColor: '#00a2ed',
    height: 56,
  },
  no_data: {
		flex: 1,
		justifyContent: 'center',
		paddingBottom: 50
	}
});

export default MainView;