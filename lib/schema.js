var Schema = {
    assets: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', maxlength: 150, nullable: false},
        type: {type: 'string', maxlength: 150, nullable: false},
        uri: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime', nullable: true}
    },
    categories: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', nullable: false, unsigned: true}
    },
    services: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', nullable: false, unsigned: true},
        address1: {type: 'string', nullable: true, unsigned: true},
        address2: {type: 'string', nullable: true, unsigned: true},
        address3: {type: 'string', nullable: true, unsigned: true},
        address4: {type: 'string', nullable: true, unsigned: true},
        city: {type: 'string', nullable: true, unsigned: true},
        postcode: {type: 'string', nullable: true, unsigned: true},
        geox: {type: 'string', nullable: true, unsigned: true},
        geoy: {type: 'string', nullable: true, unsigned: true},
        contact: {type: 'string', nullable: true, unsigned: true},
        telephone: {type: 'string', nullable: true, unsigned: true},
        website: {type: 'string', nullable: true, unsigned: true},
        review: {type:'dateTime', nullable: false, unsigned: true},
        owner:{type:'string', nullable: false, unsigned: true},
        updated_at: {type: 'dateTime', nullable: true, unsigned: true},
        created_at: {type: 'dateTime', nullable: false}
    },
    servicehours: {
        id: {type: 'increments', nullable: false, primary: true},
        open: {type: 'time', nullable: false, unsigned: true},
        close: {type: 'time', nullable: false, unsigned: true},
        day: {type: 'string', nullable: true, unsigned: true},
        updated_at: {type: 'dateTime', nullable: true, unsigned: true},
        created_at: {type: 'dateTime', nullable: false}
    }
};
module.exports = Schema;