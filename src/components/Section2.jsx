import React from 'react';
import Carte1 from './used/carte1';
import Img1 from '../img/nathalie-marquis-7bBaW4UPk7A-unsplash.jpg';
import Img2 from '../img/chaz-mcgregor-glpfFVX3OUg-unsplash.jpg';
import Img3 from '../img/gabor-koszegi-feLkmmoAHPY-unsplash.jpg';
import Img4 from '../img/rahul-chakraborty-5aN2I852PTs-unsplash.jpg';
import Img5 from '../img/timur-garifov-p2RbLnqWPVY-unsplash.jpg';
import Img6 from '../img/jorge-gardner-k_VqQKvuaT8-unsplash.jpg';
import Img7 from '../img/laurentiu-morariu-imCBr_R2Oqs-unsplash.jpg';
import Img8 from '../img/jovyn-chamb-iWMfiInivp4-unsplash.jpg';
import Img9 from '../img/alec-favale-Bi_5VsaOLnI-unsplash.jpg';

const Section2 = () => {
    return (
        <div className='container mt-5'>
            <h4>Most visited <span className='border-bottom border-primary border-3'>destinations</span></h4>
            <div className="row mt-5">
                <div className="col-md-4 colonne">
                    <Carte1 pays={Img1} titre={'Bora Bora'} local={'New Zelanda'} prix={'$700'} />
                </div>
                <div className="col-md-4 colonne">
                      <Carte1 pays={Img2} titre={'Machu Picchu'} local={'Peru'} prix={'$600'} />
                </div>
                <div className="col-md-4 colonne">
                      <Carte1 pays={Img3} titre={'Great Barrier Reef'} local={'Australia'} prix={'$600'} />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-4 colonne">
                    <Carte1 pays={Img4} titre={'Cappadocia'} local={'Turkey'} prix={'$800'} />
                </div>
                <div className="col-md-4 colonne">
                      <Carte1 pays={Img5} titre={'Guanajuato'} local={'Mexico'} prix={'$780'} />
                </div>
                <div className="col-md-4 colonne">
                      <Carte1 pays={Img6} titre={'Cinque Terre'} local={'Italy'} prix={'$840'} />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-4 colonne">
                    <Carte1 pays={Img7} titre={'Angkor Wat'} local={'Cambodia'} prix={'$790'} />
                </div>
                <div className="col-md-4 colonne">
                      <Carte1 pays={Img8} titre={'Taj Mahal'} local={'India'} prix={'$900'} />
                </div>
                <div className="col-md-4 colonne">
                      <Carte1 pays={Img9} titre={'Bali Island'} local={'Indonesia'} prix={'$500'} />
                </div>
            </div>
        </div>
    );
};

export default Section2;