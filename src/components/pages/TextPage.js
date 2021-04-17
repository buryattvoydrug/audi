import React from 'react'

import '../../scss/pages/TextPage.scss'

function TextPage({content,number}) {
  return (
    <>
      <section className="text-page">
        <h1 className="text-page__title">
          {content[number].title}
        </h1>
        <div className="text-page__text">
          {content[number].text}
        </div>
      </section>
    </>
  )
}

export default TextPage
