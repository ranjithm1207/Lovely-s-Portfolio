import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Ranjith M | Portfolio</title>
        <meta
          name="description"
          content="Ranjith M — Cybersecurity Enthusiast | Ethical Hacking Learner | IT Student. Premium futuristic portfolio with terminal effects, projects, skills, and more."
        />
        <meta property="og:title" content="Ranjith M | Cybersecurity Portfolio" />
        <meta
          property="og:description"
          content="Cybersecurity portfolio with neon UI, Matrix rain, terminal animation, projects, certifications and contact panel."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <LoadingScreen />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HomePage />
      </motion.div>
    </>
  );
}


