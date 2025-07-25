import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CFPaymentGatewayService } from "react-native-cashfree-pg-sdk";
import { CFEnvironment, CFSession } from "cashfree-pg-api-contract";

export default function App() {

  const callback = {
    onVerify: (orderID) => {
      console.log("onVerify called with orderID:", orderID);
    },
    onError: (error, orderID) => {
      console.log("onError:", error?.getMessage?.(), "OrderID:", orderID);
    },
  };

  const startPayment = () => {
    // Replace this with your payment logic
    try {
      let session = new CFSession(
        "session_-XewIRsugJzDwdr2yTahi_ow5e8v8pUzBdpB_UgxEPi3XwLeNB61pu7Sb5nmlwo_4arNcdOI9J9zT6LWQYu5FqT9udE3-zy1SlbEvuzd1BNj4Kyd6Zy1sLw-f84payment",
        "devstudio_7354435932584451723",
        CFEnvironment.SANDBOX
      );
      console.log("Session", JSON.stringify(session));
      CFPaymentGatewayService.setCallback(callback);
      CFPaymentGatewayService.doWebPayment(session);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Expo 53 EAS</Text>
      <Button title="Start Payment" onPress={startPayment} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
