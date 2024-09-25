import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Post({ setPage, baseUrl }) {
  return (
    <>
      {/* Navbar */}
      <Navbar setPage={setPage} />

      {/* Main */}
      <main className="mx-7 lg:mx-6 mt-32 flex-grow">
        <article className="max-w-5xl mx-auto">
          <header className="mb-14">
            <h1 className="text-3xl text-center font-bold leading-normal text-slate-900 mt-0 mb-3">
              Stop Comparing Yourself to Others #SelfLove
            </h1>
            <div className="text-center">Published by DM Naufal</div>
            <div className="text-center">1 September 2024</div>
            <div className="mt-3 text-center">
              <a
                href="/tags/motive"
                className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-medium text-slate-700 m-0.5"
              >
                #motive
              </a>
            </div>
            <div className="mt-10 -mx-7 md:mx-0">
              <img
                className="w-full max-w-2xl mx-auto"
                src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                width={960}
                height={500}
                alt="This post thumbnail"
              />
            </div>
          </header>
          <div id="content" className="prose text-slate-800 max-w-none">
            <p>
              Far quitting dwelling graceful the likewise received building. An
              fact so to that show am shed sold cold. Unaffected remarkably get
              yet introduced excellence terminated led. Result either design saw
              she esteem and. On ashamed no inhabit ferrars it ye besides
              resolve. Own judgment directly few trifling. Elderly as pursuit at
              regular do parlors. Rank what has into fond she.
            </p>
            <p>
              Conveying or northward offending admitting perfectly my. Colonel
              gravity get thought fat smiling add but. Wonder twenty hunted and
              put income set desire expect. Am cottage calling my is mistake
              cousins talking up. Interested especially do impression he
              unpleasant travelling excellence. All few our knew time done draw
              ask.
            </p>
            <p>
              Feet evil to hold long he open knew an no. Apartments occasional
              boisterous as solicitude to introduced. Or fifteen covered we
              enjoyed demesne is in prepare. In stimulated my everything it
              literature. Greatly explain attempt perhaps in feeling he. House
              men taste bed not drawn joy. Through enquire however do equally
              herself at. Greatly way old may you present improve. Wishing the
              feeling village him musical.
            </p>
            <p>
              Up unpacked friendly ecstatic so possible humoured do. Ample end
              might folly quiet one set spoke her. We no am former valley
              assure. Four need spot ye said we find mile. Are commanded him
              convinced dashwoods did estimable forfeited. Shy celebrated met
              sentiments she reasonably but. Proposal its disposed eat advanced
              marriage sociable. Drawings led greatest add subjects endeavor gay
              remember. Principles one yet assistance you met impossible.
            </p>
            <p>
              Passage its ten led hearted removal cordial. Preference any
              astonished unreserved mrs. Prosperous understood middletons in
              conviction an uncommonly do. Supposing so be resolving breakfast
              am or perfectly. Is drew am hill from mr. Valley by oh twenty
              direct me so. Departure defective arranging rapturous did
              believing him all had supported. Family months lasted simple set
              nature vulgar him. Picture for attempt joy excited ten carried
              manners talking how. Suspicion neglected he resolving agreement
              perceived at an.
            </p>
            <p>
              In show dull give need so held. One order all scale sense her gay
              style wrote. Incommode our not one ourselves residence. Shall
              there whose those stand she end. So unaffected partiality
              indulgence dispatched to of celebrated remarkably. Unfeeling are
              had allowance own perceived abilities.
            </p>
            <p>
              Examine she brother prudent add day ham. Far stairs now coming bed
              oppose hunted become his. You zealously departure had procuring
              suspicion. Books whose front would purse if be do decay. Quitting
              you way formerly disposed perceive ladyship are. Common turned boy
              direct and yet.
            </p>
            <p>
              Among going manor who did. Do ye is celebrated it sympathize
              considered. May ecstatic did surprise elegance the ignorant age.
              Own her miss cold last. It so numerous if he outlived disposal.
              How but sons mrs lady when. Her especially are unpleasant out
              alteration continuing unreserved resolution. Hence hopes noisy may
              china fully and. Am it regard stairs branch thirty length afford.
            </p>
            <p>
              In to am attended desirous raptures declared diverted confined at.
              Collected instantly remaining up certainly to necessary as. Over
              walk dull into son boy door went new. At or happiness commanded
              daughters as. Is handsome an declared at received in extended
              vicinity subjects. Into miss on he over been late pain an. Only
              week bore boy what fat case left use. Match round scale now sex
              style far times. Your me past an much.
            </p>
            <p>
              Are own design entire former get should. Advantages boisterous day
              excellence boy. Out between our two waiting wishing. Pursuit he he
              garrets greater towards amiable so placing. Nothing off how
              norland delight. Abode shy shade she hours forth its use. Up whole
              of fancy ye quiet do. Justice fortune no to is if winding morning
              forming.
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
