import knex from 'knex'

export const database = knex({
    client: 'mysql2',
    connection: {
        host: '93.85.88.56',
        user: 'aksen',
        password: 'aksen_Adw123dlDa_~asZ',
        database: 'aksen_db',
        charset: 'utf8',
    },
    pool: {
        min: 0,
        max: 10,
    },
});