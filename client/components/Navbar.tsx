import Image from 'next/image'
import React from 'react'
import logo1 from "../../images/logo1.png"
import { useStytch, useStytchUser } from "@stytch/nextjs";
import {ColorButton} from "../constants/ColorButtons"

const Navbar = () => {
    const stytch = useStytch();
  return (
    <div className="navbar flex justify-between pl-3 pr-10 items-center">
    <div className="image">
        <Image src={logo1} alt="" style={{  width:"250px",height: "150px",borderRadius:200 }} />
    </div>
    <div className="logout-button">
              <ColorButton
                  variant="contained"
                  sx={{ backgroundColor: "#3C41C2", boxShadow: " 4px 4px 1px 0px rgba(255,255,66,1)" }}
                  onClick={() => stytch.session.revoke()}>Logout</ColorButton>
    </div>
</div>
  )
}

export default Navbar