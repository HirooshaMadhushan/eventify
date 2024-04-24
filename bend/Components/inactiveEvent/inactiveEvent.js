const connection = require('../../connection');

exports.inactiveEvent = async function inactiveEvent(req, res) {
    
    connection.beginTransaction(function(err) {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error starting transaction" });
        }
        
        
        const moveQuery = "INSERT INTO inactiveevent (event_id, event_name, venue, date, time, description, event_status, organizer_id) " +
                          "SELECT event_id, event_name, venue, date, time, description, event_status, organizer_id " +
                          "FROM events_active " +
                          "WHERE event_status = ' 	inactive'";

        connection.query(moveQuery, function(err, result) {
            if (err) {
                console.log(err);
                return connection.rollback(function() {
                    return res.status(500).json({ message: "Error moving inactive event" });
                });
            }

            // Delete the row from events_active
            const deleteQuery = "DELETE FROM events_active WHERE event_status = ' 	inactive'";
            connection.query(deleteQuery, function(err, result) {
                if (err) {
                    console.log(err);
                    return connection.rollback(function() {
                        return res.status(500).json({ message: "Error deleting inactive event" });
                    });
                }

                // Commit the transaction
                connection.commit(function(err) {
                    if (err) {
                        console.log(err);
                        return connection.rollback(function() {
                            return res.status(500).json({ message: "Error committing transaction" });
                        });
                    }
                    
                    // Transaction successfully completed
                    return res.status(200).json({ message: "Event successfully marked as inactive" });
                });
            });
        });
    });
};
