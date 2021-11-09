/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles/donationpage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Donation from './Donation';
function DonationPage() {
  return (
    <div className="container">
      <div className="text">
        <p>
          <strong>Cancer</strong> has a major impact on society in the India
           and across the world. Cancer statistics describe what happens
          in large groups of people and provide a picture in time of the burden
          of cancer on society. Statistics tell us things such as how many
          people are diagnosed with and die from cancer each year, the number of
          people who are currently living after a cancer diagnosis, the average
          age at diagnosis, and the numbers of people who are still alive at a
          given time after diagnosis. They also tell us about differences among
          groups defined by age, sex, racial/ethnic group, geographic location,
          and other categories. Cancer statistics also help us see trends. By
          looking at cancer rates over time, we can track changes in the risk of
          developing and dying from specific cancers as well as cancer overall.
        </p>
      </div>
      <div className="img_component">
        <img src="img2.jpg" alt="" />
        <Donation className="donation" />
      </div>
    </div>
  );
}

export default DonationPage;
