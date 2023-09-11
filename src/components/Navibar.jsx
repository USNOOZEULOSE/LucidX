"use client";

import { Navbar ,Button} from "flowbite-react"
import { useEffect , useRef , useState } from "react";
import { ethers } from "ethers";

export default function Navibar(){

    const [correctNet, setCorrectNet] = useState(false)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [currentAccount, setCurrentAccount] = useState('')

    useEffect(() => {
      connectWallet()
    }, [])

    const connectWallet = async () => {
      try {
        const { ethereum } = window
        if (!ethereum) {
          alert("MetaMask Not detected")
          return
        }
        let chainID = await ethereum.request({ method: 'eth_chainId' })
        console.log('Connnected to chain:', chainID)

        const neonChainId = '0xe9ac0ce'
        if (chainID != neonChainId) {
          setCorrectNet(false)
          alert("You are not connect to NeonEvm testnet!")
          return
        }
        else {
          setCorrectNet(true)
        }

        const account = await ethereum.request({ method: "eth_requestAccounts" })
        console.log("Found Account:", account[0])
        setIsUserLoggedIn(true)
        setCurrentAccount(account[0])

      } catch (error) {
        console.log(error)
      }
    }

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