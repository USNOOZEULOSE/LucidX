"use client";
import { Navbar ,Button} from "flowbite-react"

export default function Navibar(){
    const navstyling = {background:"linear-gradient(90deg, #648DE5 0%, #304C89 62.5%)"};
    
    return (
      <Navbar fluid style={navstyling}>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src="../app/TrustMarkerLogo.png" />
          <span className="self-center whitespace-nowrap  text-white text-xl font-semibold dark:text-white">
            TrustMarkers
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Connect Wallet</Button>
          <Navbar.Toggle />
        </div>
        
      </Navbar>
    );
}