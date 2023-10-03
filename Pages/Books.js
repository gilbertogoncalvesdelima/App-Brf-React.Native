import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';


import Feather from 'react-native-vector-icons/Feather';

export default function Books() {

    const [books, setBooks] = useState([])
    const loadData = async () => {
        const data = await services.apiList()
        setBooks(data?.results || [])
    }
    useEffect(() => {
        loadData()
    }, [])


    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>
                <SafeAreaView style={styles.caixa}>
                    <Text style={styles.txt}>Welcome, Sarah!</Text>
                    <Image style={styles.img} resizeMode='contain' source={require('../Img/menina.png')}></Image>
                </SafeAreaView>
                <SafeAreaView style={styles.caixaScroll}>
            
                    <ScrollView style={styles.scrool} horizontal={true} showsHorizontalScrollIndicator={false} >
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.textBtn}>All Books</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.textBtn}>Best sellers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.textBtn}>Fiction</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.textBtn}>Romance</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.textBtn}>Action</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.textBtn}>Comedy</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
                <Text style={styles.re}>RECOMMENDED FOR YOU</Text>
                <SafeAreaView style={styles.caixaDois}>
                    <Image style={styles.imgBook} resizeMode='center' source={require('../Img/martian.jpg')}></Image>
                    <SafeAreaView style={styles.caixaTxt}>
                        <SafeAreaView>
                            <Text style={styles.title}>The Martian</Text>
                            <Text style={styles.titleDois}>Andy Weir</Text>
                            <Text style={styles.textoSub}>
                                In the ninth book in this series,
                                set in 1906, the New York detective
                                Isaac Bell contends with a crime boss passing
                                as a respectable businessman and a tycoon's plot against President Theodore
                                Roosevelt.
                            </Text>
                        </SafeAreaView>
                        <SafeAreaView style={styles.caixaBook}>
                            <TouchableOpacity style={styles.bookMark}>
                                <Feather name='bookmark' color='#7F879A' size={25}></Feather>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={styles.caixaDois}>
                    <Image style={styles.imgBook} resizeMode='center' source={require('../Img/king.jpg')}></Image>
                    <SafeAreaView style={styles.caixaTxt}>
                        <SafeAreaView>
                            <Text style={styles.title}>Holly</Text>
                            <Text style={styles.titleDois}>Stephen King</Text>
                            <Text style={styles.textoSub}>
                                The private detective Holly Gibney investigates
                                whether a married pais of octogenarian academics
                                had anything to do with Bonnie Dahl's disappearance.
                            </Text>
                        </SafeAreaView>
                        <SafeAreaView style={styles.caixaBook}>
                            <TouchableOpacity style={styles.bookMark}>
                                <Feather name='bookmark' color='#7F879A' size={25}></Feather>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={styles.caixaDois}>
                    <Image style={styles.imgBook} resizeMode='center' source={require('../Img/payback.webp')}></Image>
                    <SafeAreaView style={styles.caixaTxt}>
                        <SafeAreaView>
                            <Text style={styles.title}>Payback in death</Text>
                            <Text style={styles.titleDois}>J.D Robb</Text>
                            <Text style={styles.textoSub}>
                                In the ninth book in this series, set in 1906, the New York detective
                                Isaac Bell contends with a crime boss passing as a respectable buinessman and a
                                tycoon's plot against President Theodore Roosevelt.
                            </Text>
                        </SafeAreaView>
                        <SafeAreaView style={styles.caixaBook}>
                            <TouchableOpacity style={styles.bookMark}>
                                <Feather name='bookmark' color='#7F879A' size={25}></Feather>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={styles.caixaDois}>
                    <Image style={styles.imgBook} resizeMode='center' source={require('../Img/lessons.webp')}></Image>
                    <SafeAreaView style={styles.caixaTxt}>
                        <SafeAreaView>
                            <Text style={styles.titleTres}>Lessons in chemistery</Text>
                            <Text style={styles.titleDois}>J.D Robb</Text>
                            <Text style={styles.textoSub}>
                                In the ninth book in this series, set in 1906, the New York detective
                                Isaac Bell contends with a crime boss passing as a respectable buinessman and a
                                tycoon's plot against President Theodore Roosevelt.
                            </Text>
                        </SafeAreaView>
                        <SafeAreaView style={styles.caixaBook}>
                            <TouchableOpacity style={styles.bookMark}>
                                <Feather name='bookmark' color='#7F879A' size={25}></Feather>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={styles.caixaDois}>
                    <Image style={styles.imgBook} resizeMode='center' source={require('../Img/river.webp')}></Image>
                    <SafeAreaView style={styles.caixaTxt}>
                        <SafeAreaView>
                            <Text style={styles.titleTres}>The river we remember</Text>
                            <Text style={styles.titleDois}>J.D Robb</Text>
                            <Text style={styles.textoSub}>
                                Suspicions and accusations complicate a sheriff's investigation of a wealthy landowner's murder
                                in a small Minnesota town in 1958.
                            </Text>
                        </SafeAreaView>
                        <SafeAreaView style={styles.caixaBook}>
                            <TouchableOpacity style={styles.bookMark}>
                                <Feather name='bookmark' color='#7F879A' size={25}></Feather>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={styles.caixaDois}>
                    <Image style={styles.imgBook} resizeMode='center' source={require('../Img/tom.webp')}></Image>
                    <SafeAreaView style={styles.caixaTxt}>
                        <SafeAreaView>
                            <Text style={styles.title}>Tom Lake</Text>
                            <Text style={styles.titleDois}>Ann Patchett</Text>
                            <Text style={styles.textoSub}>
                                Suspicions and accusations complicate a sheriff's investigation of a wealthy landowner's murder
                                in a small Minnesota town in 1958.
                            </Text>
                        </SafeAreaView>
                        <SafeAreaView style={styles.caixaBook}>
                            <TouchableOpacity style={styles.bookMark}>
                                <Feather name='bookmark' color='#7F879A' size={25}></Feather>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
            </ScrollView>
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
        marginRight: 90
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
        marginTop: 30,
        margin: 10
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
    caixaDois: {
        backgroundColor: "#E6F0F9",
        //  backgroundColor: "red",
        margin: 10,
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row',
        height: 250
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
    titleTres: {
        fontSize: 15,
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
    }
})