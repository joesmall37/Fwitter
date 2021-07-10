import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { Avatar } from "@material-ui/core";

export default function Write() {
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("api/posts", newPost);
      console.log(res.data)
      window.location.replace("api/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">

      <Avatar src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      {file && (
        <img className="tweetBox__imageInput" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="tweetBox" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

        </div>
        <div className="tweetBox__input ">
          <textarea
            placeholder="Add Your Story and Share an image with everyone!"
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="tweetBox__tweetButton" type="submit">
          Tweet
        </button>
      </form>
    </div>
  );
}
