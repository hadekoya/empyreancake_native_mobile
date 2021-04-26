import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Card } from "react-native-elements";

import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
//import Loading from "./LoadingComponent";

const mapStateToProps = (state) => {
  return {
    cakes: state.cakes,
  };
};

class Productdetails extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Product Catalog",
  };

  render() {
    //console.log("DEBUG");
    //console.log(this.props);
    return (
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            style={{ margin: 5 }}
            data={this.props.cakes.cakes}
            numColumns={2}
            keyExtractor={(item, index) => item.id}
            renderItem={(item) => (
              <Card image={{ uri: baseUrl + item.item.image }}>
                {/* {console.log("DEBBUG")}
                {console.log(item)} */}
                <Text style={{ margin: 10 }}>{item.item.name}</Text>
              </Card>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  cardStyle: {
    borderColor: "red",
    borderWidth: 0, // Remove Border
    shadowColor: "rgba(0,0,0, 0.0)", // Remove Shadow IOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0, // This is for Android

    width: "40%",
    height: "10%",
  },
});

export default connect(mapStateToProps)(Productdetails);
