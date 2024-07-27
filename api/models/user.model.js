import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://th.bing.com/th/id/R.b84e94b34cf94cf7df6534beca0f18be?rik=A7grf4rTsFJAlQ&riu=http%3a%2f%2fassets.stickpng.com%2fthumbs%2f585e4beacb11b227491c3399.png&ehk=%2f7DjJ5adkIYfWfL4YSP4uLobeynRdeglnEPUcDrHr%2bM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
