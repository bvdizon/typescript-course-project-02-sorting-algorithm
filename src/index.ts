class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    // alternative: const lenght = this.collection.length
    const { length } = this.collection;

    // Sorting Algorithm
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // All of this works if collectoin is number[]
        // If collection is an array of numbers --- implementing Type Guards
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // Only going to work if collection is a string
        // If collection is a string, do this logic instead:
        // ~~~logic to compare and swap characters in a string
        if (typeof this.collection === 'string') {
          // this.collection.
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
