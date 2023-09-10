"use client";

import { Footer } from "flowbite-react";


export default function FooterBoard() {
    const gradientStyle = {background: "linear-gradient(270deg, #304C89 0%, #648DE5 100%)"}
  return (
    <Footer style={gradientStyle}>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-5">
          <div>
            <Footer.Title title="Get Started" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Accept Donations</Footer.Link>
              <Footer.Link href="#">Donate</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Services" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Services for non-profit</Footer.Link>
              <Footer.Link href="#">Services for Donors</Footer.Link>
              <Footer.Link href="#">Private Client Service</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Resources" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Resources for Non-profits</Footer.Link>
              <Footer.Link href="#">Resources for Donate</Footer.Link>
              <Footer.Link href="#">FAQ</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Partnerships" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Non-profit Industry Partners</Footer.Link>
              <Footer.Link href="#">Partner with us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Events</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Press</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}
