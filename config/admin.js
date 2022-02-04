module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f8c4f6dbf47d13a595f0c75628a8acd4'),
  },
});
