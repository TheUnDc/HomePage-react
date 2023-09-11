import freemanson from "./images/freemason.jpg";
import IMG1 from "./images/IMG1.jpg";
import Table from "./Table";
import Nav from "./Nav"
import ImportantPhraze from "./ImportantPhraze";
import SpecialFunction from "./SpecialFunction";

function App() {
  return (

    <main className="container__bodyStyle" >
      <div className="section__boxModel section__boxModel--centering">
        <img className="content__importantItem section__miniImage" src={freemanson} alt="eye" />
        <h1 className="section__header">
          Strona o mnie. Czyli mikroblog ;)
        </h1>
      </div>

      <Nav />

      <article className="js-blockadeSpam">
        <section className="section__boxModel">

          <h2 className="section__boxModel section__header section__boxModel--centering">
            🖼️To ja, czyli moje zdjęcie🖼️
          </h2>

          <img id="portrait" className="section__image content__importantItem" width="240"
            src={IMG1} alt="to ja" />

          <p className="section__boxModel section__boxModel--centering">Tomek Pietruczuk</p>
        </section>

        <section id="o-mnie">
          <h2 className="section__header section__boxModel">
            👨Króciuto o mnie:👨
          </h2>

          <p className="section__boxModel">
            Witaj przybyszu. Jestem Tomek, mam 23lata. Mieszkam w Białymstoku, czyli
            stolicy kiczu, nacionalizmu, disco-polo i słynnego patostrimera,
            ex-kandydata na prezydenta.
            Lubię to miejsce, bo nie jest ostrym zadupiem i przeludnioną puchą.
            Obecnie pracuję w magazynie, czyli miejscu, które można porównać z placem budowy w wersji soft.
            Jeżeli
            nie umiesz, komunikować się z patologią, radzę uciekać. Niestety ja umiem, ale i tam mam ochotę
            uciekać.
            Sięgając pamięcią jak miałem ok 12 lat próbowałem postawić serwer w GTA:SAMP i uczyłem się C++.
            Niestety
            jedynie kopiowałem bezmyślnie i denerowowałem się, że nic nie działa.
            Dlatego jestem na
            <ImportantPhraze content={" kursie YouCode"}/>.
          </p>
        </section>
        
        <section id="szkola">
          <h3 className="section__header section__boxModel">🏫Szkoła, którą skończyłem.</h3>
          <p className="section__boxModel">
            Skończyłem technikum elektryczne o profilu technik elektronik w , technikum w
            wojewódstwie. Trafiłem tam zupełnie przypadkowo, bo chciałem się dostać na

            <ImportantPhraze content={" profil informatyczny"}/>

            , ale zabrakło mi 3 punkcików.
            Gdybym w drugiej opcji zaznaczył inną szkołę to na
            pewno bym się dostał. Na początku nauki miało to dla mnie jeszcze jakieś znaczenie, bo w końcu
            najlepsza techbuda w wojewódstwie. Dzisiaj jak
            przypominam sobie jak z dumą chodziłem z koszulką z logo tej placówki edukacujnej to mnie skręca
            w środku, bo jak się okazało po latach to była tylko iluzja wimaginowanego prestiżu.

            Bo czym się różnią szkoły
            prestiżowe od nieprestiżowych?
            W tych prestiżowych nauczyciele to kwazi neonaziści, których ineresują ostre
            parcie na wyniki i stosują miękkie i średnie
            techniki zastraszania.

            <ImportantPhraze content={" Jak w hardcore korpo."}/>

            W ten oto piękny sposób
            w pierwsze pół roku uciekło z mojej klasy 7 z 30 osób, a pod
            koniec roku, by w ogóle zdać uciekło dodatkowe 8. Trzeba było uciekać.
            Jedyną, rzeczą jaką jestem wdzięczny tej budzie to za
            poznanie

            <ImportantPhraze content={" Pana Ryszarda"}/>.

            Nauczyciela, który jako jedyny czegoś mnie nauczył.
            Dzięki niemu polubiłem mikrokontrolery. No i próbował mnie uczyć
            Assemblera. Zaznaczam próbował. Kiedyś się go na serio nauczę.
          </p>
        </section>

        <section id="moje-pasje">
          <h3 className="section__header section__boxModel">🔎Moje pasję.</h3>
          <p className="section__boxModel">
            Perkusja i mikrokomputery! Opiszę tę drugą, bo ta praca za dużo zajmnie czasu. Podoba mi się
            idea
            stereowania
            wyszstkiego, wszystkim. Z początku nieznosiłem ich, gdyż zawszę
            stały mi na drodze, gdy próbowałem rozebrać coś elektronicznego, co uniemożliwiało mi ich
            modyfikację. Podmianki oryginalnych sterowników i zastępowanie ich tymi co dają się modyfikować.
            Robię
            to dla
            samej sztuki, bo nie umiem programować w C i nie moge zrobić własnej wersji tak, by stworzyć
            program,
            który doda
            funkcje lub zmoduje obecne.
            Pierwsza moja modyfikacja to hulajngoa xiaomi, której na jeździe próbnej był za duży prąd na
            silnik

            <ImportantPhraze content={" i go spaliłem."}/>

            Problemem był lewy soft, który niefrasobliwie znalazłem na

            <ImportantPhraze content={" XDA-developers"}/>

            Obecnie nie eksperymentuje pojazdami, ale się bawię w sterowanie elektryką domową. Na razie w
            mikroskali, ale ciiiii.
            Docelowo sterowanie za pomocą smartphona różnymi urządzaniami domowmi, roletami, alarmami.
            Opcji jest mnóstwo. Ostatecznie chciałym napisać swoją autorską apkę do tego celu. FrontEnd przyda
            się. :)
          </p>
        </section>

        <section id="muzyka">
          <h3 className="section__header section__boxModel"> 🎵Troszkę o muzyce</h3>
          <p className="section__boxModel" >
            Granie na perkusji to moja pasja. Pozwala zapomnieć o obowiązkach i odciąć
            na dobrą chwilę. Uwielbiamtworzyć rytmiczne podkłady do różnych gatunków muzycznych, od rocka po metal.
            Chodź jeszcze nie
            umiem brać bardzo szybko to moimi inspiracjami są

            <ImportantPhraze content={" Nicholas Baker"}/>,
            <ImportantPhraze content={" Darkside"}/> i
            <ImportantPhraze content={" Hellhammer"}/>.
            <ImportantPhraze content={" Nicholas Baker"}/>

            to brytyjski perkusista, który grał w zespołach takich jak

            <ImportantPhraze content={" Cradle of Filth"}/>,
            <ImportantPhraze content={" Dimmu Borgir"}/> i
            <ImportantPhraze content={" Old Mans Child"}/>.

            Jego styl charakteryzuje się
            szybkimi blast beatami, złożonymi przejściami i techniczną precyzją. Jest jednym z najbardziej
            podziwianych przezemnie i
            kreatywnych bębniarzy w podziemu BM.

            <ImportantPhraze content={" Hellhammer"}/>

            to pseudonim Jana Axel Blomberga, norweskiego perkusisty,
            który grał w zespołach takich jak

            <ImportantPhraze content={" Mayhem"}/>,
            <ImportantPhraze content={" Arcturus"}/>i
            <ImportantPhraze content={" Dimmu Borgir"}/>.

            Jego styl charakteryzuje się
            agresywnym brzmieniem, black metalowymi wpływami i niekonwencjonalnymi rytmami. Jego styl dał
            początek nurtowi BM.

            <ImportantPhraze content={" Darkside"}/>

            to pseudonim Macieja Kowalskiego, polskiego perkusisty, który gra w zespołach takich jak

            <ImportantPhraze content={" Mgła"}/>,
            <ImportantPhraze content={" Kriegsmaschine"}/> i
            <ImportantPhraze content={" Darzamat"}/>.

            Jego styl charakteryzuje się black metalowym brzmieniem,
            dynamicznymi partiami i perfekcyjnym wykonaniem. Darkside gra na perkusji w zespole Mgła od 2007
            roku. Jest uważany za jednego z najlepszych perkusistów na polskiej
            scenie metalowej ze względu na innowacyjne pisanie partii.
          </ p >

          <Table />

        </ section >

      </ article>

      <SpecialFunction />
      
      <footer className="section__header section__boxModel">
        ®Wszelkie prawa niestrzeżone. Przestrzeganie grozi epilepsją, traumą,
        niekontrolowanymi wymiotami i pobytem w psychiatryku.
      </ footer>
    </main>

  );
}
export default App;
