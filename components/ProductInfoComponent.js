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
} from "react-native";

import { Card, Icon, Input, Rating } from "react-native-elements";
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
        <Card featuredTitle={cake.name} image={{ uri: baseUrl + cake.image }}>
          <Text style={{ margin: 10 }}>{cake.description}</Text>
        </Card>
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

  //   handleComment(campsiteId) {
  //     //console.log(JSON.stringify(this.state));
  //     this.props.postComment(
  //       campsiteId,
  //       this.state.rating,
  //       this.state.author,
  //       this.state.text
  //     );
  //     this.toggleModal();
  //   }
  //   resetForm() {
  //     this.setState({
  //       rating: 5,
  //       author: "",
  //       text: "",
  //     });
  //   }
  //   markFavorite(campsiteId) {
  //     this.props.postFavorite(campsiteId);
  //   }
  static navigationOptions = {
    title: "Product Information",
  };

  render() {
    const productId = this.props.navigation.getParam("productId");
    const product = this.props.cakes.cakes.filter(
      (cake) => cake.id === productId
    )[0];
    //   const comments = this.props.comments.comments.filter(
    //     (comment) => comment.campsiteId === campsiteId
    //   );
    return (
      <ScrollView>
        <RenderProduct cake={product} />
        {/* <RenderComments comments={comments} /> */}

        {/* <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={() => this.toggleModal()}
        >
          <View style={styles.modal}>
            <View style={{ margin: 10 }}>
              <Rating
                showRating
                startingValue={this.state.rating}
                imageSize={40}
                onFinishRating={(rating) => this.setState({ rating: rating })}
                style={{ paddingVertical: 10 }}
              />

              <Input
                placeholder="Author"
                onChangeText={(value) => this.setState({ author: value })}
                leftIcon={{ type: "font-awesome", name: "user-o" }}
                leftIconContainerStyle={{ paddingRight: 10 }}
                value={this.state.author}
              />

              <Input
                placeholder="Comment"
                onChangeText={(value) => this.setState({ text: value })}
                leftIcon={{ type: "font-awesome", name: "comment-o" }}
                leftIconContainerStyle={{ paddingRight: 10 }}
                value={this.state.text}
              />

              <Button
                onPress={() => this.handleComment(campsiteId)}
                color="#5637DD"
                title="Submit"
              />
            </View>

            <View style={{ margin: 10 }}>
              <Button
                onPress={() => {
                  this.toggleModal();
                  this.resetForm();
                }}
                color="#808080"
                title="Cancel"
              />
            </View>
          </View>
        </Modal> */}
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

  modal: {
    justifyContent: "center",
    margin: 20,
  },
});
export default connect(mapStateToProps)(ProductInfo);
