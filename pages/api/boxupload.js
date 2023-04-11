import BoxSDK from "box-node-sdk";
import fs from "fs";

// // Configure the SDK with your developer token (Quick Setup)
// const sdk = new BoxSDK({
//   clientID: process.env.BoxClientID
//   clientSecret: process.env.BoxClientSecret,
// });

// const boxclient = sdk.getBasicClient(process.env.BOX_DEVELOPER_TOKEN); //60 mins sandbox

const credentials = JSON.parse(fs.readFileSync('box_config.json'));

const sdk = new BoxSDK({
  clientID: credentials.boxAppSettings.clientID,
  clientSecret: credentials.boxAppSettings.clientSecret,
  appAuth: {
    keyID: credentials.boxAppSettings.appAuth.publicKeyID,
    privateKey: credentials.boxAppSettings.appAuth.privateKey,
    passphrase: credentials.boxAppSettings.appAuth.passphrase
  }
});

var boxclient = sdk.getAppAuthClient('enterprise', '939429920');




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
      const folder = await boxCreateFolder("202886318459", project_title); // box app has own file system and you need to share this folder with yourself to see it
      res.status(200).json({ message: folder.id });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
