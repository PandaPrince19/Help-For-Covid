import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    name: String,
    city: String,
    state: String,
    tags: [String],
    beds: {
      withoutOx: { remaining: Number, max: Number },
      withOx: { remaining: Number, max: Number },
      icuWithoutVents: { remaining: Number, max: Number },
      icuWithVents: { remaining: Number, max: Number },
    },
  },
  { timestamps: true }
);

export default mongoose.model("hospital", hospitalSchema);
