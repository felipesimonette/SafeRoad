import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
    padding: 20,
  },
  backgroundArrow: (height) => ({
    height: height,
    width: height,
    borderWidth: 100,
    borderColor: '#c9c9c9',
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 200,
    zIndex: 1,
  }),
  body: {zIndex: 10, flex: 1, justifyContent: 'space-evenly'},
  iconInput: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  defaultInput: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    flex: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 5,
  },
  footer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  hyperLink: {
    fontSize: 15,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
