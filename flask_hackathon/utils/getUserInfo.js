import Constants from 'expo-constants';
import uuid from 'uuid';
// import { Text } from 'galio-framework';
function getUserInfo() {
  const { installationId, deviceName, platform } = Constants;
  var deviceId = uuid.v4();
  return {
    installationId,
    deviceName,
    platform,
  };
}
export default getUserInfo;
