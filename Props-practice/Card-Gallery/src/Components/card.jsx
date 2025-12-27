
import { Bookmark } from 'lucide-react'

function CARD(props) {
  return (
    <>
    

        <div className="card">
         
         <div>

                       <div className="top">
            <img
              src={props.logo}
              alt="Amazon logo"
            />
            <button>
              Save <Bookmark size={18} />
            </button>
          </div>

          <div className="center">
             <h3>{props.company}<span>{props.date}</span> </h3>
             <h2>{props.posts}</h2>

             <div className='tag'>
              <h4>{props.t1}</h4>
              <h4>{props.t2}</h4>
             </div>

          </div>

         </div>

          <div className="bottom">
              
            
              <div>
                <h3>{props.pays}</h3>
                <p>{props.locate}</p>
              </div>
                   <button>Apply Now</button>
             

          </div>
        </div>

     
    </>
  )
}

export default CARD
