// we conventionally use .models.js for making this file
// This is the standard practise used in all big companies

// import mongoose from "mongoose";                                              // Step 1 - import mongoose
// .Schema aek object input leta jo hme schema banana hota h
// const UserSchema = new mongoose.Schema({}, {});                               // Step 2 - create mongoose schema
// .model do parameter leta h - kya model banau aur kiske base pr bnau
// export const User = mongoose.model("User", UserSchema);                       // Step 3 - export the schema by making a model

// Important Point --
// In mongodb "User" bacomes "users"
// It makes it plural and make all letter lowecase
// So our schema will be saved as todos not todo





import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  // first object defines - aap kya kya data loge
  // second object define - ki app timestamp loge ya nhi (by default nhi)
  {
    //   It is easy way to make a schema --
    //   username : String,
    //   email : String,
    //   password : String

    //  Good way --
    username: {
      type: String, // which datatype would be accepted
      required: true, // will it be absolute required
      unique: true, // must be unique
      lowercase: true, // for lowercase
    },
    email: {         // order does not matter
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"], // we can also pass a msg if condition is not meet
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", UserSchema);
