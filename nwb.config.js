module.exports = {
  type: "react-app",
  webpack: {
    define: {
      "process.env.REACT_APP_API_URL": JSON.stringify(
        process.env.REACT_APP_API_URL
      ),
    },
  },
};
