import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class RoomComponent extends Component {
    render() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    paddingVertical: 10,
                    borderBottomColor: "rgba(0,0,0,0.6)"
                }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "row"
                    }}
                >
                    <Ionicons
                        name="md-bed"
                        size={25}
                        color="rgba(47,39,133,1)"
                    />
                    <Text
                        style={{
                            color: "rgba(47,39,133,1)",
                            fontSize: 16,
                            marginLeft: 10
                        }}
                    >
                        ROOMS
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end"
                    }}
                >
                    <TouchableOpacity onPress={() => this.props.removeRooms()}>
                        <Ionicons
                            name="md-remove-circle"
                            size={25}
                            color="rgba(47,39,133,1)"
                        />
                    </TouchableOpacity>

                    <Text
                        style={{
                            color: "rgba(0,0,0,0.4)",
                            fontSize: 16,
                            marginHorizontal: 10
                        }}
                    >
                        {this.props.total}
                    </Text>
                    <TouchableOpacity onPress={() => this.props.addRooms()}>
                        <Ionicons
                            name="md-add-circle"
                            size={25}
                            color="rgba(255,0,82,1)"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
