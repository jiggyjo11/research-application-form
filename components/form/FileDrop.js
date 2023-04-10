import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

const FileDropZone = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col justify-center items-center border-2 border-dashed border-gray-400 rounded-md h-72 w-full">
      <div {...getRootProps()} className="flex flex-col items-center justify-center w-full h-full">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-gray-800 font-medium text-lg">Drop the files here ...</p>
        ) : (
          <>
            <FiUpload className="text-gray-600 text-7xl mb-4" />
            <p className="text-gray-600 font-medium text-lg">Drag and drop files here or click to browse</p>
          </>
        )}
      </div>
      <div className="mt-2 w-full">
        {files.map((file) => (
          <div key={file.name} className="p-2 bg-gray-200 rounded-md text-gray-700 flex justify-between items-center mt-2">
            <p>{file.name}</p>
            <button className="text-red-600 font-medium" onClick={() => setFiles(files.filter((f) => f !== file))}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileDropZone;
