import React from 'react'
import Container from '../components/Container'
import Section from '../components/Section'
import FeatureCard from '../components/FeatureCard'
const Templates = () => {
    const templates =[
        {
            title:"Portfolio",
            description:"nothing",
            tags:["react","portfolio","Beginner-friendly"],
        },

    ]
  return (
       <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {templates.map((templates, index) => (
              <FeatureCard 
                key={index}
                title={templates.title}
                description={templates.description}
                tags={templates.tags}
              />
            ))}
          </div>
        </Container>
      </Section>
  )
}

export default Templates