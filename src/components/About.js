import React from 'react'

export default function About(props) {
  return (
    <>
    <section id="about" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 "style={{color:props.about}}>
          <h2>About Us</h2>
          <p>Welcome to our text utility app! We're dedicated to providing you with tools to manipulate text easily. Whether you need to convert text to uppercase or lowercase, count words and characters, or simply clear your input, our app is here to help.</p>
          <p>Explore the features and enjoy a seamless text editing experience with our user-friendly interface.</p>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
