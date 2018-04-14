var Schema = {
    assets: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', maxlength: 150, nullable: false},
        format: {type: 'string', maxlength: 150, nullable: false},
        location: {type: 'text', maxlength: 16777215, fieldtype: 'medium', nullable: true},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime', nullable: true}
    },
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
    services: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', nullable: false, unsigned: true},
        Address1: {type: 'string', nullable: false, unsigned: true},
        Address2: {type: 'string', nullable: false, unsigned: true},
        Address3: {type: 'string', nullable: true, unsigned: true},
        Address5: {type: 'string', nullable: true, unsigned: true},
        Address3: {type: 'string', nullable: true, unsigned: true},
        Postcode: {type: 'string', nullable: false, unsigned: true},
        geoX: {type: 'string', nullable: false, unsigned: true},
        Opening: {type: 'string', nullable:false, unsigned: true},
        geoY: {type: 'string', nullable: false, unsigned: true},
        Contact: {type: 'string', nullable: false, unsigned: true},
        Telephone: {type: 'string', nullable: false, unsigned: true},
        updated_at: {type: 'dateTime', nullable: true, unsigned: true},
        review: {type:'dateTime', nullable: false, unsigned: true},
        owner:{type:'string', nullable: false, unsigned: true},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime', nullable: true},
        assets: {type: 'string', nullable: true, unsigned: true}
    },
    users: {
        id: {type: 'increments', nullable: false, primary: true},
        name: {type: 'string', maxlength: 150, nullable: false, unique: true},
        auth: {type: 'string', maxlength: 150, nullable: false},
        feed: {type: 'string', maxlength: 150, nullable: true},
        created_at: {type: 'dateTime', nullable: false},
        updated_at: {type: 'dateTime', nullable: true}
    }
OpeningHours: {
    
}
};
module.exports = Schema;