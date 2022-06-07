import ContactForm from "../../Components/contact/contact-form";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title> Contact Me</title>
        <meta name="description" content="Send your message" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
