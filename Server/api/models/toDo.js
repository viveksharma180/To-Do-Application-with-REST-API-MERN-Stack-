import Mongoose from "mongoose";

const toDoSchema = new Mongoose.Schema({
    "title":{
        type: String,
        required: "Title is required"
    },
    "description": {
        type: String
    },
    "dueDate": {
        type: String,
    },
    "dueTime": {
        type: String,
    },
    "completed": {
        type: Boolean,
    },
    "createdDate": {
        type: Date,
        default: Date.now
    },
    "lastModifiedDate": {
        type: Date,
        default: Date.now
    }
    // versionKey: false
});

// toDoSchema.virtual('id', () => this._id.toHexString());
toDoSchema.set('toJSON', {virtuals:true});

const ToDo = Mongoose.model('ToDo', toDoSchema);

export default ToDo;