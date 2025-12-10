// lib/mongo.ts
import { MongoClient, Db, GridFSBucket } from "mongodb";

let client: MongoClient | null = null;
let cachedDb: Db | null = null;
let bucket: GridFSBucket;


export async function getDb() {
  if (cachedDb) return cachedDb;

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI not set");
  }

  client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  cachedDb = client.db(); // default DB from URI

  // initialize GridFS bucket
  bucket = new GridFSBucket(cachedDb, { bucketName: "resumes" });

  return cachedDb;
}



export function getBucket() {
  if (!bucket && client) {
    bucket = new GridFSBucket(client.db());
  }
  return bucket;
}
