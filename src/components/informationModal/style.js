import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.7)',
  },
  errorContainer: {flex: 1, justifyContent: 'center', paddingHorizontal: 40},
  errorHeader: {
    height: '15%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  errorBody: {
    backgroundColor: '#fff',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  errorButton: {
    backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 2,
  },
});
