import React from 'react';
import SECTIONS_DATA from "./sections.data.js";

import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: SECTIONS_DATA
        }
    }

    render(){
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, id, size, linkUrl})=>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                ))}
            </div>
        );
    }
}

export default Directory;
