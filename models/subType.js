module.exports = function (sequelize, DataTypes) {
    var SubType = sequelize.define("SubType", {
        subType: DataTypes.TEXT,
        type: DataTypes.TEXT,
        meal: DataTypes.TEXT,
        winePair: DataTypes.TEXT
    });

    SubType.sync();

    // DATA FOR THE MODEL
    var subTypeData = [
        {
            subType: "Malvasia",
            type: "Sweet White",
            description: "mediterranean, sea, islands",
            country: "Greece"
        },
        {
            subType: "Malbec",
            type: "Bold Red",
            description: "adventure, quest, hero",
            country: "Argentina"
        }
    ]
    // CHECK TO SEE IF TABLE HAS BEEN SEEDED
    SubType.findOne({ where: { type: 'Sweet White' } }).then(function (data) {
        // If no matches found seed the table
        if (!data) {
            console.log("Seeding SubType Table")
            SubType.bulkCreate(subTypeData, { returning: true });
            // Otherwise leave the table alone
        } else {
            console.log("Table Previously Seeded");
        }
    })

    SubType.sync();

    return SubType;
};