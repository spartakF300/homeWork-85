const mongoose = require('mongoose');
const Album = require('./model/Album');
const Artist = require('./model/Artists');
const Track = require('./model/Track');
const run = async () => {

   await mongoose.connect('mongodb://localhost/music', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    });

const collection = await mongoose.connection.db.listCollections().toArray();


for(let coll of collection){
    await  mongoose.connection.db.dropCollection(coll.name)
}

    const artists = await Artist.create(
        {name: 'Static-x', image: '93ek0ypAZvNhcznXBs6oK.jpg'},
        {name: 'Vasya', image: '-N61uJ7tKpfB5Ol-nOUWx.jpeg'},
        {name: 'Katy ', image: '-PdGWlJ-CEhS9AtweVvsL.jpg'},
    );

    const albums = await Album.create(
        {title: 'The Only', artist: artists[0]._id, year: 2004, image: '-N61uJ7tKpfB5Ol-nOUWx.jpeg'},
        {title: 'Recovery', artist: artists[0]._id, year: 2010, image: '-PdGWlJ-CEhS9AtweVvsL.jpg'},
        {title: 'So', artist: artists[1]._id, year: 2014, image: 'MElSiX-5VCAVobH04Kv3N.jpg'},
        {title: 'Loud', artist: artists[1]._id, year: 2008, image: 'WZMY0TC_2DN_WUnmrE42g.jpeg'},
        {title: 'Prism', artist: artists[2]._id, year: 2016, image: 'zczDeWQvSPlq6k3ssxuNJ.jpg'}
    );

    await Track.create(
        {title: 'Never enough', album: albums[0]._id, duration: '2:39', number: 2},
        {title: 'Rain man', album: albums[0]._id, duration: '5:10', number: 1},
        {title: 'Cannibal', album: albums[0]._id, duration: '3:07', number: 3},
        {title: 'Not afraid', album: albums[1]._id, duration: '4:08', number: 1},
        {title: 'Shadow Zone', album: albums[2]._id, duration: '4:37', number: 5},
        {title: 'Skin', album: albums[3]._id, duration: '4:12', number: 2},
        {title: ' Fear Factory,', album: albums[4]._id, duration: '3:21', number: 4},

    );

    mongoose.connection.close();
};
run().catch(e => {
    console.error(e)
});