"use client"

import Hero from "@/core/blocks/hero/hero"
import Stack from "@/core/blocks/stack"
import TOC from "@/core/blocks/toc/toc"
import { Col, Row } from "react-flexbox-grid"

import "./style.css"

const tocHeading = [
  {
    slug: "our-purpose",
    text: "Our purpose",
    level: 2,
  },
  {
    slug: "tonality",
    text: "Tonality",
    level: 2,
  },
]

export default function Writing() {
  return (
    <div className="layout core foundation">
      <Stack gap="5rem">
        <Hero
          heading="Writing"
          preamble="Regardless of where, when or how the customer meets us, the experience of SEB must be the same because each meeting contributes to how we are perceived. A positive customer experience opens the door to new business.
          "
        />
        <Row>
          <Col xs={12} md={10}>
            <p className="paragraph-medium text-secondary">
              This is particularly important in texts aimed at customers. Mistakes
              affect the {`reader's`} concentration on the content and understanding of
              the text. Because our texts are correct, our credibility with customers
              and other visitors (=potential customers) increases. We follow:
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10}>
            <h2>Written ID, our tone of voice</h2>
            <p>
              {" SEB's "} <a href="https://brand.seb.se/point/en/seb/component/default/82393">
                Written ID</a> is our guiding light, and it forms the basis for all our
              communication, including UX writing.
            </p>
            <br />
            This is the essence of Written ID:
            <br />
            <br />
            <ul>
              <li>
                We are people speaking to people. That’s why we prefer using an
                informal, personal voice rather than an official one.
              </li>
              <li>
                Our texts are clear and easy to grasp, and we start with what’s
                most important.
              </li>
              <li>
                We have the engagement and energy; we share our drive with our
                customers. Linguistically that means our language is alert and
                modern.
              </li>
            </ul>
            <br />
            The voice the customers encounter when they use a service on the
            internet banking services or the mobile apps must be the same in
            guides, sales, error messages, etc.
            <br />
            <br />
            But UX writing should, to a greater degree than other non-fiction
            texts, be consistent. Therefore, we have special principles for
            different design components.
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10}>
            <h2>UX writing in SEB</h2>
            <br /><br />
            <h3>What is UX writing and how will good UX texts help our customers?</h3>
            <br /><br />
            The UX texts help the user, or customer, to navigate apps, websites, and other digital products. They are one part of many in a final design. UX texts focus on accessibility, they are short and to the point without losing any important information. They are user-friendly, contextually appropriate and with the right tone of voice. The UX texts should solve a user problem and meet the business goals.
            <br /><br />
            These are many requirements to take into account and which do not always go hand in hand with each other. Therefore, people with the right knowledge and skills must write the UX texts.
            <br /><br />
            Good UX writing is like a personal guide that acts in the background and helps customers understand how to act and navigate. It ensures that customers do not end up in situations where they feel stupid or underestimated. Really good UX writing will rather make them feel satisfied because they succeed in finishing a task without unnecessary thresholds.
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10}>
            <h3>UX writing in SEB is:</h3>
            <br /><br />
            <ul>
              <li>Consistent – we strive to use the same word for the same item, action, or object.</li>
              <li>Educational – we make an effort to be brief and pedagogic.</li>
              <li>Distinct – we avoid bank or tech jargon.</li>
              <li>Helpful – we prevent mistakes and setbacks.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10}>
            <h3>A few examples of UX texts:</h3>
            <br /><br />
            <ul>
              <li>Labels and headings</li>
              <li>Menus</li>
              <li>Buttons, links, and navigation texts</li>
              <li>Error messages</li>
              <li>Help texts and instructions</li>
              <li>Onboardings</li>
              <li>Empty states</li>
              <li>Loading screen messages</li>
              <li>Success messages</li>
              <li>Disclaimer texts</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10}>
            <h3>Translate texts from Swedish to English</h3>
            <br /><br />
            <p>If you need to translate Swedish texts into English, the bank has agreements with, among others, Språkkonsulterna and Lionbridge. Contact them directly to order a translation.</p>
            <br /><br />
            <p>When you contact them to ask if they are available to take on the assignment, they want to know approximately how many words are to be translated. They also need to know the name of who will pay the invoice before you send the translation document.</p>
            <br /><br />
            <ul>
              <li>Språkkonsulterna: <a href="mailto:info@sprakkonsulterna.se" target="_blank">info@sprakkonsulterna.se</a></li>
              <li>Lionbridge: <a href="mailto:jakob.nordby@lionbridge.com" target="_blank">jakob.nordby@lionbridge.com</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10}>
            <h3>Contact the UX writing team</h3>
            <br /><br />
            <p>When you need help with tone-of-voice, instructions, vocabulary or a UX writer to work with, please don’t hesitate to contact the UX writing team. Reach out in the Teams channels <a href="https://teams.microsoft.com/l/channel/19%3adc26cb18c8dd48e7bd7c2b1b65358cfc%40thread.tacv2/UX%2520Writing?groupId=3ad3eb8f-ab23-44e6-9b61-d08fee172513&tenantId=9a8ff9e3-0e35-4620-a724-e9834dc50b51" target="_blank">UX writing</a> in Green Design System or <a href="https://teams.microsoft.com/l/channel/19%3a2087564862f64972946b3b11dfa23d0c%40thread.tacv2/UX%2520Writing?groupId=8dda903f-8371-4d49-922d-2d81a24a869b&tenantId=9a8ff9e3-0e35-4620-a724-e9834dc50b51" target="_blank">UX writing</a> in CX Community, or if you already have a contact or dedicated writer for your team or product, simply contact that person.</p>
          </Col>
        </Row>
      </Stack>
      <div className="toc-sidebar">
        <TOC headings={tocHeading} component={"About"} />
      </div>
    </div>
  )
}
