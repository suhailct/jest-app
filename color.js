function sky(x){
    return `sky is the ${this.o}`
}

let color=sky.bind({o:'red',r:'orange'},'blue');
console.log(color());