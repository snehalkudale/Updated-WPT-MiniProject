import React , { useState, useEffect } from 'react';
import Layout from '../Layout';
import "../Navbar.css";
import './VerifyNews.css';
import Papa from 'papaparse';
import axios from 'axios';
import news from './News.csv'

function VerifyNews() {
    const [newsData, setNewsData] = useState(null);
    const [newsInput, setNewsInput] = useState('');
    const [resultText, setResultText] = useState('');
    const [resultClass, setResultClass] = useState('other');

    useEffect(() => {
        loadCSV(news).then(data => {
            setNewsData(data);
        });
    }, []);

    const loadCSV = (url) => {
      return axios.get(url)
          .then(response => {
              console.log("CSV Data:", response.data); // Check if CSV data is retrieved
              return Papa.parse(response.data, {
                  header: true,
                  dynamicTyping: true
              }).data;
          })
          .then(data => {
              console.log("Parsed Data:", data); // Check if parsed data is correct
              setNewsData(data);
              return data;
          })
          .catch(error => {
              console.error("Error:", error);
          });
  };
  

    const normalizeText = (text) => {
        return text.trim().toLowerCase().replace(/[^\w\s]/g, '');
    };

    const verifyNews = () => {
      const normalizedInput = normalizeText(newsInput);
  
      if (normalizedInput === '') {
          setResultText('Enter some news to verify');
          setResultClass('other');
      } else if (!newsData) {
          setResultText('News dataset is not loaded');
          setResultClass('other');
      } else {
          console.log("Normalized Input:", normalizedInput);
          console.log("News Data:", newsData);
  
          let foundMatch = false;
  
          for (let i = 0; i < newsData.length; i++) {
              const item = newsData[i];
              if (item && item.text) {
                  const normalizedItemText = normalizeText(item.text);
                  // console.log("Text:", normalizedItemText);
                  // console.log("Label:", item.label.toLowerCase());
  
                  if (normalizedItemText === normalizedInput) {
                      if (item.label.toLowerCase() === 'real') {
                          setResultText('Real News');
                          setResultClass('real');
                      } else if (item.label.toLowerCase() === 'fake') {
                          setResultText('Fake News');
                          setResultClass('fake');
                      }
                      foundMatch = true;
                      break;
                  }
              }
          }
  
          if (!foundMatch) {
              setResultText('News not found in the dataset');
              setResultClass('other');
          }
      }
  };
  

    return (
      <body className='verify'>
        <div className="container5">
          

            


            <textarea
                id="newsInput"
                className='txt'
                placeholder="Enter News Here...."
                style={{ width: '700px', height: '250px' }}
                value={newsInput}
                onChange={(e) => setNewsInput(e.target.value)}
                required
            ></textarea>

            <br /><br />

            <button type="button" onClick={verifyNews} className='b'>Verify it</button>

            <br />
            <h3 id="result" className={resultClass}>{resultText}</h3>
        </div>
        </body>
    );
}

export default VerifyNews;



