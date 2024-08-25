class CreateCounter {
    count = $state(0)
    increment = () => { this.count += 1 }
    decrement = () => { this.count -= 1 }
}

const counterState = new CreateCounter()
export default counterState