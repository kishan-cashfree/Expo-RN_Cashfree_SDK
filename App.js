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
        "session_EBPLceK_suZjqMUj4yn0Tv7jpg2FogAPBdldwWZztj4HgmizB8dOVbcHKA3z0M-h9k2LQERr3VfPmRBA4Egikz08XyqB4crEfEYaUs_MbjtpaTQ0hTEOoKHHAGcpayment",
        "devstudio_7347901859504599403",
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
