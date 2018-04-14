var Schema = {
    assets: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', maxlength: 150, nullable: false},
        format: {type: 'string', maxlength: 150, nullable: false},
        location: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime', nullable: true}
    },
    Categories: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', nullable: false, unsigned: true}
    },
    Services: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', nullable: false, unsigned: true},
        Address1: {type: 'string', nullable: false, unsigned: true},
        Address2: {type: 'string', nullable: false, unsigned: true},
        Address3: {type: 'string', nullable: true, unsigned: true},
        Address4: {type: 'string', nullable: true, unsigned: true},
        Address5: {type: 'string', nullable: true, unsigned: true},
        Postcode: {type: 'string', nullable: false, unsigned: true},
        geoX: {type: 'string', nullable: false, unsigned: true},
        geoY: {type: 'string', nullable: false, unsigned: true},
        Contact: {type: 'string', nullable: false, unsigned: true},
        Telephone: {type: 'string', nullable: false, unsigned: true},
        updated_at: {type: 'dateTime', nullable: true, unsigned: true},
        review: {type:'dateTime', nullable: false, unsigned: true},
        owner:{type:'string', nullable: false, unsigned: true},
        created_at: {type: 'dateTime', nullable: false},
        assets: {type: 'string', nullable: true, unsigned: true}
    },
    ServiceHours: {
        id: {type: 'increments', nullable: false, primary: true},
        open: {type: 'time', nullable: false, unsigned: true},
        close: {type: 'time', nullable: false, unsigned: true},
        day: {type: 'string', nullable: true, unsigned: true}
    }
};
module.exports = Schema;