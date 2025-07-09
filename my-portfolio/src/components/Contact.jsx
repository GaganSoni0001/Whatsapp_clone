function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" /><br />
        <input type="email" placeholder="Your Email" /><br />
        <textarea rows="4" placeholder="Your Message"></textarea><br />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
export default Contact;
