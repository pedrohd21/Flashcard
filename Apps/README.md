instalar fonts 
baixar fonte do google criar o arquivo {react-native.config.js
module.exports = {
  projetct: {
    ios: {},
    android: {},
  },
  assets: ["./assets/fonts"],
};
}, dentro do src criar a pasta assets/fonts
e da o comando 
npm i -g react-native-asset
npx react-native-asset 

para criar um apk