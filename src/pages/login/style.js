import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {justifyContent: 'space-evenly', flex: 1},
  container: {flex: 1},
  input: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 10,
    marginHorizontal: 25,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,

  },

  inputTitle: {
    marginHorizontal: 25,
    marginVertical: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 55,
    color: 'white',
  },

  button: {
    marginHorizontal: 75,
    marginVertical: 12,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding:7
  },

  Textbutton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    color: 'black'
  },

  imagemLogo: {
    width:200,
    height:200,
    alignSelf: "center",
    borderRadius: 100,
    marginVertical: -50,
  }
});
