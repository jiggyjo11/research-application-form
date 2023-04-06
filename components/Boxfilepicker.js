import { useState } from 'react';
import BoxFilePicker from 'box-ui-elements/es/elements/content-picker';

function FileDrop({folderId}) {
  const [files, setFiles] = useState([]);

  function handleFileUploadSuccess(newFiles) {
    setFiles([...files, ...newFiles]);
  }

  function handleFileUploadError(error) {
    console.error(error);
  }

  return (
    <BoxFilePicker
      rootFolderId={folderId}
      token={client._session.accessToken}
      canSetShareAccess={false}
      canUpload={true}
      onUploadSuccess={handleFileUploadSuccess}
      onUploadError={handleFileUploadError}
    />
  );
}

export default FileDrop;
