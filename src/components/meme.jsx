import React from "react";

function Meme() {
    return (
        <form action="#" method="post" id="form-input">
            <div className="text-input">
            <input type="text" id="top-text" name="top-text" className="text-input-field" placeholder="Shut up" />
            <input type='text' id="bottom-text" name="bottom-text" className="text-input-field" placeholder="and take my money" />
            </div>            
            <input type="submit" id="submit" className="text-submit" value='Get a new meme image' />
        </form>
    );
}

export default Meme;
