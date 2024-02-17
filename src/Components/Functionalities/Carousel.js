import React from "react";
import pic1 from "../../img/building2.jpg";
import pic2 from "../../img/experienced2.jpg";
import pic3 from "../../img/surgery2.jpg";
import rooms from "../../img/rooms.jpg"
import hospital from "../../img/building.jpg"
import lab from "../../img/lab.jpg"
import "./Carousel.css"
function Carousel(){
    return(
<div className="grcontainer">
<figure class="snip1527">
  <div class="image"><img src={pic1} alt="pr-sample23" /></div>
  <figcaption>
    <h3>Best In Town</h3>
    <p>

    Elevating Healthcare in Our Town: Your Wellness, Our Commitment — Recognized as the Best Hospital in Tamil Nadu    </p>
  </figcaption>
</figure>
<figure class="snip1527 ">
  <div class="image"><img src={pic2} alt="pr-sample24" /></div>
  <figcaption>
    <h3>Expert Doctors</h3>
    <p>

    Healing Hands, Trusted Expertise: Where the Best  Experienced Doctors Come Together for Your Well-Being at MED+    </p>
  </figcaption>
</figure>
<figure class="snip1527">
  <div class="image"><img src={pic3} alt="pr-sample25" /></div>
  <figcaption>
    <h3>Surgery</h3>
    <p>

    Setting the Standard for Surgical Excellence: Your Health, Our Priority at MED+    </p>
  </figcaption>
</figure>
<figure class="snip1527">
  <div class="image"><img src={rooms} alt="pr-sample25" /></div>
  <figcaption>
    <h3>Rooms</h3>
    <p>

    Pristine Spaces, Critical Care Excellence: Experience the Hygiene and Comfort in Our Hospital Rooms and ICU    </p>
  </figcaption>
</figure> 
<figure class="snip1527">
  <div class="image"><img src={hospital} alt="pr-sample25" /></div>
  <figcaption>
    <h3>ADDRESS</h3>
    <p>

    MED+ , 1/54 AnnaNagar East 11th Street, Perumbakkam,  Chennai-600032    </p>
  </figcaption>
</figure>
<figure class="snip1527">
  <div class="image"><img src={lab} alt="pr-sample25" /></div>
  <figcaption>
    <h3>Laboratory</h3>
    <p>
    Precision in Every Test: Elevating Healthcare with State-of-the-Art Laboratory Facilities at MED+
        </p>
  </figcaption>
</figure>




</div>
    )
};
export default Carousel;