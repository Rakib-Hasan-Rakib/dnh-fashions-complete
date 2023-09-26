import { useRef } from "react";
// import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_5w04vhh",
    //     "template_2a4uzsc",
    //     form.current,
    //     "B3LwMq8Mp7dvEUPpS"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-2 md:space-y-4">
      <div className="flex gap-4 items-center">
        <div className="space-y-2 md:space-y-4">
          <input
            className="input-field"
            type="text"
            name="name"
            id="name"
            placeholder="Write Your Name Here"
            required
          />
          <input
            className="input-field"
            type="number"
            name="phone"
            id="phone"
            placeholder="Write Your Phone Number Here"
            required
          />
        </div>
        <div className="space-y-2 md:space-y-4">
          <input
            className="input-field"
            type="email"
            name="email"
            id="email"
            placeholder="Write Your Email Here"
            required
          />
          <input
            className="input-field"
            type="text"
            name="subject"
            id="subject"
            placeholder="Write Your Subject Here"
            required
          />
        </div>
      </div>
      <textarea
        className="input-field"
        name="message"
        id="message"
        rows="5"
        placeholder="Write your message here"
        required
      ></textarea>
      <div className="flex justify-center items-center gap-2 md:gap-4">
        <input
          className="text-white font-semibold bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md w-full cursor-pointer"
          type="submit"
          value="Submit"
        />
        <input
          className="text-white font-semibold bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md w-full cursor-pointer"
          type="reset"
          value="Clear"
        />
      </div>
    </form>
  );
};

export default ContactForm;
