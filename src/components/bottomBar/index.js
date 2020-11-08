import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BottomBar({descriptors}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {Object.values(descriptors).map((element, index) => {
        const {options} = element;
        const isFocused = element.navigation.isFocused(options.name);
        const iconName = isFocused ? options.focusIcon : options.notFocusIcon;

        const handleButtonPress = () => {
          element.navigation.navigate(options.name);
        };
        return (
          <TouchableOpacity
            activeOpacity={1}
            key={index}
            style={{flex: 1, padding: 5, alignItems: 'center'}}
            onPress={handleButtonPress}>
            <Icon name={iconName} size={isFocused ? 22 : 20} color="#808080" />
            <Text
              style={[
                {textAlign: 'center', color: '#808080'},
                isFocused ? {fontWeight: 'bold'} : {},
              ]}>
              {options?.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
