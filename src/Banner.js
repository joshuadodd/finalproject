import React, {useState} from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from './Search';


function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className= 'banner'>
            <div className= 'banner_search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className= 'banner_searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner_info'>
            <h1>Go Near</h1>
            <h5>
                Explore unique destinations near you.
            </h5>
            <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner