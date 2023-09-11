"use client";

import React from "react"
import { Homepage } from "./Homepage";
import Navibar from './Navibar'
import FooterBoard from './Footer'
import { useEffect , useRef , useState } from "react";

export const App = () =>{
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

  return (
    <>
    <div className='sticky top-0'>
    <Navibar isUserLoggedIn={isUserLoggedIn} currentAccount={currentAccount} connectWallet={connectWallet}/>
    </div>
      <Homepage isUserLoggedIn={isUserLoggedIn}/>
    <div className='mt-auto'>
      <FooterBoard />
    </div>
    </>
  )
}