import { useEffect, useState } from 'react';

import * as API from '../../api/API.js';
import Card from '../UI/Card';
import styles from './TheNews.module.css';

const TheNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      const res = await API.getApi(`/.netlify/functions/get-news`);

      const resData = res.data;

      setNewsData(resData.articles);
      setIsLoading(false);
    };

    fetchNews().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    const interval = setInterval(fetchNews, 600000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <Card>
      <section className={styles.news}>
        <h1 className={styles.mainTitle}>Nyheter</h1>
        <p className={styles.source}>Källa: BBC News</p>
        <ul>
          {newsData.map((item) => (
            <li className={styles.list} key={item.title}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.desc}>{item.description}</p>
              <p className={styles.date}>{item.publishedAt.substring(0, 10)}</p>
            </li>
          ))}
        </ul>
        <p className={styles.link}>
          For more news go to:{' '}
          <a href="https://www.bbc.com/news" target="_blank" rel="noreferrer">
            BBC News.
          </a>
        </p>
      </section>
    </Card>
  );
};

export default TheNews;
