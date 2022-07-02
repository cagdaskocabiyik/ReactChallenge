import React, { useEffect } from 'react'
import { Text, FlatList, Pressable, View, Dimensions, Image } from 'react-native'
import { gql, useMutation, useQuery, useLazyQuery } from '@apollo/client'

import CardItem from '../components/CardItem/CardItem'
import Layout from '../components/Layout/Layout'
import { images } from '../themes/images'
import Spinner from '../components/Spinner'
import COLORS from '../themes/colors'
import { GET_CARDS_QUERY } from '../graphql/queries'
import { CREATE_CARD_MUTATION } from '../graphql/mutations'


export default function CardsScreen({ navigation }) {
    const [getCardsQuery, { data, loading }] = useLazyQuery(GET_CARDS_QUERY);

    const [createCardMutation] = useMutation(CREATE_CARD_MUTATION, {
        refetchQueries: [{ query: GET_CARDS_QUERY }]
    });

    const handleNewCardPress = async () => {
        try {
            await createCardMutation({
                variables: {
                    data: {
                        name: `My Food Style ${data.cards.length + 1}`,
                        minPrice: null,
                        maxPrice: null,
                        locationTypeIds: [],
                        locationCuisineTypeIds: [],
                        dishTypeIds: [],
                        courseTypeIds: [],
                        dietIds: [],
                        excludedIngredientIds: []
                    }
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleCardOptionsPress = (card) => {
        navigation.navigate('CardOptions', { card });
    }

    useEffect(() => {
        getCardsQuery();
    }, []);

    return (
        <Layout>
            {loading ?
                <Spinner />
                :
                <>
                    <View style={{ height: Dimensions.get('window').height - 190 }}>
                        {<FlatList
                            data={data?.cards}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <CardItem title={item.name} image={images.options} onPress={() => handleCardOptionsPress(item)}></CardItem>
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />}
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: COLORS.white,
                        paddingVertical: 12,
                        paddingHorizontal: 18,
                        borderRadius: 12,
                        marginTop: 12
                    }}>
                        <Pressable onPress={handleNewCardPress}>
                            <Image style={{ height: 23, width: 23 }} source={images.add} />
                        </Pressable>

                        <Text style={{ marginLeft: 10, fontFamily: "ProximaNovaBold", fontSize: 18 }}>New Food Style</Text>
                    </View>
                </>
            }
        </Layout >
    )
}