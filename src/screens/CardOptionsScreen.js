import React from 'react'
import { Alert, Image, Text, TouchableOpacity, Share } from 'react-native';
import CardItem from '../components/CardItem/CardItem';
import OptionButton from '../components/OptionButton/OptionButton';
import { images } from '../themes/images';
import { gql, useMutation, useQuery } from '@apollo/client'
import { GET_CARDS_QUERY } from '../graphql/queries';
import { DUPLICATE_CARD_MUTATION, DELETE_CARD_MUTATION, SHARE_CARD_MUTATION } from '../graphql/mutations';
import Layout from '../components/Layout/Layout';



export default function CardsOptionsScreen({ route, navigation }) {

    const { card } = route.params;

    const [deleteCardMutation] = useMutation(DELETE_CARD_MUTATION, {
        refetchQueries: [{ query: GET_CARDS_QUERY }]
    });

    const [duplicateCardMutation] = useMutation(DUPLICATE_CARD_MUTATION, {
        refetchQueries: [{ query: GET_CARDS_QUERY }]
    });

    const [shareCardMutation] = useMutation(SHARE_CARD_MUTATION);

    const handleClosePress = () => {
        navigation.navigate('Cards');
    };

    const handleDuplicatePress = async () => {

        await duplicateCardMutation({
            variables: { id: card.id },
        });

        navigation.goBack()
    };

    const handleSharePress = async () => {

        const { data } = await shareCardMutation({
            variables: { id: card.id }
        });

        Share.share({
            url: `https://cards.foodstyles.com/${data.shareCard}`,
        });
    };

    const handleDeletePress = async () => {

        Alert.alert(
            'Confirm Delete',
            'You are deleting the card',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                },
                {
                    text: 'OK',
                    onPress: async () => {
                        await deleteCardMutation({
                            variables: { id: card.id },
                        });
                        navigation.goBack();
                    },
                },
            ],
        );
    };

    return (
        <Layout>
            <CardItem title={card.name} image={images.close} onPress={handleClosePress}></CardItem>
            <OptionButton text="Duplicate" image={images.duplicate} onPress={handleDuplicatePress}></OptionButton>
            <OptionButton text="Share" image={images.share} onPress={handleSharePress}></OptionButton>
            <OptionButton text="Delete" image={images.delete} onPress={handleDeletePress}></OptionButton>
        </Layout>
    )
}
