import React, { Component } from "react";
import {
  //   Text,
  View,
  ScrollView,
  FlatList,
  Modal,
  Button,
  StyleSheet,
  Alert,
  PanResponder,
  Image,
} from "react-native";

import { Card, Icon, Input, Rating, Text, Badge } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
// import { postFavorite } from "../redux/ActionCreators";
// import { postComment } from "../redux/ActionCreators";
// import * as Animatable from "react-native-animatable";

const mapStateToProps = (state) => {
  return {
    cakes: state.cakes,
  };
};

function RenderProduct(props) {
  const { cake } = props;

  if (cake) {
    return (
      <View>
        <Text h4>{cake.name}</Text>
        {/* <Image source={{ uri: baseUrl + cake.image }} /> */}
        <Card image={{ uri: baseUrl + cake.image }}></Card>
        <Text h4>Description</Text>
        <Text style={{ margin: 10 }}>{cake.description}</Text>
        <Text h4>{cake.price}</Text>
        <Rating
          style={styles.leftJustified}
          imageSize={20}
          readonly
          startingValue={cake.ratings}
        />
        <Badge
          style={styles.leftJustified}
          status="warning"
          value={<Text>{cake.category} </Text>}
        />
      </View>
    );
  }
  return <View />;
}

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  static navigationOptions = {
    title: "Product Detail",
  };

  render() {
    const productId = this.props.navigation.getParam("productId");
    const product = this.props.cakes.cakes.filter(
      (cake) => cake.id === productId
    )[0];

    return (
      <ScrollView>
        <RenderProduct cake={product} />
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
});
export default connect(mapStateToProps)(ProductInfo);
