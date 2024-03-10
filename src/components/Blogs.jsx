export default function Blog({data = []}) {
    return (
        <div className="col" >
        <div className="card mb-4" style={{width: "23rem"}}>
            <img src={data.image} className="card-img-top" style={{height: "300px"}} />
        <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.content}</p>
            <a href="#" className="btn btn-primary">More Details</a>
        </div>
        </div>
        </div>
    )
}