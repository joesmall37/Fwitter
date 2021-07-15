import React from "react";
import "./TrendingGains.css";
import {
    TwitterTimelineEmbed,
    TwitterTweetEmbed,
    TwitterVideoEmbed
} from "react-twitter-embed";

function TrendingGains() {
    return (

        <div className="widgets">
            <div className="widgets__widgetContainer">
                <h2> #Trending</h2>
                <TwitterTweetEmbed tweetId={"1415076068457807876"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="stoolpresidente"
                    options={{ height: 400 }}
                />
                <TwitterVideoEmbed
                    id={'1415076068457807876'}
                />
                <TwitterVideoEmbed tweetId={"1413626517679009792"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="stoolpresidente"
                    options={{ height: 400 }}
                />

            </div>
        </div>
    )
};



export default TrendingGains;
