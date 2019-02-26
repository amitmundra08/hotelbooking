import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class ChildernComponent extends Component {
    callAddChildren = () => {
        this.props.addChildren();
    };
    render() {
        return (
            <View
                style={{
                    flexDirection: "row",

                    paddingVertical: 10
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
                        name="md-people"
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
                        CHILDREN
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
                    <TouchableOpacity
                        onPress={() => this.props.removeChildren()}
                    >
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
                    <TouchableOpacity onPress={() => this.callAddChildren()}>
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
