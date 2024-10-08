const mongoose = require('mongoose')

const Schema = mongoose.Schema


// Custom function to format the cost with 2 decimal places
function formatCost(cost) {
    // Ensure cost is a number
    if (typeof cost === 'number') {
        // Round the number to 2 decimal places
        return parseFloat(cost.toFixed(2));
    }
    return cost; // Return unchanged if not a number
}

const preventiveMaintenanceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    
    asset: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Asset',
        required: false
    },
    
    servicers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    frequencyType: {
        type: String
    },

    frequency: {
        type: Number
    },

    startDate: {
        type: Date,
        required: false,

    },

    completedDate: {
        type: Date,
        required: false
    },

    dueDate: {
        type: Date,
        required: false, 
    },

    priority: {
        type: String,
        required: false
    },

    
    status: {
        type: String,
        required: false,
        default: function() {
            return "Incomplete";
        }
    },
    cost: {
        type: Number,
        required: false,
        set: formatCost
    }, 
    description: {
        type: String,
        required: false
    }
}, { timestamps: true })


module.exports = mongoose.model('PreventiveMaintenance', preventiveMaintenanceSchema)

