import React from 'react'
import "../Video.css";
import "../App.css";


function Video() {
    return (
        <div className="video">
            <video 
            className="video_player"
            loop="true"
            controls="true"
             src="https://v16m.tiktokcdn.com/0e97cd58f86fa0ebf307a474dd3ee51b/60013af2/video/tos/alisg/tos-alisg-pve-0037c001/f3c3756f388248bd8b160cdf18b9c339/?a=1233&br=3876&bt=1938&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101150049140101902090923501BC8A&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=Mzhxa3Npd3U1eTMzNTczM0ApNzk7M2Y0OTw4Nzc6Ojg5aWdfZWhtMDZrbnJfLS0uMTRzcy5gLy4xYWAwMzYyLjUxX2I6Yw%3D%3D&vl=&vr=">   
             </video>
            {/* <VideoFooter /> */}
            {/* <VideoSidebar /> */}
        </div>
    )
}

export default Video
