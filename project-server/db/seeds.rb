puts "🌱 Seeding messages..."
Philosopher.delete_all
Origin.delete_all
Era.delete_all
Quote.delete_all

diogenes = Philosopher.create(name: "Diogenes")
socrates = Philosopher.create(name: "Socrates")
plato = Philosopher.create(name: "Plato")
aristotle = Philosopher.create(name: "Aristotle")
xenophon = Philosopher.create(name: "Xenophon")
parmenides = Philosopher.create(name: "Parmenides")
zeno = Philosopher.create(name: "Zeno")
antisthenes = Philosopher.create(name: "Antisthenes")

athens = Origin.create(name: "Athens") # plato, socrates, xenophon, antisthenes, diogenes
stagira = Origin.create(name: "Stagira") #aristotle
elea = Origin.create(name: "Elea") #parmenides, zeno

ancient_greek = Era.create(title: "Ancient Greek") #antisthenes, aristotle, xenophon, socrates, plato, diogenes
pre_socratic = Era.create(title: "Pre-Socratic") #parmenides, zeno

diogenes_quote_1 = Quote.create(quote: "The foundation of every state is the education of its youth.")
diogenes_quote_2 = Quote.create(quote: "I know nothing, except the fact of my ignorance.")
diogenes_quote_3 = Quote.create(quote: "In a rich man's house there is no place to spit but his face.")

socrates_quote_1 = Quote.create(quote: "The only true wisdom is knowing you know nothing.")
socrates_quote_2 = Quote.create(quote: "The greatest way to live with honor in this world is to be what we pretend to be")

plato_quote_1 = Quote.create(quote: "The measure of a man is what he does with power.")
plato_quote_2 = Quote.create(quote: "Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet.")

aristotle_quote_1 = Quote.create(quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.")
aristotle_quote_2 = Quote.create(quote: "My best friend is the man who in wishing me well wishes it for my sake.")

xenophon_quote_1 = Quote.create(quote: "Excess of grief for the dead is madness, for it is an injury to the living, and the dead know it not.")
xenophon_quote_2 = Quote.create(quote: "A horse is a thing of beauty... none will tire of looking at him as long as he displays himself in his splendor.")

parmenides_quote_1 = Quote.create(quote: "Change is an illusion.")
parmenides_quote_2 = Quote.create(quote: "It is indifferent to me where I am to begin, for there shall I return again.")

zeno_quote_1 = Quote.create(quote: "The goal of life is living in agreement with nature.")
zeno_quote_2 = Quote.create(quote: "Beauty is the flower of chastity.")

antisthenes_quote_1 = Quote.create(quote: "There are only two people who can tell you the truth about yourself - an enemy who has lost his temper and a friend who loves you dearly.")
antisthenes_quote_2 = Quote.create(quote: "As iron is eaten away by rust, so the envious are consumed by their own passion.")


diogenes_quote_1.philosopher = diogenes
diogenes_quote_2.philosopher = diogenes
diogenes_quote_3.philosopher = diogenes

diogenes.origin = athens
diogenes.era = ancient_greek

diogenes_quote_1.origin = athens
diogenes_quote_1.era = ancient_greek
diogenes_quote_2.origin = athens
diogenes_quote_2.era = ancient_greek
diogenes_quote_3.origin = athens
diogenes_quote_3.era = ancient_greek


socrates_quote_1.philosopher = socrates
socrates_quote_2.philosopher = socrates

socrates.origin = athens
socrates.era = ancient_greek

socrates_quote_1.origin = athens
socrates_quote_1.era = ancient_greek
socrates_quote_2.origin = athens
socrates_quote_2.era = ancient_greek


plato_quote_1.philosopher = plato
plato_quote_2.philosopher = plato

plato.origin = athens
plato.era = ancient_greek

plato_quote_1.origin = athens
plato_quote_1.era = ancient_greek
plato_quote_2.origin = athens
plato_quote_2.era = ancient_greek



aristotle_quote_1.philosopher = aristotle
aristotle_quote_2.philosopher = aristotle

aristotle.origin = stagira
aristotle.era = ancient_greek

aristotle_quote_1.origin = stagira
aristotle_quote_1.era = ancient_greek
aristotle_quote_2.origin = stagira
aristotle_quote_2.era = ancient_greek



xenophon_quote_1.philosopher = xenophon
xenophon_quote_2.philosopher = xenophon

xenophon.origin = athens
xenophon.era = ancient_greek

xenophon_quote_1.origin = athens
xenophon_quote_1.era = ancient_greek
xenophon_quote_2.origin = athens
xenophon_quote_2.era = ancient_greek


parmenides_quote_1.philosopher = parmenides
parmenides_quote_2.philosopher = parmenides

parmenides.origin = elea
parmenides.era = pre_socratic

parmenides_quote_1.origin = elea
parmenides_quote_1.era = pre_socratic
parmenides_quote_2.origin = elea
parmenides_quote_2.era = pre_socratic


zeno_quote_1.philosopher = zeno
zeno_quote_2.philosopher = zeno

zeno.origin = elea
zeno.era = pre_socratic

zeno_quote_1.origin = elea
zeno_quote_1.era = pre_socratic
zeno_quote_2.origin = elea
zeno_quote_2.era = pre_socratic


antisthenes_quote_1.philosopher = antisthenes
antisthenes_quote_2.philosopher = antisthenes

antisthenes.origin = athens
antisthenes.era = ancient_greek

antisthenes_quote_1.origin = athens
antisthenes_quote_1.era = ancient_greek
antisthenes_quote_2.origin = athens
antisthenes_quote_2.era = ancient_greek

diogenes.quotes << [diogenes_quote_1, diogenes_quote_2, diogenes_quote_3]
socrates.quotes << [socrates_quote_1, socrates_quote_2]
plato.quotes << [plato_quote_1, plato_quote_2]
aristotle.quotes << [aristotle_quote_1, aristotle_quote_2]
xenophon.quotes << [xenophon_quote_1, xenophon_quote_2]
parmenides.quotes << [parmenides_quote_1, parmenides_quote_2]
zeno.quotes << [zeno_quote_1, zeno_quote_2]
antisthenes.quotes << [antisthenes_quote_1, antisthenes_quote_2]

athens.philosophers << [plato, socrates, xenophon, antisthenes, diogenes]
stagira.philosophers << [aristotle]
elea.philosophers << [parmenides, zeno]

athens.quotes = [diogenes_quote_1, diogenes_quote_2, diogenes_quote_3, socrates_quote_1, socrates_quote_2, 
plato_quote_1, plato_quote_2, xenophon_quote_1, xenophon_quote_2, antisthenes_quote_1, antisthenes_quote_2]
stagira.quotes = [aristotle_quote_1, aristotle_quote_2]
elea.quotes = [zeno_quote_1, zeno_quote_2, parmenides_quote_1, parmenides_quote_2]


ancient_greek.philosophers = [antisthenes, aristotle, xenophon, socrates, plato, diogenes]
pre_socratic.philosophers = [parmenides, zeno]
ancient_greek.quotes = [diogenes_quote_1, diogenes_quote_2, diogenes_quote_3, socrates_quote_1, socrates_quote_2, 
plato_quote_1, plato_quote_2, xenophon_quote_1, xenophon_quote_2, antisthenes_quote_1, antisthenes_quote_2, aristotle_quote_1, aristotle_quote_2]
pre_socratic.quotes = [zeno_quote_1, zeno_quote_2, parmenides_quote_1, parmenides_quote_2]

diogenes.update(img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Diogenes-statue-Sinop-enhanced.jpg/220px-Diogenes-statue-Sinop-enhanced.jpg")
socrates.update(img: "https://socratesinthecityaudio.s3.amazonaws.com/wp-content/uploads/2017/12/07171556/Socrates-businessinsider-620x480.jpg")
plato.update(img: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTgwMDE1OTM1MjA4NjI5Mzcw/the-ancient-greek-philosopher-plato-his-life-and-works.webp")
aristotle.update(img: "https://i0.wp.com/educationalrenaissance.com/wp-content/uploads/2019/03/raphael_detail-aristotle-from-the-school-of-athens.jpg?resize=880%2C660&ssl=1")
xenophon.update(img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Xenophon.jpg/220px-Xenophon.jpg")
parmenides.update(img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sanzio_01_Parmenides.jpg/251px-Sanzio_01_Parmenides.jpg?20200907205238")
zeno.update(img: "https://i.kinja-img.com/gawker-media/image/upload/q_75,w_1100,h_619/87877c7681082aab9cfbe4e7074e26a4.jpg")
antisthenes.update(img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Antisthenes_Pio-Clementino_Inv288.jpg/220px-Antisthenes_Pio-Clementino_Inv288.jpg")

diogenes_comment_1 = Comment.create(comment: "My eyes are now open.", quote_id: diogenes_quote_1.id)



puts "✅ Done seeding!"
