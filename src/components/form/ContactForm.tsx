const ContactForm = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-black z-20">
      <form className="p-8 rounded-lg  text-black z-20">
        <label className="block mb-2 font-semibold">Namn</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Ditt namn.."
        />

        <label className="block mb-2 font-semibold">E-post</label>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4"
          placeholder="Din e-post.."
        />

        <label className="block mb-2 font-semibold">Meddelande</label>
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Skriv ditt meddelande här.."
        ></textarea>

        <button className="mt-8 cursor-pointer w-full bg-blue-600 text-white p-2 rounded">
          Skicka
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
