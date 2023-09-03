import dog from '../../assets/images/dog.png'
import dog2 from '../../assets/images/dog2.png'
import cat from '../../assets/images/cat.png'
import cat2 from '../../assets/images/cat2.png'

const images = [
    /**Image by <a href="https://www.freepik.com/free-psd/cute-brown-white-dog-scene_38709003.htm#query=dog%20transparent&position=6&from_view=keyword&track=ais">Freepik</a>*/
    dog,
    dog2,
    cat,
    cat2
];

const getRandomErrorImage = () => {
    return images[Math.floor(Math.random() * images.length)];
}

export const getErrorImage = getRandomErrorImage//