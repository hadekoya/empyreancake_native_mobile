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
    features: state.features,
  };
};

function RenderFeatures(props) {
  //const { features, } = props;

  //   if (props.isLoading) {
  //     return <Loading />;
  //   }
  console.log(props);
  const RenderFeaturesItem = ({ item }) => {
    return (
      <Card
        style={styles.cardStyle}
        image={{ uri: baseUrl + item.image }}
      ></Card>
    );
  };

  if (props.errMess) {
    return (
      <View>
        <Text>{props.errMess}</Text>
      </View>
    );
  }

  if (props.features) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={props.features}
          renderItem={RenderFeaturesItem}
          keyExtractor={(feature) => feature.id.toString()}
        />
      </SafeAreaView>
    );
  }
  return <View />;
}

class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Empyrean Cake",
  };

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={{ flex: 1 }}>
          {
            <RenderFeatures
              features={this.props.features.features}
              errMess={this.props.features.errMess}
            />
          }

          <Text style={styles.QuoteStyle}>"A taste of heaven on earth!"</Text>
        </SafeAreaView>
        <View style={styles.buttonView}>
          <Button title="Search Catalog" style={styles.submit} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#193b76",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  buttonView: {
    width: "80%",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  cardStyle: {
    borderColor: "red",
    borderWidth: 0, // Remove Border
    shadowColor: "rgba(0,0,0, 0.0)", // Remove Shadow IOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0, // This is for Android
  },
  submit: {
    backgroundColor: "#193b76",
    borderRadius: 50,
    borderWidth: 1,
    color: "#007bff",
    borderColor: "#fff",
    overflow: "hidden",
  },

  QuoteStyle: {
    fontStyle: "italic",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 20,
    fontSize: 20,
  },
});

export default connect(mapStateToProps)(Home);
