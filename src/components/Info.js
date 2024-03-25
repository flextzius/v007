import React from 'react';

import infoAudio from '../misc/audio/info.mp3';

const Info = (props) => {

    return (
        <div id='info-container'>
            <div id='infobox'>
                <h1>Bölgelerimizi Tanıyalım!</h1>
                <p>Haritada gitmek istediğiniz bölgenin üstüne tıklayınız.</p>
                <p>İyi dinlemeler!</p>
                <audio src={infoAudio} autoPlay={true} />
                <button className='btn btn-primary' id='continue-button' onClick={() => props.setInfo(false)}>İleri <i className="bi bi-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Info;