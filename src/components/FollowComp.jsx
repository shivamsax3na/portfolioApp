import anime from 'animejs/lib/anime.es.js';
import '../css/anime.css'

export default function FollowComp(){
    
    return(
        <>
            <div className="container">
                <h1 className="display-6 text-light headAnime">Find me on..</h1>
                
                <div className="row pt-4 text-light links" >
                    <div className="col-sm-3 text-light link"><i className="fa fa-github" aria-hidden="true"></i> <a href="">GitHub</a></div>
                    <div className="col-sm-3 text-primary link"><i className="fa fa-linkedin-square" aria-hidden="true"></i> <a href="">LinkedIn</a></div>
                    <div className="col-sm-3 text-primary link"><i className="fa fa-facebook-official" aria-hidden="true"></i> <a href="">Facebook</a></div>
                    <div className="col-sm-3 text-danger link"><i className="fa fa-instagram" aria-hidden="true"></i> <a href="">Instagram</a></div>
                </div>
                <br /><br />
                <code className="text-danger ">Let's learn together follow me on YouTube!</code><br /><br /><br />
                
                    <div className="row p-4">
                        <iframe className="col-sm-6" width="560" height="315" src="https://www.youtube.com/embed/ViQOYvi7q9g" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media;" allowfullscreen></iframe>
                        
                        <iframe className="col-sm-6" width="560" height="315" src="https://www.youtube.com/embed/G1r240vr4Mk" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media;" allowfullscreen></iframe>
                    </div>

                
            </div>
        </>
    )
}