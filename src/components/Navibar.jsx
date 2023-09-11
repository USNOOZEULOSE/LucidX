"use client";

import { Navbar ,Button} from "flowbite-react"

export default function Navibar({isUserLoggedIn,currentAccount,connectWallet}){

    const navstyling = {background:"linear-gradient(90deg, #648DE5 0%, #304C89 62.5%)"};

    return (
      <Navbar fluid style={navstyling}>
        <Navbar.Brand href="https://flowbite-react.com">

          <span className="self-center whitespace-nowrap  text-white text-xl font-semibold dark:text-white">
            LucidX
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {!isUserLoggedIn ? <Button onClick={connectWallet}>Connect Wallet</Button> : <Button >{currentAccount}</Button>}
          <Navbar.Toggle />
        </div>
        
      </Navbar>
    );
}