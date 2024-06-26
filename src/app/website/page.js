import Serviciu from "../components/serviciiPage/Serviciu";

export const metadata = {
  title: "Codevs.ro | Website",
  description:
    "Elevăm individualitatea ta pe internet. Cu o echipă de 7 experți în software, creăm website-uri personale captivante, reflectând unicitatea ta. Design rafinat, funcționalitate impecabilă și un strop de magie tehnică, pentru o prezență online memorabilă.",
  twitter: {
    card: "summary_large_image",
    title: "Codevs.ro | Website",
    description:
      "Elevăm individualitatea ta pe internet. Cu o echipă de 7 experți în software, creăm website-uri personale captivante, reflectând unicitatea ta. Design rafinat, funcționalitate impecabilă și un strop de magie tehnică, pentru o prezență online memorabilă.",
    siteId: "1467726470533754880",
    creator: "@codevs.ro",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"],
  },
};

function Website() {
  return (
    <div className="flex flex-col gap-24 lg:gap-32 xl:gap-36 2xl:gap-40 mt-16 md:mt-24 xl:mt-36 2xl:mt-40">
      <Serviciu
        src="/website.svg"
        serviciu="Website Firmă / Carte Vizită Online"
        facts={["UX Design Profesional", "SEO"]}
        services={[
          {
            img: (
              <svg
                className="w-5 h-5 text-white inline-block mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M17 16h-1V2a1 1 0 1 0 0-2H2a1 1 0 0 0 0 2v14H1a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM5 4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm0 5V8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm6 7H7v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm2-7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Zm0-4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Z" />
              </svg>
            ),
            p: "Hosting + Domeniu",
          },
          {
            img: (
              <svg
                className="w-5 h-5  text-white inline-block mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z" />
                <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z" />
              </svg>
            ),
            p: "Administare",
          },
        ]}
        description="Elevăm individualitatea ta pe internet. Cu o echipă de 7 experți în software, creăm website-uri personale captivante, reflectând unicitatea ta. Design rafinat, funcționalitate impecabilă și un strop de magie tehnică, pentru o prezență online memorabilă."
        nickname="Website-ul Firmei"
        time="7"
      />
    </div>
  );
}
export default Website;
