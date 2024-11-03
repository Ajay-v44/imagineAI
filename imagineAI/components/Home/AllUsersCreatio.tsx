import { View, Text, FlatList, Image, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/services/GlobalApi'
import Colors from '@/constants/Colors'
import { useRouter } from 'expo-router'

const AllUsersCreatio = () => {
    const router = useRouter()
    const [pageSize, setPageSize] = useState<number>(5)
    const [loading, setLoading] = useState<boolean>(false)
    const [aiImagelist, setAiImageList] = useState<any>([])
    const ColumnWidth = Dimensions.get('screen').width * 0.85 / 2
    useEffect(() => {
        setAiImageList([])
        GetAllImages(pageSize)
    }, [])
    const GetAllImages = async (pageSize: number) => {
        setLoading(true)
        const result = await GlobalApi.GetAllAiImages(pageSize)
        const resultData = result?.data?.data;
        resultData.forEach(element => {
            setAiImageList(prev => [...prev, element])
        });
        // setAiImageList(resultData)
        setLoading(false)
    }
    const renderFooterComponent = () => {
        if (loading) {
            return <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
        }
        return null;
    }
    return (
        <View style={{
            marginTop: 20
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
            }} >Users Creation</Text>
            <FlatList
                data={aiImagelist}
                numColumns={2}
                onEndReached={() => GetAllImages(pageSize + 5)}
                onEndReachedThreshold={0.7}
                ListFooterComponent={renderFooterComponent}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{ margin: 5 }}
                        onPress={() => {
                            router.push({
                                pathname: "/viewAiImage",
                                params: {
                                    imageUrl: item?.imageUrl,
                                    prompt: 'Hidden'
                                }
                            })
                        }}
                    >
                        <Image source={{ uri: item?.imageUrl }} style={{
                            height: 250,
                            width: ColumnWidth,
                            borderRadius: 15
                        }} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default AllUsersCreatio