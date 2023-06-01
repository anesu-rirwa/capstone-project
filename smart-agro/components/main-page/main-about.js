import styles from '@/styles/AboutMain.module.css';


function About() {
    return (
        <div className={styles.intro}>
            <p className={styles.aboutText}>
                AgCinect provides you with a cloud-based business solution available on your computer, phone, or tablet. AgCinect has the ability to analyze and store data from every segment of a farm. Having data in one place allows for a more comprehensive insight into your operation. With data entered, AgCinect provides the farmer detailed analytics, financials, and reports whenever needed.
            </p>
        </div>
    );
}

export default About;