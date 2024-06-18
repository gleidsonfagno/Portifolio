const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "production",
  entry: {
    emailjs: "./src/js/email_js.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new Dotenv()],
};
