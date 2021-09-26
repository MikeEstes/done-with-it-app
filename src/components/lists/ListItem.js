import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Text from '../Text';
import defaultStyles from '../../config/styles';

const ListItem = ({
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subtitle && (
              <Text style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons
            name='chevron-right'
            size={25}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: defaultStyles.colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subtitle: {
    color: defaultStyles.colors.medium,
  },
  title: {
    fontWeight: '500',
  },
});

export default ListItem;
