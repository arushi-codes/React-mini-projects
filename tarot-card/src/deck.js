const deck = [
  //22 major arcana
  { name: "The Fool", meaning: "New beginnings, optimism, trust in the universe", message: "Take the leap — the universe will catch you." },
  { name: "The Magician", meaning: "Action, manifestation, resourcefulness", message: "You already have everything you need to succeed." },
  { name: "The High Priestess", meaning: "Intuition, subconscious, hidden knowledge", message: "Trust your inner voice — it knows the way." },
  { name: "The Empress", meaning: "Abundance, nurturing, fertility", message: "Growth and creativity are blooming within you." },
  { name: "The Emperor", meaning: "Authority, structure, stability", message: "Discipline and order will bring long-term success." },
  { name: "The Hierophant", meaning: "Tradition, spiritual wisdom, guidance", message: "Seek knowledge from trusted sources and mentors." },
  { name: "The Lovers", meaning: "Connection, harmony, choices", message: "Follow the path that aligns with your heart." },
  { name: "The Chariot", meaning: "Determination, control, willpower", message: "Stay focused — victory is within your reach." },
  { name: "Strength", meaning: "Courage, inner strength, patience", message: "Gentleness is more powerful than brute force." },
  { name: "The Hermit", meaning: "Soul-searching, inner guidance, solitude", message: "The answers you seek lie within." },
  { name: "Wheel of Fortune", meaning: "Cycles, fate, destiny, change", message: "Life is turning — embrace the shift with grace." },
  { name: "Justice", meaning: "Fairness, truth, law, balance", message: "Act with integrity — what you give comes back." },
  { name: "The Hanged Man", meaning: "Surrender, new perspective, letting go", message: "Pause, release control, and see things differently." },
  { name: "Death", meaning: "Endings, transformation, rebirth", message: "Let go of the old — something new is waiting." },
  { name: "Temperance", meaning: "Balance, patience, moderation", message: "Harmony comes from blending opposites with care." },
  { name: "The Devil", meaning: "Bondage, temptation, materialism", message: "Be mindful of attachments that limit your freedom." },
  { name: "The Tower", meaning: "Sudden change, upheaval, revelation", message: "Destruction clears the way for truth and growth." },
  { name: "The Star", meaning: "Hope, inspiration, healing", message: "Your light shines even in the darkest times." },
  { name: "The Moon", meaning: "Illusion, intuition, uncertainty", message: "Not everything is as it seems — trust your instincts." },
  { name: "The Sun", meaning: "Joy, success, vitality", message: "Happiness and clarity are lighting your path." },
  { name: "Judgement", meaning: "Reflection, awakening, renewal", message: "This is your call to rise and embrace your truth." },
  { name: "The World", meaning: "Completion, achievement, wholeness", message: "You’ve come full circle — celebrate your journey." },
   

  //minor arcana (wands)
  { name: "Ace of Wands", meaning: "Inspiration, new opportunities, growth, potential", message: "A spark is lit within you—follow where it leads." },
  { name: "Two of Wands", meaning: "Planning, progress, decisions, discovery", message: "The world is open to you; take the first step." },
  { name: "Three of Wands", meaning: "Foresight, expansion, growth, looking ahead", message: "Your vision is expanding—trust in the journey ahead." },
  { name: "Four of Wands", meaning: "Celebration, harmony, homecoming, community", message: "Joy and stability surround you—savor the moment." },
  { name: "Five of Wands", meaning: "Conflict, competition, tension, diversity", message: "Disagreements may arise, but growth comes through challenge." },
  { name: "Six of Wands", meaning: "Victory, success, public recognition, progress", message: "Your hard work is paying off—enjoy the recognition." },
  { name: "Seven of Wands", meaning: "Challenge, competition, perseverance", message: "Stand firm—your strength will see you through obstacles." },
  { name: "Eight of Wands", meaning: "Speed, movement, swift progress, action", message: "Momentum is on your side—go with the flow of energy." },
  { name: "Nine of Wands", meaning: "Resilience, courage, persistence, boundaries", message: "You’ve come far—protect what you’ve built." },
  { name: "Ten of Wands", meaning: "Burden, responsibility, hard work, stress", message: "You may feel weighed down—consider what can be released." },
  { name: "Page of Wands", meaning: "Inspiration, exploration, discovery, enthusiasm", message: "Stay curious—new adventures are calling." },
  { name: "Knight of Wands", meaning: "Energy, passion, inspired action, adventure", message: "Bold moves will bring excitement—trust your fire." },
  { name: "Queen of Wands", meaning: "Confidence, independence, determination, joy", message: "You radiate warmth and power—lead with charisma." },
  { name: "King of Wands", meaning: "Leadership, vision, honor, entrepreneurship", message: "Step into your role as a visionary—others look to you for guidance." },

  //minor arcana (cups)
 { name: "Ace of Cups", meaning: "New feelings, love, spirituality, intuition", message: "Your heart is opening — allow yourself to feel deeply and connect with others." },
  { name: "Two of Cups", meaning: "Unified love, partnership, mutual attraction", message: "This is a time for harmony and true connection — nurture the bond forming around you." },
  { name: "Three of Cups", meaning: "Celebration, friendship, creativity, community", message: "Joy and togetherness are highlighted — celebrate with those who lift you higher." },
  { name: "Four of Cups", meaning: "Meditation, apathy, reevaluation, contemplation", message: "Look within — what you seek may already be in front of you, waiting to be noticed." },
  { name: "Five of Cups", meaning: "Loss, grief, disappointment, dwelling on the negative", message: "It’s okay to mourn, but remember not all is lost — turn toward what still remains." },
  { name: "Six of Cups", meaning: "Revisiting the past, innocence, joy, nostalgia", message: "Reconnect with your inner child — old memories and kindness hold healing energy now." },
  { name: "Seven of Cups", meaning: "Choices, illusion, wishful thinking, opportunities", message: "So many paths lie ahead — ground yourself to see which is real and right for you." },
  { name: "Eight of Cups", meaning: "Walking away, letting go, searching for truth", message: "Step away from what no longer serves you — your deeper fulfillment lies elsewhere." },
  { name: "Nine of Cups", meaning: "Contentment, satisfaction, gratitude, emotional stability", message: "Your wishes are within reach — pause and appreciate how far you’ve come." },
  { name: "Ten of Cups", meaning: "Happiness, harmony, alignment, fulfillment in relationships", message: "This is emotional wholeness — family, love, and community are flowing with joy." },
  { name: "Page of Cups", meaning: "Creative opportunities, curiosity, intuitive messages", message: "Stay open to unexpected inspiration — your intuition is whispering softly now." },
  { name: "Knight of Cups", meaning: "Romance, charm, imagination, following the heart", message: "Follow your heart’s quest — but balance dreams with grounded steps." },
  { name: "Queen of Cups", meaning: "Compassion, comfort, calm, emotional security", message: "Your empathy is your strength — offer kindness but remember to care for yourself too." },
  { name: "King of Cups", meaning: "Emotional balance, diplomacy, wisdom, compassion", message: "Lead with calm wisdom — true power is found in steady emotions and empathy." },

  //minor arcana (swords)
  { name: "Ace of Swords", meaning: "Breakthrough, clarity, sharp mind", message: "A new idea or truth cuts through the fog—trust it." },
  { name: "Two of Swords", meaning: "Difficult choices, indecision, stalemate", message: "You may feel stuck between two paths; trust your inner wisdom." },
  { name: "Three of Swords", meaning: "Heartbreak, grief, sorrow", message: "Pain is a teacher—let yourself feel, but also let yourself heal." },
  { name: "Four of Swords", meaning: "Rest, recovery, contemplation", message: "Step back to recharge; clarity comes in stillness." },
  { name: "Five of Swords", meaning: "Conflict, tension, betrayal", message: "Not all battles are worth fighting; consider what truly matters." },
  { name: "Six of Swords", meaning: "Transition, moving on, change", message: "You are leaving behind difficulty—trust the journey ahead." },
  { name: "Seven of Swords", meaning: "Deception, trickery, strategy", message: "Be cautious of dishonesty—whether from others or yourself." },
  { name: "Eight of Swords", meaning: "Restriction, feeling trapped, self-limiting beliefs", message: "The prison is of the mind—you hold the key to freedom." },
  { name: "Nine of Swords", meaning: "Anxiety, worry, fear", message: "Release what keeps you awake at night—it’s lighter than it feels." },
  { name: "Ten of Swords", meaning: "Painful endings, betrayal, collapse", message: "Though it feels final, endings clear the way for new dawns." },
  { name: "Page of Swords", meaning: "Curiosity, truth-seeking, new ideas", message: "Your mind is sharp—stay open, question, and learn." },
  { name: "Knight of Swords", meaning: "Ambition, action, speed", message: "Go after your goal with courage, but avoid recklessness." },
  { name: "Queen of Swords", meaning: "Independence, clear boundaries, perception", message: "See through illusions; your wisdom cuts to the truth." },
  { name: "King of Swords", meaning: "Authority, intellect, reason", message: "Lead with clarity and fairness; your mind is your greatest strength." }



  
];

export default deck;
