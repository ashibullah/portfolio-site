const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;

// console.log("MONGO_USER set:", !!user);
// console.log("MONGO_PASS set:", !!pass);

if (!user || !pass) {
  console.warn("MONGO_USER or MONGO_PASS missing. Check your .env");
}

const encodedUser = encodeURIComponent(user || "");
const encodedPass = encodeURIComponent(pass || "");

export const connectionStr = `mongodb+srv://${encodedUser}:${encodedPass}@cluster0.91k5x.mongodb.net/PortfolioSite?appName=Cluster0`;
