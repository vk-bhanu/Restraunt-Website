import React from 'react';
import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
    <div className="app__bg app__wrapper seaction__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef" />
        </div>

        <div className="app__wrapper_info">
            <SubHeading title="Words by our Chef" />
            <h1 className="headtext__cormorant">
                What we Believe In 
            </h1>

            <div className="app__chef-content">
                <div className="app__chef-content_qoute">
                    <img src={images.quote} alt="qoute" />
                    <p className="p__opensans">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quod voluptates, est enim libero, facilis odit eveniet numquam voluptatem sunt alias ducimus quae, molestiae excepturi reprehenderit consequatur totam illum nobis.
                    </p>
                </div>
                <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
            </div>

            <div className="app__chef-sign">
                <p>Kevin Luo</p>
                <p className="p__opensans">Chief Chef</p>
                <img src={images.sign} alt="sign" />
            </div>
        </div>
    </div>
);

export default Chef;