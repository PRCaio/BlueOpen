import react from "react";
import { FlatList, View, Text, StyleSheet, ImageBackground, Image, Modal, TouchableHighlight } from "react-native";
import ButtonStories from "../components/ButtonStories";
import Storyletter from "../components/Storyletter";

const list = [
    {
        id: '1',
        numberStores: 'Covid',
        stores: [
            {
                id: '1',
                imgBg: require('./../images/casa.jpeg')
            },
            {
                id: '2',
                imgBg: require('./../images/moto.jpeg')
            }
        ],
        imgBg: '',
        bgColor: `#20b2aa`
    },
    {
        id: '2',
        numberStores: 'SarsCov',
        stores: [
            {
                id: '1',
                imgBg: require('./../images/casa.jpeg')
            },
            {
                id: '2',
                imgBg: require('./../images/casa.jpeg')
            }
        ],
        imgBg: '',
        bgColor: `#6495ed`
    },
    {
        id: '3',
        numberStores: 'Gripe',
        stores: [
            {
                id: '1',
                imgBg: require('./../images/casa.jpeg')
            },
            {
                id: '2',
                imgBg: require('./../images/casa.jpeg')
            }
        ],
        imgBg: '',
        bgColor: `#1e90ff`
    },
    {
        id: '4',
        numberStores: 'Bronquite',
        stores: [
            {
                id: '1',
                imgBg: require('./../images/casa.jpeg')
            },
            {
                id: '2',
                imgBg: require('./../images/moto.jpeg')
            }
        ],
        imgBg: '',
        bgColor:`#87cefa`
    },
    {
        id: '5',
        numberStores: 'Catapora',
        stores: [
            {
                id: '1',
                imgBg: require('./../images/casa.jpeg')
            },
            {
                id: '2',
                imgBg: require('./../images/casa.jpeg')
            }
        ],
        imgBg: '',
        bgColor: `#20b2aa`
    },
    {
        id: '6',
        numberStores: '2',
        stores: [
            {
                id: '1',
                imgBg: require('./../images/casa.jpeg')
            },
            {
                id: '2',
                imgBg: require('./../images/casa.jpeg')
            }
        ],
        imgBg: '',
        bgColor: `#6495ed`
    },
    {
        id: '4',
        numberStores: '2',
        stores: [
            {
                id: '1',
                imgBg: require('./../images/casa.jpeg')
            },
            {
                id: '2',
                imgBg: require('./../images/moto.jpeg')
            }
        ],
        imgBg: '',
        bgColor: `#1e90ff`
    },
    {
        id: '5',
        numberStores: '2',
        stores: [
            {
                id: '1',
                imgBg: require('./../images/casa.jpeg')
            },
            {
                id: '2',
                imgBg: require('./../images/casa.jpeg')
            }
        ],
        imgBg: '',
        bgColor: `#87cefa`
    },
    {
        id: '6',
        numberStores: '2',
        stores: [
            {
                id: '1',
                imgBg: require('./../images/casa.jpeg')
            },
            {
                id: '2',
                imgBg: require('./../images/casa.jpeg')
            }
        ],
        imgBg: '',
        bgColor:`#6495ed`
    },
];

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


export default function Stories() {

    const renderItem = ({ item }) => (
        <ButtonStories item={item} />
    );

    return (
        <View>
            
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
            
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: 90,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    texts: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    numberStores: {
        color: "white",
        fontSize: 10,
        fontWeight: "bold"
    },
    images: {
        flex: 3,
        flexDirection: "row",
    },
    imgBg: {
        width: 70,
        height: 70
    }
}
)