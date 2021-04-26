module.exports = {
    dialect: 'postgres',
    host: 'ec2-54-224-120-186.compute-1.amazonaws.com',
    username: 'yojdnqdmxkycka',
    password: '2c23b2017598958f49934996e608f440813cfc4e3c874f3eec0601432bde4a69',
    database: 'd5sj8um3qnc0hd',
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