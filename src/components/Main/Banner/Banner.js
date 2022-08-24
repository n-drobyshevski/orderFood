import styles from './Banner.module.css';

import Section from '../Section/Section';
import Card from '../../UI/Card/Card';
const About = () => {
    return (
        <Card className={styles.about}>
            <div className={styles.banner}>
                <div className={styles['banner-content']}>
                    <h2>Food order app</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default About;