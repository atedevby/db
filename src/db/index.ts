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

export const daksDB = knex({
    client: 'mysql2',
    connection: {
        host: '93.85.88.56',
        user: 'aksen',
        password: 'aksen_Adw123dlDa_~asZ',
        database: 'daks_db',
        charset: 'utf8',
    },
    pool: {
        min: 0,
        max: 10,
    },
});

export const mfc = knex({
    client: 'mysql2',
    connection: {
        host: '93.85.88.56',
        user: 'aksen',
        password: 'aksen_Adw123dlDa_~asZ',
        database: 'mfc',
        charset: 'utf8',
    },
    pool: {
        min: 0,
        max: 10,
    },
});