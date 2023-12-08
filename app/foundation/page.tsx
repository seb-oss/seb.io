"use client"

import Image from "next/image"
import Link from "next/link"
import Hero from "@/core/blocks/hero/hero"
import Stack from "@/core/blocks/stack"
import TOC from "@/core/blocks/toc/toc"
import MetallicSurfaceImage from "public/content/metallic-surface.jpg"
import CirclesImage from "public/content/tonality-circles.jpg"
import { Col, Grid, Row } from "react-flexbox-grid"

import "./style.css"

const tocHeading = [
  {
    slug: "our-purpose",
    text: "Our purpose",
    level: 2,
  },
  {
    slug: "visual-style",
    text: "Visual style",
    level: 2,
  },
  {
    slug: "features",
    text: "Features",
    level: 2,
  },
]

export default function Foundation() {
  return (
    <div className="layout core foundation">
      <Grid fluid>
        <Row>
          <Col xs>
            <Hero
              heading="Foundation"
              preamble="Green Design System, a framework designed to bring unity, efficiency, and coherent perspective to our digital experiences. Over time it will grow and evolve but always reflect our design philosophy. User needs first, being forefront and with confidence."
            />
          </Col>
        </Row>
        <Stack gap="7.5rem">
          <Row>
            <Col xs={12} md={4}>
              <h2 id="our-purpose" className="heading-medium">
                Our purpose
              </h2>
            </Col>
            <Col xs={12} md={6}>
              <p className="paragraph-medium text-secondary">
                Green Design System, a framework designed to bring unity,
                efficiency, and coherent perspective to our digital experiences.
                Over time it will grow and evolve but always reflect our design
                philosophy. User needs first, being forefront and with
                confidence.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <h2 id="our-purpose" className="heading-medium">
                Tonality
              </h2>
            </Col>
            <Col xs={12} md={6}>
              <p className="paragraph-medium text-secondary">
                Our tonality is a voice that speaks to the user, we do not
                scream, but when needed we raise our voice to be heard. The
                balance in volume allows us to point the user in the right
                direction, wave to get noticed or whisper when needed.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={10}>
              <Image
                src={CirclesImage}
                alt="A picture of a cabin in the woods"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  objectPosition: "center",
                  aspectRatio: "16 / 9",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <h2 id="visual-style" className="heading-medium">
                Visual style
              </h2>
            </Col>
            <Col xs={12} md={6}>
              <p className="paragraph-medium text-secondary">
                This design language is a direct descendant and part of the
                global brand identity. It caters to designers and developers
                with design assets and code. Together we can focus on the user
                and the experience we want to build, and swiftly make changes as
                needed.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={10}>
              <Image
                src={MetallicSurfaceImage}
                alt="A picture of a cabin in the woods"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  objectPosition: "center",
                  aspectRatio: "16 / 9",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <h2 id="features" className="heading-medium">
                Features
              </h2>
            </Col>
            <Col xs={12} md={6}>
              <p className="paragraph-medium text-secondary">
                The Green Design System ensures a unified visual experience.
                Empowering designers and developers with versatile, accessible
                and coherent components.
              </p>
            </Col>
          </Row>
        </Stack>
        <div className="toc-sidebar">
          <TOC headings={tocHeading} component={"About"} />
        </div>
      </Grid>
    </div>
  )
}
