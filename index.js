const articleList = document.getElementById('news-List');

async function newsArticles() {
  try {
    const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2024-05-05&to=2024-05-05&sortBy=popularity&apiKey=386710e6bd73496aa7ef1221f7a68432');
    const data = await response.json();
    console.log(data);

    articleList.innerHTML = "";
    data.articles.forEach(article => {
      console.log(article.title);

      const articleElement = document.createElement('article');
      articleElement.classList.add('newsList');

      const imageElement = document.createElement('img');
      imageElement.classList.add('news');
      
      if (article.urlToImage) {
        imageElement.src = article.urlToImage;
      } else {
        imageElement.src = 'placeholder.jpg'; 
      }
      imageElement.alt = 'No Image available';
      
      const headingElement = document.createElement('h2');
      headingElement.classList.add('newsHeading');
      headingElement.textContent = article.title;

      const textElement = document.createElement('p');
      textElement.classList.add('description');
      textElement.textContent = article.description;

      const buttonElement = document.createElement('a');
      buttonElement.classList.add('readMore');
      buttonElement.textContent = 'Read More';
      buttonElement.href = article.url;
      buttonElement.target = "_blank"; 

      articleElement.appendChild(imageElement);
      articleElement.appendChild(headingElement);
      articleElement.appendChild(textElement);
      articleElement.appendChild(buttonElement);

      articleList.appendChild(articleElement); 
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    articleList.innerHTML = "<p>Sorry, something went wrong while fetching the news.</p>";
  }
}

newsArticles(); 
