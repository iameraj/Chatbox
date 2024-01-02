import random

nouns = [
    "person",
    "people",
    "time",
    "year",
    "way",
    "day",
    "man",
    "thing",
    "woman",
    "life",
    "child",
    "world",
    "school",
    "state",
    "family",
    "student",
    "group",
    "country",
    "problem",
    "hand",
    "part",
    "place",
    "case",
    "week",
    "company",
    "system",
    "program",
    "question",
    "work",
    "government",
    "number",
    "night",
    "point",
    "home",
    "water",
    "room",
    "fact",
    "month",
    "lot",
    "right",
    "study",
    "book",
    "eye",
    "job",
    "word",
    "business",
    "issue",
    "side",
    "kind",
    "head",
    "house",
    "service",
    "friend",
    "father",
    "power",
    "hour",
    "game",
    "line",
    "end",
    "member",
    "law",
    "car",
    "city",
    "community",
    "name",
    "president",
    "team",
    "minute",
    "idea",
    "kid",
    "body",
    "information",
    "back",
    "parent",
    "face",
    "others",
    "level",
    "office",
    "door",
    "health",
    "person",
    "art",
    "war",
    "history",
    "party",
    "result",
    "change",
    "morning",
    "reason",
    "research",
    "girl",
    "moment",
    "air",
    "teacher",
    "force",
    "education",
    "course",
    "love",
    "money",
    "music",
    "science",
    "market",
    "story",
    "interest",
    "radio",
    "university",
]
verbs = [
    "be",
    "have",
    "do",
    "say",
    "go",
    "get",
    "make",
    "know",
    "think",
    "take",
    "see",
    "come",
    "want",
    "use",
    "find",
    "give",
    "tell",
    "work",
    "call",
    "try",
    "ask",
    "need",
    "feel",
    "look",
    "become",
    "leave",
    "put",
    "mean",
    "keep",
    "let",
    "begin",
    "seem",
    "help",
    "talk",
    "turn",
    "start",
    "show",
    "write",
    "play",
    "run",
    "move",
    "like",
    "live",
    "believe",
    "hold",
    "bring",
    "happen",
    "set",
    "stand",
    "pay",
    "meet",
    "send",
    "hear",
    "include",
    "continue",
    "read",
    "allow",
    "follow",
    "stop",
    "create",
    "speak",
    "open",
    "change",
    "lead",
    "sit",
    "win",
]
adverbs = [
    "very",
    "extremely",
    "quite",
    "really",
    "rather",
    "fairly",
    "somewhat",
    "enough",
    "almost",
    "nearly",
    "hardly",
    "scarcely",
    "too",
    "so",
    "just",
    "also",
    "even",
    "only",
    "namely",
    "namely",
    "specifically",
    "particularly",
    "especially",
    "exclusively",
    "solely",
    "simply",
    "merely",
    "yet",
    "still",
    "already",
    "soon",
    "later",
    "then",
    "afterwards",
    "before",
    "earlier",
    "first",
    "next",
    "last",
    "finally",
    "eventually",
    "always",
    "usually",
    "often",
    "sometimes",
    "occasionally",
    "rarely",
    "seldom",
    "never",
    "ever",
    "generally",
    "usually",
    "normally",
    "typically",
    "commonly",
    "regularly",
    "frequently",
    "occasionally",
    "rarely",
    "seldom",
    "hardly",
    "scarcely",
    "surely",
    "certainly",
    "definitely",
    "absolutely",
    "positively",
    "undoubtedly",
    "indubitably",
    "indisputably",
    "undeniably",
    "truly",
    "really",
    "actually",
    "literally",
    "virtually",
    "practically",
    "almost",
    "nearly",
    "approximately",
    "relatively",
    "reasonably",
    "presumably",
    "probably",
    "possibly",
    "perhaps",
    "maybe",
    "potentially",
    "likely",
    "unlikely",
    "certainly",
    "definitely",
    "absolutely",
    "positively",
    "undoubtedly",
    "indubitably",
    "indisputably",
    "undeniably",
    "truly",
    "really",
    "actually",
    "literally",
    "virtually",
    "practically",
    "almost",
    "nearly",
    "approximately",
    "relatively",
    "reasonably",
    "presumably",
    "probably",
    "possibly",
    "perhaps",
    "maybe",
    "potentially",
    "likely",
    "unlikely",
    "certainly",
    "definitely",
    "absolutely",
    "positively",
    "undoubtedly",
    "indubitably",
    "indisputably",
    "undeniably",
    "truly",
    "really",
    "actually",
    "literally",
    "virtually",
    "practically",
    "almost",
    "nearly",
    "approximately",
    "relatively",
    "reasonably",
    "presumably",
    "probably",
    "possibly",
    "perhaps",
    "maybe",
    "potentially",
    "likely",
    "unlikely",
    "certainly",
    "definitely",
    "absolutely",
    "positively",
    "undoubtedly",
    "indubitably",
    "indisputably",
    "undeniably",
    "truly",
    "really",
    "actually",
    "literally",
    "virtually",
    "practically",
    "almost",
    "nearly",
    "approximately",
    "relatively",
    "reasonably",
    "presumably",
    "probably",
    "possibly",
    "perhaps",
    "maybe",
    "potentially",
    "likely",
    "unlikely",
    "certainly",
    "definitely",
    "absolutely",
    "positively",
    "undoubtedly",
    "indubitably",
    "indisputably",
    "undeniably",
    "truly",
    "really",
    "actually",
    "literally",
    "virtually",
    "practically",
    "almost",
    "nearly",
    "approximately",
    "relatively",
    "reasonably",
    "presumably",
    "probably",
    "possibly",
    "perhaps",
    "maybe",
    "potentially",
    "likely",
    "unlikely",
    "certainly",
    "definitely",
    "absolutely",
    "positively",
    "undoubtedly",
    "indubitably",
    "indisputably",
    "undeniably",
    "truly",
    "really",
    "actually",
    "literally",
    "virtually",
    "practically",
    "almost",
    "nearly",
    "approximately",
    "relatively",
    "reasonably",
    "presumably",
    "probably",
    "possibly",
    "perhaps",
    "maybe",
    "potentially",
    "likely",
    "unlikely",
    "certainly",
    "definitely",
    "absolutely",
    "positively",
    "undoubtedly",
    "indubitably",
    "indisputably",
    "undeniably",
    "truly",
    "really",
    "actually",
    "literally",
    "virtually",
    "practically",
    "almost",
    "nearly",
    "approximately",
    "relatively",
    "reasonably",
    "presumably",
    "probably",
    "possibly",
    "perhaps",
    "maybe",
    "potentially",
    "likely",
    "unlikely",
    "certainly",
    "definitely",
    "absolutely",
    "positively",
    "undoubtedly",
    "indubitably",
    "indisputably",
    "undeniably",
    "truly",
    "really",
]
adjectives = [
    "good", "bad", "big", "small", "old", "young", "beautiful", "ugly", "tall", "short",
    "fat", "thin", "hot", "cold", "new", "old", "long", "short", "large", "small", 
    "fast", "slow", "hard", "soft", "easy", "difficult", "early", "late", "right", "wrong",
    "happy", "sad", "angry", "scared", "excited", "tired", "bored", "interesting", "boring",
    "funny", "serious", "smart", "stupid", "nice", "mean", "beautiful", "ugly", "clean", "dirty",
    "expensive", "cheap", "heavy", "light", "strong", "weak", "sweet", "sour", "salty", "bitter",
    "delicious", "tasteless", "loud", "quiet", "dark", "bright", "red", "green", "blue", "yellow",
    "purple", "orange", "pink", "black", "white", "brown", "gray", "important", "unimportant",
    "interesting", "boring", "funny", "serious", "smart", "stupid", "nice", "mean", "popular",
    "unpopular", "right", "wrong", "different", "same", "happy", "sad", "angry", "scared",
    "excited", "tired", "bored", "good", "bad", "big", "small", "old", "young", "beautiful",
    "ugly", "tall", "short", "fat", "thin", "hot", "cold", "new", "old", "long", "short",
    "large", "small", "fast", "slow", "hard", "soft", "easy", "difficult", "early", "late", 
    "possible", "impossible", "probable", "improbable", "likely", "unlikely", "true", "false",
    "correct", "incorrect", "legal", "illegal", "moral", "immoral"
]


def generate_random_sentence():
    prefix = random.choice(adjectives)
    subject = random.choice(nouns)
    verb = random.choice(verbs)
    object_ = random.choice(nouns)
    complement = random.choice(adverbs)

    sentence = f"{prefix} {subject} {verb} {object_} {complement}"
    return sentence

if __name__ == "__main__":
    num_sentences = 3

    for _ in range(num_sentences):
        sentence = generate_random_sentence()
        print(sentence)