import Blogs from "../components/Blogs";

export default function FullStackDevelopment() {

    const Courses = [
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
      ];

    return (
        <div>
            <div className="container pt-5">
                <div className="row" >
                    {
                       Courses.map((data, index) => (
                        <Blogs key={`${index}-${data.name}`} data={data} />
                       )) 
                    }
            </div>
            </div>
        </div>
    )
}