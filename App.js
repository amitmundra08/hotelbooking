import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import RoomComponent from "./components/RoomComponent";
import AdultsComponent from "./components/AdultsComponent";

import ChildernComponent from "./components/ChildrenComponent";

export default class App extends Component {
    state = {
        rooms: 1,
        children: 0,
        adults: 1
    };

    //function for add rooms
    addRooms = () => {
        let { rooms, adults } = this.state;

        if (adults > rooms) {
            if (rooms < 5) {
                this.setState({ rooms: rooms + 1 });
            }
        }

        if (adults <= rooms) {
            if (rooms < 5) {
                this.setState({ rooms: rooms + 1, adults: rooms + 1 });
            }
        }
    };

    //function to remove rooms
    removeRooms = () => {
        let { rooms, adults, children } = this.state;

        if (rooms > 1) {
            if (adults + children > (rooms - 1) * 4) {
                this.setState({
                    rooms: rooms - 1,
                    adults: (rooms - 1) * 4,
                    children: (rooms - 2) * 4
                });
            } else {
                this.setState({ rooms: rooms - 1 });
            }
        }
    };

    //function to add adults
    addAdults = () => {
        console.log("add adults called");
        let { rooms, adults, children } = this.state;
        if (adults + children < rooms * 4) {
            this.setState({ adults: adults + 1 });
        }
    };

    //function to remove adults
    removeAdults = () => {
        let { adults, rooms } = this.state;
        if (adults > rooms) {
            this.setState({ adults: adults - 1 });
        }
    };

    //function to add children
    addChildren = () => {
        console.log("add children called");
        let { rooms, adults, children } = this.state;
        if (adults + children < rooms * 4) {
            this.setState({ children: children + 1 });
        }
    };

    //function to remove children
    removeChildren = () => {
        let totalChildren = this.state.children;
        if (totalChildren > 0) {
            this.setState({ children: totalChildren - 1 });
        }
    };

    render() {
        let { rooms, children, adults } = this.state;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ color: "rgba(47,39,133,1)", fontSize: 18 }}>
                        <Ionicons
                            name="md-people"
                            size={22}
                            color="rgba(47,39,133,1)"
                        />
                        {"   "}
                        Choose number of{" "}
                        <Text style={{ fontWeight: "bold" }}>people</Text>
                    </Text>
                    <View
                        style={{
                            borderColor: "rgba(0,0,0,0.4)",
                            borderWidth: 1,
                            padding: 10,
                            marginTop: 10
                        }}
                    >
                        <RoomComponent
                            total={rooms}
                            addRooms={this.addRooms}
                            removeRooms={this.removeRooms}
                        />
                        <AdultsComponent
                            total={adults}
                            addAdults={this.addAdults}
                            removeAdults={this.removeAdults}
                        />
                        <ChildernComponent
                            total={children}
                            addChildren={this.addChildren}
                            removeChildren={this.removeChildren}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingVertical: 20,
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});

//255,0,82 for plus sign
