import React from "react";
import "./TrendingWeights.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
    TwitterVideoEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__widgetContainer">
                <h2> #Trending</h2>
                <TwitterTweetEmbed tweetId={"1404456888251650055"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="JeffNippard
"
                    options={{ height: 400 }}
                />
                <TwitterVideoEmbed
                    id={'1413236075162652679'}
                />
                <TwitterTweetEmbed tweetId={"1396189767352659970"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="JeffNippard"
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
