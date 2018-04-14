var Schema = {
    // "Standing Data"
    // categories: {
    //     id: {type: 'increments', nullable: false, primary: true},
    //     name: {type: 'string', maxlength: 150, nullable: false},
    //     created_at: {type: 'dateTime', nullable: false},
    //     updated_at: {type: 'dateTime', nullable: true}
    // },

    tags: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', maxlength: 150, nullable: false},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime', nullable: true}
    },

    // "Installation Data"
    authors: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', maxlength: 150, nullable: false},
        slug: {type: 'string', maxlength: 150, nullable: false, unique: true},
        subtitle: {type: 'string', maxlength: 150, nullable: true},
        html: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true},
        portrait: {type: 'string', maxlength: 150, nullable: true},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime', nullable: true}
    },

    // series: {
    //     id: {type: 'increments', nullable: false, primary: true},
    //     name: {type: 'string', maxlength: 150, nullable: false},
    //     slug: {type: 'string', maxlength: 150, nullable: false, unique: true},
    //     html: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: false},
    //     cover: {type: 'string', maxlength: 150, nullable: false},
    //     created_at: {type: 'dateTime', nullable: false},
    //     updated_at: {type: 'dateTime', nullable: true}
    // },
    //
    // // Though-Tables
    // books_series: {
    //     id: {type: 'increments', nullable: false, primary: true},
    //     book_id: {type: 'integer', nullable: false, unsigned: true},
    //     series_id: {type: 'integer', nullable: false, unsigned: true},
    //     created_at: {type: 'dateTime', nullable: false},
    //     updated_at: {type: 'dateTime', nullable: true}
    // },
    //
    // books_categories: {
    //     id: {type: 'increments', nullable: false, primary: true},
    //     book_id: {type: 'integer', nullable: false, unsigned: true},
    //     category_id: {type: 'integer', nullable: false, unsigned: true},
    //     created_at: {type: 'dateTime', nullable: false},
    //     updated_at: {type: 'dateTime', nullable: true}
    // },
    //
    // books_authors: {
    //     id: {type: 'increments', nullable: false, primary: true},
    //     book_id: {type: 'integer', nullable: false, unsigned: true},
    //     author_id: {type: 'integer', nullable: false, unsigned: true},
    //     created_at: {type: 'dateTime', nullable: false},
    //     updated_at: {type: 'dateTime', nullable: true}
    // },

    books_tags: {
        id: {type: 'increments', nullable: false, primary: true},
        book_id: {type: 'integer', nullable: false, unsigned: true},
        tag_id: {type: 'integer', nullable: false, unsigned: true},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime', nullable: true}
    },

    // and our Auth table, used purely for browsing books
    users: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', maxlength: 150, nullable: false, unique: true},
        auth: {type: 'string', maxlength: 150, nullable: false},
        feed: {type: 'string', maxlength: 150, nullable: true},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime', nullable: true}
    }

};

module.exports = Schema;