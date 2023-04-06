import BoxSDK from "box-node-sdk";


// Configure the SDK with your developer token
const sdk = new BoxSDK({
  clientID: process.env.BoxClientID,
  clientSecret: process.env.BoxClientSecret,
});

const boxclient = sdk.getBasicClient(process.env.BOX_DEVELOPER_TOKEN); //60 mins sandbox

// Set up a timer to refresh the token before it expires
const refreshTimer = setInterval(() => {
    client.refresh((err, accessTokenInfo) => {
      if (err) {
        console.error('Error refreshing access token:', err);
        clearInterval(refreshTimer);
        return;
      }
  
      console.log('Access token refreshed:', accessTokenInfo.accessToken);
    });
  }, 1000 * 60 * 30); // Refresh the token every 30 minutes



async function boxCreateFolder(parentId, folderName) {
  // Create a new folder in parent folder specified with parentid
  try {
    const folder = await boxclient.folders.create(
      parentId,
      folderName,
      (err, folder) => {
        console.log(`New folder "${folderName}" created with ID: ${folder.id}`);
      }
    );
    
    return folder;
  } catch (err) {
    throw new Error(`Error with the Box SDK: ${err}`);
  }
}





// api route

export default async function handler(req, res) {
  if (req.method === "POST") {
    const project_researcher_name = req.body.project_researcher_name;
    const project_title = req.body.project_title;
    try {
      const folder = await boxCreateFolder("201284760327", project_title);
      res.status(200).json({ message: folder.id });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
