import { Pressable, StyleSheet, Text, View} from 'react-native';

const Tile = (props) => {

    return (
        <View style={styles.tile}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.writer}>{props.writer}</Text>
            <Text style={styles.uitleg}>{props.description}</Text>
            <Text style={styles.isbn}>ISBN {props.isbn}</Text>
            <Pressable onPress={() => console.log("Click Button")} style={styles.button}>
                <Text>  READ</Text>
            </Pressable>
        </View>
    );
    }

    const styles = StyleSheet.create({
        tile: {
            height: 300,
            flexBasis: '46%',
            overflow: 'hidden',
            marginBottom: 2,
            borderRadius: 15,
          },
        uitleg: {
            paddingBottom: 10,
        },
        button: {
            borderColor: "black",
            borderWidth: 2,
            borderStyle: 'solid',
            width: '15%',

            marginLeft: 300,
        },
        title: {
            fontSize: 25,
            paddingTop: 50,
            color: 'darkred',
        },
        writer: {
            fontSize: 15,
            paddingBottom: 10,
            color: 'grey',
        },
          
      });

export default Tile;    