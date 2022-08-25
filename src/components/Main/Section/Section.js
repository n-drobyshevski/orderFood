import styles from './Section.module.css';
import Button from '../../UI/Button/Button'

import { HiOutlineChevronRight } from 'react-icons/hi';
const Section = (props) => {
    const classes = `${styles.section} ${props.className}`
    return (
        <section className={classes}>
            <div className={styles['section-control']}>
                <h3>{props.sectionTitle}</h3>
                <Button size='small' icon='after'>View all
                    <HiOutlineChevronRight />
                </Button>
            </div>
            {props.children}
        </section>
    )
};

export default Section;