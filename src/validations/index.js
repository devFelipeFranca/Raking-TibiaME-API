module.exports = {
  tokenValidation: async (req, res) => {
    if (!req.headers["token"]) throw new Error("non-existent token");
  },
};
