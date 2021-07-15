import React from "react";
import "./TrendingLosses.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
    TwitterVideoEmbed
} from "react-twitter-embed";

function TrendingLosses() {
    return (

        <div className="widgets">
            <div className="widgets__widgetContainer">
                <h2> #Trending</h2>
                <TwitterTweetEmbed tweetId={"1415295312118358018"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="LifeStyleSoln"
                    options={{ height: 400 }}
                />

                <TwitterTweetEmbed tweetId={"1415403343942496258"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="TinyHomeTakeout
"
                    options={{ height: 400 }}
                />
                <TwitterTweetEmbed tweetId={"1414658028553445391"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="eatbocboc"
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



export default TrendingLosses;
