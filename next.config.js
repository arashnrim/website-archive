module.exports = {
  async rewrites() {
    return [
      {
        source: "/portfolio",
        destination: "/np-portfolio",
      },
    ];
  },
};
