const Contact = () => (
  <div>
    <h1>Contact</h1>
    <section id="contact" className="py-5 bg">
      <div className="container">
        <h2 className="text-center">Contact Us</h2>
        <p className="text-center">Get in touch with us for more information.</p>
      </div>
    </section>

    <section className="py-5">
      <div className="container">
        <div className="row g-5">

          <div className="col-md-6">
            <h2>Get in Touch</h2>
            <p>Fill out the form below, and we’ll get back to you as soon as possible.</p>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

         
          <div className="col-md-6">
            <h2>For more Information</h2>
            <p>Reach us through the following channels:</p>
            <ul className="list-unstyled">
              <li><strong>Address:</strong> Nagpur</li>
              <li><strong>Phone:</strong> **********</li>
              <li><strong>Email:</strong> ecovision***@co.in</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
