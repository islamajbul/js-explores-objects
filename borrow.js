const kodomAli = {
    name: 'Kodom Ali',
    money : 5000,
    study : 'Math',
    subjects : ['calculus','algebra','geometry'],
    exam: function(){
        return this.name + ' is participating in an exam';
    },
    retakeExam: function(subject){
        this.exam();
        return `${this.name} is takeing retake exam on ${subject}`
    },
    treatDey: function (amount, tips){
        this.money = this.money - amount -tips;
        return this.money;
    }
}
const result = kodomAli.exam();

const badamAli = {
    name: 'kacha badam',
    money: 8000

}
const result2 = kodomAli.exam.call(badamAli);
console.log(result2);

console.log(result);