import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { Avatar } from "@material-ui/core";
import Sidebar from "../../components/sidebar/Sidebar";
import SideRight from "../../components/SideRight/SideRight"


export default function Write() {
    const [title, setTitle] = useState("");
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
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("api/posts", data);
            } catch (err) { }
        }
        try {
            const res = await axios.post("api/posts", newPost);
            console.log(res.data)
            // window.location.replace("api/post/" + res.data._id);
        } catch (err) { }
    };
    return (
        <div className="tweetBox">

            {/* <Avatar src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
            {/* {file && (
        <img className="tweetbox__input img" src={URL.createObjectURL(file)} alt="" />
      )} */}

            <form onSubmit={handleSubmit}>
                {/* <div className="writeFormGroup"> */}
                {/* <label htmlFor="fileInput">
          <i className="tweetbox__input img"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])} */}
                {/* /> */}
                {/* <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          /> */}
                {/* </div>
        <div className="user__details">
          <Avatar src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div> */}
                <div className="tweetbox__input">
                    <textarea
                        placeholder="Tweet"
                        type="text"
                        className="tweetbox__input"
                        onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="tweetBox__tweetButton" type="submit">
                    Tweet
        </button>
            </form>



            {/*
      <div class="tweetBox">
        <form>
          <div class="tweetbox__input">
            <img
              src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
              alt=""
            />
            <input type="text" placeholder="What's happening?" />
          </div>
          <button class="tweetBox__tweetButton">Tweet</button>
        </form>
      </div> */}




        </div>

    );
}
