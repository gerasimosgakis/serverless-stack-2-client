const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1et9lypm3aorw"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ay162njx0b.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_W7eXX3wtH",
    APP_CLIENT_ID: "1v1fbjecph4lm0cfpbctg983a",
    IDENTITY_POOL_ID: "us-east-1:eac3c347-3039-4bd1-8b53-16a0c8e2b726"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1ka98fav08pck"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://k7uhbdkdwl.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_KfGhFGbSh",
    APP_CLIENT_ID: "2qgvm4944i3qg81d8kivt78s1e",
    IDENTITY_POOL_ID: "us-east-1:5f4a62af-7468-422e-8591-ed482af6715f"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
