import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Tile } from "react-native-elements";

import SafeAreaView from "react-native-safe-area-view";
import { Card, SearchBar, Divider, ButtonGroup } from "react-native-elements";

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
  selectedCake = (item) => {
    console.log("selecionado: " + item);
  };
  render() {
    //console.log("DEBUG");
    //console.log(this.props);
    const { navigate } = this.props.navigation;
    const buttons = ["All", "Birthday", "Wedding", "Cupcake", "Custom"];
    return (
      //   <ScrollView>
      //     <SearchBar placeholder="Type Here..." />
      //     <Text style={styles.title}>Filter by Category</Text>
      //     <ButtonGroup
      //       selectedBackgroundColor="rgba(27, 106, 158, 0.85)"
      //       selectedIndex={0}
      //       selectedTextStyle={{ color: "#fff" }}
      //       buttons={buttons}
      //       containerStyle={{ borderRadius: 0, height: 50 }}
      //       containerBorderRadius={0}
      //     />
      //     <Divider style={{ backgroundColor: "grey" }} />
      //     <SafeAreaView style={styles.container}>
      <FlatList
        style={{ margin: 5 }}
        data={this.props.cakes.cakes}
        numColumns={2}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={(item) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("ProductInfo", { productId: item.item.id })}
            //onPress={() => this.selectedCake(item.item.id)}
          >
            <View style={styles.touchcontainer}>
              <Image
                style={styles.tinyLogo}
                source={{ uri: baseUrl + item.item.image }}
              />
              <Text>{item.item.name}</Text>
            </View>
          </TouchableOpacity>

          //   <Tile
          //     title={item.name}
          //     caption={item.description}
          //     featured
          //     onPress={() => this.selectedCake(item.item)}
          //     imageSrc={{ uri: baseUrl + item.item.image }}
          //     imageContainerStyle={{
          //       width: 150,
          //       borderTopLeftRadius: 10,
          //       borderTopRightRadius: 10,
          //       //resizeMode: "contain",
          //     }}
          //   />

          // <Card
          //   style={styles.boxCon}
          //   key={item.item.id}
          //   image={{ uri: baseUrl + item.item.image }}
          //   imageStyle={{
          //     width: 150,
          //     borderTopLeftRadius: 10,
          //     borderTopRightRadius: 10,
          //     //resizeMode: "contain",
          //   }}
          //   onPress={() => this.selectedCake(item.item)}
          // >
          //   <Text style={styles.text}>{item.item.name}</Text>
          // </Card>
        )}
      />
      //     </SafeAreaView>
      //   </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 160,
    height: 100,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  touchcontainer: {
    paddingTop: 10,
    paddingRight: 50,
  },
  cardStyle: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    flex: 1,
    aspectRatio: 1, // Your aspect ratio
  },

  boxCon: {
    // margin: 15,
    // marginHorizontal: 10,
    // marginBottom: 17.5,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // elevation: 5,
    // borderRadius: 10,
  },

  //   container: {
  //     width: "100%",
  //     height: 200,
  //     marginBottom: 25,
  //     borderRadius: 15,
  //     backgroundColor: "#FFFFFF",
  //     overflow: "hidden",
  //   },

  image: {
    width: "80%",
    height: "70%",
  },

  //   textContainer: {
  //     flex: 1,
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },

  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  subtitle: {
    marginLeft: 10,
  },
});

export default connect(mapStateToProps)(Productdetails);
