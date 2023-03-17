import { Routes, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import MainPage from 'pages/MainPage';
import CourseDetailPage from 'pages/CourseDetailPage';

import styles from './styles.module.scss';

function AppContent() {
  return (
    <div className={styles.AppContent}>
      <Header />

      <main>
        <Routes>
          <Route path = '/' element = { <MainPage /> }/>
          <Route path = '/course/:courseId' element = { <CourseDetailPage /> }/>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default AppContent;
