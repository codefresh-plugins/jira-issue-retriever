module.exports = {
    apiToken: process.env.CF_API_KEY,
    host: process.env.CODEFRESH_HOST || 'https://g.codefresh.io',
    projectName: process.env.JIRA_PROJECT_PREFIX,
    message: process.env.MESSAGE,
    jira: {
        host: process.env.JIRA_HOST,
        basic_auth: {
            email: process.env.JIRA_EMAIL,
            api_token: process.env.JIRA_API_TOKEN
        }
    },
    image: process.env.IMAGE
};