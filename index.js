// code your solution her
function saturdayFun( part1, activity = 'roller-skate'){
    // const part1 = "This Saturday, I want to"
    return function(){
        console.log(`${part1} ${activity}`)
    };
}

saturdayFun();