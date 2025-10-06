import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type ContentProps = {
  title: string;
  tag?: string;
  time?: string;
  author?: string;
  imageUri?: string;
};

export default function ContentScreen(props: ContentProps) {
  const {
    title,
    tag = 'MSB',
    time = '1 giờ trước',
    author = 'Mai Văn Sơn',
    imageUri = 'https://reactnative.dev/img/tiny_logo.png',
  } = props ?? ({} as ContentProps);

  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.box1}>
                <Image source={{ uri: imageUri }} style={styles.image} />
            </View>
            <View style={styles.box2}>
                <View style={styles.column}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>{title ?? 'MB đã bán ra gần 56 triệu cổ phiếu mbs'}</Text>
                    <View style={styles.marginheight}></View>
                    <View style={styles.row}>
                        <Text style={{backgroundColor: '#F5F6F9', borderRadius: 3, borderColor: '#E5E7EB', borderWidth: 1 }}>
                        {tag}</Text>
                        <View style={styles.marginwidth}></View>
                        <Text>---</Text>
                    </View>
                    <View style={styles.marginheight}></View>
                    <View style={styles.row}>
                        <Text style={{fontSize: 12, color: '#6B7280'}}>{time}</Text>
                        <View style={styles.marginwidth}></View>
                        <Text style={{fontSize: 12, color: '#6B7280'}}>{author}</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container ngoài: 2 cột cân nhau
  container: {
    flexDirection: 'column',

    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',

  },
  marginwidth: {
    width: 10,
  },
  marginheight: {
    height: 10,
  },
  box1: {
    flex: 1,
    // backgroundColor: '#ffffff',
    padding: 10,

  },
  box2: {
    flex: 3,
    // backgroundColor: '#FFCC33',
    padding: 10,
  },
  image: {
    width: "100%",
    height: 80,
    borderRadius: 4,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

