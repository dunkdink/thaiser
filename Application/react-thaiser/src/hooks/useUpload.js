import { useState, useContext } from "react";
import httpClient from "../utils/httpClient";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { SummaryContext } from "../contexts/SummaryContext";

const useUpload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");
  const { user } = useContext(UserContext);
  const { setSummary } = useContext(SummaryContext);
  const [uploading, setUploading] = useState(false);
  const [loadingSummary, setLoadingSummary] = useState(false);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await httpClient.post("/upload", formData);
      console.log("upload data:", res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setUploading(false);
    }
  };

  const handleSummary = async () => {
    setLoadingSummary(true);
    try {
      const summaryRes = await httpClient.get(`/summary/${user.id}`);
      setSummary(JSON.parse(summaryRes.data));
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingSummary(false);
      navigate("/result");
      setFile(null);
    }
  };

  return {
    file,
    filename,
    handleUpload,
    handleSummary,
    onFileChange,
    setFilename,
    setFile,
  };
};

export default useUpload;
