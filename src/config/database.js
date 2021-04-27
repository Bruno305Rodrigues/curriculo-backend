module.exports = {
    dialect: 'postgres',
    host: 'ec2-54-164-241-193.compute-1.amazonaws.com',
    username: 'fbrgjagxyyomid',
    password: '5b42f49c44b0eb2b90d743f1357adfc01bae01d8e9f73cfda88f0a02732cd397',
    database: 'dea7e5fuoq0h6v',
    port: 5432,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    }
}