'use strict';

import React from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import News from './news';

class SplashContainer extends React.Component{
	render() {
		return (
			<News {...this.props} />
		)
	}
}

function mapStateToProps(state){
	return {
		news :state.news
	}
}

export default connect(mapStateToProps)(SplashContainer);