import React from 'react';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">First Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBagde">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Language/>
                    </div>
                    <div className="topbarIconContainer">
                    <Settings/>
                    </div>
                    <img src="https://images.wagwalkingweb.com/media/breed/pembroke-welsh-corgi/appearance/pembroke-welsh-corgi.png" alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}
