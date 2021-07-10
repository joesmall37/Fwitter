import React from "react";
import "./SideRight.css";
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
            {/* <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Eat and Tweet" type="text" />
            </div> */}

            <div className="widgets__widgetContainer">
                <h2> #Trending</h2>

                <TwitterTweetEmbed tweetId={"1412623232029523973"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="RealSkipBayless
"
                    options={{ height: 400 }}
                />
                <TwitterVideoEmbed
                    id={'1405189568916193283'}
                />
                <TwitterTweetEmbed tweetId={"1412959480095117316"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="trainer2thepros

"
                    options={{ height: 400 }}
                />
                <TwitterTweetEmbed tweetId={"1373292159416348676"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="TimJDillon

"
                    options={{ height: 400 }}
                />
                <TwitterTweetEmbed tweetId={"1413273908535599104"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="elonmusk
"
                    options={{ height: 400 }}
                />
                <TwitterTweetEmbed tweetId={"1411727413374078990"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="krystalball
"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
                />



            </div>
        </div>
    );
}

export default Widgets;
