import React from "react";
import "./Trending.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__widgetContainer">
                <h2> #Trending</h2>
                <TwitterTweetEmbed tweetId={"1412959480095117316"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="trainer2thepros"
                    options={{ height: 400 }}
                />
                <TwitterTweetEmbed tweetId={"1062775348734103552"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="FumaStrength"
                    options={{ height: 400 }}
                />
                <TwitterTweetEmbed tweetId={"1413273908535599104"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="elonmusk"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={""}
                    options={{ text: "", via: "username" }}
                />
             </div>
        </div>
    )
};

export default Widgets;
