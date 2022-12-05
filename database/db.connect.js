const mongoose = require('mongoose');


const ConnectDB = async()=>{
    try {
        const url = 'mongodb://mongo:27017';
        await mongoose.connect(url)
        console.log('====================================');
        console.log('database connected successfully');
        console.log('====================================');
    } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
    }
}
module.exports = ConnectDB;