// Vercel serverless function for the HubSpot sidebar example.
// Uses Node.js (CommonJS) and reads the HUBSPOT_API_KEY environment variable.

module.exports = async function handler(req, res) {
  const apiKey = process.env.HUBSPOT_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'Missing HUBSPOT_API_KEY environment variable. Configure it in your Vercel project settings.'
    });
  }

  // Example response; in a real integration you would call HubSpot APIs here using the apiKey.
  res.status(200).json({
    message: 'HubSpot sidebar endpoint is running on Vercel.',
    envConfigured: true
  });
};
