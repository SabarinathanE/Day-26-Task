import Blogs from "../components/Blogs";

export default function DataScience() {

    const Courses2 = [
        {
          "id": 1,
          "name": "DataScience",
          "category": "ds",
          "content" : "Have you ever wondered how some of the world's most successful companies seem to know exactly what you need, even before you do? Or how your favorite streaming service recommends the perfect movie or how companies accurately predict customer behavior to offer personalized experiences.",
          "image": "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp"
        },
        {
          "id": 2,
          "name": "Roles",
          "category": "ds",
          "content" : "Data science is a rapidly growing field that has become essential for businesses to thrive in the digital age. As organizations wrestle with large volumes of data, the need for skilled professionals who can extract valuable insights has skyrocketed.DataScience is vast topic to cover.",
          "image": "https://i.ytimg.com/vi/yh2pLdDb87c/maxresdefault.jpg"
        },
        {
          "id": 3,
          "name": "Interview",
          "category": "ds",
          "content" : "Amazon(US) tops the LinkedIn list of the top companies for 2nd time in a row! Moreover, in 2021, Amazon created more than 200,000 jobs in the US, where more than 1.1 million people are currently employed.When you start preparing for Amazon interviews, check this little guide below:",
          "image": "https://cdn-images-1.medium.com/max/1200/1*E1haIGB9K4K89PsFZgm-pw.jpeg"
        },  
      ];

    return (
        <div>
            <div className="container pt-5">
                <div className="row" >
                    {
                       Courses2.map((data, index) => (
                        <Blogs key={`${index}-${data.name}`} data={data} />
                       )) 
                    }
            </div>
            </div>
        </div>
    )
}