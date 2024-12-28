import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://[YOUR_APPWRITE_ENDPOINT]') // Replace with your Appwrite endpoint
  .setProject('[YOUR_PROJECT_ID]'); // Replace with your Appwrite project ID

const databases = new Databases(client);
const collectionId = '[YOUR_COLLECTION_ID]'; // Replace with your Blogs collection ID
