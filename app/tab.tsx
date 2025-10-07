import React from 'react'
import { ListRenderItem, StyleSheet, Text } from 'react-native'
import { MaterialTabBar, Tabs } from 'react-native-collapsible-tab-view'
import ContentScreen from './content'


export default function TabScreen() {
  const data = [
    {
      title: 'MB đã bán ra gần 56 triệu cổ phiếu MBS',
      tag: 'MSB',
      time: '1 giờ trước',
      author: 'Mai Văn Sơn',
      imageUri: 'https://www.shutterstock.com/image-vector/mbs-letter-unique-vector-logo-260nw-1557694982.jpg',
    },
    {
      title: 'Đạm Cà Mau ước lãi 344 tỷ quý III',
      tag: 'DCM',
      time: '1 giờ trước',
      author: 'Mai Văn Sơn',
      imageUri: 'https://www.saokim.com.vn/project/images/gallery/large/Logo%20Dam%20Ca%20Mau1481827724.jpg',
    },
    {
      title: 'Công ty con của Đất Xanh Hà An chuyển giao đầy đủ kinh phí bảo trì chung cư Opal Boulevard',
      tag: 'DXG',
      time: '2 giờ trước',
      author: 'Đỗ Thị Lab',
      imageUri: 'https://khudothi.vn/wp-content/uploads/2019/11/logo-dat-xanh-group.jpg',
    },
    {
      title: 'MB đã bán ra gần 56 triệu cổ phiếu MBS',
      tag: 'MSB',
      time: '1 giờ trước',
      author: 'Mai Văn Sơn',
      imageUri: 'https://www.shutterstock.com/image-vector/mbs-letter-unique-vector-logo-260nw-1557694982.jpg',
    },
    {
      title: 'Đạm Cà Mau ước lãi 344 tỷ quý III',
      tag: 'DCM',
      time: '1 giờ trước',
      author: 'Mai Văn Sơn',
      imageUri: 'https://www.saokim.com.vn/project/images/gallery/large/Logo%20Dam%20Ca%20Mau1481827724.jpg',
    },
    {
      title: 'Công ty con của Đất Xanh Hà An chuyển giao đầy đủ kinh phí bảo trì chung cư Opal Boulevard',
      tag: 'DXG',
      time: '2 giờ trước',
      author: 'Đỗ Thị Lab',
      imageUri: 'https://khudothi.vn/wp-content/uploads/2019/11/logo-dat-xanh-group.jpg',
    },
  ]

  const renderItem: ListRenderItem<(typeof data)[number]> = ({ item }) => (
    <ContentScreen
      title={item.title}
      tag={item.tag}
      time={item.time}
      author={item.author}
      imageUri={item.imageUri}
    />
  )

  return (
    <Tabs.Container
      renderTabBar={(props: any) => (
        <MaterialTabBar
          {...props}
          labelStyle={{ fontSize: 12, color: '#000', textTransform: 'capitalize' }}
          indicatorStyle={{ backgroundColor: '#B888C4' }} // tùy chọn
          tabStyle={{ paddingHorizontal: 1 }} // tùy chọn
        />
      )}
    >
      <Tabs.Tab name ="Tin tiêu điểm">
        <Tabs.FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          contentContainerStyle={{paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        />
      </Tabs.Tab>
      <Tabs.Tab name="Tin phổ biến">
        <Tabs.ScrollView>
          <Text>B</Text>
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="Tin cộng đồng">
        <Tabs.ScrollView>
          <Text>C</Text>
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="Thông Báo">
        <Tabs.ScrollView>
          <Text>D</Text>
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  )
}

const styles = StyleSheet.create({

})


