
import travels from "../data/travels"

function TravelCard() {
    return (
        <>
            <div class="card" >
                <img src="..." className="card-img" style="width: 18rem;"></img>
                <h1 class="card-header">
                    {travels.destination}
                </h1>
                <div class="card-body">
                    <h5 class="card-title">
                        {travels.start_date}
                    </h5>
                    <h5 class="card-title">
                        {travels.end_date}
                    </h5>
                    <p class="card-text">
                        {travels.description}
                    </p>
                    <a href="#" class="btn btn-primary">
                        Partecipanti
                    </a>
                </div>
            </div>
        </>
    )
}
export default TravelCard