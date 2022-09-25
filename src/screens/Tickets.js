import react, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Image, TouchableHighlight } from "react-native";
import ButtonInitial from "../components/ButtonIicial";
import axios from "axios";


const baseURL = "https://blue-openapi-2b91.vercel.app/api/data-account";



export default function Tickets({ navigation }) {
    const [valueTransation, setValueTransation] = useState([])
    const desc = [
        {"id": "01", "model":"Telefone", "desc":"10pts nessa loja gera 10% de desconto.", "color":`#00ffff`},
        {"id": "02","model":"Famácia" ,"desc": "20pts nessa loja gera 15% de desconto.", "color":`#8a2be2`},
        {"id": "03","model":"Tv por assinatura", "desc": "30pts nessa loja gera 12% de desconto.", "color":`#bdb76b`},
        {"id": "04","model":"Água",  "desc": "50pts nessa loja gera 5% de desconto.", "color":`#a52a2a`},
        {"id": "05","model":"Conserto",  "desc": "50pts nessa loja gera 10% de desconto.", "color":`#deb887`},
        {"id": "06","model":"Saúde",  "desc": "40pts nessa loja gera 7% de desconto.", "color":`#ff7f50`},
        {"id": "07","model":"Restaurante",  "desc": "30pts nessa loja gera 4% de desconto.", "color":`#fff8dc`},
        {"id": "08","model":"Supermercado",  "desc": "60pts nessa loja gera 30% de desconto.", "color":`#ff8c00`}
    ]

    useEffect(() => {
        // Update the document title using the browser API
        axios.get(baseURL).then((response) => {
            setValueTransation(response.data.newItems);
        });
        console.log(valueTransation)
    }, []);
    const renderItem2 = ({ item }) => (
        <View style={styles.cardButton}>
            <Text style={styles.textHead}>{item.model}</Text>
            <Text style={styles.textHead}>{item.desc}</Text>
        </View>
    );

    var newList = []
    for (var i = 0; i < valueTransation.length; i++) {
        if (valueTransation[i].transactionDate.includes('2022-09') == true) {
            newList.push(valueTransation[i])
        }
    };

    return (
        <View>
            <View style={styles.head}>
                <Text style={styles.textHead2}>Saldo de pontos: 50 pts </Text>
            </View>
            <FlatList
                data={desc}
                renderItem={renderItem2}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardButton: {
        height: 80,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        Margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        borderRadius: 15,
        borderColor: `#b5d1ff`,
        borderTopWidth: 1,
        borderEndWidth: 1,
        borderStartWidth: 2,
        borderBottomWidth: 2,
        backgroundColor: `#1e90ff`
    },
    head: {
        height: 80,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        Margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    textHead: {
        fontSize: 15,
        color: 'white'
    },
    textHead2: {
        fontSize: 25,
        color: 'black'
    }
}
)