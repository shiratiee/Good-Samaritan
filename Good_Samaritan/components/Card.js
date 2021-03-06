import React, { Component } from 'react';
import { View } from 'react-native';

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    //width means left or right, height is top and bottom
    shadowOpacity: 0.1,
    shadowRadius: 2, //same purpose as borderRadius
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 1 //same margin property as CSS
  }
};

export default Card;
