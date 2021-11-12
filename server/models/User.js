import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    govId: { type: String, unique: true },
    hospital: { type: mongoose.Schema.Types.ObjectId, ref: "hospital" },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    name: String,
    type: String,
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);
