// Podosis — Static content (services, products, blog posts, reviews, FAQ)
// All content is original, written in warm, clinical Turkish voice.

export const clinic = {
  name: "Podosis",
  slogan: "Sağlıklı Adımlar",
  address: "Atakent Mah 1512. Cad, Elvankent 104/D, 06796 Etimesgut/Ankara",
  addressShort: "Elvankent · Etimesgut · Ankara",
  phone: "+905435430082",
  phoneDisplay: "0543 543 00 82",
  whatsapp: "+905435430082",
  whatsappLink:
    "https://wa.me/905435430082?text=Merhaba%20Podosis,%20bilgi%20almak%20istiyorum.",
  email: "info@podosis.com",
  hours: "Pzt – Cmt · 09:00 – 19:00",
  instagram: "https://instagram.com/podosis_",
  instagramHandle: "@podosis_",
  mapsEmbed:
    "https://www.google.com/maps?q=Atakent+Mah+1512+cad+Elvankent+104%2FD+Etimesgut+Ankara&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Podosis+Elvankent+Etimesgut+Ankara",
  geo: { lat: 39.956, lng: 32.657 }, // Elvankent approximate
};

export const services = [
  {
    slug: "ayak-bakimi",
    title: "Medikal Ayak Bakımı",
    shortTitle: "Ayak Bakımı",
    tagline: "Nasırdan çatlak topuğa, ayağın ferahlığını geri getiriyoruz.",
    intro:
      "Medikal ayak bakımı; nasır, kuruluk, sertleşmiş deri ve topuk çatlaklarını steril aletlerle, ağrısız ve kişiye özel bir rutin içinde çözen bir uygulamadır. Podosis'te her seans önce muayene ile başlar; ayağınızın ihtiyacını birlikte okur, ardından size özel bir bakım planı uygularız. Amacımız yalnızca bir anlık rahatlama değil — sonraki haftalarda da farkını hissettiğiniz kalıcı bir konfor.",
    suitableFor: [
      "Ayaklarında kuruluk, nasır veya sertleşme olanlar",
      "Uzun süre ayakta kalan profesyoneller ve öğretmenler",
      "Topuk çatlağı yaşayan ve evde geçiremeyen kişiler",
      "Diyabet hastaları için güvenli ve hijyenik bakım arayanlar",
      "Düzenli bakım rutini edinmek isteyen herkes",
    ],
    process: [
      "Kısa bir muayene ve cilt analizi",
      "Ilık ayak banyosu ile yumuşatma ve dezenfeksiyon",
      "Nasır ve sertleşmiş bölgelerin steril aletle incelikle açılması",
      "Tırnak kenarlarının doğru hatla şekillendirilmesi",
      "Nemlendirici ve onarıcı bakım maskesi",
    ],
    localSeo:
      "Elvankent ve Etimesgut çevresinde medikal ayak bakımı arayanlar için Podosis; sterilizasyon standartları, deneyimli bakım ekibi ve butik-klinik konforuyla fark yaratıyor. Atakent Mahallesi 1512. Cadde'deki merkezimize Elvankent, Eryaman, Susuz ve Etimesgut merkezden kolayca ulaşabilirsiniz.",
    image:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/ycxi2ywe_ayak-bakim.webp",
    imageAlt:
      "Podosis'te medikal ayak bakımı uygulaması — steril aletlerle nazik bakım",
    icon: "Sparkles",
    faqs: [
      {
        q: "Medikal ayak bakımı ne kadar sürer?",
        a: "Ortalama seans süresi 45 ile 60 dakika arasındadır. Cildin durumuna göre bu süre kısalıp uzayabilir.",
      },
      {
        q: "Uygulama acı verir mi?",
        a: "Hayır. Aletler steril ve özel olarak tasarlanmıştır; kesme değil yavaşça inceltme prensibiyle çalışırız. Seans boyunca rahatsızlık duymazsınız.",
      },
      {
        q: "Ne sıklıkla yaptırmalıyım?",
        a: "Cilt tipine ve günlük kullanıma göre 4 ile 8 hafta arasında bir aralık öneriyoruz. Diyabet hastalarında bu aralık kişiye göre kısalabilir.",
      },
    ],
  },
  {
    slug: "batik-tirnak",
    title: "Batık Tırnak Tedavisi",
    shortTitle: "Batık Tırnak",
    tagline: "Ameliyatsız, doğru açıyla, kalıcı çözüm.",
    intro:
      "Batık tırnak; tırnağın kenarının cilt içine doğru büyüyerek iltihaplanma ve ağrıya yol açtığı yaygın bir sorundur. Podosis'te ameliyata başvurmadan, tırnağı doğru açıyla yeniden yönlendiren ortonyxia tel veya brace uygulamaları ile tedavi ediyoruz. Çoğu vakada tek seansta belirgin rahatlama sağlanır; sonraki kontrollerle tırnak kalıcı olarak düzgün hatta büyümeye başlar.",
    suitableFor: [
      "Ayak başparmağında ağrı, kızarıklık veya şişlik olanlar",
      "Daha önce tırnak çektirmiş ve tekrar batığı yaşayanlar",
      "Ameliyattan kaçınmak isteyenler",
      "Çocuk ve gençlerde erken dönem batık tırnak vakaları",
      "Spor ve koşu sonrası tekrarlayan batık yaşayanlar",
    ],
    process: [
      "Detaylı muayene ve batığın derecesinin belirlenmesi",
      "Bölgenin dezenfeksiyonu ve iltihap kontrolü",
      "Tırnağın sıkışan kenarının nazikçe serbestleştirilmesi",
      "Ortonyxia tel veya plastik brace'in tırnağa yerleştirilmesi",
      "Bakım önerileri ve 3-4 haftada bir kontrol planı",
    ],
    localSeo:
      "Elvankent'te batık tırnak tedavisi için Podosis'e başvuran danışanlarımız, ameliyatsız yöntemlerle günlük yaşamlarına aynı gün dönebiliyor. Ankara'nın batı hattındaki Eryaman, Etimesgut ve Sincan'dan kolay ulaşım için cadde üzerinde, otopark avantajlı bir konumdayız.",
    image:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/25yklfqz_batik-tirnak.webp",
    imageAlt:
      "Klinik batık tırnak bakımı — tırnak kenarı inceliyor",
    icon: "Scissors",
    faqs: [
      {
        q: "Tedavi kaç seans sürer?",
        a: "Batığın derecesine göre 1 ile 3 seans arasında değişir. Tel uygulamasından sonra 3-4 haftalık kontroller yapılır.",
      },
      {
        q: "Tedavi sırasında spor yapabilir miyim?",
        a: "Uygulamanın hemen ardından yürüyüş ve günlük aktivitelere dönebilirsiniz. Yoğun koşu ve futbol için 2-3 gün beklemenizi öneririz.",
      },
      {
        q: "Çocuğumun batık tırnağı var, uygulama güvenli mi?",
        a: "Evet. Çocuklarda ortonyxia tel çok iyi sonuç verir ve ağrısızdır. 8 yaş ve üzeri için uygun değerlendirilmektedir.",
      },
    ],
  },
  {
    slug: "tirnak-mantari",
    title: "Tırnak Mantarı Tedavisi",
    shortTitle: "Tırnak Mantarı",
    tagline: "Sabırlı bir plan, belirgin bir fark.",
    intro:
      "Tırnak mantarı (onikomikoz); tırnakta renk değişimi, kalınlaşma, kırılganlık ve bazen kötü koku ile kendini gösterir. Podosis'te önce mantarın tipini ve yayılımını değerlendirir, ardından topikal tedavi, klinik tırnak inceltme ve evde uygulayabileceğiniz rutinlerle kombine bir plan hazırlarız. Tedavi bir sürece yayılır; biz de bu yolculukta düzenli kontrollerle yanınızda oluruz.",
    suitableFor: [
      "Tırnakta sararma, kalınlaşma ya da matlaşma fark edenler",
      "Ortak duş, havuz ve spor salonu kullanan sporcular",
      "Daha önce tedavi uygulamış fakat tekrar eden vakalar",
      "Uzun süre ojeli tırnak kullanan kişiler",
      "Diyabetli bireylerde mantar kontrolü isteyenler",
    ],
    process: [
      "Tırnak yüzeyinin analiz edilmesi ve fotoğrafla takip başlatılması",
      "Enfekte tırnağın mekanik olarak inceltilmesi (frezleme)",
      "Topikal antifungal ürünün uygulanması ve yönlendirme",
      "Ev bakımı için kişiye özel rutinin çıkarılması",
      "Aylık kontrollerle tedavinin takibi",
    ],
    localSeo:
      "Elvankent ve çevresinde tırnak mantarı tedavisi için Podosis, kliniğe özgü sterilizasyon protokolü ve takip sistemi ile çalışır. Ankara'nın farklı semtlerinden gelen danışanlarımız için online ön görüşme imkânı da sunuyoruz.",
    image:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/ytd87ec1_ayak-mantari.webp",
    imageAlt: "Tırnak mantarı tedavisi için klinik bakım",
    icon: "Shield",
    faqs: [
      {
        q: "Tedavi ne kadar sürüyor?",
        a: "Tırnağın büyüme hızı ve enfeksiyonun derinliğine göre genellikle 4 ile 9 ay arasında değişir. Sabır ve süreklilik sonucu belirler.",
      },
      {
        q: "Tedavi sırasında oje sürebilir miyim?",
        a: "Tedavi seyri boyunca klasik oje yerine nefes alabilen tedavi ojeleri öneriyoruz. Uygun ürünü seansta birlikte seçeriz.",
      },
      {
        q: "Aileye bulaşır mı?",
        a: "Ortak havlu, terlik ve banyo alanları risk oluşturur. Tedavi başladığında evdeki hijyen rutinini de beraber planlıyoruz.",
      },
    ],
  },
  {
    slug: "topuk-nasir-bakimi",
    title: "Topuk ve Nasır Bakımı",
    shortTitle: "Topuk ve Nasır Bakımı",
    tagline: "Çatlak topuktan inatçı nasıra, ayağın yumuşaklığını geri getiriyoruz.",
    intro:
      "Topuk çatlağı, nasır ve sertleşmiş cilt; uzun süre ayakta kalmak, yanlış ayakkabı seçimi ya da yetersiz nemlenme gibi pek çok günlük alışkanlığın bedendeki yansımasıdır. Podosis'te bu bölgeleri steril aletlerle, ağrısız ve ölçülü bir biçimde inceltir; ardından yoğun nemlendirme ve kişiye özel ev rutiniyle sonucu kalıcı kılarız. Amacımız tek seansta ferahlatmak değil; haftalar içinde ayakta kalan rahatlığı sağlamaktır.",
    suitableFor: [
      "Topuk çatlağı yaşayan ve evde geçiremeyen kişiler",
      "İnatçı nasır ve sertleşmiş ciltten şikayetçi olanlar",
      "Uzun süre ayakta kalan profesyoneller, öğretmen ve sağlıkçılar",
      "Dar ya da topuksuz ayakkabıdan basınç noktası oluşanlar",
      "Düzenli bakım rutini edinmek isteyen herkes",
    ],
    process: [
      "Cildin durumunun ve basınç noktalarının değerlendirilmesi",
      "Ilık ayak banyosu ile cildin yumuşatılması",
      "Nasır ve sertleşmiş bölgenin steril aletle nazikçe inceltilmesi",
      "Çatlak topuğa onarıcı bakım ve yoğun nemlendirme maskesi",
      "Ev rutini ve ayakkabı seçimine dair kişisel öneriler",
    ],
    localSeo:
      "Elvankent'te topuk çatlağı ve nasır bakımı arayan danışanlarımız için Podosis; sterilizasyon standartları, butik klinik konforu ve takip sistemiyle çalışır. Atakent Mahallesi 1512. Cadde'deki merkezimize Eryaman, Etimesgut ve Susuz'dan kolayca ulaşabilirsiniz.",
    image:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/6wlnwzee_tirnak-tedavisi.webp",
    imageAlt: "Topuk ve nasır bakımı — klinik uygulama",
    icon: "Stethoscope",
    faqs: [
      {
        q: "Nasır temizleme acı verir mi?",
        a: "Hayır. Cilt önce ılık banyo ile yumuşatılır, ardından kesme değil ölçülü inceltme prensibiyle çalışırız. Seans boyunca rahatsızlık duymazsınız.",
      },
      {
        q: "Topuk çatlakları kaç seansta düzelir?",
        a: "Yüzeysel çatlaklar genellikle ilk seansta belirgin şekilde rahatlar. Derin çatlaklarda 2-3 seans ve ev rutini birlikte uygulandığında kalıcı sonuç alınır.",
      },
      {
        q: "Evde ne kullanmalıyım?",
        a: "Günlük duş sonrası %10-15 üreli bakım kremi ve akşamları pamuklu çorap ile örtücü nemlenme öneriyoruz. PediZone üreli krem kliniğimizden temin edilebilir.",
      },
    ],
  },
];

export const products = [
  {
    slug: "ayak-temizleme-kopugu",
    name: "PediZone Fresh-Guard Ayak Temizleme Köpüğü",
    volume: "200 ml",
    price: 1799,
    priceCurrency: "TRY",
    category: "Günlük Temizlik",
    shortDesc:
      "Her seans öncesi kliniğimizde de tercih ettiğimiz, cildi yormadan temizleyen yumuşak köpük.",
    intro:
      "Ayak temizliği bakım rutininin en hafife alınan ama belki de en belirleyici adımı. Ne kadar iyi kremlerseniz kremleyin, sabah çorabınızla buluşan cildi gece yatağa hazırlamadıysanız uzun vadeli bir fark görmek zor. Kliniğimizde de seansa başlamadan önce ayağı bu köpükle temizliyoruz; sabunun aksine cildi gergin bırakmıyor, bakım ürünleri için temiz bir zemin hazırlıyor.",
    description:
      "PediZone Fresh-Guard, gün boyu çorap ve ayakkabı içinde kalan ayaklarda biriken ter, nem ve mikroorganizmalara karşı nazik bir temizlik sağlamak üzere geliştirilmiş bir köpüktür. Klorheksidin'in antibakteriyel desteği, çay ağacı ve okaliptüsün ferahlığı, panthenol ve aloe veranın yatıştırıcı etkisiyle birleşince; günlük duşunuza eklediğinizde 3-4 hafta içinde 'ayağım rahatladı' dedirtecek küçük ama kalıcı bir farka dönüşüyor.",
    benefits: [
      "Antibakteriyel klorheksidin ile koku yapan mikroorganizmalara karşı destek",
      "Aloe vera ve panthenol sayesinde temizlik sonrası gergin değil yumuşak hissettirir",
      "Çay ağacı, kekik, biberiye ve okaliptüsten oluşan ferah bitki kompleksi",
      "pH dengeli, günlük kullanıma uygun — cildi yormaz",
      "Bakım ürünleri öncesi ideal zemin oluşturur",
    ],
    ingredients: [
      {
        name: "Klorheksidin",
        role: "Antibakteriyel destek",
        text: "Cilt yüzeyindeki bakteri yükünü azaltıp, koku oluşumuna zemin hazırlayan mikroorganizmaların uzaklaştırılmasına yardımcı olur.",
      },
      {
        name: "Quad Active Bitki Kompleksi",
        role: "Çay ağacı · Kekik · Biberiye · Okaliptüs",
        text: "Dört bitki özütünün bir arada çalıştığı bu kompleks; cildi temizlerken aynı zamanda ferahlatır ve antimikrobiyal denge desteği sunar.",
      },
      {
        name: "Aloe Vera & Panthenol",
        role: "Yatıştırıcı bakım",
        text: "Günlük yıkamanın yol açtığı kuruluk hissini engeller, hassas ayak cildini yatıştırır ve cilt bariyerinin korunmasına yardımcı olur.",
      },
      {
        name: "Mentol",
        role: "Ferahlatıcı dokunuş",
        text: "Uygulama sonrası serinlik bırakır; özellikle kapalı ayakkabıdan eve geldiğinizde belirgin bir ferahlık hissi sağlar.",
      },
    ],
    useCases: [
      "Günlük ayak temizliği rutini",
      "Aşırı terlemeye yatkın ayaklar",
      "Koku problemine eğilimli ciltler",
      "Klinik bakım öncesi ön hazırlık",
      "Serum ve krem uygulamaları öncesi temizlik adımı",
    ],
    usage: {
      home:
        "Islak ayağa ceviz büyüklüğünde köpük uygulayın, yaklaşık 1 dakika nazikçe masaj yaparak temizleyin, ardından bol su ile durulayın. Günde 1-2 kez kullanılabilir.",
      pro:
        "Klinik bakım seanslarımızda ayak banyosuna ek olarak ya da banyo yerine ön temizlik adımı olarak kullanıyoruz.",
    },
    expertNote:
      "İyi bir bakımın temeli, doğru ürünlerden önce doğru bir temizlikten geçer. Bu köpüğü tercih etmemizin nedeni de tam bu — cildi yormadan, kokuya yol açan mikroorganizmaları ortamdan uzaklaştırması.",
    image:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/8nwi30nv_pedizone-mantar-kopugu.webp",
    imageAlt: "PediZone Fresh-Guard Ayak Temizleme Köpüğü 200ml",
  },
  {
    slug: "pedizone-intense-repair-ureli-krem",
    name: "PediZone %15 Üreli Çatlak Topuk ve Ayak Kremi",
    volume: "150 ml",
    price: 1699,
    priceCurrency: "TRY",
    category: "Çatlak & Kuruluk",
    shortDesc:
      "Topuk çatlakları ve sertleşmiş cilt için klinik bakımdan sonra eve gönderdiğimiz krem.",
    intro:
      "Bir seansta topuğun çatlaklarını inceltmek mümkün; ama çıkan rahatlığın 4-6 hafta sürmesi, danışanın evde uyguladığı rutine bağlı. Bu yüzden danışanlarımıza klinikten ayrılmadan önce 'şimdi şu kremi gece yatmadan ince bir tabaka sürün, üzerine pamuklu çorap çekin' diyoruz. PediZone %15 üreli krem, üreyi etkili göreceğiniz oranda içerirken yağlı bir his bırakmadığı için bu rutini sürdürmeyi de kolaylaştırıyor.",
    description:
      "Üre, dermatolojide sertleşmiş cilt tabakasının yumuşatılması için kullanılan en güvenilir bileşenlerden biri. %15 oran, evde günlük kullanım için fazla agresif olmayan ama gözle görülür sonuç veren ideal noktada duruyor. PediZone bu yapıya shea yağı, avokado yağı, gliserin ve çay ağacı yağı ekleyerek sadece yumuşatma değil; nem tutma, esneklik kazandırma ve mikrobiyal dengenin korunmasını da hedefliyor. Klinikte yaptığımız mekanik inceltmenin etkisini haftalara yayan bir bakım partneri.",
    benefits: [
      "%15 üre — sertleşmiş keratin tabakasını kontrollü şekilde yumuşatır",
      "Shea ve avokado yağı ile mikro çatlakların toparlanmasına destek",
      "Hızlı emilir, çorap ya da yatak çarşafına bulaşmaz",
      "Çay ağacı yağı sayesinde mantar eğilimli ciltlere bariyer desteği",
      "Dermatolojik olarak test edilmiştir",
    ],
    ingredients: [
      {
        name: "%15 Üre",
        role: "Keratolitik & Nemlendirici",
        text: "Sertleşmiş keratin tabakasının yumuşamasını destekler, ölü deriyi kontrollü uzaklaştırır ve cildin nem tutma kapasitesini artırır. Tekrarlayan çatlak riskini azaltır.",
      },
      {
        name: "Shea Yağı & Avokado Yağı",
        role: "Yoğun onarıcı bakım",
        text: "Cildi yoğun şekilde nemlendirir, esneklik kazandırır ve özellikle topukta görülen mikro çatlakların toparlanmasına yardımcı olur.",
      },
      {
        name: "Çay Ağacı Yağı",
        role: "Bariyer destek",
        text: "Mantara elverişli nemli ortamın azaltılmasına ve koku yapan mikroorganizmaların kontrolüne katkı sağlar.",
      },
      {
        name: "Gliserin",
        role: "Uzun süreli nem",
        text: "Cildin gün boyu nemli kalmasını destekler ve aktif bileşenlerin daha rahat yayılmasını sağlar.",
      },
    ],
    useCases: [
      "Topuk çatlağı bakımı",
      "Hiperkeratoz ve nasır uygulamaları sonrası destek",
      "Klinik ayak bakımı seansları sonrası ev rutini",
      "Tırnak teli (ortonyxia) uygulamaları sonrası cilt bütünlüğü",
      "Diyabetli danışanlarda bariyer ve nem dengesinin korunması",
    ],
    usage: {
      home:
        "Günde 1-2 kez, temiz ve kuru ayaklara ince tabaka halinde sürün. Çatlak ve sertleşmiş bölgelere biraz daha yoğun uygulayabilirsiniz. Akşam pamuklu çorap ile örtücü bakım kalıcı sonuç açısından ideal.",
      pro:
        "Klinik bakım sonrası temizlenmiş cilde uyguluyor, masajla emdiriyoruz. Danışanlarımız aynı kremi evde gece rutini olarak kullanmaya devam ediyor.",
    },
    expertNote:
      "Topuk çatlağı tek bir seansta çözülecek bir mesele değil; bir alışkanlığa dönüşmesi gereken bir bakım. Bu kremi tercih etme sebebimiz de tam burada: %15 üre etkin bir oran ama günlük rutine girecek kadar nazik.",
    image:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/yzlfdvju_pedizone-mantar-kremi.webp",
    imageAlt: "PediZone %15 Urea Intense Repair Cream 150ml",
  },
  {
    slug: "tirnak-ayak-serumu",
    name: "PediZone Foot and Nail Care Serum",
    volume: "50 ml",
    price: 1449,
    priceCurrency: "TRY",
    category: "Tırnak Bakımı",
    shortDesc:
      "Tırnak altına ve kenarlarına nüfuz edebilen ince yapılı, mantar eğilimli tırnaklar için günlük serum.",
    intro:
      "Tırnak mantarı tedavisi sabırlı bir süreçtir. Etkili olmasını istediğiniz aktif bileşenin tırnak yatağına ulaşması, çoğu zaman kremlerin yapamadığı bir şey — moleküler olarak fazla iri kalıyorlar. Serum formu burada devreye giriyor: ince yapısı sayesinde tırnak plağının altına, kenarlarına, deri kıvrımlarına nüfuz ediyor. Kliniğimizde mantar eğilimli vakaların ev bakımında bu serumu öneriyoruz çünkü PediZone gamı içinde de tırnak bakımının ana ürünü bu — kremler tamamlayıcı kalıyor.",
    description:
      "Çay ağacı yağının antifungal desteği, salisilik asidin kalınlaşmış dokuyu kontrollü şekilde inceltmesi, üre ve E vitamininin nem-bariyer dengesini desteklemesiyle PediZone Foot and Nail Care Serum; tırnak matlaşması, kalınlaşma, koku ve onikoliz (tırnak yatağından ayrılma) eğilimi olan bölgelerde günlük kullanım için tasarlanmıştır. Düzenli kullanımda 2-4 hafta içinde fark gözle görülür hâle gelir; sağlıklı yeni tırnağın uzaması ise birkaç ayı kapsayan bir süreç.",
    benefits: [
      "İnce moleküler yapı — tırnak altına ve kenarlara nüfuz eder",
      "Çay ağacı yağı ile antifungal destek",
      "Salisilik asit ile kalınlaşmış dokunun kontrollü inceltilmesi",
      "Üre ve E vitamini ile bariyer ve nem dengesi",
      "Yağlı iz bırakmaz — günde 2 kez uzun süreli kullanıma uygun",
    ],
    ingredients: [
      {
        name: "Çay Ağacı Yağı",
        role: "Antifungal destek",
        text: "Mantar gelişimine elverişli ortamın baskılanmasına yardımcı olur ve koku yapan mikroorganizmalara karşı destek sunar.",
      },
      {
        name: "Salisilik Asit",
        role: "Kontrollü keratoliz",
        text: "Tırnak yüzeyindeki ölü dokunun ve kalınlaşmanın kontrollü uzaklaştırılmasına yardımcı olur; aktif bileşenlerin daha derine geçmesini kolaylaştırır.",
      },
      {
        name: "Üre",
        role: "Nem dengesi",
        text: "Sertleşmiş dokunun yumuşamasına katkı sağlar, cildin nem tutma kapasitesini destekler.",
      },
      {
        name: "E Vitamini",
        role: "Antioksidan koruma",
        text: "Cilt bariyerinin desteklenmesine ve yıpranmaya karşı korunmasına yardımcı olur.",
      },
    ],
    useCases: [
      "Tırnak mantarı eğilimli tırnaklar",
      "Tırnak matlaşması, kalınlaşma ve sararma",
      "Sürekli ayak kokusu yaşayan ciltler",
      "Klinik tırnak bakımı sonrası ev rutini",
      "Onikoliz alanlarında bakım desteği",
      "Sporcular ve havuz/spor salonu kullanan günlük yaşam",
    ],
    usage: {
      home:
        "Temiz ve tamamen kuru ayaklara, sabah ve akşam birer damla — tırnağın üstüne, kenarlarına ve mümkünse tırnak altına. Hafif masajla emdirin. 2-4 haftalık düzenli kullanım sonrası fark belirginleşir.",
      pro:
        "Klinik tırnak bakımı (frezleme/inceltme) sonrası serumu uyguluyor, ev bakım planında günde 2 kez kullanılmasını öneriyoruz.",
    },
    expertNote:
      "Tırnak mantarı vakalarında 'tek seansta bitsin' beklentisi gerçekçi değildir. Burada ihtiyacımız olan şey; etkili bir aktif bileşenin doğru bölgeye 4-9 ay boyunca düzenli olarak ulaşması. Serum formu bu yüzden esas, krem değil.",
    image:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/d4catras_mantar-serumu-pedizone.webp",
    imageAlt: "PediZone Foot and Nail Care Serum 50ml",
  },
];

export const whyPodosis = [
  {
    icon: "Shield",
    title: "Klinik Düzeyde Hijyen",
    text: "Her seans sonrası tüm aletler steril ortamda sterilize edilir; tek kullanımlıklar ambalajında açılır.",
  },
  {
    icon: "Sparkles",
    title: "Klinik Deneyim",
    text: "Sadece ayağa odaklanan bir merkez; her vaka kendi dinamiğinde değerlendirilir.",
  },
  {
    icon: "Heart",
    title: "Kişisel Yaklaşım",
    text: "Hızlı bir seans değil, sizi tanıyan bir bakım yolculuğu. Takip ve kontrol dahil.",
  },
  {
    icon: "MapPin",
    title: "Elvankent'te Kolay Ulaşım",
    text: "Atakent Mah 1512. Cadde üzerinde, otopark avantajlı butik bir konumdayız.",
  },
];

export const gallery = [
  {
    id: 1,
    title: "Topuk çatlağı — öncesi / sonrası",
    before:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/6k2ffwqb_topuk-oncesi.webp",
    after:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/fd9j0kxz_topuk-sonrasi.webp",
  },
  {
    id: 2,
    title: "Tırnak mantarı — öncesi / sonrası",
    before:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/e3er2k4l_tirnak-mantari-oncesi.webp",
    after:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/lye6bo79_tirnak-mantari-sonrasi.webp",
  },
  {
    id: 3,
    title: "Batık tırnak — öncesi / sonrası",
    before:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/3hzw4oo6_batik-tirnak-oncesi.webp",
    after:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/yr2a4eth_batik-tirnak-sonrasi.webp",
  },
];

export const reviews = [
  {
    name: "Elif Y.",
    role: "Elvankent",
    stars: 5,
    text: "Yıllardır tekrarlayan batık tırnak sorunum için üçüncü seansta ciddi fark hissettim. Ekip hem çok özenli hem açıklayıcı. Klinik gerçekten tertemiz.",
  },
  {
    name: "Murat K.",
    role: "Eryaman",
    stars: 5,
    text: "Diyabet hastasıyım, ayak bakımı için güvenebileceğim bir yer arıyordum. Podosis'te her seansta kendimi çok güvende hissediyorum. Tavsiye ederim.",
  },
  {
    name: "Ayşen D.",
    role: "Etimesgut",
    stars: 5,
    text: "Topuk çatlakları iki seansta belirgin şekilde iyileşti. Evde uygulayacaklarımı adım adım anlattılar. Butik, sıcak bir yer.",
  },
  {
    name: "Burcu Ö.",
    role: "Ankara",
    stars: 5,
    text: "Tırnak mantarı için 6 aylık bir takipteyiz. Sonuçları fotoğrafla göstermeleri motive edici. Klinik dışına taşan bir samimiyet var.",
  },
];

export const faqs = [
  {
    q: "Podosis tam olarak ne yapıyor?",
    a: "Podosis; medikal ayak bakımı, batık tırnak, tırnak mantarı ve genel tırnak sorunlarına klinik yaklaşımla çözüm sunan butik bir merkezdir. Kozmetik değil sağlık odaklı çalışırız.",
  },
  {
    q: "Randevusuz gelebilir miyim?",
    a: "Seans süreleri ve hijyen hazırlığı için randevulu çalışıyoruz. WhatsApp'tan ya da telefondan uygun saati kolayca planlayabiliriz.",
  },
  {
    q: "Ödeme seçenekleri nelerdir?",
    a: "Nakit, kredi kartı ve banka transferi ile ödeme alabiliyoruz. Fatura tüm seanslarda standart olarak düzenlenir.",
  },
  {
    q: "Diyabet hastası olarak güvenli mi?",
    a: "Evet. Diyabetli danışanlarımız için özel bir protokolümüz var; kesme değil inceltme prensibiyle çalışır ve her adımda cildin durumunu kontrol ederiz.",
  },
  {
    q: "Hangi ürünleri kullanıyorsunuz?",
    a: "Kliniğimizde PediZone markasının profesyonel bakım ürünlerini ve dermokozmetik uygulamaları tercih ediyoruz. Evde kullanım için de ürün önerisi sunarız.",
  },
];

// --- Blog posts (original long-form Turkish content) ---

export const blogPosts = [
  {
    slug: "elvankent-ayak-bakim-merkezi-nasil-secilir",
    title:
      "Elvankent'te Ayak Bakım Merkezi Nasıl Seçilir? Klinik Hijyeni Neden Bu Kadar Önemli?",
    excerpt:
      "Bir ayak bakım merkezi seçerken sadece fiyata ya da yakınlığa bakmak yetmiyor. Doğru merkezi ayırt eden beş somut kriter ve hijyenin neden tartışılmaz olduğu üzerine.",
    date: "2024-11-12",
    author: "Podosis Klinik",
    cover:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/dkhwxa40_podosis.webp",
    coverAlt: "Modern ve temiz bir ayak bakım klinik ortamı",
    readMinutes: 7,
    metaDescription:
      "Elvankent'te doğru ayak bakım merkezini seçerken nelere dikkat etmelisiniz? Hijyen, sterilizasyon ve tedavi yaklaşımı — Podosis'ten klinik bir rehber.",
    content: [
      {
        type: "p",
        text: "Ayaklarınız gün boyu bedeninizin tüm yükünü taşır. Bir noktada bir nasır, bir batık ya da topuktaki inatçı bir çatlak karşınıza çıkar ve \"bir ayak bakım merkezine gitmeliyim\" düşüncesi belirir. Ancak Elvankent gibi seçeneğin fazla olduğu bir bölgede doğru merkezi bulmak ilk başta göründüğü kadar kolay değildir. Bu yazıda, kliniğinizi seçerken somut olarak neye bakmanız gerektiğini adım adım anlatıyoruz.",
      },
      { type: "h2", text: "1. Ayak bakım merkezi ile güzellik salonu aynı şey değildir" },
      {
        type: "p",
        text: "Ayak sağlığı; tırnağın açısını, cildin sertleşme dinamiğini, yürüyüş biyomekaniğini ve enfeksiyon risklerini birlikte okuyan bir alandır. Güzellik uygulaması ile klinik ayak bakımı birbirinin yerine geçmez. Gittiğiniz yerin aldığı eğitimleri, kullanılan ekipmanı ve kliniğin sadece ayak odaklı çalışıp çalışmadığını sormaktan çekinmeyin.",
      },
      { type: "h2", text: "2. Steril aletin sesi olur — hissedilir" },
      {
        type: "p",
        text: "Hijyenik bir kliniğe girdiğinizde göreceğiniz ilk şey: steril bir ortam, paketli aletler ve aletin paketten gözünüzün önünde açılması. Bu ufak detay, tüm tedavi sürecinizin güvenliğini belirler. Bir merkez tek kullanımlık freze başlığı kullanmıyorsa ya da aletleri paketsiz servis ediyorsa, nedenini mutlaka sorun.",
      },
      { type: "h2", text: "3. Size bir plan sunulmuyorsa, bir bakım almıyorsunuz" },
      {
        type: "p",
        text: "İyi bir ayak bakım merkezi ilk seansta size sadece o anlık çözümü değil, sonraki haftaları da görebileceğiniz bir plan sunar. \"Bir sonraki kontrolümüz ne zaman?\", \"Evde ne yapacağım?\", \"Hangi bölgeye özellikle bakacağım?\" sorularının cevabı net olmalı.",
      },
      { type: "h2", text: "4. Kliniğin ışığı, kokusu, sessizliği" },
      {
        type: "p",
        text: "Klinik deneyimi sadece aletlerle ilgili değildir. İyi havalandırılmış, ölçülü aydınlatılmış, sakin bir ortamda yaptırdığınız bakımın sonucu her zaman daha iyidir. Ekip sizi dinliyor mu, koltuğunuz rahat mı, randevular üst üste mi alınmış — hepsi bir kliniğin size nasıl baktığının küçük işaretleri.",
      },
      { type: "h2", text: "5. Elvankent ve Etimesgut bağlamı" },
      {
        type: "p",
        text: "Elvankent'te ev ile iş arasında mesafesi yakın, otopark olanağı olan bir merkez, düzenli bakım alışkanlığını sürdürmenizi kolaylaştırır. Podosis olarak Atakent Mahallesi 1512. Cadde'deki konumumuzla çevre semtlere kolay ulaşılabilir olduğumuz için bu rutini birlikte sürdürmek daha kolay.",
      },
      { type: "h2", text: "Son söz" },
      {
        type: "p",
        text: "Doğru merkez, yıllardır süregelen küçük bir rahatsızlığı hafta hafta değiştirir. Seçerken acele etmeyin; kliniği görmek, bir-iki soru sormak ve içgüdünüze güvenmek çoğu zaman yeterlidir. Siz de Elvankent ve çevresinde bir başlangıç noktası arıyorsanız, Podosis olarak kapımız her zaman açık.",
      },
    ],
    faqs: [
      {
        q: "Ayak bakım merkezi ile medikal estetisyen aynı mı?",
        a: "Hayır. Klinik ayak bakımı; ayak ve tırnak sağlığına odaklanan bir uygulamadır. Estetik merkezlerden farklı olarak hijyen ve takip sistemi kurar.",
      },
      {
        q: "İlk seansa nasıl hazırlanmalıyım?",
        a: "Ayaklarınızı temiz olarak gelmeniz yeterlidir. Son iki gün içinde oje, nasır bandı veya yağ sürmemiş olmanız uygulamayı kolaylaştırır.",
      },
      {
        q: "Seans ne kadar sürer?",
        a: "İlk konsültasyon ve bakım yaklaşık 45-60 dakika sürer. Vakaya göre bu süre uzayabilir.",
      },
    ],
  },
  {
    slug: "batik-tirnakta-evde-yapilan-yanlislar",
    title: "Batık Tırnakta Evde Yapılan 5 Yanlış",
    excerpt:
      "Evde batık tırnağa müdahale etmek çoğu zaman durumu kötüleştirir. En sık karşılaştığımız beş hatayı ve yapılması gerekeni özetledik.",
    date: "2024-11-20",
    author: "Podosis Klinik",
    cover:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/ycxi2ywe_ayak-bakim.webp",
    coverAlt: "Batık tırnak için profesyonel klinik bakım — eldiven ile inceltme",
    readMinutes: 6,
    metaDescription:
      "Batık tırnak için evde yapılan 5 yaygın yanlış ve doğrusu. Podosis ekibinden kısa ve uygulanabilir bir rehber.",
    content: [
      {
        type: "p",
        text: "Kliniğimize gelen batık tırnak vakalarının büyük kısmında, danışanın hikâyesi birbirine çok benzer: \"Evde kestim, bir süre iyileşti ama şimdi daha kötü.\" Bu tablo rastlantı değil; batık tırnağın doğası gereği yanlış müdahaleye çok duyarlı olmasından kaynaklanıyor. Bu yazıda en sık karşılaştığımız beş hatayı ve onların yerine ne yapılması gerektiğini anlatıyoruz.",
      },
      { type: "h2", text: "Yanlış 1: Batık bölgeyi makasla derinden kesmek" },
      {
        type: "p",
        text: "İnsan güdüsel olarak \"batan parçayı alırsam geçer\" diye düşünür. Oysa o parçayı derinden kesmek, tırnağın kenarının cilt altında sivri bir şekilde büyümesine yol açar. Bir sonraki büyüme döngüsünde daha keskin bir kenarla karşılaşırsınız.",
      },
      { type: "h2", text: "Yanlış 2: Tırnağı yuvarlayarak kesmek" },
      {
        type: "p",
        text: "Ayak tırnakları hafif düz bir hatla kesilmelidir; yuvarlak değil. Yuvarlatılan kenar ilerledikçe yine cilt içine gömülür. Doğru kesim, kenarların cildi değil hava ile buluşmasıdır.",
      },
      { type: "h2", text: "Yanlış 3: Sıcak su ile uzun süreli yumuşatma ve kendi başına müdahale" },
      {
        type: "p",
        text: "Uzun süre sıcak su ile bekletmek enfekte bir bölgede mikrop dağılımını artırabilir. Iltihabın olduğu bölgeye ev banyosundan sonra makas sokmak kesinlikle önerilmez.",
      },
      { type: "h2", text: "Yanlış 4: Arasına pamuk sıkıştırmak" },
      {
        type: "p",
        text: "İnternette sıkça önerilen bu yöntem, kısa vadede ağrıyı azaltır gibi görünür; ancak pamuk nemlenir, bakteri için ideal bir ortam oluşturur. Tekrarlayan batıkların en büyük nedenlerinden biridir.",
      },
      { type: "h2", text: "Yanlış 5: \"Kendi kendine geçer\" diye beklemek" },
      {
        type: "p",
        text: "Erken dönemde müdahale çok daha kolaydır. İltihap oluşmadan başvurulan vakalarda ortonyxia tel uygulaması tek seansta rahatlama sağlayabilir. Bekledikçe hem ağrı artar hem de tedavi süresi uzar.",
      },
      { type: "h2", text: "Doğrusu nedir?" },
      {
        type: "p",
        text: "Batık tırnakta asıl hedef, tırnağı cerrahi olarak çekmek değil; onu doğru açıyla yönlendirmek. Ortonyxia tel veya plastik brace uygulamaları, birkaç haftalık bir süreç içinde tırnağı düzgün hatta büyümeye alıştırır. Bu, uzun vadede kalıcı sonuç verir. Batık tırnak hakkında detaylı sayfamıza göz atabilir ya da WhatsApp üzerinden fotoğrafınızla ön değerlendirme isteyebilirsiniz.",
      },
    ],
    faqs: [
      {
        q: "Evde hiç bir şey yapmamalı mıyım?",
        a: "Bölgeyi günde iki kez yumuşak sabunla yıkayıp kurulayabilir, pamuk yerine yalnızca temiz bir gazlı bez kullanabilirsiniz. Müdahale bir uzmana bırakılmalıdır.",
      },
      {
        q: "Kliniğe geldiğimde ne olacak?",
        a: "Önce batığın derecesine bakarız. Erken evre ise tel uygulaması tek seansta tamamlanır. İltihap varsa önce onu kontrol ederiz.",
      },
      {
        q: "Tedavi ne kadar sürer?",
        a: "Genellikle 1-3 seans yeterlidir. Telin etkisi 3-4 haftada kendini göstermeye başlar.",
      },
    ],
  },
  {
    slug: "tirnak-mantari-belirtileri-erken-teshis",
    title: "Tırnak Mantarı Belirtileri ve Erken Teşhisin Önemi",
    excerpt:
      "Sararma mı, kalınlaşma mı, yoksa sadece bir darbe mi? Tırnak mantarının erken belirtilerini ayırt etmek, tedaviyi çok daha kısaltıyor.",
    date: "2024-11-27",
    author: "Podosis Klinik",
    cover:
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxmb290JTIwc3BhJTIwcGVkaWN1cmUlMjBzYWxvbnxlbnwwfHx8fDE3NzcwNTgzNzF8MA&ixlib=rb-4.1.0&q=85&w=1400",
    coverAlt: "Tırnak mantarı belirtileri ve erken teşhisin önemi",
    readMinutes: 6,
    metaDescription:
      "Tırnak mantarının erken belirtileri nelerdir? Sararma, kalınlaşma ve kırılgan tırnaklarda neye dikkat etmelisiniz — Podosis'ten klinik bir bakış.",
    content: [
      {
        type: "p",
        text: "Tırnak mantarı (tıpta onikomikoz) Türkiye'de çok yaygın ama sessiz bir sorundur. İnsan onunla uzun süre yaşar; çünkü başlangıçta çok hafif bir renk değişimi dışında belirgin bir rahatsızlık vermez. Sorun şurada: erken dönemde başlayan tedavi, ileri dönemdekinden katbekat daha hızlı sonuç verir. Bu yazıda erken dönem belirtilerini ve ne zaman bir uzmana başvurmanız gerektiğini konuşacağız.",
      },
      { type: "h2", text: "En sık görülen erken belirtiler" },
      {
        type: "p",
        text: "Tırnağın ucundan ya da kenarından başlayan sararma ya da beyazlama en tipik bulgudur. Bunu tırnak yüzeyinin matlaşması, hafif kalınlaşma ve ileri dönemde kırılganlık takip eder. Bazı vakalarda tırnağın altından hafif bir toz kıvamı bile gelebilir.",
      },
      { type: "h2", text: "Mantar mı, darbe mi?" },
      {
        type: "p",
        text: "Darbe sonrası oluşan siyah-mor renk, tırnak yatağında biriken kandan kaynaklanır ve zamanla tırnağın dışına doğru ilerler. Mantarda ise renk tırnağın altında yayılır ve sararma baskındır. Ayırt etmek için fotoğrafla 2-3 haftalık bir takip faydalıdır; aynı noktada değilse büyük olasılıkla darbedir.",
      },
      { type: "h2", text: "Risk faktörleri" },
      {
        type: "p",
        text: "Ortak havuz, sauna, spor salonu kullananlar; uzun süre dar ayakkabı giyenler; terlemesi fazla olan kişiler; uzun süre oje kullanan bireyler ve diyabetli danışanlar mantar için riskli gruptadır. Bu gruplardaysanız tırnaklarınızı ayda bir gözlemlemeniz erken teşhiste büyük fark yaratır.",
      },
      { type: "h2", text: "Erken teşhisin pratik anlamı" },
      {
        type: "p",
        text: "Erken evrede sadece topikal tedavi ve klinik tırnak inceltme ile 3-5 ayda net sonuç alınabilirken; ileri vakalarda tedavi süresi 9-12 aya uzayabilir. Dolayısıyla \"biraz sararma var\" dediğiniz an, aslında en değerli andır. Detaylı tırnak mantarı tedavisi sayfamızı inceleyebilirsiniz.",
      },
      { type: "h2", text: "Bir notla bitirelim" },
      {
        type: "p",
        text: "Tırnak mantarı utanılacak bir durum değil; ortak banyolar, spor salonları ve hatta aile içi ortak kullanılan havlular gibi çok sıradan kaynakları vardır. Erken fark etmek, doğru tedavi yolunu açar. Emin değilseniz WhatsApp'tan bir fotoğraf göndermeniz bile çoğu zaman ön yönlendirme için yeterlidir.",
      },
    ],
    faqs: [
      {
        q: "Tırnak mantarına oje sürmek zararlı mı?",
        a: "Klasik oje mantar için uygun bir ortam yaratır. Tedavi sürecinde nefes alabilen tedavi ojeleri öneriyoruz.",
      },
      {
        q: "Tedavi sonunda tırnak tamamen normale döner mi?",
        a: "Evet, çoğu vakada tırnak zamanla sağlıklı şekilde yenilenir. Tırnağın tam boy çıkması 9-12 ay sürebilir.",
      },
      {
        q: "Ailemden kimseye bulaşır mı?",
        a: "Ortak havlu, terlik ve banyo zemini risk oluşturur. Tedavi süresince hijyen rutini de önemli bir parça.",
      },
    ],
  },
  {
    slug: "ayak-bakimi-sonrasi-dikkat-edilecekler",
    title: "Ayak Bakımı Sonrası Dikkat Edilmesi Gerekenler",
    excerpt:
      "İyi bir seansın etkisini uzatmak için ilk 48 saat kritik. Sonrasında kliniğin değil sizin yapacağınız küçük şeyler fark yaratıyor.",
    date: "2024-12-04",
    author: "Podosis Klinik",
    cover:
      "https://images.pexels.com/photos/7108396/pexels-photo-7108396.jpeg?auto=compress&cs=tinysrgb&w=1400",
    coverAlt: "Ayak bakımı sonrası doğru bakım rutini",
    readMinutes: 5,
    metaDescription:
      "Ayak bakımından sonra ilk 48 saatte ve sonraki haftalarda nelere dikkat etmelisiniz? Podosis'ten pratik bir bakım rehberi.",
    content: [
      {
        type: "p",
        text: "Bir medikal ayak bakımı seansının etkisi sadece o gün bittiği anla sınırlı değildir. İlk 48 saat ve sonraki haftalardaki küçük alışkanlıklar, bakımın ne kadar kalıcı olacağını belirler. Bu yazıda kliniğimizde danışanlarımıza en sık söylediğimiz pratik önerileri bir araya topladık.",
      },
      { type: "h2", text: "İlk 24-48 saat" },
      {
        type: "p",
        text: "Seanstan hemen sonra çok sıcak suya girmemeye özen gösterin. Duş ılık olmalı ve havlu ile sert sürtünmeler yerine nazik basılarla kurulama tercih edilmeli. Tırnak kenarlarına krem sürerken çok miktarda kullanmak yerine ince bir tabaka yeterlidir.",
      },
      { type: "h2", text: "Doğru çorap, doğru ayakkabı" },
      {
        type: "p",
        text: "Bakım sonrası 24 saat pamuklu çorap tercih edin. Sentetik ve çok sıkı çoraplar terlemeyi arttırır. Ayakkabı seçiminde ise parmak bölgesinin rahatça hareket edebildiği modelleri 2-3 gün öne alın.",
      },
      { type: "h2", text: "Günlük nemlendirme alışkanlığı" },
      {
        type: "p",
        text: "Topuk bölgesine akşam kremden sonra hafifçe örtülmüş pamuklu bir çorap, cildin kremi derinlemesine almasını kolaylaştırır. Özellikle kış aylarında bu rutin, topuk çatlaklarını tekrarlamaktan çok daha ucuza mal olur.",
      },
      { type: "h2", text: "Kesim ve törpü" },
      {
        type: "p",
        text: "Seans sonrası 2 hafta tırnaklarınıza müdahale etmeye gerek yok. Daha sonra düz kesim yapın; yan kenarları yuvarlamayın. Tırnak törpüsünü tek yönde hareketle kullanmak, kırılganlığı azaltır.",
      },
      { type: "h2", text: "Ne zaman geri gelmeliyim?" },
      {
        type: "p",
        text: "Düzenli bakımda 4-8 haftalık aralıklar çoğu kişi için uygundur. Diyabet, yoğun spor ya da tekrarlayan nasır gibi özel durumlarda bu aralık kısalabilir. Kliniğe ne zaman geleceğinizi seans çıkışında birlikte planlıyoruz.",
      },
    ],
    faqs: [
      {
        q: "Bakım sonrası topukluk giyebilir miyim?",
        a: "En az 24 saat topuklu ayakkabıdan uzak durmanızı öneririz. Cilt ve tırnak kenarları toparlanmak için biraz nefes ister.",
      },
      {
        q: "Havuz veya denize ne zaman girebilirim?",
        a: "24-48 saat beklemek enfeksiyon riskine karşı daha güvenlidir. Sonrasında duş ve nemlendirme rutininize dönebilirsiniz.",
      },
      {
        q: "Hangi kremi kullanmalıyım?",
        a: "Topuk çatlağı varsa %10-15 üreli bakım kremleri günlük kullanım için uygundur. Kliniğimizden PediZone üreli kremi önerebiliriz.",
      },
    ],
  },
  {
    slug: "kadinlarda-topuk-catlagi",
    title: "Kadınlarda Topuk Çatlağı: Nedenleri ve Çözümleri",
    excerpt:
      "Sadece kozmetik bir sorun değil; bazen derin bir bakım ihtiyacının işareti. Topuk çatlağının nedenlerine ve nasıl çözüldüğüne dair kısa bir rehber.",
    date: "2024-12-12",
    author: "Podosis Klinik",
    cover:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/fd9j0kxz_topuk-sonrasi.webp",
    coverAlt: "Topuk çatlağı bakımı sonrası pürüzsüz topuk",
    readMinutes: 6,
    metaDescription:
      "Kadınlarda topuk çatlağı neden oluşur ve nasıl kalıcı çözüme kavuşur? Podosis'ten klinik ve evde uygulanabilir öneriler.",
    content: [
      {
        type: "p",
        text: "Topuk çatlağı yalnızca estetik bir mesele gibi görünse de çoğu zaman bedenin kendini ifade ediş biçimidir: yeterince nemlenmiyorum, çok ayaktayım, yanlış ayakkabı giyiyorum… Bu yazıda nedenlerini ve kliniğimizde nasıl çözüme kavuşturduğumuzu samimi bir dille anlatmak istiyoruz.",
      },
      { type: "h2", text: "Neden oluşur?" },
      {
        type: "p",
        text: "Topuk bölgesindeki cilt vücudun en kalın ama en çok yük taşıyan bölgelerinden biridir. Nemlenmediğinde esneyemez; esneyemeyen cilt baskı altında kırılır, bu da önce ince çizgiler, sonra derin çatlaklar olarak karşımıza çıkar. Hormonal değişimler, hipotiroidi, demir eksikliği, uzun süre ayakta kalma ve açık arkalı ayakkabılar en sık rastladığımız nedenlerdir.",
      },
      { type: "h2", text: "Hafif ve derin çatlak ayrımı" },
      {
        type: "p",
        text: "Yüzeysel çatlaklar genellikle acı vermeyen, hafif kaşıntılı çizgilerdir. Derin çatlaklarda ise yürürken keskin bir ağrı, bazen çorabın kenarına sürtünen bir his olur ve ileri aşamalarda kanama görülebilir. Derin çatlaklar enfeksiyona davet çıkarır; bu nedenle ciddiye alınmalıdır.",
      },
      { type: "h2", text: "Kliniğimizde nasıl yaklaşıyoruz?" },
      {
        type: "p",
        text: "Klinik bakımda önce sertleşmiş bölgeyi nazikçe inceltir, ardından ciltte nem bariyerini yeniden kurarız. Bu süreç cildi zedelemeden ve ağrısızdır. Seans sonunda size özel bir ev rutini çıkarıyoruz: hangi kremi, ne zaman, ne kadar.",
      },
      { type: "h2", text: "Evde fark yaratan 3 şey" },
      {
        type: "p",
        text: "Birincisi günlük ılık duş sonrası üreli krem. İkincisi akşamları pamuklu çorap ile 10 dakikalık örtücü nemlenme. Üçüncüsü sırt yüzeyi desteği olan, topuğu kapalı ev terlikleri. Bu üç değişiklik bile çoğu kişide 3-4 hafta içinde belirgin fark yaratır.",
      },
      { type: "h2", text: "Kışa özel bir not" },
      {
        type: "p",
        text: "Kalorifer kurutur, soba kurutur, kış ayakkabısının içi de kurutur. Bu yüzden kış aylarında hem duş sonrası hem de gün içinde bir kere daha kremlemeyi rutinin parçası yapmak önemli. Kliniğimizdeki PediZone %15 üreli krem, bu günlük ihtiyaç için hem etkili hem de hızlı emilen bir ürün.",
      },
    ],
    faqs: [
      {
        q: "Topuk çatlağı kendiliğinden geçer mi?",
        a: "Yüzeysel çizgiler düzenli nemlenmeyle kapanabilir, ancak derin çatlaklar profesyonel bakım gerektirir. Erken dönemde başvurmak her iki yönden de en doğrusu.",
      },
      {
        q: "Taş törpü ile evde ne kadar inceltebilirim?",
        a: "Banyo sonrası çok hafif bir törpüleme faydalı olabilir. Ancak sertleşmiş bölgeyi çok derine indirmeye çalışmak cildi yaralar; bu işi kliniğe bırakmak daha sağlıklı.",
      },
      {
        q: "Ne kadar sürede sonuç alırım?",
        a: "İlk seans sonrası aynı akşam rahatlama hissedebilirsiniz. Kalıcı sonuç için 3-4 haftalık bir ev rutini ile birlikte 2-3 seans genellikle yeterli.",
      },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const getBlogPost = (slug) => blogPosts.find((b) => b.slug === slug);
