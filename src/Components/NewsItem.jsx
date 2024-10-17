

 const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="col-12 col-md-3 card bg-dark text-light mb-3 mb-md-3 py-3  my-md-3 mx-md-5">
        <img src={src?src:src='https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg'} style={{maxHeight:'200px'}}  className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title?title.slice(0,50):title=' Lorem ipsum dolor sit amet'}</h5>
            <p className="card-text">{description?description.slice(0,90):description=`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</p>
            <a href={url} className="btn btn-primary">Read More</a>
           
            
        </div>
        
</div>
  )
 
}

export default NewsItem