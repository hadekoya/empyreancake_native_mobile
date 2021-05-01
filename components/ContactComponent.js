import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  FlatList,
  Modal,
  Button,
  StyleSheet,
  Alert,
  PanResponder,
  TextInput,
} from "react-native";
import { Card, Icon, Input, Rating } from "react-native-elements";

//import * as Animatable from "react-native-animatable";
class Contact extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        {/* <Animatable.View animation="fadeInDown" duration={2000} delay={1000}> */}
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text>123 Main St</Text>
          <Text>Livingston, New Jersey</Text>
          <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
          <Text>Phone: +19735551234</Text>
          <Text>Email: info@empyreancakes.xyz</Text>
        </Card>
        {/* </Animatable.View> */}

        <View>
          <Input
            placeholder="First Name"
            label="First Name"
            //onChangeText={(value) => this.setState({ author: value })}
            leftIcon={{ type: "font-awesome", name: "user-o" }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            //value={this.state.author}
          />

          <Input
            placeholder="Last Name"
            label="Last Name"
            //onChangeText={(value) => this.setState({ text: value })}
            leftIcon={{ type: "font-awesome", name: "comment-o" }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            //value={this.state.text}
          />
          <TextInput
            label="Feedback"
            style={styles.input}
            //onChangeText={onChangeNumber}
            //value={number}
            placeholder="Feedback"
            multiline
            numberOfLines={3}
          />
          <Button
            //onPress={() => this.handleComment(campsiteId)}
            color="#5637DD"
            title="Submit"
          />
        </View>

        <View style={{ margin: 10 }}>
          <Button
            // onPress={() => {
            //   this.toggleModal();
            //   this.resetForm();
            // }}
            color="#808080"
            title="Cancel"
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  cardRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },

  leftJustified: {
    alignItems: "flex-start",
    // justifyContent: "flex-start",
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  input: {
    height: 80,
    margin: 12,
    //borderWidth: 1,
  },
});

export default Contact;
