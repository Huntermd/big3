// credit to Alex Martinez & Peter Piekarczyk for Environment configuration inspiration
// https://medium.com/@peterpme/environment-variables-in-expo-using-release-channels-4934594c5307
// https://alxmrtnz.com/thoughts/2019/03/12/environment-variables-and-workflow-in-expo.html
import Constants from 'expo-constants';

// get the localhost ip address at runtime using the Expo manifest
// this enables both simulator and physical device debugging with our local api
let localhost = Constants.expoGoConfig.debuggerHost.split(':').shift();
// if (Constants.debuggerHost) {
//   localhost = Constants.debuggerHost.split(':').shift();
// }

// set environment variables
const ENV = {
  dev: {
  
    API_URI: `http://${localhost}:8087/` 
    //  http://10.0.0.246:8087/
  },
  prod: {
    // update the API_URI value with your publicly deployed API address
    API_URI: 'https://<PUBLIC-API-URI>'
  }
};
console.log(ENV.dev.API_URI)// not working
console.log(Constants.releaseChannel)

const getEnvVars = (env = Constants.releaseChannel) => {
  // __DEV__ is set to true when react-native is running locally in dev mode
  // __DEV__ is set to false when our app is published
  if (__DEV__) {
    console.log('dev')
    return ENV.dev.API_URI;
  } else if (env === 'prod') {
    console.log('prod')
    return ENV.prod.API_URI;
  }
};

export default getEnvVars;
