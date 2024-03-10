import Blogs from "../components/Blogs";

export default function Database() {

    const Courses1 = [
        {
          "id": 1,
          "name": "JavaScript",
          "category": "fsd",
          "content" : "JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language. It is also known as the scripting language for webpages. It is well-known for the development of web pages, and many non-browser environments also use it.",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ScOA4a8z---MOL1Mcpqtw0yZj0om1aUvRQS26e67ezyG2PfW6cefOsEupSdvXkVZ3H0&usqp=CAU"
        },
        {
          "id": 2,
          "name": "React",
          "category": "fsd",
          "content" : "React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web.",
          "image": "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"
        },
        {
          "id": 3,
          "name": "Node",
          "category": "fsd",
          "content" : "Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
        },
        {
            "id": 4,
            "name": "Mongodb",
            "category": "db",
            "content" : "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License.",
            "image": "https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp"
          },
          {
            "id": 5,
            "name": "MySQL",
            "category": "db",
            "content" : "MySQL is an open-source relational database management system. Its name is a combination of My, the name of co-founder Michael Widenius's daughter My, and SQL, the acronym for Structured Query Language.MySQL is free and open-source software under the terms of the GNU Liscence",
            "image": "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
          },
          {
            "id": 6,
            "name": "Oracle",
            "category": "db",
            "content" : "Oracle Database is a proprietary multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing, data warehousing and mixed database workloads.Oracle Database uses SQL query language for database",
            "image": "data:image/png;base64,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"
          },
          {
            "id": 7,
            "name": "DataScience",
            "category": "ds",
            "content" : "Have you ever wondered how some of the world's most successful companies seem to know exactly what you need, even before you do? Or how your favorite streaming service recommends the perfect movie or how companies accurately predict customer behavior to offer personalized experiences.",
            "image": "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp"
          },
          {
            "id": 8,
            "name": "Roles",
            "category": "ds",
            "content" : "Data science is a rapidly growing field that has become essential for businesses to thrive in the digital age. As organizations wrestle with large volumes of data, the need for skilled professionals who can extract valuable insights has skyrocketed.DataScience is vast topic to cover.",
            "image": "https://iabac.org/blog/uploads/images/202307/image_870x_64ad296d30216.jpg"
          },
          {
            "id": 9,
            "name": "Interview",
            "category": "ds",
            "content" : "Amazon(US) tops the LinkedIn list of the top companies for 2nd time in a row! Moreover, in 2021, Amazon created more than 200,000 jobs in the US, where more than 1.1 million people are currently employed.When you start preparing for Amazon interviews, check this little guide below:",
            "image": "https://cdn-images-1.medium.com/max/1200/1*E1haIGB9K4K89PsFZgm-pw.jpeg"
          }   
      ];

    return (
        <div>
            <div className="container pt-5">
                <div className="row" >
                    {
                       Courses1.map((data, index) => (
                        <Blogs key={`${index}-${data.name}`} data={data} />
                       )) 
                    }
            </div>
            </div>
        </div>
    )
                }