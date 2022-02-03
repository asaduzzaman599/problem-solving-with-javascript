function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy){
    let pageRequirmentFirstBook = 100;
    let pageRequirmentSecondBook = 200;
    let pageRequirmentThirdBook = 300;

    let totalPageForFirstBook = firstBookCopy * pageRequirmentFirstBook;
    let totalPageForSecondBook = secondBookCopy * pageRequirmentSecondBook;
    let totalPageForThirdBook = thirdBookCopy * pageRequirmentThirdBook;

    let totalPage = totalPageForFirstBook + totalPageForSecondBook + totalPageForThirdBook;

    return totalPage;
}

console.log(paperRequirements(2,2,2))