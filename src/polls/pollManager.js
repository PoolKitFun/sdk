let poll = null

export function createPoll({question, options}) {

  poll = {
    question,
    options: options.map(o => ({
      text: o,
      votes: 0
    }))
  }

}

export function votePoll(index) {
  if (!poll) return
  poll.options[index].votes++
}

export function getPoll() {
  return poll
}
