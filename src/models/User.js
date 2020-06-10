import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import slugify from 'slugify';

class User {
  initSchema() {
    const schema = new Schema({
      full_name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      email_verify_at: {
        type: Date,
        required: false,
      },
    }, { timestamps: true });
    schema.pre(
      "save",
      function(next) {
        let user = this;
        console.log('Save User:', user._id);
        return next();
      },
      function(err) {
        next(err);
      }
    );
    schema.plugin(uniqueValidator);
    mongoose.model("users", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("users");
  }
}

export default User;