import { useState } from "react";
import httpClient from "../utils/httpClient";
import { useNavigate } from "react-router-dom";
const useUpload = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState("");
    const [progress, setProgress] = useState(0);
  
    const onFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleUpload = async () => {
      const formData = new FormData();
      formData.append("file", file);
      try {
          const res = await httpClient.post("/upload", formData, {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        });
        setProgress(0);
        setFile(null);
        setFilename("");
        if (res.status === 200) {
            navigate("/result");
          }
      } catch (err) {
        console.log(err);
      }

    };

    return {file,filename,progress,handleUpload,onFileChange,setFilename,setFile};
};

export default useUpload;




