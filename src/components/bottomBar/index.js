import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BottomBar({descriptors}) {
  return (
    <View style={{flexDirection: 'row', backgroundColor: "#f0f0f0",elevation: 10, borderTopWidth: 1, borderColor: "#d1d1d1"}}>
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
            style={{flex: 1, padding: 5, alignItems: 'center', justifyContent: "center"}}
            onPress={handleButtonPress}>
            <Icon name={iconName} size={isFocused ? 26 : 20} color="black" />
            <Text
              style={[
                {textAlign: 'center', color: 'black'},
                isFocused ? {fontWeight: 'bold', fontSize:15} : {fontSize: 12},
              ]}>
              {options?.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
