import mark1 from '../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import mark2 from '../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
import xx59 from '../../assets/shared/desktop/image-xx59-headphones.jpg';

const products = [
    {
        id: 1,
        image: mark2,
        direction: 'forward',
        transform: 'no',
        type: 'new product',
        product_name: 'xx99 mark ii headphones',
        product_desciption: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium         headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        link: '/product/xx99-mark-two-headphones'
    },
    {
        id: 2,
        image: mark1,
        direction: 'reverse',
        transform: 'yes',
        type: '',
        product_name: 'XX99 Mark I Headphones',
        product_desciption: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        link: '/product/xx99-mark-one-headphones'
    },
    {
        id: 3,
        image: xx59,
        direction: 'forward',
        transform: 'no',
        type: '',
        product_name: 'XX59 Headphones',
        product_desciption: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        link: '/product/xx59-headphones'
    }
];

export default products;