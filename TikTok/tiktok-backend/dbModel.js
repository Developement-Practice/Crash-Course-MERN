import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  description: String,
  song: String,
  likes: String,
  messages: String,
  shares: String,
});

// Collection inside the database
export default mongoose.model("tiktikVideos", tiktokSchema);

// Collection -> [documents] -> Collection -> [documents]
// Table -> [rows] -> Table -> [rows]
