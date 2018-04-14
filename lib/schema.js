var Schema = {
    // assets: {
    //     id: {type: 'increments', nullable: false, primary: true},
    //     name: {type: 'string', maxlength: 150, nullable: false},
    //     format: {type: 'string', maxlength: 150, nullable: false},
    //     location: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true},
    //     created_at: {type: 'dateTime', nullable: false},
    //     updated_at: {type: 'dateTime', nullable: true}
    // },
    categories: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', nullable: false, unsigned: true}
    },
    services: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', nullable: false, unsigned: true},
        Address1: {type: 'string', nullable: false, unsigned: true},
        Address2: {type: 'string', nullable: false, unsigned: true},
        Address3: {type: 'string', nullable: true, unsigned: true},
        Address4: {type: 'string', nullable: true, unsigned: true},
        City: {type: 'string', nullable: true, unsigned: true},
        Postcode: {type: 'string', nullable: false, unsigned: true},
        geoX: {type: 'string', nullable: true, unsigned: true},
        geoY: {type: 'string', nullable: true, unsigned: true},
        Contact: {type: 'string', nullable: true, unsigned: true},
        Telephone: {type: 'string', nullable: true, unsigned: true},
        Website: {type: 'string', nullable: true, unsigned: true},
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