puts "🌱 Seeding messages..."

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


puts "✅ Done seeding!"
