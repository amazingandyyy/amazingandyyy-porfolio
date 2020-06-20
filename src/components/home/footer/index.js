import React from 'react';
import './style.scss';
var d = new Date();

function timeSince(date) {

    var seconds = Math.floor(((new Date().getTime()) - date))/1000,
    interval = Math.floor(seconds / 31536000);

    if (interval > 1) return interval + "y";

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + "m";

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + "d";

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + "h";

    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + "m ";

    return Math.floor(seconds) + "s";
}

export default () => {
    return (<div className='component footer'>
        <div className='last-built'>Built with {`❤️ ${timeSince(process.env.LAST_UPDATE)}`} ago in San Francisco</div>
        <div >amazingandyyy © {d.getFullYear()}</div>
    </div>)
}