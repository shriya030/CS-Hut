import React from 'react';
import './Banner.css';
import bannerImage from '../Images/banner.jpg';
import Button from '@material-ui/core/Button';

function Banner() {
    return (
        <div className='banner'>
            <div className='banner-img'><img src={bannerImage} alt='' /></div>
            <div className='banner-heading'>
            <h2>Title hmara</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <Button variant="outlined" color="secondary">Let's Begin</Button>
            </div>
        </div>
    )
}

export default Banner
