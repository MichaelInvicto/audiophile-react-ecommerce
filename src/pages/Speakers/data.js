import zx7 from '../../assets/shared/desktop/image-zx7-speaker.jpg';
import zx9 from '../../assets/shared/desktop/image-zx9-speaker.jpg';

const products = [
    {
        id: 1,
        image: zx7,
        direction: 'forward',
        transform: 'no',
        type: 'new product',
        product_name: 'ZX9 Speaker',
        product_desciption: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        link: '/product/zx9-speaker'
    },
    {
        id: 2,
        image: zx9,
        direction: 'reverse',
        transform: 'yes',
        type: '',
        product_name: 'ZX7 Speaker',
        product_desciption: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        link: '/product/zx7-speaker'
    },
];

export default products;