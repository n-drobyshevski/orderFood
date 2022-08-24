import styles from './Section.module.css';
import Button from '../../UI/Button/Button'

const Section = (props) => {
    const classes = `${styles.section} ${props.className}`
    return (
        <section className={classes}>
            <div className={styles['section-control']}>
                <h3>{props.sectionTitle}</h3>
                <Button className='small'>View all</Button>
            </div>
            {props.children}
        </section>
    )
};

export default Section;