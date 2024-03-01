import React, { Component } from 'react';
import{ Text, View } from 'react-native';

import PostCard from "../screens/PostCard";

<View style={StyleSheet.container}>
    <SafeAreaView style={StyleSheet.droidSafeArea} />
    <View style={StyleSheet.appTitle}>
        <View style={styles.appIcon}>
            <Image
                source={require("..assets/logo.png")}
                style={styles.iconImage}
            ></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Espectagrama</Text>
        </View>
    </View>
    <View style={styles.cardContainer}>
        <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
        />
    </View>
</View>

renderItem = ({item: post}) => {
    return <PostCard post={post} navigation={this.props.navigation}/>;
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight: CSSVariableReferenceValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.02,
        justifyContent: "center",
        alignItens: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        justifyContent: "center"
    },
    cardContainer: {
        flex: 0.85
    }
})