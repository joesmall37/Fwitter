import React from "react";
import "./TrendingCardio.css";
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
                <TwitterTweetEmbed tweetId={"1413135867531522062"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="GoodBlokesJog"
                    options={{ height: 400 }}
                />
                <TwitterVideoEmbed
                    id={'1414344037038010377'}
                />
                <TwitterTweetEmbed tweetId={"1414575269067825153"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="TrailRunningMag
"
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
