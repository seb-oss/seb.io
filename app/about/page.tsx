"use client"

import Link from "next/link"
import Hero from "@/core/blocks/hero/hero"
import Stack from "@/core/blocks/stack"
import {Grid, Row, Col} from 'react-flexbox-grid';


export default function About() {
  return (
    <div className="layout core">
      <Grid fluid>
        <Row>
          <Col xs>
            <Hero heading="About"
                  preamble="Green Design System is the design system for Skandinaviska Enskilda Banken to make it easier and faster to build beautiful digital products and experiences under the SEB brand."/>
          </Col>
        </Row>
        <Stack gap="7.5rem">
          <Row>
            <Col xs={12} md={4}>
              <h2 className="heading-medium">What is Green?</h2>
            </Col>
            <Col xs={12} md={6}>
              <p className="paragraph-medium text-secondary">"A design system is a set of standards to manage design at
                scale by reducing redundancy while creating a shared language and visual consistency across different
                pages and channels." - <a
                  href="#">Therese Fessenden</a></p>
              <p className="paragraph-medium text-secondary">In order to have velocity when building digital products
                and keep a cohesive user experience cross channels and platforms designers and developers should use the
                Green Design System.</p>
              <p className="paragraph-medium text-secondary">By using pre-built components for design tools and
                front-end frameworks the time teams spend designing and building is minimized. Instead of spending time
                on building and re-building the same components in multiple teams, teams can spend that time on
                addressing specific user needs to improve user experience.</p>
              <p className="paragraph-medium text-secondary">The design system is called Green as an homage to SEB being
                viewed as the "green bank" with green as a primary colour for the brand and the bank. The bank also
                plays a great role in the transition to a net zero society and has a focus on sustainability and helping
                it's clients to become more sustainable. The design system initative was also seen as a Greenfield
                project.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={10}>
              <img style={{aspectRatio: "1.6 / 1", objectFit: "cover", objectPosition: "center"}} src="/content/woods-cabin.png" alt="A picture of a cabin in the woods"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <h2 className="heading-medium">How Green works</h2>
            </Col>
            <Col xs={4} md={6}>
              <p className="paragraph-medium text-secondary">The Green Design System is a federated design system where the Green Design System Team is the central team who is dedicated to maintain the design system and other team at SEB or external contributors contribute to the design system with insights, design and code.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <h2 className="heading-medium">Maintaining and educating</h2>
            </Col>
            <Col xs={4} md={6}>
              <p className="paragraph-medium text-secondary">Navigating the world of Green Design System involves more than just design and code. Delve into our Figma libraries, explore diverse code implementations, and leverage our comprehensive documentation. We're committed to supporting your journey with coaching sessions tailored for both design intricacies and development challenges.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <h2 className="heading-medium">Built on contributions</h2>
            </Col>
            <Col xs={4} md={6}>
              <p className="paragraph-medium text-secondary">Green Design System is built on contributions from everyone. Being a central team we are good at building general reusable components but we are not working close our end product's users. That's why it's vital that everyone contributes with what's possible. That can be everything from insights regarding a specific component or pull requests with code or a design update in a Figma branch. If you want to get started on contributing, read our Contribution Guidelines.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <h2 className="heading-medium">Contact us</h2>
            </Col>
            <Col xs={4} md={6}>
              <p className="paragraph-medium text-secondary">We want to hear from you so don't be a stranger. You can always reach out to us in the following ways:</p>
              <ul className="paragraph-medium text-secondary">
                <li>— Ask in our <a href="#">Teams channel</a></li>
                <li>— Post an <a href="#">issue on Github</a></li>
                <li>— Email us at <a href="mailto:greendesignsystem@seb.se">greendesignsystem@seb.se</a></li>
              </ul>
            </Col>
          </Row>
        </Stack>
      </Grid>
    </div>
  )
}
