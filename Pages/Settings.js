import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';


import Feather from 'react-native-vector-icons/Feather';

export default function Settings() {
    return (

        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.caixa}>
                <Text style={styles.txt}>Profile</Text>
                <Image style={styles.img} resizeMode='contain' source={require('../Img/menina.png')}></Image>
            </SafeAreaView>

            <SafeAreaView style={styles.boxHe}>

                <SafeAreaView style={styles.caixaMaior}>
                    <SafeAreaView style={styles.txtIcon}>
                        <Text style={styles.textoCaixa}>120</Text>
                        <Feather style={styles.icon} name='book-open' color='#0063B3' size={25}></Feather>
                    </SafeAreaView>
                    <Text style={styles.txtMaior}>Completed Books</Text>
                </SafeAreaView>

                <SafeAreaView style={styles.caixaM}>
                    <SafeAreaView style={styles.txtIcon}>
                        <Text style={styles.textoCaixa}>96</Text>
                        <Feather style={styles.icon} name='star' color='#0063B3' size={25}></Feather>
                    </SafeAreaView>
                    <Text style={styles.txtMaior}>Reviews</Text>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.caixaMark}>
                <Text style={styles.res}>MY BOOKMARKS</Text>
                <Feather style={styles.incoMarkk} name='bookmark' color='#7F879A' size={25}></Feather>
            </SafeAreaView>


            <SafeAreaView style={styles.caixaState}>
                <SafeAreaView style={styles.boxTres}>
                    <Feather style={styles.iconDois} name='book' color='#CFD2D8' size={45}></Feather>
                    <Text style={styles.textoC}>You don't have books saved yet</Text>
                    <TouchableOpacity style={styles.set}>
                        <Text style={styles.textoSee}>See recommended books</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 30,
        color: '#253047',
        fontFamily: 'SFPRODISPLAYBOLD',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        marginTop: 30,
        marginRight: 260
    },
    incoMarkk: {
        marginLeft: 190
    },
    textoSee: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'SFPRODISPLAYBOLD',
        fontSize: 20
    },
    boxTres: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'

    },
    boxHe: {
        flex: 1,
        flexDirection: 'row',
        marginTop: -100,

    },
    txtIcon: {
        flex: 1,
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 90,
        marginTop: 5,
    },
    iconDois: {

        marginTop: 5,
    },
    set: {
        backgroundColor: '#0063b3',
        padding: 20,
        borderRadius: 10,

    },
    textoC: {
        color: '#253047',
        fontFamily: 'SFPRODISPLAYBOLD',
        fontWeight: '800',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20
    },
    txtMaior: {
        fontFamily: 'SFPRODISPLAYBOLD',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15
    },
    textoCaixa: {
        fontFamily: 'SFPRODISPLAYBOLD',
        fontWeight: 'bold',
        color: '#0063B3',
        fontSize: 20
    },
    caixaMaior: {
        backgroundColor: '#E6F0F9',
        width: 200,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        height: 100
    },
    caixaM: {
        backgroundColor: '#E6F0F9',
        width: 190,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        height: 100,
        marginLeft: 1
    },
    img: {
        height: 100,
        width: 70,
        marginLeft: -20
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    caixa: {
        flex: 1,
        flexDirection: 'row',

        margin: 10
    },
    caixaMark: {
        flexDirection: 'row',
        margin: 10,
        //  backgroundColor: 'green',
        height: 50,
        marginTop: -20
    },
    btn: {
        backgroundColor: '#253047',
        padding: 10,
        height: 40,
        width: 100,
        borderRadius: 20,
        marginRight: 15,
    },
    textBtn: {
        textAlign: 'center',
        color: 'white',

    },
    scrool: {
        margin: 10,
        marginTop: -50,
        //  backgroundColor: 'red',
        height: 0
    },
    re: {
        margin: 10,
        marginTop: 20,
        fontFamily: 'SFPRODISPLAYBOLD',
        fontWeight: 'bold',
        color: '#7F879A',
        fontSize: 20,
    },
    caixaState: {
        backgroundColor: "#ECEFF1",
        // backgroundColor: "red",
        margin: 10,
        borderRadius: 20,
        height: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        height: 300,
        alignItems: 'center',
        marginBottom: 150


    },
    caixaTres: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    caixaQuatro: {
        display: 'flex',
        flexDirection: 'row'
    },
    imgBook: {
        height: 180,
        width: 150,
        display: 'flex',
        margin: -0,
        marginTop: 40
    },
    caixaTxt: {
        width: 220,
        marginTop: 35,
        flex: 1,
        flexDirection: 'row',
        marginLeft: -5
    },
    title: {
        fontSize: 20,
        fontFamily: 'SFPRODISPLAYBOLD',
        color: '#253047',
        fontWeight: 'bold',
    },
    titleDois: {
        fontSize: 15,
        fontFamily: 'SFPRODISPLAYBOLD',
        color: '#7F879A',
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#7F879A',
        marginBottom: 10,
        fontSize: 20
    },
    textoSub: {
        color: '#253047',
        fontSize: 14,
        marginTop: 20,
        width: 210,
        // backgroundColor: 'blue'
    },
    bookMark: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: 55,
        height: 55,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -45,
    },
    caixaBook: {
        // flex: 1,
        // flexDirection: 'row',
        width: 0,
        backgroundColor: 'green',
    },
    caixaScroll: {
        marginTop: 45
    },
    res: {
        fontFamily: 'SFPRODISPLAYBOLD',
        fontWeight: 'bold',
        color: '#7F879A',
        fontSize: 20,

    },
    caixaDois: {
        backgroundColor: "#E6F0F9",
        //  backgroundColor: "red",
        margin: 10,
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row',
        height: 250
    },
})