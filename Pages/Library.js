import React,{useEffect, useState} from 'react';

import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import * as services from '../api/services';


export default function Library() {
    const [books, setBooks] = useState([])
    const loadData = async () => {
        const data = await services.apiList()
        setBooks(data?.results || [])
    }
    useEffect(() => {
        loadData()
    }, [])
    
    return (
        <SafeAreaView style={styles.cont}>
            {Array.isArray(books)  && books.map((book, key) => (
                <View style={styles.row} key={key}>
                    <Text style={styles.txt}>{book.display_name}</Text>
                    <Text style={styles.txt}>{book.bestsellers_date}</Text>                
                </View>
            ))}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#0063b3',
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        
    },
    txt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'SFPRODISPLAYBOLD',
        fontWeight: 'bold'
    }

})