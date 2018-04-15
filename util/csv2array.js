const csv_parse = require('csv-parse/lib/sync');
const fs = require('fs');


module.exports = {
    import: function(filename, timestamps) {
        "use strict";
        if(typeof timestamps === "undefined") {
            timestamps = true;
        }
        const csv = csv_parse(fs.readFileSync(filename, 'utf8'));
        const headers = csv[0];

        let rows = [];
        for (let row = 1; row < csv.length; row++) {
            let newRow = new Object();
            if(timestamps) newRow.created_at = new Date();
            for (let col = 0; col < headers.length; col++) {
                if (csv[row] !== undefined) {
                    newRow[headers[col]] = csv[row][col];
                }
            }
            rows.push(newRow);
        }
        return rows;
    },
    find: function(tableName) {
        "use strict";

        // Do we have live data to import...
        if (fs.existsSync(`./live-data/${tableName}.csv`)) {
            console.log(`Found ./live-data/${tableName}.csv`);
            return `./live-data/${tableName}.csv`;
        // if not we should probably check if we have example data to import
        } else if (fs.existsSync(`./example-data/${tableName}.csv`)) {
            console.log(`Found ./example-data/${tableName}.csv`);
            return `./example-data/${tableName}.csv`;
        }

        // No data, bail like a coward...
        console.log(`Skipping ${tableName} - no ${tableName}.csv found`);
        return null;
    }
};