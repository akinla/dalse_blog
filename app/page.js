import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-primary px-5 py-10 md:16 text-center">
        <div className="max-w-3xl px-6 py-4 inline-block bg-white dark:bg-black">
          <header>
            <h1>WELCOME TO DALSE BLOG</h1>
          </header>
        </div>
        <p className="text-white text-sm mt-4 max-w-xl mx-auto dark:text-black">Read post from community or share your own story</p>
        <form>
          <div>
            <input  />
            <button>
              button
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
