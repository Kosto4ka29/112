import PageTitle from '../components/PageTitle/PageTitle.js';
import styles from '../components/PageTitle/PageTitle.module.scss';

const About = () => {
  return (
    <div>
      <PageTitle>About</PageTitle>
      <p className={styles.content}>
        Lorem Ipsum. This is a simple about page in the app.
      </p>
    </div>
  );
};

export default About;
