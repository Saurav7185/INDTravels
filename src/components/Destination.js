import React from 'react'; // Import React
import './DestinationStyles.css';
import img1 from '../assets/14.jpg';
import img2 from '../assets/15.jpg';
import img3 from '../assets/16.jpg';
import img4 from '../assets/31.jpg';
import DestinationData from './DestinationData';

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destinations</h1> {/* Changed "Destination" to "Destinations" for plural */}
      <p>Tours give you the opportunity to see a lot within a time frame.</p>

      <DestinationData
        cName="first-des"
        heading="Taal Volcano, Batangas" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, facilis dolor ad eaque omnis illum deleniti temporibus tempore maiores corrupti consequatur impedit officiis aliquam magnam labore cupiditate magni iure earum at consequuntur ducimus itaque odit nobis exercitationem! Voluptatibus, molestias dicta."
        i1={img1}
        i2={img2}
      />
      <DestinationData

        cName='first-des-reverse'
        heading=" Mt. Daguldul, Batangaos"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, facilis dolor ad eaque omnis illum deleniti temporibus tempore maiores corrupti consequatur impedit officiis aliquam magnam labore cupiditate magni iure earum at consequuntur ducimus itaque odit nobis exercitationem! Voluptatibus, molestias dicta.jb sbv 
        bvdhvb"
        i1={img3}
        i2={img4}
      />
    </div>
  );
};

export default Destination;
