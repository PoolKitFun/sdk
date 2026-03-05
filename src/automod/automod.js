import Filter from "bad-words"
import config from "../../config/config.json" assert { type: "json" }

const filter = new Filter()

config.bannedWords.forEach(word => {
  filter.addWords(word)
})

export function checkMessage(message) {
  return !filter.isProfane(message)
}
