const Track = ({ artiste, titre, collection }) => {
    return (
        <View style={styles.movie}>
            <Image style={{height: 200, width: 150}} source={{uri: img}}/>
            <Text style={{fontWeight: 'bold', fontSize: 25, color: '#fff' }}>{title}</Text>
            <Text style={{fontSize: 15, color: '#fff' }}>{note}/5</Text>
        </View>
    );
}