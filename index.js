function theBeatlesPlay(musicians, instruments) {
  var phrases = []

  for (i=0; i<musicians.length; i++) {
    phrases[i] = `${musicians[i]} plays ${instruments[i]}`
  }

  return phrases
}
