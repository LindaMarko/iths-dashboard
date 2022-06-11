import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import styles from './TheNews.module.css';

const TheNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        ' https://newsapi.org/v2/top-headlines?sources=bbc-news&pagesize=3&apiKey=f73cc7719eba4f818d867bb2f981d5fa'
      );

      if (!res.ok) {
        throw new Error('Something went wrong');
      }

      const resData = await res.json();
      console.log(resData);
      setNewsData(resData.articles);
      setIsLoading(false);
    };

    fetchNews().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    const interval = setInterval(() => {
      fetchNews();
    }, 600000);

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
        <h1>Nyheter</h1>
        <p>Källa: BBC News</p>
        <ul>
          {newsData.map((item) => (
            <li className={styles.list}>
              <h2 className={styles.title}>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.publishedAt}</p>
            </li>
          ))}
        </ul>
      </section>
    </Card>
  );
};

export default TheNews;
