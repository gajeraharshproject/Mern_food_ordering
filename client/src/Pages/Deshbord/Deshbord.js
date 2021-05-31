import React from 'react'
import Dashbord_boxes from '../../components/Dashbord_boxes/Dashbord_boxes'
import Rightnav from '../../components/Rightnav/Rightnav'
import './Deshbord.css'
import RateReviewIcon from '@material-ui/icons/RateReview';
import StarIcon from '@material-ui/icons/Star';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import Dashbord_item_boxes from '../../components/Dashbord_boxes/Dashbord_item_boxes';
import img1 from '../../utils/images/240_F_269675262_UNHEWc4agzRjolSfLrxdatB3Gwntj4c4.jpg'
import img2 from '../../utils/images/food1.jpg'
import img3 from '../../utils/images/food2.jpg'
function Deshbord() {
  return (
    <>
      <div className="Deshbordpage">
        <Rightnav page="Dashbord" />

        <div className="Dashbord_first_boxes">
          <Dashbord_boxes
            Logo={RateReviewIcon}
            text="Totle Reviwes"
            totle={12}
            color="y"
          />
          <Dashbord_boxes
            Logo={StarIcon}
            text="Totle Stare"
            totle={100}
            color="g"
          />
          <Dashbord_boxes
            Logo={FastfoodIcon}
            text="Totle Food"
            totle={12}
            color="r"
          />
          <Dashbord_boxes
            Logo={EmojiFoodBeverageIcon}
            text="Active food"
            totle={6}
            color="b"
          />

        </div>

        <div className="dashbortd_item_contaienr">
          <Dashbord_item_boxes
            img={img1}
            foodtitle="Burger"
            fooddesc="this burger is most populer Burger"
            updatedat="10 minuits ago "
          />

          <Dashbord_item_boxes
            img={img2}
            foodtitle="Burger"
            fooddesc="this burger is most populer Burger"
            updatedat="10 minuits ago "
          />

          <Dashbord_item_boxes
            img={img3}
            foodtitle="Burger"
            fooddesc="this burger is most populer Burger"
            updatedat="10 minuits ago "
          />

        </div>
      </div>
    </>
  )
}

export default Deshbord;
