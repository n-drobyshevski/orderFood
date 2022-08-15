import styles from './About.module.css';

import Card from '../UI/Card/Card';

const About = () => {
    return (
        <Card className={styles.About}>
            <h2>Food order app</h2>
            <p>Some very interesting text about this food store, and his exceptional abilities.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Aliquam faucibus purus in massa tempor nec feugiat nisl. Nec ullamcorper sit amet risus nullam eget. Tortor condimentum lacinia quis vel eros donec.
            </p>
        </Card>
    );
};

export default About;